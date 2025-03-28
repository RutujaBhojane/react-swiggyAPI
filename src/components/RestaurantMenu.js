import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  //console.log(itemCards);
  //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-5 py-5 text-3xl">{name}</h1>
      <p className="font-semibold text-xl">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordians - each accordian will have a title and body which is collapsable */}
      {categories.map((category, index) => (
        //controlled component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {
            setShowIndex((prevIndex) => (prevIndex === index ? null : index));
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

//RestaurantMenu is an uncontrolled component because has its own state and controlls itself.
