import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../modules/auth';
import {Link} from  'react-router-dom'; 
import './NavbarCopy.css';

//React Testing passes locally, but fails on Travis due to some bug on Travis-CI related to relative path
// Originally housed in components folder
//This copy of component made to resolve bug  

export function NavBar(props) {
  let onClick = () => {
    props.dispatch(logout())
  }
  return (
    <nav> 
        <div id='nav-menu'>
            <Link hidden={props.currentUser} to='/' className='About navbar-item'> About </Link>
            <Link hidden={!props.currentUser} to='/dashboard' className='menuitem navbar-item'> Dashboard</Link>
            <Link hidden={!props.currentUser} to='/lunchgroups' className='menuitem navbar-item'> Lunch Groups</Link>
            <Link hidden={props.currentUser} to='/registration' className='menuitem navbar-item'>Registration</Link>
            <Link hidden={props.currentUser} to='/login' className='menuitem navbar-item'>Login</Link>
            <Link hidden={!props.currentUser || props.currentUser.chef === false}to='/profilepage' className='menuitem navbar-item'> Profile Page</Link>
            <button className='menuitem logout-btn' hidden={!props.currentUser} onClick={() => onClick()}> Logout  </button>
        </div>
  </nav>
  
  )
}

const mapStateToProps= state => {
  return {
      currentUser: state.auth.currentUser
  }
}


export default connect(mapStateToProps)(NavBar);

