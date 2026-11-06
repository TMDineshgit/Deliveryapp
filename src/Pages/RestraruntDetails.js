import { useState, useEffect } from "react"
import ShimmerLoader from "../components/Shimmer"
import { useParams } from "react-router"

const RestraruntDetails = () =>{
    const [resInfo, setResInfo] = useState(null)

    const { resId } = useParams()

    useEffect(()=>{
        fetchDetailsData()
    },[])

    const fetchDetailsData = async () =>{
        const res = await fetch("https://namastedev.com/api/v1/listRestaurantMenu/"+resId)

        const data = await res.json()
        setResInfo(data.data)
        
    }

    if(resInfo === null){ return <ShimmerLoader /> }
    
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info
    
    return(
        <div className="resdetails-wrapper">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>

        </div>
    )
}

export default RestraruntDetails