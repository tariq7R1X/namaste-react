import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9966135&lng=77.5920581&restaurantId=1003414&catalog_qa=undefined&submitAction=ENTER"
    );
    // const jsonData = await data.json();
    
    const resList =
      data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setResInfo(resList);
  };
  if (resInfo.length === 0) return <Shimmer />;
  const { name, cuisines, costForTwo, avgRating } = resInfo[0]?.info;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwo}</h3>
      <h3>{avgRating}⭐</h3>
      <h3>Recommended Menu</h3>
      <ul>
        <li>sdsd</li>
        <li>sdsd</li>
        <li>sdsd</li>
        <li>sdsd</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
