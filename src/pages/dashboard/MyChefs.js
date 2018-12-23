import React from 'react';
import {AMZ_S3_URL} from '../../config';
import {connect} from 'react-redux';
import {filterUserGroups, uniqueEntries} from '../../utils/common';
import './MyChefs.css';

export class MyChefs extends React.Component {
    render(){
        const {groupResults, currentUser} = this.props
        let creatorsObj = filterUserGroups(groupResults, currentUser.id)
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
                
                    <h3> Chef {group.createdBy.chefProfile.displayName}</h3>
                    <img className='chef-img' src={AMZ_S3_URL+group.createdBy.chefProfile.profileImage} alt='chef portrait'></img>
                    <h3> Bio</h3>
                    <div className='bio'> {group.createdBy.chefProfile.bio}</div> 
                    
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
    currentUser: state.auth.currentUser,
    chefProfile: state.auth.currentUser.chefProfile,
});

export default connect(mapStateToProps)(MyChefs);
