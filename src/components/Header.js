import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/custom_hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

const APP_LOGO = new URL("../../assets/app_logo.png", import.meta.url).href;

const Header = () => {
  const [toggleBtn, setToggleBtn] = useState("Logout");
  const isOnlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const toggleBtnText = () => {
    setToggleBtn((prev) => (prev === "Login" ? "Logout" : "Login"));
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="app-logo" src={APP_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>{isOnlineStatus ? "Online 🟢" : "Offline 🔴"}</li>
          <li>
            <Link className="restaurant-link" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="restaurant-link" to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className="restaurant-link" to={"/contact"}>
              Contact
            </Link>
          </li>
          <li>
            <Link className="restaurant-link" to={"/grocery"}>
              Grocery
            </Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={toggleBtnText}>
            {toggleBtn}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
