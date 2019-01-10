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
            <Link hidden={props.currentUser} to='/' className='menuitem'>About</Link>
            <Link hidden={props.currentUser} to='/registration' className='menuitem'>Registration</Link>
            <Link hidden={props.currentUser} to='/login' className='menuitem'>Login</Link>
            <button className='menuitem' hidden={!props.currentUser} onClick={() => onClick()}> Logout  </button>
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
