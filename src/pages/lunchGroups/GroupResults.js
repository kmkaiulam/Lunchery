import React from 'react';
import {connect} from 'react-redux';
import {joinLunchGroup} from '../../modules/auth'
import {convertDate, seatsAvailable, seatVacancyCheck, currentMembersCheck, groupCreatorCheck, sortByDate} from '../../utils/common';
import './GroupResults.css';


//How can i sort groups by the event date? An array of objects that needs to sorted by lunchDate

export class GroupResults  extends React.Component{
     onClickJoin = (groupId) => {
         console.log(groupId)
         this.props.dispatch(joinLunchGroup(groupId))
    }  
    //style the loader 
    render(){
            let results= this.props.groupResults.filter(group => group.createdBy.chefProfile.company.toLowerCase().includes(this.props.searchTerm.toLowerCase())).sort((a,b) => sortByDate( a, b)).map((group, index) => 
                <div key={index} className='groupResult card col-9'>
                    <div> Company: {group.createdBy.chefProfile.company} in {group.createdBy.chefProfile.location} </div>
                    <div> Date: {convertDate(group.lunchDate)}</div>
                    <div> Location: {group.lunchLocation} @ {group.lunchTime}</div>
                    <div> Chef {group.createdBy.chefProfile.displayName}</div>
                    <div> Menu: {group.menu} </div>
                    <div> Cost: ${group.cost} </div> 
                    <div> Seats Available: {seatsAvailable(group)}</div>
                    <div hidden={seatVacancyCheck(group) === true}>
                        <div className= 'noVacancy'>FULL</div> 
                    </div>
                    <div hidden={groupCreatorCheck(group, this.props.currentUser.id) === false }>
                        <div className= 'noVacancy'> You Own this Group</div> 
                    </div>
                    <div hidden={currentMembersCheck(group.members, this.props.currentUser.id) === false}>
                        <div className= 'noVacancy'> You are already a member</div> 
                    </div> 
                    <button onClick={() => this.onClickJoin(group._id)} disabled={seatVacancyCheck(group) === false || currentMembersCheck(group.members, this.props.currentUser.id) === true || groupCreatorCheck(group, this.props.currentUser.id) === true }  > Join this Group</button>
                </div>
            )
        
        return (
                <div className='groupResults col-12'>
                    {results}
                </div>
        )    
    }
    
}




const mapStateToProps = (state, props) => {
    console.log(state)
    return {
        loading: state.auth.loading,
        authToken:state.auth.authToken,
        currentUser:state.auth.currentUser,
        groupResults: state.auth.groupResults,
        searchTerm: state.auth.searchTerm
    }
}

export default connect(mapStateToProps)(GroupResults);