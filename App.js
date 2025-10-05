import React from "react";
import ReactDOM from "react-dom/client";
const APP_LOGO = new URL("./assets/app_logo.png", import.meta.url).href;

/**
 *
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - SearchBar
 * - RestaurantContainer
 *   - RestaurantCard
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 *
 */

// Header Component
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

// Restaurant Card
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="restaurant-card">
      <img
        className="restuarant-img"
        alt="res-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h2>{resData.info.name}</h2>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.avgRating} ⭐</h4>
    </div>
  );
};

const resObj = {
  info: {
    id: "16866",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/24ea3d93-6246-4c69-a078-7a8fa133a7d3_16866.JPG",
    locality: "Sector 3",
    areaName: "Rohini",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.3,
    parentId: "721",
    avgRatingString: "4.3",
    totalRatingsString: "6.9K+",
    sla: {
      deliveryTime: 23,
      lastMileTravel: 2.2,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "2.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-10-06 02:45:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹98",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-9c331933-38a5-4fc9-aa20-904ed67883b1",
  },
  cta: {
    link: "https://www.swiggy.com/city/delhi/pizza-hut-sector-3-rohini-rest16866",
    type: "WEBLINK",
  },
};

// Body Component
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard resData={resObj} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
