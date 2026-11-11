
const Rescards = ({resData}) => {
    const { name, cuisines, avgRating, costForTwo } = resData?.info;
    return (
        <div className="res-card">
            <img className="w-full object-cover" src="https://picsum.photos/400/200" alt="restaurant" />
            <h3 className="text-xl font-medium text-gray-950">{name}</h3>
            <p className="text-md font-light text-gray-700">{cuisines.join(", ")}</p>
            <p className="text-md font-light text-gray-700 my-2">Rating: {avgRating}</p>
            <p className="text-sm font-light text-gray-800">{costForTwo}</p>
        </div>
    )
}

export default Rescards