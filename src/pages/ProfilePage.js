import React from 'react';
import Profile from './profilePage/Profile';
import ProfileForm from './profilePage/ProfileForm';
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
                   
                </div>
            )
        }
    }
const mapStateToProps= state => {
    console.log(state)
    return {
        profileEdit: state.auth.profileEdit
    }
}
export default RequiresLogin()(connect(mapStateToProps)(ProfilePage))