import React from "react";
import Menu from "./Menu.js";
import "./Topbar.css";
function Topbar(){
    return(<div className="topbar-container">
            <div className="indices-container">
                <div className="nifty">
                    <p className="index">Nifty 50</p>
                    <p className="index-points">{100.2}</p>
                    <p className="percent"></p>
                </div>
                <div className="sensex">
                    <p className="index">Sensex</p>
                    <p className="index-points">500.2</p>
                    <p className="percent"></p>
                </div>
            </div>
            <Menu/>
    </div>)
}

export default Topbar;