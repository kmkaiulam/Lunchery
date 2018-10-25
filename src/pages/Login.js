import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import LoginForm from './login/LoginForm';

import './Login.css'
export function Login(props) {
    // If we are logged in redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to='/dashboard'/>;
    }
    return (
        <div className='login'>
            <h2>Log into Lunchery</h2>
            <LoginForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Login);
