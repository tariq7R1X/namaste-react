import { useState } from "react";

const APP_LOGO = new URL("../../assets/app_logo.png", import.meta.url).href;

const Header = () => {
  const [toggleBtn, setToggleBtn] = useState("Logout");
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login-btn" onClick={toggleBtnText}>
            {toggleBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
