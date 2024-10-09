import React from 'react';

function Rightsection({
    imageUrl, productName,productDescription,learnMore
}){
    return(<div className='container p-5 border-top'>
        <div className='row p-2 '>
            <div className='col p-5'>
                <h3>{productName}</h3>
                <p>{productDescription}</p>
                <a href='learnMore'>Learn More</a>
            </div>
            <div className='col'>
                <img style={{width:"75%"}} src={imageUrl}></img>
            </div>
        </div>
    </div>)
}

export default Rightsection;