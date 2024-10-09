import React from 'react';

function Education() {
    return (<div className='container'>
        <div className='row'>
            <div className='col'>
                <img src='media/images/education.svg'></img>
             </div>
            <div className='col mt-5'>
                <h1 className='mb-4 fs-2'>Free and open market education</h1>
                <p className='mb-3 fs-6'>Varsity, the largest online stock market education book in the world covering everything from basics to advanced trading</p>
                <a href='' style={{textDecoration:"None"}}>Versity<i class="fa-solid fa-arrow-right"></i></a>
                <p className='mt-4 fs-6'>Trading Q&A , the most active trading and investment community in India for all your market related queries</p>
                <a href='' style={{textDecoration:"None"}}>TradingQ&A<i class="fa-solid fa-arrow-right mb-5"></i></a>
            </div>
        </div>
    </div>)
}

export default Education;