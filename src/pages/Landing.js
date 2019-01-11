import React from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import ForDiners from './landing/ForDiners';
import ForChefs from './landing/ForChefs';
import WhatIsLunchery from './landing/WhatIsLunchery';
import TopNav from './landing/TopNav';
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

    if(this.props.currentUser){
      return <Redirect to='/dashboard' />;
    }
    

    if( this.props.infoForChef === false) {
      return (
        <div className='landing'>
          <TopNav />
          <div className='landing-body'>
            <WhatIsLunchery />
            <div className='landing-buttons'> 
              <button className='landing-btn' onClick={() => onClickInfo()} > Chef Info </button>
              <button className='landing-btn' hidden={this.props.currentUser} onClick={() => onClickDinerDemo()} > Diner Demo </button>
            </div>
            <ForDiners />
          </div>
        </div>
      )
    }
    else 
      return (
        <div className='landing'>
          <TopNav />
          <div className='landing-body'>
            <WhatIsLunchery />
            <div className='landing-buttons'> 
              <button className='landing-btn' onClick={() => onClickInfo()} > Diner Info </button>
              <button className='landing-btn' hidden={this.props.currentUser} onClick={() => onClickChefDemo()} > Chef Demo </button>
            </div>
            <ForChefs />
          </div>
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