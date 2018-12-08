import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../../components/Input';
import {required, nonEmpty} from '../../validators';
import {createNewGroup} from '../../modules/auth';
import './LunchGroupForm.css'


export class LunchGroupForm extends React.Component{
    onSubmit(values) {
        const {lunchDate, lunchLocation, menu, cost, seatLimit} = values;
        const groupDetails = {lunchDate, lunchLocation, menu, cost, seatLimit}
        console.log(groupDetails);
        console.log(this.props);
        this.props.dispatch(createNewGroup(values))
    }
    render(){
        return ( 
            <form  
                className='lunch-group-form' 
                onSubmit={this.props.handleSubmit(values => 
                    this.onSubmit(values)
                )}>
                <label  htmlFor='lunchDate'>Date</label>
                <Field 
                    component={Input}
                    type='date'
                    name='lunchDate'
                    validate={[required, nonEmpty]}
                />                
                <label  htmlFor='lunchLocation'>Location</label>
                <Field 
                    component={Input}
                    type='text'
                    name='lunchLocation'
                    validate={[required, nonEmpty]}
                />
                 <label  htmlFor='menu'>Menu</label>
                <Field 
                    component={Input}
                    type='textarea'
                    name='menu'
                    validate={[required, nonEmpty]}
                />           
                 <label  htmlFor='cost'>Cost</label>
                <Field 
                    component={Input}
                    type='number'
                    name='cost'
                    validate={[required, nonEmpty]}
                />             
                <label htmlFor='seatLimit'>Seat Limit</label>
                <Field 
                    component={Input}
                    type='number'
                    name='seatLimit'
                    validate={[required, nonEmpty]}
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
    form: 'lunchGroup',
    onSubmitFail: (errors, dispatch) => console.log(errors) //dispatch(focus('lunchGroup', Object.keys(errors)[0]))
})(LunchGroupForm);


