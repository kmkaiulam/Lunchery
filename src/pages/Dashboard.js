import React from 'react';
import Loading from 'react-loading';
import {connect} from 'react-redux';
import MyChefs from './dashboard/MyChefs';
import MyGroups from './dashboard/MyGroups';
//import MyWorkWeek from './dashboard/MyWorkWeek';
import './Dashboard.css';
import RequiresLogin from './RequiresLogin';
import {Redirect} from 'react-router-dom';
import { getGroupResults } from '../modules/auth';
export function Dashboard(props) {
    if(props.currentUser.chef === true && props.currentUser.chefProfile.displayName === '') {
        return  <Redirect to='/profilePage'/>
     }
    if(!props.groupResults || props.lunchGroupUpdated === true) {
     props.dispatch(getGroupResults());
        return ( <div className= 'loader'>
        <Loading type='spinningBubbles' color='black' />
        </div>
        )
    }
    else 
        return (
        <div className='dashboard'>
            <h1> Welcome {props.currentUser.username}!</h1>  
            <MyGroups/> 
            <MyChefs />
        </div>
    )
}



const mapStateToProps = state => {
    return{
    currentUser: state.auth.currentUser,
    groupResults:state.auth.groupResults,
    lunchGroupUpdated: state.auth.lunchGroupUpdated
}};

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));

