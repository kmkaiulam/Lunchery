import React from 'react'
import './Profile.css';
import {connect} from 'react-redux';
import {getUserInfo} from '../../modules/auth';
export function Profile(props) {
    if (props.profileUpToDate === false) {
        props.dispatch(getUserInfo(props.authToken));
        return <div>Loading...</div>
    }
    else {
        return (
            <div className='profile'>
                <div className='name'>
                    <h1>{props.userInfo.chefProfile.displayName}</h1>   
                </div>
                <div className='company'>
                    <h2>{props.userInfo.chefProfile.company} in {props.userInfo.chefProfile.location}</h2>   
                </div>
                 <div className='picture'>
                    <div>{props.userInfo.chefProfile.picture}</div> 
                </div> 
                <div className='bio'>
                    <div>{props.userInfo.chefProfile.bio}</div>   
                </div> 
                <h2>Style</h2>
                <div className='style'>
                    {props.userInfo.chefProfile.style}  
                </div>
            </div>
        )
    }
}

const mapStateToProps= state => {
    return {
        authToken:state.auth.authToken,
        userInfo: state.auth.currentUser,
        profileUpToDate: state.auth.profileUpToDate,
    }
}

export default connect(mapStateToProps)(Profile)