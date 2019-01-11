import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../../components/Input';
import InputTextArea from '../../components/InputTextArea';
import {updateProfile} from '../../modules/auth';
import './ProfileForm.css';

export class ProfileForm extends React.Component{
    onSubmit(values) {
        const {displayName, company, location, style, bio} = values; 
        const chefProfile = {displayName, company, location, style, bio} 
        console.log(chefProfile);
        return this.props.dispatch(updateProfile(chefProfile))
    }
    render(){
        return ( 
            <form  
                className='profile-form' 
                onSubmit={this.props.handleSubmit(values => 
                    this.onSubmit(values)
                )}>
                <label  htmlFor='displayName'>Name
                    <Field 
                        aria-label='displayName'
                        className='field-input' 
                        component={Input}
                        type='text'
                        name='displayName'
                    />                
                </label>
                <label  htmlFor='companyName'>Company Name
                    <Field 
                        aria-label='companyName'
                        component={Input}
                        type='text'
                        name='company'
                    />
                </label>
                <label  htmlFor='location'>Location
                    <Field 
                        aria-label='location'
                        component={Input}
                        type='text'
                        name='location'
                    />
                </label>
                <label  htmlFor='bio'> Bio
                    <Field 
                        aria-label='bio'
                        component={InputTextArea}
                        type='text'
                        name='bio'
                    /> 
                </label>
                 <label  htmlFor='style'>Style
                    <Field
                        aria-label='style'
                        component={Input}
                        type='text'
                        name='style'
                    />           
                </label>
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'profile',
    onSubmitFail: (errors, dispatch) => dispatch(focus('profile', Object.keys(errors)[0]))
})(ProfileForm);


