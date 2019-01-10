import React from 'react';
import {connect} from 'react-redux';
import ForDiners from './landing/ForDiners';
import ForChefs from './landing/ForChefs';
import WhatIsLunchery from './landing/WhatIsLunchery';
import {infoClick, login} from '../modules/auth'
import './Landing.css';


export class Landing extends React.Component {
  render(){
  
    let onClickDinerDemo = () => {
        this.props.dispatch(login('Guest', '123123'))
  
    }
    let onClickChefDemo = () => {
        this.props.dispatch(login('GuestChef', 'password'))
    }

    let onClickInfo = () => {
      this.props.dispatch(infoClick())
    }

    if( this.props.infoForChef === false) {
      return (
        <div className='landing'>
        <WhatIsLunchery />
        <div className='landing-buttons'> 
         <button onClick={() => onClickInfo()} > Chef Info </button>
         <button hidden={this.props.currentUser} className='demo-button' onClick={() => onClickDinerDemo()} > Diner Demo </button>
        </div>
        <ForDiners />
        </div>
      )
    }
    else 
      return (
        <div className='landing'>
          <WhatIsLunchery />
          <div className='landing-buttons'> 
            <button onClick={() => onClickInfo()} > Diner Info </button>
            <button hidden={this.props.currentUser} className= 'demo-button' onClick={() => onClickChefDemo()} > Chef Demo </button>
          </div>
          <ForChefs />
        </div>
      )
  }
}

   
   

const mapStateToProps = state => {
  return{
    infoForChef: state.auth.infoForChef,
    currentUser: state.auth.currentUser
  }
}


export default connect(mapStateToProps)(Landing);