import React from 'react';

function Team(){
    return(<div className='container p-5'>
        <div className='row border-top'>
            <h1 className='text-center p-3 mt-4'>People</h1>
        </div>
        <div className='row p-5'>
            <div className='col  text-center'>
                <img style={{borderRadius:"50rem",width:"60%"}} src='/media/images/nithinKamath.jpg'></img>
                <h3 className='fs-5 mt-3'>Nithin Kamath</h3>
                <p>Founder CEO</p>
            </div>
            <div className='col p-5 mr-4'>
            <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
            </div>
        </div>
    </div>)
}

export default Team;