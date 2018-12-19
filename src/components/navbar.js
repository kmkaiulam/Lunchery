import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../modules/auth';
import {Link} from  'react-router-dom'; 
import './Navbar.css';

export function NavBar(props) {
  let onClick = () => {
    console.log('clicked Log out')
    props.dispatch(logout())
  }
  return (
    <nav>
        <div id='menu'>
            <Link to='/' className='menuitem'>About</Link>
            <Link to='/dashboard' className='menuitem'> Dashboard</Link>
            <Link to='/lunchgroups' className='menuitem'> Lunch Groups</Link>
            <Link hidden={props.currentUser} to='/registration' className='menuitem'>Registration</Link>
            <Link hidden={props.currentUser} to='/login' className='menuitem'>Login</Link>
            <Link to='/profilepage' className='menuitem'> Profile Page</Link>
            <button onClick={() => onClick()}> Logout  </button>
            {/* why does this automatically run if not written as an empty function? */}
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

