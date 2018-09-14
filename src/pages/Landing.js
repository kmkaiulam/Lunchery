import React from 'react';
import ForLunchRush from './landing/ForLunchRush';
import ForChefs from './landing/ForChefs';
import './Landing.css';

export default class Landing extends React.Component {
  render(){
    return (
          <div className='Landing'>
            <ForLunchRush />
            <ForChefs />
          </div>
    )
  }
}
   
   

