import React from 'react';
import {connect} from 'react-redux';
import {filterUserGroups, convertDate, sortByDate} from '../../utils/common';
import './MyGroups.css';
import { leaveLunchGroup} from '../../modules/auth';

export class MyGroups extends React.Component {
    onClickLeave= (groupId) => {
        this.props.dispatch(leaveLunchGroup(groupId))
    }
    render(){
        let myGroupsObj = filterUserGroups(this.props.groupResults, this.props.currentUser.id)
         let myGroups = myGroupsObj.sort((a,b) => sortByDate(a,b)).map((group, index) => 
                <div key={index} className='my-group'>
                    <div> Company: {group.createdBy.chefProfile.company} in {group.createdBy.chefProfile.location} </div>
                    <div> Date: {convertDate(group.lunchDate)} @ {group.lunchTime}</div>
                    <div> Location: {group.lunchLocation}</div>
                    <div> Chef {group.createdBy.chefProfile.displayName}</div>
                    <div> Menu: {group.menu} </div>
                    <div> Cost: ${group.cost} </div> 
                    <button onClick={() => this.onClickLeave(group._id)}> Leave this Group</button>
                </div>
        )
        return (
                <div>
                    <h2> My Groups </h2>
                    <div className ='my-groups'>
                        {myGroups}
                    </div> 
               </div>
        ) 
    }
}   









const mapStateToProps=state => ({
    loading: state.auth.loading,
    groupResults: state.auth.groupResults,
    myGroups: state.auth.myGroups,
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(MyGroups);