import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../modules/auth';
import {Link} from  'react-router-dom'; 
import './NavbarCopy.css';

export function NavBar(props) {
  let onClick = () => {
    props.dispatch(logout())
  }
  return (
    <nav> 
        <div id='nav-menu'>
            <Link hidden={props.currentUser} to='/' className='About'> About </Link>
            <Link hidden={!props.currentUser} to='/dashboard' className='menuitem'> Dashboard</Link>
            <Link hidden={!props.currentUser} to='/lunchgroups' className='menuitem'> Lunch Groups</Link>
            <Link hidden={props.currentUser} to='/registration' className='menuitem'>Registration</Link>
            <Link hidden={props.currentUser} to='/login' className='menuitem'>Login</Link>
            <Link hidden={!props.currentUser || props.currentUser.chef === false}to='/profilepage' className='menuitem'> Profile Page</Link>
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


export default connect(mapStateToProps)(NavBar);

