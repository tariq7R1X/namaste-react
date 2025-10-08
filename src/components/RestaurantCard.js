import { CDN_URL } from "../utils/common";


const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    deliveryTime,
    costForTwo,
    avgRating,
  } = resData?.info;
  return (
    <div className="restaurant-card">
      <img
        className="restuarant-img"
        alt="res-img"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} ⭐</h4>
    </div>
  );
};

export default RestaurantCard;
