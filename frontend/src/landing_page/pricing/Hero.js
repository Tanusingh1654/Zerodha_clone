import React from 'react';

function Hero(){
    return(<div className='container p-5'>
        <div className='row border-bottom text-center mt-4'>
            <h1>Pricing</h1>
            <h3 className='fs-6 text-muted mt-3 mb-5'>Free equity investments investments, and flat <i class="fa-solid fa-indian-rupee-sign"></i>20 intraday and F&O trades </h3>
        </div>
        <div className='row'>
            <div className='col text-cente p-2r'>
                <img style={{width:"80%"}} src='media/images/pricingEquity.svg'></img>
                <h1 className='fs-2'>Free equity delivery</h1>
                <p className="text-muted text-center">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
            </div>
            <div className='col text-center p-2'>
            <img style={{width:"80%"}} src='media/images/intradayTrades.svg'></img>
            <h1 className='fs-2'>Intraday and F&O trades</h1>
            <p className="text-muted text-center">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
            </div>
            <div className='col text-center p-2'>
            <img style={{width:"80%"}} src='media/images/pricingEquity.svg'></img>
            <h1 className='fs-2'>Free Direct MF</h1>
            <p className="text-muted text-center">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
            </div>
        </div>
    </div>)
}

export default Hero;