import { useState, useEffect } from "react";
//import resList from "../utils/mockData"
import ShimmerLoader from "./Shimmer";

const Rescards = ({resData}) => {
    const { name, cuisines, avgRating, costForTwo } = resData?.info;
    return (
        <div className="res-card">
            <img src="https://picsum.photos/400/200" alt="restaurant" />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>Rating: {avgRating}</p>
            <p>{costForTwo}</p>
        </div>
    )
}

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

    if(topRated.length === 0){
        
        return <ShimmerLoader />
    }

    return (
        <div className="listing-container">
            <div className="listing-filter">
               <div>
                <input type="text" value={searchTerm} onChange={(e)=> setsearchTerm(e.target.value)} />
                <button type="button" onClick={handleSearch}>Search</button>
               </div>
               <div>
                <button onClick={handleClick} type="button" className="btn">Top Rated</button>
                <button onClick={clearFilter} type="button" className="btn">Clear btn Filter</button>
               </div>
            </div>
            <div className="listing-cards"> 
                {filteredList.map((restaurant) =>  (
                    <Rescards key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )       
}

export default Listing;