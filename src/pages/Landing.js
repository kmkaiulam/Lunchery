import React from 'react';
import {connect} from 'react-redux';
import ForDiners from './landing/ForDiners';
import ForChefs from './landing/ForChefs';
import WhatIsLunchery from './landing/WhatIsLunchery';
import {infoClick} from '../modules/auth'
import './Landing.css';

export class Landing extends React.Component {
  render(){
    let onClickInfo = () => {
      this.props.dispatch(infoClick())
      console.log(this.props.infoForChef)
  }
    if(this.props.infoForChef === false) {
      return (
        <div className='landing'>
        <WhatIsLunchery />
         <button onClick={() => onClickInfo()} > Chef Info </button>
          <ForDiners />
        </div>
      )
    }
    else 
      return (
        <div className='landing'>
          <WhatIsLunchery />
          <button onClick={() => onClickInfo()} > Diner Info </button>
          <ForChefs />       
        </div>
      )
    }
}

   
   

const mapStateToProps = state => {
  return{
    infoForChef: state.auth.infoForChef
}};


export default connect(mapStateToProps)(Landing);