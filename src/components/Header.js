import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login"); //here react rerenders Header component
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
