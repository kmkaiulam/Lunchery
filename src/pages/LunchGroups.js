import React from 'react';
import Loading from '../components/Loading';
import {connect} from 'react-redux';
import { lunchGroupCreateToggle, getLunchGroupResults } from '../modules/auth';
import LunchGroupForm from './profilePage/LunchGroupForm2';
import GroupResults from './lunchGroups/GroupResults';
import GroupSearchInput from './lunchGroups/GroupSearchInput';
import RequiresLogin from '../components/RequiresLogin';
import './LunchGroups.css'

export function LunchGroups(props) {
   let onClickCreate = () => {
     props.dispatch(lunchGroupCreateToggle())
     }
    const {groupResults, createLunchGroup, currentUser} = props

    if (!groupResults) {
        props.dispatch(getLunchGroupResults());
        return ( <div className= 'loader'>
        <Loading type='spinningBubbles' color='black' />
        </div>
        )
    }
    if (createLunchGroup === true) {
        return (
            <div className='lunchGroups'>
              <h1>Create A New Lunch Group</h1> 
                <LunchGroupForm />
                <button onClick={() => onClickCreate()}> Cancel </button>
                <GroupResults />
            </div>
        )
    }
    else 
        return (
        <div className='lunchGroups'>
        <h1>Lunch Groups</h1> 
        <button onClick={() => onClickCreate()} hidden={!currentUser.chef}> Create a New Group </button>
        <GroupSearchInput />
        <GroupResults />
        </div>    
    );
}
    


const mapStateToProps= state => {
    return {
        profileEdit: state.auth.profileEdit,
        currentUser: state.auth.currentUser,
        createLunchGroup: state.auth.createLunchGroup,
        groupResults: state.auth.groupResults,
    }
}
export default RequiresLogin()(connect(mapStateToProps)(LunchGroups))
