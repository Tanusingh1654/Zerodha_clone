import React from 'react';
import "./Hero.css";
function Hero(){
    return(<div className='container-fluid ' id='support-hero'>
            <div className='px-5 pt-5 mt-5 mx-5' id='support-wrapper'>
                <h4 className='mx-5'>Support Portal</h4>
                <a className='mx-5' href='#'>Track Tickets</a>
            </div>
            <div className='row p-2  mb-5 mx-5'>
                <div className='col-6 p-5   '>
                    <h1 className="fs-3">
                        Search for an answer or browse help topics to create a ticket
                    </h1>
                    <input placeholder='Eg. how do I activate F&O , why my order is getting rejected'></input><br></br>
                    <a href=''>Track account opening</a>&nbsp;&nbsp;
                    <a href=''>Track segment activation</a>&nbsp;&nbsp;
                    <a href=''>Intraday margins</a>&nbsp;&nbsp;
                    <a href=''>Kite user manual</a>&nbsp;&nbsp;
                </div>
                <div className='col-6 p-5 ' >
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                    <li><a href=''>Current takeovers and Delisting -January 2024</a></li>
                    <li><a href=''>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
                
            </div>
    </div>)
}

export default Hero;