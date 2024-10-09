import React from 'react';

function Pricing(){
    return(<div className='container p-5 mt-5 '>
        <div className='row'>
            <div className='col-4 p-3'>
                <h1 className='mb-4 fs-2'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India . Flat fees and no hidden charges</p>
                <a href='' style={{textDecoration:"None"}}>See pricing<i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className='col-2'></div>
            <div className='col-6 mb-5'>
                <div className='row '>
                    <div className='col-6 border text-center p-4'>
                        <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                        <p className='text-muted mt-4'>Free equity delivery and direct mutual funds</p>
                       
                    </div>
                    <div className='col-6 border text-center p-4'>
                        <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                        <p  className='text-muted mt-4'>Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Pricing;