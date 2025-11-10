import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/custom_hooks/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;
  const { name, cuisines, costForTwo, avgRating } = resInfo[2]?.info;

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
                alt="restaurant-img"
                src={CDN_URL + restaurant.info.cloudinaryImageId}
              />
              <button className="add-btn">Add +</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
