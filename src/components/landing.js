import React from 'react';
import ForLunchRush from './forlunchrush';
import ForChefs from './forchefs';
import NavBar from './navbar'
import '../stylesheets/landing.css';

export default function Landing(props) {
    return (
        <div className='Landing'>
               <NavBar />
               <ForChefs />
       </div>
       )
}
   
   
   

