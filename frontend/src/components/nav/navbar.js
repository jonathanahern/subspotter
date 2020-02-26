import React from 'react';
import { Link } from 'react-router-dom'
// import './navbar.css'
import trainLogo from "./trainLogo.png";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {

      if (this.props.loggedIn) {
        return (
          <>
          <div id="logo-center">
            <div id="logo-container">
                <img src={trainLogo} alt=""></img><span>SUBSPOTTER</span>
            </div>
          </div>
          <div>
            <button id="logoutButton" onClick={this.logoutUser}>LOGOUT</button>
          </div>
          </>
        );
      } else {
        return (
          <div id="logo-center">
            <div id="logo-container">
              <img src={trainLogo} alt=""></img><span>SUBSPOTTER</span>
            </div>
          </div>
        );
      }
  }

  render() {
      return (
        <div id="header-main-page">
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;