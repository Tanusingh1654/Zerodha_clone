
import React from 'react';

function Awards(){
    return(<div className='container mt-5 p-5'>
        <div className='row'>
            <div className='col-6'>
                <img src='media/images/largestBroker.svg' ></img>
            </div>
            <div className='col-6 p-2'>
                <h1>Largest Stock Broker in India</h1>
                <p>
                    2+ million Zerodha client contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                </p>
                <div className='row p-5'>
                    <div className='col-6'>
                        <ul>
                            <li><p>Future and Options</p></li>
                            <li><p>Commodity derivatives</p></li>
                            <li><p>Currency derivatives</p></li>
                        </ul>
                    </div>
                    <div className='col-6'>
                    <ul>
                            <li><p>Stocks and IPOs</p></li>
                            <li><p>Direct mutual funds</p></li>
                            <li><p>Bonds and Govt. Securities</p></li>
                        </ul>
                    </div>
                </div>
                <img className='mb-5' src='media/images/pressLogos.png' style={{width:"90%"}}></img>
            </div>
        </div>
    </div>)
}

export default Awards;