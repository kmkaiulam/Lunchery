import React from 'react';
import Profile from './profilePage/Profile';
import ProfileForm from './profilePage/ProfileForm';
import ProfileImageForm from './profilePage/ProfileImageForm';
import {connect} from 'react-redux';
import {profileEditToggle} from '../modules/auth';
import RequiresLogin from './RequiresLogin';
import './ProfilePage.css';
import Loading from '../components/Loading';

export function ProfilePage(props) {
    let onClickEdit = () => {
        props.dispatch(profileEditToggle())
    }
    const {profileEdit, chefProfile, loading} = props
        if(loading === true ) {
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
                    <button onClick={() => onClickEdit()}> Edit Profile </button>
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
        loading: state.auth.loading,
        profileEdit: state.auth.profileEdit,
        chefProfile: state.auth.currentUser.chefProfile,
        profilePicEdit: state.auth.profilePicEdit
    }
}
export default RequiresLogin()(connect(mapStateToProps)(ProfilePage))