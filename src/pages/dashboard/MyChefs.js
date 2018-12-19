import React from 'react';

import {connect} from 'react-redux';
import {currentMembersCheck, groupCreatorCheck, membersPresent, uniqueEntries} from '../../utils/common';
import './MyGroups.css';



export class MyChefs extends React.Component {
    render(){
        let creators = this.props.groupResults.filter(group => membersPresent(group) === true && currentMembersCheck(group, this.props.currentUser._id) === true).map(group => group.createdBy._id)
        let myChefsArray = this.props.groupResults.filter(group => membersPresent(group) === true && currentMembersCheck(group, this.props.currentUser._id) === true)
        let uniqueCreators= [...new Set(creators)]   
        let finalObject = [{}]
      uniqueEntries(uniqueCreators, myChefsArray, finalObject);
     console.log(finalObject); 
     console.log(this.props.groupResults);
         let myChefs = finalObject.map((group, index) =>
                <div key={index} className='myGroups'>
                     <div> Chef {group.createdBy.chefProfile.displayName}</div>
                     <div> {group.createdBy.chefProfile.company} in {group.createdBy.chefProfile.location} </div>
                     <div className='chef-portrait'> {group.createdBy.chefProfile.picture}> </div>
                     <h2> Bio</h2>
                     <div className='bio'> {group.createdBy.chefProfile.bio}</div> 
                     <div> Style: {group.createdBy.chefProfile.style}</div>
                </div> 
            )
               
           return (
               <div className='myChefs'>
               <h2> My Chefs </h2>
                    {myChefs} 
               </div>
           ) 
    }   
}
const mapStateToProps= state => ({
    loading: state.auth.loading,
    groupResults: state.auth.groupResults,
    myGroups: state.auth.myGroups,
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(MyChefs);
