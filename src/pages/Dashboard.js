import React from 'react';
import Loading from 'react-loading';
import Calendar from 'react-calendar';
import {connect} from 'react-redux';
import ChefGroups from './dashboard/ChefGroups';
import MyGroups from './dashboard/MyGroups';
import MyChefs from './dashboard/MyChefs';
import './Dashboard.css';
import RequiresLogin from './RequiresLogin';
import {Redirect} from 'react-router-dom';
import { getLunchGroupResults } from '../modules/auth';


export function Dashboard(props) {
    if(props.currentUser.chef === true && props.currentUser.chefProfile.displayName === '') {
        return  <Redirect to='/profilePage'/>
    }
    if(!props.groupResults || props.lunchGroupUpdated === true) {
     props.dispatch(getLunchGroupResults());
        return ( <div className= 'loader'>
        <Loading type='spinningBubbles' color='black' />
        </div>
        )
    }

    if (props.currentUser.chef === true) {
        return (
        <div className='dashboard'>
            <h1> Welcome Chef {props.currentUser.chefProfile.displayName}!</h1> 
            <ChefGroups />
            <Calendar className='calendar-component' minDate = {new Date(Date.now())} calendarType = {"US"} />
            <div className='two-column'>
                <MyGroups/> 
                <MyChefs />
            </div>
        </div>
      )
    }
    else if (props.currentUser.chef === false) {
        return (
        <div className='dashboard'>
            <h1> Welcome {props.currentUser.firstName}!</h1> 
            <Calendar className='calendar-component' minDate = {new Date(Date.now())} calendarType = {"US"} />
            <div className='two-column'>
                <MyGroups/> 
                <MyChefs />
            </div>
        </div>
      )
    }
}




const mapStateToProps = state => {
    return{
    currentUser: state.auth.currentUser,
    groupResults:state.auth.groupResults,
    lunchGroupUpdated: state.auth.lunchGroupUpdated,
    editGroupId: state.auth.editGroupId,
}};

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));

