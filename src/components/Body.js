import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import { TOP_RATED_RATING } from "../utils/common";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const filterTopRated = () => {
    const filteredRes = restaurantList.filter(
      (topRes) => topRes.info.avgRating > TOP_RATED_RATING
    );
    setRestaurantList(filteredRes);
  };

  const showAllRes = () => setRestaurantList([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
    );
    const jsonData = await data.json();
    setRestaurantList(
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="top-bar">
        <div className="search">Search</div>
        <div className="filter-btn top-rated" onClick={filterTopRated}>
          Top Rated
        </div>
        <div className="filter-btn show-all" onClick={showAllRes}>
          Show All
        </div>
      </div>

      <div className="restaurant-container">
        {restaurantList.map((restaurantData) => (
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
