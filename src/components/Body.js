import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { TOP_RATED_RATING } from "../utils/common";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSeachText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
    );
    const jsonData = await data.json();
    const resList =
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setRestaurantList(resList);
    setFilteredList(resList);
  };

  const searchRestaurant = () => {
    if (searchText.trim() === "") {
      setFilteredList(restaurantList);
      return;
    }
    const searchedResults = restaurantList.filter((res) =>
      res.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredList(searchedResults);
  };

  const filterTopRated = () => {
    const filteredRes = restaurantList.filter(
      (topRes) => topRes.info.avgRating > TOP_RATED_RATING
    );
    setFilteredList(filteredRes);
  };

  const showAllRes = () => setFilteredList(restaurantList);

  useEffect(() => {
    fetchData();
  }, []);

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="top-bar">
        <input
          type="text"
          className="search-field"
          onChange={(e) => {
            setSeachText(e.target.value);
          }}
          value={searchText}
        />
        <div className="search-btn" onClick={searchRestaurant}>
          Search
        </div>
        <div className="filter-btn top-rated" onClick={filterTopRated}>
          Top Rated
        </div>
        <div className="filter-btn show-all" onClick={showAllRes}>
          Show All
        </div>
      </div>

      <div className="restaurant-container">
        {filteredList.length === 0 ? (
          <div>
            <h2 className="no-restaurant-heading">No restaurants found</h2>
          <Shimmer />
          </div>
        ) : (
          filteredList.map((restaurantData) => (
            <RestaurantCard
              key={restaurantData.info.id}
              resData={restaurantData}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
