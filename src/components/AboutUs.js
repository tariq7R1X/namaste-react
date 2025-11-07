import React from "react";
import User from "./User";
import Shimmer from "./Shimmer";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usernames: [], // initially empty
      isLoading: true,
    };
  }

  componentDidMount() {
    // Simulate API call (you can replace with actual fetch)
    setTimeout(() => {
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

      this.setState({ usernames, isLoading: false });
    }, 1500);
  }

  render() {
    const { usernames, isLoading } = this.state;

    if (isLoading) {
      return <Shimmer />;
    }

    return (
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
