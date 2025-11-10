import { useEffect, useState } from "react";
import { REST_API } from "../constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://food-wagon-backend.onrender.com/api/restaurants?lat=25.61011402528211&lng=85.116419903934" +
        resId
    );
    const jsonData = await data.json();
    setResInfo(
      jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  return resInfo;
};

export default useRestaurantMenu;
