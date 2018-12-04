import React from 'react';
import {connect} from 'react-redux';
import MyChefs from './dashboard/MyChefs';
import MyWorkWeek from './dashboard/MyWorkWeek';
import WorkWeekForm from './dashboard/WorkWeekForm'
import './Dashboard.css';
import RequiresLogin from './RequiresLogin';
import {Redirect} from 'react-router-dom';
import { workWeekEdit, workWeekCancel } from '../modules/auth';
export function Dashboard(props) {
    let editRequest = () => {
        console.log('clicked edit')
        props.dispatch(workWeekEdit())
      }
    let editCancel = () => {
        console.log('clicked cancel')
        props.dispatch(workWeekCancel())
    }
    if(props.currentUser.chef === true && props.currentUser.chefProfile.displayName === '') {
        return  <Redirect to='/profilePage'/>
     }
    else if (props.workWeekEdit === false) {
        return (
        <div className='dashboard'>
            <h1> Welcome {props.currentUser.username}!</h1>  
            <MyWorkWeek />
            <button  onClick={() => editRequest()}> Edit MyWorkWeek </button>
            <MyChefs />
        </div>)
    }
    else
        return ( 
        <div className='dashboard'>
          <h1> Welcome {props.currentUser.username}!</h1>  
          <MyWorkWeek />
          <WorkWeekForm />
          <button  onClick={() => editCancel()}> Cancel Edit</button>
          <MyChefs />
        </div>
        )
}


const mapStateToProps = state => {
    return{
    currentUser: state.auth.currentUser,
    workWeekEdit: state.auth.workWeekEdit
}};

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));

