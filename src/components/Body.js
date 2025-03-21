import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const {
    listOfRestaurants,
    filteredRestaurantList,
    topRated,
    viewAll,
    searchFunc,
  } = useRestaurant();

  const [searchText, setSearchText] = useState("");

  //console.log(listOfRestaurants);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              //console.log("search text value updated");
            }}
          ></input>
          <button
            onClick={() => {
              searchFunc(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            topRated();
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="view-all-res"
          onClick={() => {
            viewAll();
            setSearchText("");
          }}
        >
          View All Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id} //whenever we will click on any restaurant card it will direct us to that particular restaurants details.
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
