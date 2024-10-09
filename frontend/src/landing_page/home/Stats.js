import React from 'react';

function Stats(){
    return(<div className='container mt-3 p-5'>
        <div className='row '>
            <div className='col-6 p-5' >
                <h1 className='mb-5 fs-2'>Trust with confidence</h1>
                <h3 className=' fs-4'>Customer-first always</h3>
                <p className='text-muted'>That's why 13+ crore customers trust Zerodha with 3.5+ lakh crores worth of equity investments</p>
                <h3 className='fs-4'>No spam or gimmicks </h3>
                <p className='text-muted'>No gimmicks , spam, "gamfication", or annoying push notification. High quality apps that you use at your pace , the way you like</p>
                <h3 className='fs-4'>The Zerodha Universe</h3>
                <p className='text-muted'>Not just an app , but a whole ecosystem . Our investments in 30+ fintech startups after your tailored services specific to your needs</p>
                <h3 className='fs-4'>Do better with money</h3>
                <p className='text-muted'>with initiatives like Nudge and kill Switch , we don't just facilitate transaction , but actively help you do better with your money</p>
            </div>
            <div className='col-6 p-3 mt-2'>
                <img src='media/images/ecosystem.png' style={{width:"85%"}}></img>

               <div className='text-center'>
               <a className='mx-5' href='' style={{textDecoration:"None"}}>Explore our products<i class="fa-solid fa-arrow-right"></i></a>
               <a href='' style={{textDecoration:"None"}}>Try kite demo <i class="fa-solid fa-arrow-right"></i></a>
               </div>
            </div>
        </div>
    </div>)
}

export default Stats;