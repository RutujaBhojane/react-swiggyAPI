import { useEffect, useState } from "react";

const useRestaurant = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.437973605399232&lng=73.86362334666698"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const topRated = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.3
    );
    setFilteredRestaurantList(filteredList);
  };

  const viewAll = () => {
    setFilteredRestaurantList(listOfRestaurants);
  };

  const searchFunc = (searchText) => {
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurantList(filteredRestaurant);
  };

  return {
    listOfRestaurants,
    filteredRestaurantList,
    topRated,
    viewAll,
    searchFunc,
  };
};

export default useRestaurant;
