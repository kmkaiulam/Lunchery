import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../../components/Input';
import {editLunchGroup} from '../../modules/auth';
import './LunchGroupEditForm.css'
import {checkDate} from '../../utils/validators';

export class LunchGroupEditForm extends React.Component{
    onSubmitEdit(values) {
        const {lunchDate, lunchLocation, lunchTime, menu, cost, seatLimit} = values;
        const groupDetails = {lunchDate, lunchLocation, lunchTime, menu, cost, seatLimit}
        console.log(groupDetails);
        this.props.dispatch(editLunchGroup(groupDetails))
    }
    render(){
        return ( 
            <form  
                className='lunch-group-form' 
                onSubmit={this.props.handleSubmit(values => 
                    this.onSubmitEdit(values)
                )}>
                <label  htmlFor='lunchDate'>Date</label>
                <Field 
                    component={Input}
                    type='date'
                    name='lunchDate'
                    validate={checkDate}
                    
                />                
                <label  htmlFor='lunchLocation'>Location</label>
                <Field 
                    component={Input}
                    type='text'
                    name='lunchLocation'
                />
                <label  htmlFor='lunchTime'>Time</label>
                <Field 
                    component={Input}
                    type='time'
                    name='lunchTime'
                />
                <label  htmlFor='menu'>Menu</label>
                <Field 
                    component={Input}
                    type='textarea'
                    name='menu'
                />           
                 <label  htmlFor='cost'>Cost</label>
                <Field 
                    component={Input}
                    type='number'
                    name='cost'
                />             
                <label htmlFor='seatLimit'>Seat Limit</label>
                <Field 
                    component={Input}
                    type='number'
                    name='seatLimit'
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




export default (reduxForm({
    form: 'lunchGroupEdit',
    onSubmitFail: (errors, dispatch) =>  dispatch(focus('lunchGroupEdit', Object.keys(errors)[0])) 
})(LunchGroupEditForm));


