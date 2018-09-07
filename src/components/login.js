import React from 'react';

import '../stylesheets/login.css';

export default function Login(props) {
    return (
        <div className='login'>
            <form id = 'js-login-form'>
                <h1>Log in</h1>
                <div >
                    <label  for='inputUsername'>Username</label>
                    <input aria-label = 'username' name = 'username' type='username' id='inputUsername' placeholder='Username' required autofocus/>
                </div>
                <div>
                    <input type="text" autocomplete="username" hidden/>
                    <label for='inputPassword'>Password</label>
                    <input autocomplete= 'current-password'  aria-label='password' name = 'password' type='password' id='inputPassword'  placeholder='Password' required/>
                </div>
                <button type='submit'>Log in</button>
                <p>&copy; 2018</p>
            </form>
            <div id = 'js-signup-link'> Don't have an account? <a href = '/signup'> Sign up here</a></div>
            <div id = 'js-response-message'></div>   
        </div>
    )
}    