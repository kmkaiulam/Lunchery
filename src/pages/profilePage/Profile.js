import React from 'react'
import './Profile.css';
import {connect} from 'react-redux';
import {getUserInfo} from '../../modules/auth';
export function Profile(props) {
    console.log(props.profileUpToDate);
    if (props.profileUpToDate === false) {
        console.log('Getting User Info')
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
                <h2>Style</h2>
                <div className='style'>
                    {props.userInfo.chefProfile.style}  
                </div>
                <div className='availability'> Daily Limit
                     <div> Monday: {props.availability.mondayLimit}</div>
                     <div> Tuesday: {props.availability.tuesdayLimit}</div>
                     <div> Wednesday: {props.availability.wednesdayLimit}</div>
                     <div> Thursday: {props.availability.thursdayLimit}</div>
                     <div> Friday: {props.availability.fridayLimit}</div>
                </div>
            </div>
        )
    };
};

const mapStateToProps= state => {
    return {
        authToken:state.auth.authToken,
        userInfo: state.auth.currentUser,
        profileUpToDate: state.auth.profileUpToDate,
        availability: state.auth.currentUser.availability
    }
}

export default connect(mapStateToProps)(Profile)