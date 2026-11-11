import { useState, useEffect } from "react";
//import resList from "../utils/mockData"
import ShimmerLoader from "./Shimmer";
import Rescards from "./Rescards";
import { Link } from 'react-router'
import useOnlineStatus from "../utils/useOnlineStatus";



const Listing = () => {
    const [topRated, setTopRated] = useState([])
    const [searchTerm, setsearchTerm] = useState("");
    const [filteredList, setFilteredList] = useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() =>{
        const res = await fetch("https://namastedev.com/api/v1/listRestaurants")

        const data = await res.json()
        
        console.log(data)
        setTopRated(data.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredList(data.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const handleClick = () => {
        const filteredtopRated = topRated.filter((restaurant) => restaurant.info.avgRating > 4.5)
        setFilteredList(filteredtopRated)
    }
    const clearFilter = () => {
        setFilteredList(topRated)
    }

    const handleSearch = () => {
        const searchFilteredRes = topRated.filter((restaruant) => restaruant.info.name.toLowerCase().includes(searchTerm) )

        setFilteredList(searchFilteredRes)
    }

     const onlineStatus = useOnlineStatus();

    if(topRated.length === 0){
        
        return <ShimmerLoader />
    }

    if (onlineStatus === false){
        return <h1>Your Offline</h1>
    }

    return (
        <div className="max-w-[1700px] mx-auto px-3 py-2">
            <div className="flex flex-wrap justify-center md:items-center md:justify-between mt-3 mb-5 gap-3">
               <div className="flex">
                <input className="p-2 border border-gray-300 mr-2 rounded-md" type="text" value={searchTerm} onChange={(e)=> setsearchTerm(e.target.value)} />
                <button type="button" className="btn" onClick={handleSearch}>Search</button>
               </div>
               <div>
                <button onClick={handleClick} type="button" className="btn mr-2">Top Rated</button>
                <button onClick={clearFilter} type="button" className="btn">Clear btn Filter</button>
               </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5"> 
                {filteredList.map((restaurant) =>  (
                    <Link key={restaurant.info.id} to={"/restrauntdetails/"+restaurant.info.id}><Rescards resData={restaurant} /></Link>
                ))}
            </div>
        </div>
    )       
}

export default Listing;