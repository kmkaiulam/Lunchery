import React from 'react'
import './Profile.css';
import {AMZ_S3_URL} from '../../config';
import {connect} from 'react-redux';
import {getUserInfo} from '../../modules/auth';

export function Profile(props) {
    const {authToken, profileUpToDate, chefProfile } = props
    if (profileUpToDate === false) {
        props.dispatch(getUserInfo(authToken));
        return <div>Loading...</div>
    }
    else {
        return (
            <div className='profile'>
                <div className='name'>
                    <h1>{chefProfile.displayName}</h1>   
                </div>
                <h2>{chefProfile.company} in {chefProfile.location}</h2>   
                <div>
                    <img className='profileImage' src={AMZ_S3_URL+chefProfile.profileImage} alt='current chef'></img>
                </div> 
                <div className='profile-bio'>
                    <div>{chefProfile.bio}</div>   
                </div> 
                <h2>Style: {chefProfile.style}</h2>
            </div>
        )
    }
}

const mapStateToProps= state => {
    return {
        authToken:state.auth.authToken,
        currentUser: state.auth.currentUser,
        chefProfile: state.auth.currentUser.chefProfile,
        profileUpToDate: state.auth.profileUpToDate,
    }
}

export default connect(mapStateToProps)(Profile)