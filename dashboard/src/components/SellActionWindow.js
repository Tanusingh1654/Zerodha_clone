import React, {useContext,useState} from "react";
import {Link} from "react-router-dom";
import GeneralContext from "./GeneralContext";
import axios from "axios";

const SellActionWindow=({uid})=>{
    const [sellStockQuantity,setSellStockQuantity]=useState(1);
    const [sellStockPrice,setSellStockPrice]=useState(0);

    const generalContext=useContext(GeneralContext);
    const handleSellClick=()=>{
        axios.post("http://localhost:3002/newOrder",{
            name:uid,
            qty:sellStockQuantity,
            price:sellStockPrice,
            mode:"SELL",
        });
        generalContext.closeSellWindow();
    }
    const handleCancelClick=()=>{
        generalContext.closeSellWindow();
    }
    return(<div className="container" id="sell-window" draggable="true">
        <div className="regular-order">
            <div className="inputs">
                <fieldset>
                    <legend>QTY</legend>
                    <input type="number" name="qty" id="qty" onChange={(e)=>{setSellStockQuantity(e.target.value)}} value={sellStockQuantity} />
                </fieldset>
                <fieldset>
                    <legend>Price</legend>
                    <input type="number" name="price" id="price" onChange={(e)=>{setSellStockPrice(e.target.value)}} value={sellStockPrice} />
                </fieldset>
            </div>
        </div>
        <div className="buttons">
            <span>Margin required 140.65</span>
            <div>
                <Link to="" className="btn bnt-blue" onClick={handleSellClick}>sell</Link>
                <Link to="" className="btn bnt-grey" onClick={handleCancelClick}> cancel</Link>
            </div>
        </div>
    </div>)
}
export default SellActionWindow;