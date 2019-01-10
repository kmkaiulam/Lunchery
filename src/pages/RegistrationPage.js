import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import SignupForm from './registrationPage/SignupForm';
import './RegistrationPage.css';
export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to='/dashboard'/>;
    }
    return (
        <div className="register">
            <h1> Lunchery Registration </h1>
            <SignupForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
