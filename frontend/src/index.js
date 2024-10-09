import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import Homepage from './landing_page/home/Homepage';
import Signup from './landing_page/signup/Signup.js';
import About from './landing_page/about/About_page.js';
import Productpage from './landing_page/products/Productpage.js';
import PricingPage from './landing_page/pricing/PricingPage.js';
import SupportPage from './landing_page/support/SupportPage.js';
import Navbar from './landing_page/Navbar.js';
import Footer from './landing_page/Footer.js';
import NotFound from './landing_page/NotFound.js';
import Login from "./landing_page/login/Login.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter> 
    <Navbar/>  
    <Routes>
       <Route path="/" element={<Homepage/>}></Route> 
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/product" element={<Productpage/>}></Route>
      <Route path="/pricing" element={<PricingPage/>}></Route>
      <Route path="/support" element={<SupportPage/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  
);

