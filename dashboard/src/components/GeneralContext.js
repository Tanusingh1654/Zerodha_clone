import React, {useState} from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext=React.createContext({
    openBuyWindow:(uid)=>{},
    closeBuyWindow:()=>{},
    openSellWindow:(uid)=>{},
    closeSellWindow:()=>{},
});

export const GeneralContextProvider=(props)=>{
    const [isBuyWindow,setIsBuyWindow]=useState(false);
    const [isSellWindow,setIsSellWindow]=useState(false);
    const [selectedStockUID,setSelectedStockUID]=useState("");

    const handleOpenBuyWindow=(uid)=>{
        setIsBuyWindow(true);
        setSelectedStockUID(uid);
    }
    const handleCloseBuyWindow=()=>{
        setIsBuyWindow(false);
        setSelectedStockUID("");
    }
    const handleOpenSellWindow=(uid)=>{
        setIsSellWindow(true);
        setSelectedStockUID(uid)
    }
    const handleCloseSellWindow=()=>{
        setIsSellWindow(false);
        setSelectedStockUID("");
    }
    return (
        <GeneralContext.Provider 
        value={{openBuyWindow:handleOpenBuyWindow,
        closeBuyWindow:handleCloseBuyWindow,
        openSellWindow:handleOpenSellWindow,
        closeSellWindow:handleCloseSellWindow}}>
            {props.children}
            {isBuyWindow && <BuyActionWindow uid={selectedStockUID}/> }
            {isSellWindow &&<SellActionWindow uid={selectedStockUID} /> }
        </GeneralContext.Provider>
    )
}

export default GeneralContext;