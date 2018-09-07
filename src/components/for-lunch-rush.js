import React from 'react';

import '../stylesheets/for-lunch-rush.css';

export default function ForLunchRush(props) {
    return (
    <div className='forLunchRush'>
        <section>
          <header> For the Lunch Rush
              <h3>Browse for Chefs in your Company</h3>
          </header>
          <p>[<em>placeholder for screenshot of chef profile</em>]</p>
          <p>View Chef Profiles and Check their Availability</p>
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