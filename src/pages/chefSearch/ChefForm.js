import React from 'react';
import './ChefForm.css';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../../components/Input';
//do a filter instead - display all registered chefs - then according to what the user inputs

export class ChefForm extends React.Component{
    onSubmit(values) {
        const {company, style, monday, tuesday, wednesday, thursday, friday} = values;
        const chefQuery = {company, style, monday, tuesday, wednesday, thursday, friday}
        console.log(chefQuery);
        return //this.props.dispatch(updateProfile(values))
    }
        render(){
            return ( 
                <form  
                    className='chefQuery' 
                    onSubmit={this.props.handleSubmit(values => 
                        this.onSubmit(values)
                    )}>
                    <label  htmlFor='companyName'>Company Name</label>
                    <Field 
                        component={Input}
                        type='text'
                        name='company'
                    />
                     <label  htmlFor='style'>Style</label>
                    <Field 
                        component={Input}
                        type='text'
                        name='style'
                    />                      
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
                    <button
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        Search
                    </button>
                </form>
            )
        }
}
    
    export default reduxForm({
        form: 'chef',
        onSubmitFail: (errors, dispatch) => console.log(errors) //dispatch(focus('profile', Object.keys(errors)[0]))
    })(ChefForm)
