import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;

  return (
    <div className="restaurant-card">
      <img
        className="restuarant-img"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h2 className="card-details">{name}</h2>
      <h4 className="card-details">{cuisines.join(", ")}</h4>
      <h4 className="card-details">{deliveryTime} minutes</h4>
      <h4 className="card-details">{costForTwo}</h4>
      <h4 className="card-details">{avgRating} ⭐</h4>
    </div>
  );
};

export const IsRestaurantOpen = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="card-wrapper">
        <span className="opened-restaurant">Open</span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
