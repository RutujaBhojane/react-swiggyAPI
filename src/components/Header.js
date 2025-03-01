import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  //setbtnName is a js function
  const [btnName, setbtnName] = useState("Login");
  //console.log("Header rendered again!!!");

  // normal js variable does not rerender UI in line no 27 after callback function called of onclick
  // let btnName = "Login";

  return (
    <div className="header">
      <div className="logo-conatiner">
        <img className="logo" src={LOGO_URL} alt="Grubify Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login"); //here react rerenders Header component
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

// first react renders Header component and btnName = Login, after clicking on button on UI the onclick callback function is triggered
// and now setbtnName sets the value of btnName to Logout and this time this btnName is new variable (React creates new instance)than older btnName
// and after that react rerenders the Header component again.
