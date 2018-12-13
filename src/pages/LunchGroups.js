import React from 'react';
import Loading from '../components/Loading';
import {connect} from 'react-redux';
import { lunchGroupCreate, lunchGroupCancel, getGroupResults } from '../modules/auth';
import LunchGroupForm from './lunchGroups/LunchGroupForm';
import GroupResults from './lunchGroups/GroupResults';
import GroupSearchInput from './lunchGroups/GroupSearchInput';
import RequiresLogin from  './RequiresLogin';
import './LunchGroups.css'

export function LunchGroups(props) {
   let onClickCreate = () => {
     props.dispatch(lunchGroupCreate())
     }
     let onClickCancel = () => {
       props.dispatch(lunchGroupCancel())
     }
    console.log(props.createLunchGroup);
    if (props.lunchGroupUpdated === true || !props.groupResults) {
        props.dispatch(getGroupResults());
        return ( <div className= 'loader'>
        <Loading type='spinningBubbles' color='black' />
        </div>
        )
    }
    if (props.createLunchGroup === true) {
        return (
            <div className='lunchGroups lunchGroupForm'>
                <LunchGroupForm />
                <button onClick={() => onClickCancel()}> Cancel </button>
            </div>
        )
    }
    else 
        return (
        <div className='lunchGroups'>
        <GroupSearchInput />
        <GroupResults />
            <button onClick={() => onClickCreate()} hidden={!props.currentUser.chef}> Create a New Group </button>
        </div>    
    );
}
    


const mapStateToProps= state => {
    return {
        profileEdit: state.auth.profileEdit,
        currentUser: state.auth.currentUser,
        createLunchGroup: state.auth.createLunchGroup,
        lunchGroupUpdated: state.auth.lunchGroupUpdated,
        groupResults: state.auth.groupResults
    }
}
export default RequiresLogin()(connect(mapStateToProps)(LunchGroups))
