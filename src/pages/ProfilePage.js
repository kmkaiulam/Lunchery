import React from 'react';
import Profile from './profilePage/Profile';
import ProfileForm from './profilePage/ProfileForm';
import ProfileImageForm from './profilePage/ProfileImageForm';
import {connect} from 'react-redux';
import {profileEditToggle, getLunchGroupResults, getUserInfo} from '../modules/auth';
import {hasActiveGroups} from '../utils/common';
import RequiresLogin from './RequiresLogin';
import './ProfilePage.css';
import Loading from '../components/Loading';

export function ProfilePage(props) {
    let onClickEdit = () => {
        props.dispatch(profileEditToggle())
    }
    const {profileEdit , chefProfile, groupResults, currentUserId} = props
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
        if (profileEdit === false){
            return (
                <div className='profilePage'>
                    <Profile />
                    <button onClick={() => onClickEdit()} disabled={hasActiveGroups(groupResults,currentUserId) === true}> Edit Profile </button>
                    <p hidden={hasActiveGroups(groupResults, currentUserId) === false}> Note: Cannot edit profile while having active groups</p>
                </div>
            )
        }
        else if (profileEdit === true) {
            return (
                <div className='profilePage'>
                <div className='edit-column'>
                    <Profile /> 
                    <ProfileForm /> 
                </div>
                    <button onClick={() => onClickEdit()}> Cancel Edit</button>
                    <ProfileImageForm />
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
        groupResults: state.auth.groupResults
    }
}
export default RequiresLogin()(connect(mapStateToProps)(ProfilePage))