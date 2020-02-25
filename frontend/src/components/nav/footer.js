import React from "react";
import "./nav-bar.css";
import flashlightIcon from "./flashlightIcon.png";
import mapIcon from "./mapIcon.png"
import wallIcon from "./wantedIcon.png"
import { Link } from "react-router-dom";
    
class Footer extends React.Component {
    

    // openSidebar(){
    //     document.getElementById("sidebar-container").className = "open";
    // }

    // closeSidebar() {
    //     document.getElementById("sidebar-container").className = "close";
    // }

    render(){
        return (
        <>
            {/* <span id="hamburger" onClick={this.openSidebar}>&#9776;</span> */}
            <div id="footer-container" >

                    <Link to="/spots/create" className="navLink"><img id="flashlight" src={flashlightIcon} alt=""></img><span>SPOT</span></Link>
                    <Link to="/wall" className="navLink"><img src={wallIcon} alt=""></img><span>WALL</span></Link>
                    <Link to="/map" className="navLink"><img src={mapIcon} alt=""></img><span>MAP</span></Link>

            </div>
        </>
        );
    }
}

export default Footer;

{/* <div className="logo-container">
                        <span className="closebtn" onClick={this.closeSidebar}>&times;</span>
                    <div id="top-line"></div>
                        <img src={subwayTrain} alt=""></img>
                    <div id="bottom-line"></div>
                    <h1>SUBSPOTTER</h1>
                </div> */}