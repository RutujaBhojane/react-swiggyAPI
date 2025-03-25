import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const {
    listOfRestaurants,
    filteredRestaurantList,
    topRated,
    viewAll,
    searchFunc,
  } = useRestaurant();

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //console.log(listOfRestaurants);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              //console.log("search text value updated");
            }}
          ></input>
          <button
            className="px-4 py-2 mx-4 bg-green-100 rounded-lg"
            onClick={() => {
              searchFunc(searchText);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              topRated();
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              viewAll();
              setSearchText("");
            }}
          >
            View All Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label className="p-0.5">UserName :</label>
          <input className="border border-black p-0.5"
            value={loggedInUser} onChange={(e) => setUserName(e.target.value)}>
          </input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id} //whenever we will click on any restaurant card it will direct us to that particular restaurants details.
          >
            {
              /* if the restaurant is promoted (rating>4) then add a promoted label to it */

              restaurant.info.avgRating > 4.2 ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
