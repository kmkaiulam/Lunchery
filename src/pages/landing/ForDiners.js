import React from 'react';

export default function ForDiners(props) {
    return (
        <div className='forDiners'> 

            <div className='lunchery-element'>
                <h1> How does it work?</h1>
                <div className='two-column lunchery-info'> 
                <div>
                    <h2> For Diners </h2>
                    <p> Don't have time to pack your lunch?</p>
                    <p> Get a homecooked meal without the homecooking</p> 
                    <p> Search for lunch groups to join at your company</p> 
                </div>
                <img className='landing-img' src='/images/lunchery-search.png' alt='lunchery search'></img>
                </div>
            </div>

            <div className='lunchery-element'>
                <h2> Keep Track</h2>
                <p> Keep track of all your lunch dates and chefs</p>
                <div className='two-column lunchery-info'>
                    <img className='landing-img' src='/images/lunchery-groups.png' alt='lunchery dashboard group'></img>
                    <img className='landing-img' src='/images/lunchery-chefs.png' alt='lunchery dashboard chefs'></img>
                </div>
            </div>
        
        </div>
    )
}