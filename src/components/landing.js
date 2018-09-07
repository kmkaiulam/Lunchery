import React from 'react';
import ForLunchRush from './for-lunch-rush';
import ForChefs from './for-chefs';
import NavBar from './navbar'
import '../stylesheets/landing.css';

export default function Landing(props) {
    return (
          <div className='Landing'>
            <NavBar />
            <ForLunchRush />
            <ForChefs />
          </div>
       )
}
   
   
   

