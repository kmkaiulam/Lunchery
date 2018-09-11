import React from 'react';

import './ForChefs.css';

export default function ForChefs(props) {
    return ( 
        <div className='forChefs'>
            <header> For The Everyday Chef
                <h3>Love to cook and love to cook for others?</h3>
            </header>
            <p>[<em>placeholder for screenshot of building chef profile</em>]</p>
            <p>Build your Profile</p>
         <section>
          <header>
              <h3></h3>
          </header>
          <p>[<em>placeholder for screenshot of review </em>]</p>
          <p> Get Constructive Feedback and perfect your recipes.</p>
      </section>
        <section>
          <header>
              <h3>Reclaim your lunch hour</h3>
          </header>
        </section>
        <section>
              <button type='button'>Let's Cook</button>
        </section>
        </div>
    )
}