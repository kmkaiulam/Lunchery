import React from 'react';

import './Signup.css';

export default function Signup(props) {
    return (
        <div className='signup'>
            <form id = 'js-signup-form'>
                <h1>Signup</h1>
                <div>
                    <label  for='inputFirstName'>First Name</label>
                    <input aria-label = 'firstName' name = 'firstName' type='firstName' id='inputFirstName' placeholder='First Name' required/>
                </div>
                <div>
                    <label  for='inputLastName'>Last Name</label>
                    <input aria-label = 'lastName' name = 'lastName' type='lastName' id='inputLastName' placeholder='Last Name' required />
                </div>
                <div>
                    <label  for='inputUsername'>Username</label>
                    <input autocomplete='username' aria-label = 'username' name = 'username' type='username' id='inputUsername' placeholder='Username' required autofocus />
                </div>
                <div>
                    <label for='inputPassword'>Password</label>
                    <input autocomplete= 'current-password'  aria-label='password' name = 'password' type='password' id='inputPassword'  placeholder='Password' required />
                </div>
                <div>
                    <label for='chef?'>Chef Account? </label>
                    <input type='checkbox' id='chef' name='chef?' value="Chef"/>
                </div>
                <button type='submit'>Sign up</button>
                <p>&copy; 2018</p>
            </form>
            <div id = 'js-signup-link'> Already have an account? <a href = '/login'> Log in here</a></div>
            <div id = 'js-response-message'></div>     
        </div>  
    )
}
