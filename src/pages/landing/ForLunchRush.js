import React from 'react';

import './ForLunchRush.css';

export default function ForLunchRush(props) {
    return (
    <div className='forLunchRush'>
        <section>
          <header> For Diners
              <h3>Browse for Chefs in your Company</h3>
          </header>
          <p>[<em>placeholder for screenshot of Search</em>]</p>
          <p>Join A Lunch Group</p>
        </section>
        <section>
          <header>
              <h3>Fit it in for your Schedule</h3>
          </header>
          <p>[<em>placeholder for screenshot of personalized lunch schedule</em>]</p>
          <p> Not feeling like meatloaf on Monday? Mix and match, it's up to you.</p>
      </section>
        <section>
          <header>
              <h3>Home cooked meals without home cooking </h3>
          </header>
        </section>
        <section>
              <button type='button'>Let's do Lunch</button>
        </section>
    </div>
    )
}