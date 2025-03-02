import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //useState() is used to create state variable and it maintains the state of the component
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  //useEffect is used after your component is rendered. 
  // Then callback function of useEffect will be executed and react will rerender the page again after fetching data from API.

  useEffect(() => {
    fetchData();
  }, []);

  //The async keyword means this function will work with Promises, allowing us to use await inside it.
  //await pauses execution until the fetch request and JSON parsing are complete.

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.437973605399232&lng=73.86362334666698"
    );

    const json = await data.json();

    console.log(json);
    setlistOfRestaurants(
      //optional chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //console.log("data fetch from api new state variable rerender");
  };

  /* conditional rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
*/

  //another way of conditional rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurants(filteredList);
            //console.log("filter button component rerender");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

/*
1. Body component renders
2. Then callback function of useEffect will be executed
3. It will fetch data from API
4. After data is received, the state variable is updated.
5. As soon as the state variable is changed the component will be rerendered.
6. Uncomment console statements and understand the concept.
*/
