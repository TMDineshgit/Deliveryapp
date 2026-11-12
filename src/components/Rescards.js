
const Rescards = ({resData}) => {
    const { name, cuisines, avgRating, costForTwo  } = resData?.info;
    return (
        <div className="res-card">
            <img className="w-full object-cover" src="https://picsum.photos/400/200" alt="restaurant" />
            <h3 className="text-xl font-medium text-gray-950">{name}</h3>
            <p className="text-md font-light text-gray-700">{cuisines.join(", ")}</p>
            <p className="text-md font-light text-gray-700 my-2">Rating: {avgRating}</p>
            <p className="text-sm font-light text-gray-800">{costForTwo}</p>
            <p>Offers: {resData.info.aggregatedDiscountInfoV3.subHeader}</p>
        </div>
    )
}

export const HocExample = (Rescards) =>{
    return(props)=>{
        return(
            <div className="relative">
                <span className="absolute right-[15px] top-[15px] z-10 px-2 py-1 leading-normal bg-green-200/30 rounded-sm text-xs font-bold text-green-900">Up to Rs.100 offer</span>
                <Rescards {...props} />
            </div>
        )
    }

}   

export default Rescards