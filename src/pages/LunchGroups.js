import React from 'react';
import Loading from '../components/Loading';
import {connect} from 'react-redux';
import { lunchGroupCreateToggle, getLunchGroupResults } from '../modules/auth';
import LunchGroupForm from './lunchGroups/LunchGroupForm';
import GroupResults from './lunchGroups/GroupResults';
import GroupSearchInput from './lunchGroups/GroupSearchInput';
import RequiresLogin from  './RequiresLogin';
import './LunchGroups.css'

export function LunchGroups(props) {
   let onClickCreate = () => {
     props.dispatch(lunchGroupCreateToggle())
     }
    
    console.log(props.createLunchGroup);
    if (props.lunchGroupUpdated === true || !props.groupResults || props.newLunchGroup !== null) {
        props.dispatch(getLunchGroupResults());
        return ( <div className= 'loader'>
        <Loading type='spinningBubbles' color='black' />
        </div>
        )
    }
    if (props.createLunchGroup === true) {
        return (
            <div className='lunchGroups lunchGroupForm'>
              <h1>Create A New Lunch Group</h1> 
                <LunchGroupForm />
                <GroupResults />
                <button onClick={() => onClickCreate()}> Cancel </button>
            </div>
        )
    }
    else 
        return (
        <div className='lunchGroups'>
        <h1>Lunch Groups</h1> 
        <button onClick={() => onClickCreate()} hidden={!props.currentUser.chef}> Create a New Group </button>
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
        groupResults: state.auth.groupResults,
        newLunchGroup: state.auth.newLunchGroup
    }
}
export default RequiresLogin()(connect(mapStateToProps)(LunchGroups))
