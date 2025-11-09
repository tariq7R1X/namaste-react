import React from "react";
import { GIT_API } from "../utils/constants";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const { username } = this.props;
    const data = await fetch(`${GIT_API}/${username}`);
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
  }

  render() {
    const { name, location, company, avatar_url, html_url } =
      this.state.userInfo;

    return (
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="user-link"
      >
        <div className="user-card restaurant-card">
          <img className="user-img" alt="user-image" src={avatar_url} />
          <h3>Name: {name}</h3>
          <h3>Location: {location || "Not Mentioned"}</h3>
          <h3>Company: {company || "Not Mentioned"}</h3>
          <h3>Contact: @{this.props.username}</h3>
        </div>
      </a>
    );
  }
}

export default User;
