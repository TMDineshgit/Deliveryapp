import { useState, useEffect } from "react"
import ShimmerLoader from "../components/Shimmer"
import { useParams } from "react-router"
//import UserInfo from "../components/userGitData"
import useResDetails from "../utils/useResDetails"
import RestaurantMenu from "../components/RestaurantMenu"

const RestraruntDetails = () =>{
     const [categories, setCategories] = useState([]);
    //const [resInfo, setResInfo] = useState(null)

    const { resId } = useParams()

     const resInfo = useResDetails(resId)

    useEffect(() => {
        fetch("https://namastedev.com/api/v1/listRestaurantMenu/"+resId)
        .then((res) => res.json())
        .then((json) => {
            const menuCards =
            json?.data?.cards?.find(
                (card) => card?.groupedCard
            )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

            const filteredCategories = menuCards
            .map((card) => card?.card?.card)
            .filter(
                (card) =>
                card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            );

            //console.log("menuCards", menuCards);
            //console.log("catageories", filteredCategories);

            setCategories(filteredCategories);
        })
        .catch((error) => console.error(error));
    }, []);




    if(resInfo === null){ return <ShimmerLoader /> }
    
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info
    
    return(
        <div className="resdetails-wrapper">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* <UserInfo /> */}
            <RestaurantMenu categories={categories} resId={resId} />
        </div>  
    )
}

export default RestraruntDetails