import React from 'react';

function Leftsection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}){
    return(<div className='container '>
    
        <div className='row p-5 '>
            <div className='col '>
                <img  style={{width:"80%"}} src={imageURL}></img>
            </div>
            <div className='col p-5'>
                <h3 className='fs-2'>{productName}</h3>
                <p>{productDescription}</p>
                <div className='mb-3'>
                    <a style={{marginRight:"2rem"}} href={tryDemo}>tryDemo</a>
                    <a href={learnMore}>learnmore</a>
                </div>
                <div>
                    <a style={{marginRight:"2rem"}} href={googlePlay}><img src='media/images/googlePlayBadge.svg'></img></a>
                    <a href={appStore}><img src='media/images/appstoreBadge.svg'></img></a>
                </div>
            </div>
        </div>
    </div>)
}

export default Leftsection;