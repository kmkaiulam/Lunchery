import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../modules/auth'
import {Link} from  'react-router-dom'; 
import './TopNav.css';

export function TopNav(props) {


  let onClickChefDemo = () => {
    props.dispatch(login('GuestChef', 'password'))
}

  return (
    <nav>
        <div id='top-nav'>
            <img className='lunchery-logo' src='/images/lunchery-logo.png' alt='lunchery logo'></img>
            <Link hidden={props.currentUser} to='/' className='menuitem top-nav-item'>About</Link>
            <Link hidden={props.currentUser} to='/registration' className='menuitem top-nav-item'>Registration</Link>
            <Link hidden={props.currentUser} to='/login' className='menuitem top-nav-item'>Login</Link>
            <button className='nav-btn' hidden={props.currentUser} onClick={() => onClickChefDemo()} > Chef Demo </button>
        </div>
  </nav>
  
  )
}

const mapStateToProps= state => {
  return {
      currentUser: state.auth.currentUser
  }
}


export default connect(mapStateToProps)(TopNav);
