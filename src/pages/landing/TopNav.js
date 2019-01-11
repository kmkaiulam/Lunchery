import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../modules/auth';
import {Link} from  'react-router-dom'; 
import './TopNav.css';

export function TopNav(props) {
  let onClick = () => {
    console.log('clicked Log out')
    props.dispatch(logout())
  }
  return (
    <nav>
        <div id='top-nav'>
            <Link hidden={props.currentUser} to='/' className='menuitem top-nav-item'>About</Link>
            <Link hidden={props.currentUser} to='/registration' className='menuitem top-nav-item'>Registration</Link>
            <Link hidden={props.currentUser} to='/login' className='menuitem top-nav-item'>Login</Link>
            <button className='menuitem top-nav-item' hidden={!props.currentUser} onClick={() => onClick()}> Logout  </button>
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
