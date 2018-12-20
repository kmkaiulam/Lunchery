import React from 'react';

import {connect} from 'react-redux';
import {filterUserGroups, uniqueEntries} from '../../utils/common';
import './MyGroups.css';



export class MyChefs extends React.Component {
    render(){
        let creatorsObj = filterUserGroups(this.props.groupResults, this.props.currentUser.id)
        let creators = [...new Set(creatorsObj.map(group => group.createdBy._id))]  
        let myChefObject= uniqueEntries(creators, creatorsObj);
    if (creatorsObj.length <1 ){
        return (
            <div className='myChefs'>
               <h2> My Chefs </h2>
            </div>
        )
    }    
    else{
         let myChefs = myChefObject.map((group, index) =>
            <div key={index} className='my-chef'>
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
    )};   
    }
}
const mapStateToProps= state => ({
    loading: state.auth.loading,
    groupResults: state.auth.groupResults,
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(MyChefs);
