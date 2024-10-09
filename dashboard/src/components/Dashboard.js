import React from "react";
import WatchList from "./Watchlist.js";
import Summary from "./Summary.js";
import Orders from "./Orders.js"
import Holdings from "./Holdings.js";
import Positions from "./Positions.js";
import Funds from "./Funds.js";
import Apps from "./Apps.js";
import "./Dashboard.css";
import  {GeneralContextProvider} from "./GeneralContext.js";

import { Route, Routes } from "react-router-dom";

function Dashboard(){
    return(<div className="dashboard-container">
    <GeneralContextProvider>
    <WatchList/>
    </GeneralContextProvider>
    <div className="content">
    <Routes>
        <Route exact path="/" element={<Summary/>} />
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/holdings" element={<Holdings/>} />
        <Route path="/positions" element={<Positions/>} />
        <Route path="/funds" element={<Funds/>} />
        <Route path="/apps" element={<Apps/>} />
    </Routes>
    </div>
    </div>)
}

export default Dashboard;