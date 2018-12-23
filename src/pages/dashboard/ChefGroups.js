import React from 'react';
import {connect} from 'react-redux';
import {groupCreatorCheck, convertDate, membersPresent, sortByDate} from '../../utils/common';
import './MyGroups.css';
import LunchGroupEditForm from './LunchGroupEditForm';
import { deleteLunchGroup, editLunchGroupClick, editLunchGroupCancel } from '../../modules/auth';

export class ChefGroups extends React.Component {
    onClickDelete= groupId => {
        this.props.dispatch(deleteLunchGroup(groupId))
    }
    onClickEdit= groupId => {
        this.props.dispatch(editLunchGroupClick(groupId))
    } 
    onClickCancel= () => {
        this.props.dispatch(editLunchGroupCancel())
    }
    render(){
       
        const  {groupResults, currentUser, editGroupId, isChef }= this.props
        let chefGroups;
        if (!editGroupId) {
            chefGroups = groupResults.filter(group => groupCreatorCheck( group, currentUser.id) === true).sort((a,b) => sortByDate(a,b)).map((group, index) => 
                <div key={index} className='myGroups'>
                    <div> Date: {convertDate(group.lunchDate)} @ {group.lunchTime}</div>
                    <div> Location: {group.lunchLocation}</div>
                    <div> Menu: {group.menu} </div>
                    <div> Cost: ${group.cost} </div>
                    <div> Guests Dining: {group.members.length} </div>
                    <button disabled={membersPresent(group) === true} onClick={() => this.onClickEdit(group._id)}> Edit this Group</button> 
                    <button disabled={membersPresent(group) === true} onClick={() => this.onClickDelete(group._id)}> Delete this Group</button>
                </div>
            )
           return (
                <div hidden={isChef === false} className='chefsGroups'>
                    <h2> Chef's Groups </h2>
                    {chefGroups}
               </div>
           ) 
        }

        if (editGroupId) {

            chefGroups = groupResults.sort((a,b) => sortByDate(a,b)).map((group, index) => {
            <div key={index} hidden={group._id !== editGroupId} className='myGroups'>
                    <div> Date: {convertDate(group.lunchDate)}</div>
                    <div> Location: {group.lunchLocation} @ {group.lunchTime}</div>
                    <div> Menu: {group.menu} </div>
                    <div> Cost: ${group.cost} </div> 
                    <div> Seat Limit: ${group.seatLimit}</div>
                    <div> EDITING THIS GROUP</div>
            </div>
            })
       return (
            <div hidden={ isChef=== false} className='chefsGroups'>
                <h2> Chef's Groups </h2>
                <div className= 'two-column'>
                    {chefGroups}
                    <LunchGroupEditForm />
                </div>
                <button onClick={() => this.onClickCancel()}> Cancel Edit</button> 
           </div>
       )}
    }  
}

const mapStateToProps=state => ({
    loading: state.auth.loading,
    groupResults: state.auth.groupResults,
    currentUser: state.auth.currentUser,
    isChef: state.auth.currentUser.chef,
    editGroupId: state.auth.editGroupId
});

export default connect(mapStateToProps)(ChefGroups);

