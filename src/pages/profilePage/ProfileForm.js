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
                <label  htmlFor='displayName'>Name</label>
                <Field 
                    component={Input}
                    type='text'
                    name='displayName'
                />                
                <label  htmlFor='companyName'>Company Name</label>
                <Field 
                    component={Input}
                    type='text'
                    name='company'
                />
                <label  htmlFor='location'>Location</label>
                <Field 
                    component={Input}
                    type='text'
                    name='location'
                />
                <label  htmlFor='bio'> Bio</label>
                <Field 
                    component={InputTextArea}
                    type='text'
                    name='bio'
                /> 
                 <label  htmlFor='style'>Style</label>
                <Field 
                    component={Input}
                    type='text'
                    name='style'
                />           
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


