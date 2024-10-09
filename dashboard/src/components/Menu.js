import React, { useState } from "react";
import "./Menu.css"
import { Link } from "react-router-dom";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropDown, setIsProfileDropDown] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }

  const handleProfileClick = (index) => {
    setIsProfileDropDown(!isProfileDropDown);
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (<div className="menu-container">

    <img style={{ width: "4%" }} src="logo.png" alt="img"></img>
    <div className="menus">
      <ul>
        <li>
          <Link style={{ textDecoration: "none", color: "inherit" }} to='/' onClick={()=>handleMenuClick(0)}>
            <p className={selectedMenu===0?activeMenuClass:menuClass}>Dashboard</p>
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "inherit" }} to='/orders' onClick={()=>handleMenuClick(1)}>
            <p className={selectedMenu===1?activeMenuClass:menuClass}>Orders</p>
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "inherit" }} to='/holdings' onClick={()=>handleMenuClick(2)} >
            <p className={selectedMenu===2?activeMenuClass:menuClass}>Holdings</p>
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "inherit" }} to='/positions' onClick={()=>handleMenuClick(3)}>
            <p className={selectedMenu===3?activeMenuClass:menuClass}>Positions</p>
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "inherit" }} to='/funds' onClick={()=>handleMenuClick(4)}>
            <p className={selectedMenu===4?activeMenuClass:menuClass}>Funds</p>
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "inherit" }} to='/apps' onClick={()=>handleMenuClick(5)}>
            <p className={selectedMenu===5?activeMenuClass:menuClass}>apps</p>
          </Link>
        </li>

      </ul>
      <hr />
      <div className="profile" onClick={handleProfileClick} >
        <div className="avatar">ZU</div>
        <p className="username">USERID</p>
      </div>
    </div>
  </div>)
}

export default Menu;