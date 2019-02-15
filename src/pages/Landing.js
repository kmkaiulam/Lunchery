import React from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import ForDiners from './landing/ForDiners';
import ForChefs from './landing/ForChefs';
import WhatIsLunchery from './landing/WhatIsLunchery';
import TopNav from './landing/TopNav';
import Loading from '../components/Loading';
import {infoClick} from '../modules/auth'
import './Landing.css';


export class Landing extends React.Component {
  render(){
  
    let onClickInfo = () => {
      this.props.dispatch(infoClick())
    }

    if(this.props.loading){
      return ( 
        <div className='landing'>
          <TopNav />
          <div className= 'loader'>
            <Loading type='spinningBubbles' color='black' />
          </div>
        </div>
      )
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
    currentUser: state.auth.currentUser,
    loading: state.auth.loading,
  }
}


export default connect(mapStateToProps)(Landing);