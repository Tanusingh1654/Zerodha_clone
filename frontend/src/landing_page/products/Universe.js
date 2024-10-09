import React from 'react';
import "./Product.css";
function Universe() {
    return (<div className='container mt-3 p-5'>
        <div className='row text-center mb-5'>
           
            <h1 className='fs-2 mb-3'>The Zerodha Universe</h1>
            <p className='mt-2'>Extend your trading and investment experience even further with our platforms</p>
        </div>
        <div className='row p-4 text-center '>
            <div className='col' >
                <div className='mb-5 box'>
                    <img src='media/images/smallcaseLogo.png'></img>
                    <p className='mt-3'>Themetic investment platform</p>
                </div>

               <div className='box'>
               <img src='media/images/goldenpiLogo.png'></img>
               <p className='mt-3'>Asset Management</p>
               </div>
            </div>
            <div className='col'>
                <div className='mb-5 box'>
                    <img style={{width:"25%"}} src='media/images/streakLogo.png'></img>
                    <p className='mt-3'> Algo and strategy platform</p>
                </div>
                <div className='box' >
                    <img src='media/images/goldenpiLogo.png'></img>
                    <p className='mt-3'> Bonds training platform</p>
                </div>
            </div>
            <div className='col'>
            <div className='mb-5 box'>
                    <img src='media/images/sensibullLogo.svg'></img>
                    <p className='mt-3'> Options trading platform</p>
                </div>
                <div className=' box'>
                    <img style={{width:"25%"}} src='media/images/dittoLogo.png'></img>
                    <p className='mt-3'> Algo and strategy platform</p>
                </div>
            </div>
        </div>
        <div className='row text-center'>
                <button className='btn btn-primary p-2 fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
            </div>
    </div>)
}

export default Universe;