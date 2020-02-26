import React from 'react';
import { Link } from "react-router-dom";

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>SubSpotter</h1>
        <ul>          
        <li> <Link to="/spotter" id="navLink">Spotter Profile (profile.js)</Link></li>
        <li> <Link to="/spots" id="navLink">Spots Index (spots.js)</Link></li>
<<<<<<< HEAD
        <li> <Link to="/spots/create" id="navLink">Spots Create (spots_form.js)</Link></li>
=======
        <li> <Link to="/spots/new" id="navLink">Spots Create (spots_form.js)</Link></li>
>>>>>>> 7ad20d9896ab6d5bf282cefcec0da799c748d9de
        <li> <Link to="/wall" id="navLink">Wall (wall.js)</Link></li>
        <li> <Link to="/map" id="navLink">Map (map.js)</Link></li>
        </ul>
        <footer>
          Copyright &copy; 2020 TripleJProductions
        </footer>
      </div>
    );
  }
}

export default MainPage;