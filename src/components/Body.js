import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";
import { TOP_RATED_RATING } from "../utils/common";

const Body = () => {
  const [showRestaurants, setShowRestaurants] = useState(resList);
  const filterTopRated = () => {
    const filteredRes = showRestaurants.filter((topRes) => {
      return topRes.info.avgRating > TOP_RATED_RATING;
    });
    setShowRestaurants(filteredRes);
  };

  const showAllRes = () => {
    return setShowRestaurants(resList);
  };

  return (
    <div className="body">
      <div className="top-bar">
        <div className="search">Search</div>
        <div className="top-rated" onClick={filterTopRated}>
          Top Rated
        </div>
        <div className="top-rated" onClick={showAllRes}>
          Show All
        </div>
      </div>

      <div className="restaurant-container">
        {showRestaurants.map((restaurantData) => (
          <RestaurantCard
            key={restaurantData.info.id}
            resData={restaurantData}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
