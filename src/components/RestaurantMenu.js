import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, REST_API } from "../utils/constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);

  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(REST_API + resId);
    const jsonData = await data.json();

    const resList =
      jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setResInfo(resList);
  };
  if (resInfo.length === 0) return <Shimmer />;
  const { name, cuisines, costForTwo, avgRating } = resInfo[0]?.info;

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwo}</h3>
      <h3>{avgRating} ⭐</h3>

      <h3>Recommended Restaurants</h3>
      <ul className="restaurant-list">
        {resInfo.map((restaurant) => (
          <li key={restaurant.info.id} className="restaurant-item">
            <div className="rest-name">
              <h2>{restaurant?.info.name}</h2>
              <h3>
                {restaurant.info.cuisines.join(", ")} –{" "}
                {restaurant.info.costForTwo}
              </h3>
            </div>
            <div className="rest-image">
              <img
                alt="restaurants-img"
                src={CDN_URL + restaurant.info.cloudinaryImageId}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
