import React from 'react';
import {connect} from 'react-redux';
import MyChefs from './dashboard/MyChefs';
import MyWorkWeek from './dashboard/MyWorkWeek';
import MessagesInbox from './dashboard/MessagesInbox';
import './Dashboard.css';
import Redirect from 'react-router-dom';
import RequiresLogin from './RequiresLogin';

export function Dashboard(props) {
    return (
     <div className='dashboard'>
          <h1> Welcome {props.user.username}!</h1>  
          <MyWorkWeek />
          <MyChefs />
    </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return{
    user: state.auth.currentUser,
}};

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));

