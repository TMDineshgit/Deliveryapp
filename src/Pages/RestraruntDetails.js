import { useState, useEffect } from "react"
import ShimmerLoader from "../components/Shimmer"
import { useParams } from "react-router"
//import UserInfo from "../components/userGitData"
import useResDetails from "../utils/useResDetails"

const RestraruntDetails = () =>{
    //const [resInfo, setResInfo] = useState(null)

    const { resId } = useParams()

     const resInfo = useResDetails(resId)



    if(resInfo === null){ return <ShimmerLoader /> }
    
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info
    
    return(
        <div className="resdetails-wrapper">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* <UserInfo /> */}
        </div>  
    )
}

export default RestraruntDetails