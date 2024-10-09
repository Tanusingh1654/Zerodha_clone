
import React from "react";
import Hero from "./Hero";
import Awards from "./Award";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import Openaccount from "../Openaccount";

function Homepage(){
    return(<>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <Openaccount/>
       
    </>)
}

export default Homepage;