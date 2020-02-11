import React from 'react';
import { Link } from "react-router-dom";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import '../SideDrawer/SideDrawer.css';

const toolbar = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return(
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <Link to="/"> 
            Khanzaid786 
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          
      <nav className={drawerClasses}>
        <div class="ui container">
          <div class="ui secondary menu">
        
              <div class="right item">
                <DrawerToggleButton click={props.drawerClickHandler} />
              </div>
        
          </div>
        </div>
      </nav>


        </div>
    </nav>
  </header>

);
}

export default toolbar;
