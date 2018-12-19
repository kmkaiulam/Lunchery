import React from 'react';
import './SignupForm.css';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../../modules/users';
import {login} from '../../modules/auth';
import Input from '../../components/Input';
import {required, nonEmpty, matches, length, isTrimmed} from '../../utils/validators';
const passwordLength= length({min:6, max: 10});
const matchesPassword = matches('password');



export class SignupForm extends React.Component {
    onSubmit(values) {
        const {firstName, lastName, username, password, chef} = values;
        const user = {username, password, firstName, lastName, chef}
        console.log(user);
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }
    render(){
        return ( 
            <form 
                className='signup-form' 
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}> 
                 <label htmlFor='firstName'>First name</label>
                <Field 
                    component={Input} 
                    type='text' 
                    name='firstName'
                    validate={required} 
                />
                <label htmlFor='lastName'>Last name</label>
                <Field 
                    component={Input} 
                    type='text' 
                    name='lastName'  
                    validate={required}
                />
                <label htmlFor='username'>User Name</label>
                <Field 
                     component={Input} 
                     type='text' 
                     name='username'
                     validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor='password'>Password</label>
                <Field 
                    component={Input} 
                    type='password'
                    name='password'  
                    validate={[required, isTrimmed, passwordLength]}
                />
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <label htmlFor='chef'>Chef Account?</label>
                <Field 
                    component={Input} 
                    type='checkbox' 
                    name='chef' />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'signup',
    onSubmitFail: (errors, dispatch) => dispatch(focus('signup', Object.keys(errors)[0]))
})(SignupForm);


