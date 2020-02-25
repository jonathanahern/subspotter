import React from "react";
import "./nav-bar.css";
import subwayTrain from "./subwayTrain.png";
import { Link } from "react-router-dom";
    
class Sidebar extends React.Component {
    

    openSidebar(){
        document.getElementById("sidebar-container").className = "open";
    }

    closeSidebar() {
        document.getElementById("sidebar-container").className = "close";
    }

    render(){
        return (
        <>
            <span id="hamburger" onClick={this.openSidebar}>&#9776;</span>
            <div id="sidebar-container" className ="close">
                <div className="logo-container">
                        <span className="closebtn" onClick={this.closeSidebar}>&times;</span>
                    <div id="top-line"></div>
                        <img src={subwayTrain} alt=""></img>
                    <div id="bottom-line"></div>
                    <h1>SUBSPOTTER</h1>
                </div>
                <ul className="link-container">
                    <li> <Link to="/spots/create" id="navLink">Spot It</Link></li>
                    <li> <Link to="/wall" id="navLink">Wall</Link></li>
                    <li> <Link to="/map" id="navLink">Map</Link></li>
                </ul>
            </div>
        </>
        );
    }
}

export default Sidebar;