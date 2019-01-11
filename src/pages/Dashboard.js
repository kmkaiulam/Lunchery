import React from 'react';
import Loading from 'react-loading';
import Calendar from 'react-calendar';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import ChefGroups from './dashboard/ChefGroups';
import MyGroups from './dashboard/MyGroups';
import MyChefs from './dashboard/MyChefs';
import './Dashboard.css';
import RequiresLogin from '../components/RequiresLogin';
import { getLunchGroupResults, getUserInfo } from '../modules/auth';


export function Dashboard(props) {
const {currentUser, profileUpToDate, groupResults, authToken} = props

    if(profileUpToDate === false) {
        props.dispatch(getUserInfo(authToken))
        return ( <div className= 'loader'>
        <Loading type='spinningBubbles' color='black' />
        </div>
        )
    }
    if(currentUser.chef === true && currentUser.chefProfile.displayName === '') {
         return  <Redirect to='/profilePage'/>
    }
    if(!groupResults) {
     props.dispatch(getLunchGroupResults());
        return ( <div className= 'loader'>
        <Loading type='spinningBubbles' color='black' />
        </div>
        )
    }

    if (currentUser.chef === true) {
        return (
        <div className='dashboard'>
            <h1> Welcome Chef {currentUser.chefProfile.displayName}!</h1> 
            <div className= 'page-element'>
                <ChefGroups />
                <Calendar className='calendar-component' minDate = {new Date(Date.now())} calendarType = {"US"} />
            </div>
            <div className= 'page-element'> 
                <MyGroups/> 
            </div>
            <div className= 'page-element'> 
                <MyChefs />
            </div>
        </div>
      )
    }
    else if (currentUser.chef === false) {
        return (
        <div className='dashboard'>
            <h1> Welcome {currentUser.firstName}!</h1> 
            <div className= 'page-element'>
                <Calendar className='calendar-component' minDate = {new Date(Date.now())} calendarType = {"US"} />
                <MyGroups/>
            </div> 
            <div className='page-element'>
                <div className= 'my-chefs'> 
                 <MyChefs />
                </div>
            </div>
        </div>
      )
    }
}




const mapStateToProps = state => {
    return{
    authToken: state.auth.authToken,
    currentUser: state.auth.currentUser,
    groupResults:state.auth.groupResults,
    profileUpToDate: state.auth.profileUpToDate
}};

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));

