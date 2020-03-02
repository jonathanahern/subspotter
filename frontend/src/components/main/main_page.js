import React from 'react';
import "./main_page.css";
import trainLogo from "./trainLogo.png";
import { Link } from "react-router-dom";

class MainPage extends React.Component {

  render() {
    return (
      <div id="main-page">

      <div id="header-main-page">
        <div id="logo-center">
          <div id="logo-container">
            <img src={trainLogo} alt=""></img><span>SUBSPOTTER</span>
          </div>
        </div>

        <div id="session-buttons">
          <Link to={'/signup'}><button id="signupButton">SIGNUP</button></Link>
          <Link to={'/login'}><button id="loginButton">LOGIN</button></Link>
        </div>
      </div>
        <ul id="main-page-content">
          <li><h2>Tired of creeps ruining your commute?</h2></li>

          <li>Spot man-spreaders and show-timers onto the wall of shame. See a good deed? Spot them for all to praise. Take back the subway.</li>

          <li><Link to={'/signup'}><button id="joinButton">JOIN NOW</button></Link></li>
        </ul>
        
        {/* <footer>
      <div>
        <h1>SubSpotter</h1>
        <ul>          
        <li> <Link to="/spotter" id="navLink">Spotter Profile (profile.js)</Link></li>
        <li> <Link to="/spots" id="navLink">Spots Index (spots.js)</Link></li>
        <li> <Link to="/spots/create" id="navLink">Spots Create (spots_form.js)</Link></li>
        <li> <Link to="/wall" id="navLink">Wall (wall.js)</Link></li>
        <li> <Link to="/map" id="navLink">Map (map.js)</Link></li>
        </ul>
        <footer>
          Copyright &copy; 2020 TripleJProductions
        </footer> */}

      </div>
    );
  }
}

export default MainPage;