import React from 'react';


export default function WhatIsLunchery(props) {
    return (
    <div className ='what-is-lunchery'>
        <div className='two-column'> 
            <img className='landing-img' src='/images/lunchery-logo.png' alt='lunchery logo'></img>
            <div className='lunchery-what'> 
                <h1>What is Lunchery?</h1>
                <p> Lunchery is a lunch sharing app for the workplace.</p>
                <p> Whether you're a chef who loves to cook for others or just trying to give a satisfying answer to the question: "What's for lunch?" 
                Lunchery is for you.</p>  
            </div>
        </div>
    </div> 
    )
}
