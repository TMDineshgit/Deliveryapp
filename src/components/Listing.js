
const Rescards = () => {
    return (
        <div className="res-card">
            <img src="https://picsum.photos/280/150" alt="restaurant" />
            <h3>Restaurant Name</h3>
            <p>Cuisine Type</p>
            <p>Rating: 4.5</p>
        </div>
    )
}

const Listing = () => {
    return (
        <div className="listing-container">
            <div className="listing-filter">
               <div>Search </div>
            </div>
            <div className="listing-cards">
                <Rescards />
                <Rescards />
                <Rescards />
                <Rescards />
                <Rescards />
                <Rescards />
                <Rescards />
                <Rescards />
                <Rescards />
            </div>
        </div>
    )       
}

export default Listing;