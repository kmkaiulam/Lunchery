import React from 'react';
import Profile from './profilePage/Profile';
import ProfileForm from './profilePage/ProfileForm';
import ProfilePicForm from './profilePage/ProfilePicForm';
import {connect} from 'react-redux';
import {profileEdit, profileCancelEdit} from '../modules/auth';
import RequiresLogin from './RequiresLogin';
import './ProfilePage.css';

export function ProfilePage(props) {
    let onClickEdit = () => {
        props.dispatch(profileEdit())
    }
    let onClickCancel = () => {
        props.dispatch(profileCancelEdit())
    }
        if (props.currentUser.chefProfile.displayName ===''){
            return (
                <div className='profilePage'> 
                    <div>Please Update your Chef Profile</div>
                    <ProfileForm />
                </div>
            )
        }
        if (props.profileEdit === false){
            return (
                <div className='profilePage'>
                    <Profile />
                    <button onClick={() => onClickEdit()}> Edit Profile </button>
                </div>
            )
        }
        else if (props.profileEdit === true) {
            return (
                <div className='profilePage'>
                    <Profile /> 
                    <button onClick={() => onClickCancel()}> Cancel Edit</button>
                    <ProfileForm /> 
                    <ProfilePicForm />
                </div>
            )
        }
    }
const mapStateToProps= state => {
    return {
        profileEdit: state.auth.profileEdit,
        currentUser: state.auth.currentUser,
        profilePicEdit: state.auth.profilePicEdit
    }
}
export default RequiresLogin()(connect(mapStateToProps)(ProfilePage))