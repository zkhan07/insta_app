import React from 'react';
import './SideDrawer.css';
import { Link } from "react-router-dom";

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>

      <div class="ui container">
          <div class="doubling stackable ui menu">
            
          <div class="item">
            <Link to="/"><i className="home icon" ></i>HOME</Link>
          </div>

          <div class="ui simple dropdown item">
            <a><i className="cart icon" ></i>SHOP BY CATEGORY</a>
            <i class="dropdown icon"></i>
                <div class="menu">
                  <div class="item"> <Link to="/bulb"> LED BULB'S </Link></div> 
                  <div class="item"> <Link to="/tubelight"> LED TUBE LIGHT'S  </Link></div> 
                  <div class="item"> <Link to="/panellight"> LED PANEL LIGHT'S  </Link></div> 
                  <div class="item"> <Link to="/floodlight"> LED FLOOD LIGHT'S </Link></div>
                </div>
              </div>

              <div class="item">
                <Link to="/aboutus"><i className="user icon" ></i>ABOUT US</Link>
              </div>
              <div class="item">
                <Link to="/contactus"><i className="phone icon" ></i>CONTACT US</Link>
              </div>
              <div class="item">
                <Link to="/help"><i className="help icon" ></i>HELP</Link>
              </div>

              <div class="item">
                <i className="search icon" ></i> <input type="text" placeholder="Search your Brands" />
              </div>
    
              <div class="item">
                <Link to="/#"><i className="mail big icon"></i></Link>
                <Link to="/#"><i className="facebook big icon"></i></Link>
                <Link to="/#"><i className="twitter big icon"></i></Link>
                <Link to="/#"><i className="linkedin big icon"></i></Link>
                <Link to="/#"><i className="instagram big icon"></i></Link>
              </div>
         
          </div>
        </div>

    </nav>
  );
};

export default sideDrawer;
