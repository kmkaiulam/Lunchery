import React from 'react';
import Loading from '../components/Loading';
import {connect} from 'react-redux';
import { lunchGroupCreate, lunchGroupCancel } from '../modules/auth';
import LunchGroupForm from './lunchGroups/LunchGroupForm';
import GroupResults from './lunchGroups/GroupResults';
import GroupSearchForm from './lunchGroups/GroupSearchForm';
import RequiresLogin from  './RequiresLogin';
import './LunchGroups.css'

//must dispatch an action that asynchronously calls all the groupResults = state.auth.groupResults


export function LunchGroups(props) {
    let onClickCreate = () => {
     props.dispatch(lunchGroupCreate())
     }
     let onClickCancel = () => {
       props.dispatch(lunchGroupCancel())
     }
    console.log(props.createLunchGroup);
    if ( props.loading === true) {
        return (
        <div className= 'loader'>
        <Loading type='spinningBubbles' color='black' />
        </div>
    );
    }
    else if ( !props.createLunchGroup) {
    return (
        <div className='lunchGroups'>
        <GroupSearchForm />
            [LiveSearch Component with group results listed]
            Live Search 
            <h1>HELLO WORLD!</h1> 
            <button onClick={() => onClickCreate()} hidden={!props.currentUser.chef}> Create a New Group </button>
        </div>    
    );
    }
    else if ( props.createLunchGroup) {
        return (
            <div className='lunchGroups lunchGroupForm'>
                <LunchGroupForm />
                <button onClick={() => onClickCancel()}> Cancel </button>
            </div>
        )

    }
}

const mapStateToProps= state => {
    return {
        loading: state.auth.loading,
        profileEdit: state.auth.profileEdit,
        currentUser: state.auth.currentUser,
        createLunchGroup: state.auth.createLunchGroup,
        groupResults: state.auth.groupResults
    }
}
export default RequiresLogin()(connect(mapStateToProps)(LunchGroups))
