import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../../components/Input';
import {updateProfile} from '../../modules/auth';
import './ProfileForm.css';

export class ProfileForm extends React.Component{
    onSubmit(values) {
        const {displayName, company, location, style, picture, monday, tuesday, wednesday, thursday, friday,  mondayLimit, tuesdayLimit, wednesdayLimit, thursdayLimit, fridayLimit, signatureDish} = values;
        const chefProfile = {displayName, company, location, style, picture, monday, tuesday, wednesday, thursday, friday,  mondayLimit, tuesdayLimit, wednesdayLimit, thursdayLimit, fridayLimit, signatureDish}
        console.log(chefProfile);
        return this.props.dispatch(updateProfile(values))
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
                 <label  htmlFor='style'>Style</label>
                <Field 
                    component={Input}
                    type='text'
                    name='style'
                />           
                 <label  htmlFor='picture'>Picture</label>
                <Field 
                    component={Input}
                    type='text'
                    name='picture'
                />       
                <fieldset> Availability          
                 <label htmlFor='monday'>Monday</label>
                <Field 
                    component={Input}
                    type='checkbox'
                    name='monday'
                />                  
                  <label htmlFor='tuesday'>Tuesday</label>
                <Field 
                    component={Input}
                    type='checkbox'
                    name='tuesday'
                />                 
                  <label htmlFor='wednesday'>Wednesday</label>
                <Field 
                    component={Input}
                    type='checkbox'
                    name='wednesday'
                />                 
                  <label htmlFor='thursday'>Thursday</label>
                <Field 
                    component={Input}
                    type='checkbox'
                    name='thursday'
                />                 
                  <label htmlFor='friday'>Friday</label>
                <Field 
                    component={Input}
                    type='checkbox'
                    name='friday'
                />                 
                  <label htmlFor='mondayLimit'>Monday Limit</label>
                <Field 
                    component={Input}
                    type='number'
                    name='mondayLimit'
                />                       
                  <label htmlFor='tuesdayLimit'>Tuesday Limit</label>
                <Field 
                    component={Input}
                    type='number'
                    name='tuesdayLimit'
                />                      
                  <label htmlFor='wednesdayLimit'>Wednesday Limit</label>
                <Field 
                    component={Input}
                    type='number'
                    name='wednesdayLimit'
                />                 
                  <label htmlFor='thursdayLimit'>Thursday Limit</label>
                <Field 
                    component={Input}
                    type='number'
                    name='thursdayLimit'
                />                 
                  <label htmlFor='fridayLimit'>Friday Limit</label>
                <Field 
                    component={Input}
                    type='number'
                    min='0'
                    max='10'
                    name='fridayLimit'
                />                           
                </fieldset>
                <label htmlFor='signatureDish'>Signature Dish</label>
                <Field 
                    component={Input}
                    type='text'
                    name='signatureDish'
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


