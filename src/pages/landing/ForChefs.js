import React from 'react';

export default function ForChefs(props) {
    return ( 
        <div className='forChefs'>

          <div className='lunchery-element'> 
            <h1> How does it work?</h1>
            <div className='two-column'>
              <div>
                <h2> For Chefs</h2>
                <p> Schedule your own lunch group for others to join</p>
                <p> Set costs to recoup the cost of your groceries and time</p>
                <p> Set menus and seat limits </p> 
             </div>
              <img className='landing-img' src='/images/lunchery-create.png' alt='lunchery create group'></img>
           </div>
          </div>
        
          <div className='lunchery-element'>
            <h2> Keep Track</h2>
            <p> Keep track of all your commitments, lunch dates and chefs</p>
            <div className='three-column'>
              <img className='landing-img' src='/images/lunchery-chefgroups.png' alt='lunchery dashboard chefgroups'></img>
              <img className='landing-img' src='/images/lunchery-groups.png' alt='lunchery dashboard group'></img>
              <img className='landing-img' src='/images/lunchery-chefs.png' alt='lunchery dashboard chefs'></img>
           </div>
          </div>

        </div>   
    )
}