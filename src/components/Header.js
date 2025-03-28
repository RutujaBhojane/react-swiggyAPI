import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  //if no dependency array => useEffect is called on every render
  //if empty dependency array [] => useEffect is called on initial render(just once)
  // if dependency array is [btnName] => called everytime btnName is updated

  /* useEffect(()=>{
    console.log("useEffect called");
  },[btnName]);
  */

  const onlineStatus = useOnlineStatus();
  //The useContext Hook is used in React to access values from a context without needing to pass props manually.
  const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser);

  // subscribing to the store using a Selector. Selector is a Hook.

  const cartItems = useSelector((store) => store.cart.items); // using Redux Toolkit's useSelector hook to access the items array inside the cart slice of the Redux store.
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-100 lg:bg-blue-100">
      <div className="logo-conatiner">
        <img className="w-64" src={LOGO_URL} alt="Grubify Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"} </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/cart">Cart 🛒 ({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login"); //here react rerenders Header component
            }}
          >
            {btnName}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
