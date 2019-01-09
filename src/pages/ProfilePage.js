import React from 'react';
import Profile from './profilePage/Profile';
import ProfileForm from './profilePage/ProfileForm';
import ProfileImageForm from './profilePage/ProfileImageForm';
import {connect} from 'react-redux';
import {profileEditToggle, profileImageEditToggle, getLunchGroupResults} from '../modules/auth';
import {hasActiveGroups} from '../utils/common';
import RequiresLogin from './RequiresLogin';
import './ProfilePage.css';
import Loading from '../components/Loading';

export function ProfilePage(props) {
    let onClickEdit = () => {
        props.dispatch(profileEditToggle())
    }
    let onClickEditImage = () => {
        props.dispatch(profileImageEditToggle())
    }
    const {profileEdit , chefProfile, groupResults, currentUserId, profileImageEdit} = props
        if (!groupResults) {
            props.dispatch(getLunchGroupResults());
            return (
            <div className= 'loader'>
              <Loading type='spinningBubbles' color='black' />
           </div>
          )
        }
        if (chefProfile.displayName ===''){
            return (
                <div className='profilePage'> 
                    <div>Please Update your Chef Profile</div>
                    <ProfileForm />
                </div>
            )
        }
        if (profileEdit === false && profileImageEdit === false){
            return (
                <div className='profilePage'>
                    <Profile />
                    <button onClick={() => onClickEditImage()} disabled={hasActiveGroups(groupResults,currentUserId) === true}> Edit Profile Image</button>
                    <button onClick={() => onClickEdit()} disabled={hasActiveGroups(groupResults,currentUserId) === true}> Edit Profile </button>
                    <p hidden={hasActiveGroups(groupResults, currentUserId) === false}> Note: Cannot edit profile while having active groups</p>
                </div>
            )
        }
       if (profileEdit === true) {
            return (
                <div className='profilePage'>
                <div className='edit-column'>
                    <Profile /> 
                    <ProfileForm /> 
                </div>
                    <button className='cancel-button' onClick={() => onClickEdit()}> Cancel Edit</button>
                </div>
            )
        }
       else if (profileImageEdit === true) {
            return (
                <div className='profilePage'>
                <div className='edit-column'>
                    <Profile /> 
                    <div className='profile-image-form'>
                     <ProfileImageForm />
                     <button className='cancel-button' onClick={() => onClickEditImage()}> Cancel Edit</button>
                    </div>
                </div>
                   
                </div>
            )
        }
}

const mapStateToProps= state => {
    return {
        authToken: state.auth.authToken,
        currentUserId: state.auth.currentUserId,
        chefProfile:state.auth.currentUser.chefProfile,
        profileEdit: state.auth.profileEdit,
        profileImageEdit: state.auth.profileImageEdit,
        groupResults: state.auth.groupResults
    }
}
export default RequiresLogin()(connect(mapStateToProps)(ProfilePage))