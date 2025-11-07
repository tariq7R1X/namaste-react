import { useEffect, useState } from "react";
import { REST_API } from "../constants";

const useRestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_API);
    const jsonData = await data.json();
    const resList =
      jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setRestaurants(resList);
  };
  return restaurants;
};

export default useRestaurantList;
