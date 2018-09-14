import React from 'react';
import {Field, reduxForm} from 'redux-form';
import login from '../modules/auth';
import { connect } from 'react-redux'
import './LoginForm.css';
export class LoginForm extends React.Component {
    onSubmit(values) {
        const {username, password} = values;
        const user = {username, password}
        this.props.dispatch(login(username, password))
    }
    render(){
        if(this.props.isLoggingIn) {
            return <div>Logging in</div>
        }
        return ( 
            <form 
                className='login-form' 
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}> 
                <div>
                    <label htmlFor='username'>User Name</label>
                    <Field name='username' component='input' type='text' />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <Field name='password' component='input' type='text' />
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


