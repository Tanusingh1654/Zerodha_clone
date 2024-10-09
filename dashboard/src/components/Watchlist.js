import React, {useContext, useState} from "react";
import "./Watchlist.css";
import {Tooltip, Grow} from "@mui/material";
import {BarChartOutlined, KeyboardArrowDown ,KeyboardArrowUp, MoreHoriz} from "@mui/icons-material";
import { watchlist } from "../data/data";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnoutChart";
function Watchlist(){

    const labels=watchlist.map((subArray)=>subArray["name"]);
    const data={
      labels,
      datasets:[
        {
          label: 'price',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ]
    }

  // export const data = {
  //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //   datasets: [
  //     {
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)',
  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)',
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };


    return( <div className="watchlist-container">
         <div className="search-container">
         <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length}/50</span>
         </div>
         <ul className="list">
          {watchlist.map((stock,index)=>{
            return(<WatchListItem stock={stock} key={index} />)
          })}
         </ul>
         <DoughnutChart data={data} />
    </div>)
}

export default Watchlist;

const WatchListItem=({stock})=>{

  const [showWatchListActions,setShowWatchListItem]=useState(false);

  const handleMouseEnter=(event)=>{
    setShowWatchListItem(true);
  }
  const handleMouseExit=(event)=>{
    setShowWatchListItem(false);
  }

  return(<li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown?"down":"up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown?(
            <KeyboardArrowDown className="down" />
          ):(
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      { showWatchListActions && <WatchlistActions uid={stock.name}/>}
  </li>)
}

const WatchlistActions=({uid})=>{
  const generalContext=useContext(GeneralContext);

  const handleBuyClick=()=>{
    generalContext.openBuyWindow(uid);
  }
  const handleSellClick=()=>{
    generalContext.openSellWindow(uid);
  }
  return (
    <span className="actions">
        <span>
          <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow} onClick={handleBuyClick}>
            <button className="buy">buy</button>
          </Tooltip>
          <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow} onClick={handleSellClick}>
            <button className="sell">sell</button>
          </Tooltip>
          <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
            <button className="action">
              <BarChartOutlined className="icon" />
            </button>
          </Tooltip>
          <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
              <MoreHoriz className="icon" />
            </button>
          </Tooltip>
        </span>
    </span>
  )
}