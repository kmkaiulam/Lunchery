import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux'
import './SignupForm.css';
export class SignupForm extends React.Component {
    onSubmit(values) {
        const {firstName, lastName, username, password, chef} = values;
        const user = {username, password, firstName, lastName, chef}
        this.props.dispatch(Signup(username, password))
    }
    render(){
        if(this.props.isSigningUp) {
            return <div>Signing up</div>
        }
        return ( 
            <form 
                className='signup-form' 
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}> 
                <div>
                    <label htmlFor='firstName'>First Name</label>
                    <Field name='firstName' component='input' type='text' />
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name</label>
                    <Field name='lastName' component='input' type='text' />
                </div>
                <div>
                    <label htmlFor='username'>User Name</label>
                    <Field name='username' component='input' type='text' />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <Field name='password' component='input' type='text' />
                </div>
                <div>
                    <label htmlFor='chef'>Chef?</label>
                    <Field name='chef' component='check' type='text' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({ isLoggingIn: state.auth.isLoggingIn })

export default connect(mapStateToProps)(reduxForm({
    form: 'login'
}) (LoginForm))


