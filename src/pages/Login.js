import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import LoginForm from './login/LoginForm';
import Loading from '../components/Loading';
import './Login.css'
export function Login(props) {
    // If we are logged in redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to='/dashboard'/>;
    }

    if(props.loading && !props.error) {
        return ( 
            <div className= 'loader'>
              <Loading type='spinningBubbles' color='black' />
            </div>
        )
    } 
    return (
        <div className='login'>
            <h1>Log into Lunchery</h1>
            <LoginForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    loading: state.auth.loading,
    error: state.auth.error,
});

export default connect(mapStateToProps)(Login);
