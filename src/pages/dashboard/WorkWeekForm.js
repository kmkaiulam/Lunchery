import React from 'react';
import './WorkWeekForm.css';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../../components/Input';
import Select from '../../components/Select';

export class WorkWeekForm extends React.Component{
    onSubmit(values) {
        const {mondayChef, tuesdayChef, wednesdayChef, thursdayChef, fridayChef} = values;
        const workWeekEdit = {mondayChef, tuesdayChef, wednesdayChef, thursdayChef, fridayChef};
        console.log(workWeekEdit);
        return //this.props.dispatch(updateProfile(values))
        
    }
        render(){
            return ( 
                <form  
                    className='workWeekForm' 
                    onSubmit={this.props.handleSubmit(values => 
                        this.onSubmit(values)
                    )}>
                    <label  htmlFor='mondayChef'>Monday Chef</label>
                    <Field 
                        name='mondayChef'
                        component={Select}
                        options= {{red: 'red', blue: 'blue', green:'green'}}
                       
                    />
                     <label  htmlFor='tuesdayChef'>Tuesday Chef</label>
                    <Field 
                        name='tuesdayChef'
                        component={Select}
                        options=  {{red: 'red', blue: 'blue', green:'green'}}
                       
                    />
                     <label  htmlFor='wednesdayChef'>Wednesday Chef</label>
                    <Field 
                        component={Select}
                        options=  {{red: 'red', blue: 'blue', green:'green'}}
                        name='wednesdayChef'
                    />
                     <label  htmlFor='thursdayChef'>Thursday Chef</label>
                    <Field 
                        component={Select}
                        options=  {{red: 'red', blue: 'blue', green:'green'}}
                        name='thursdayChef'
                    />
                     <label  htmlFor='fridayChef'>Friday Chef</label>
                    <Field 
                        component={Select}
                        options=  {{red: 'red', blue: 'blue', green:'green'}}
                        name='fridayChef'
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
        form: 'workWeek',
        onSubmitFail: (errors, dispatch) => console.log(errors) //dispatch(focus('profile', Object.keys(errors)[0]))
    })(WorkWeekForm)
