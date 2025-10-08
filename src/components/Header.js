const APP_LOGO = new URL("../../assets/app_logo.png", import.meta.url).href;

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
