import React from "react";
import User from "./User";
import Shimmer from "./Shimmer";

class AboutUs extends React.Component {
  render() {
    const usernames = [
      "tariq7r1x",
      "akshaymarch7",
      "gaearon",
      "torvalds",
      "yyx990803",
      "sindresorhus",
      "addyosmani",
      "ThePrimeagen",
      "kentcdodds",
      "bradtraversy",
      "kamranahmedse",
    ];

    return usernames.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="about-us-section">
        <h1>About Us - Using Class-Based Components</h1>

        <div className="user-list">
          {usernames.map((username) => (
            <User key={username} username={username} />
          ))}
        </div>
      </div>
    );
  }
}

export default AboutUs;
