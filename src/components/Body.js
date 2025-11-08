import RestaurantCard, { IsRestaurantOpen } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { TOP_RATED_RATING } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/custom_hooks/useOnlineStatus";
import useRestaurantList from "../utils/custom_hooks/useRestaurantList";

const Body = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSeachText] = useState("");

  const restaurantList = useRestaurantList();
  const isOnlineStatus = useOnlineStatus();

  const RestaurantIsOpen = IsRestaurantOpen(RestaurantCard);

  useEffect(() => {
    setFilteredList(restaurantList);
  }, [restaurantList]);

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

  if (!isOnlineStatus)
    return <h1 className="offline-heading">It seems like your are offline</h1>;

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
            <h2 className="no-restaurant-heading">No Restaurants Found</h2>
            <Shimmer />
          </div>
        ) : (
          filteredList.map((restaurantData) => (
            <Link
              to={"/restaurants/" + restaurantData.info.id}
              className="restaurant-link"
              key={restaurantData.info.id}
            >
              {restaurantData.info.isOpen ? (
                <RestaurantIsOpen resData={restaurantData} />
              ) : (
                <RestaurantCard resData={restaurantData} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
