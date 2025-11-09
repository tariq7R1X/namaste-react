import RestaurantCard, { IsRestaurantOpen } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import { TOP_RATED_RATING } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/custom_hooks/useOnlineStatus";
import useRestaurantList from "../utils/custom_hooks/useRestaurantList";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [inputValue, setInputValue] = useState("");

  const { setUserName } = useContext(UserContext);

  const restaurantList = useRestaurantList();
  const isOnlineStatus = useOnlineStatus();

  const RestaurantIsOpen = IsRestaurantOpen(RestaurantCard);

  useEffect(() => {
    setFilteredList(restaurantList);
  }, [restaurantList]);

  const searchRestaurant = (text) => {
    if (text.trim() === "") {
      setFilteredList(restaurantList);
      return;
    }

    const searchedResults = restaurantList.filter((res) =>
      res.info?.name.toLowerCase().includes(text.toLowerCase())
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

  // change logged in user
  const addLoggedInUser = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setUserName(inputValue);
    setInputValue("");
  };

  if (!isOnlineStatus)
    return <h1 className="offline-heading">It seems like your are offline</h1>;

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="top-bar">
        <div className="flex-class">
          {/* search bar */}
          <form className="flex-class" onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Search Here"
              type="text"
              className="search-field"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                searchRestaurant(e.target.value); // call search function live
              }}
            />
            <div className="search-btn">Search</div>
          </form>

          <div className="filter-btn top-rated" onClick={filterTopRated}>
            Top Rated
          </div>

          <div className="filter-btn show-all" onClick={showAllRes}>
            Show All
          </div>
        </div>

        {/* change logged in user */}
        <form className="flex-class login-user" onSubmit={addLoggedInUser}>
          <input
            placeholder="Add Logged In User"
            type="text"
            className="search-field"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="search-btn">
            Add User
          </button>
        </form>
      </div>

      {/* restaurant body */}
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
