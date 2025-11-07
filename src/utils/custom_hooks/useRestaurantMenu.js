import { useEffect, useState } from "react";
import { REST_API } from "../constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_API + resId);
    const jsonData = await data.json();
    setResInfo(
      jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  return resInfo;
};

export default useRestaurantMenu;
