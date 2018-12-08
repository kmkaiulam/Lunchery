import React from 'react';
import './GroupSearchForm.css';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../../components/Input';

//doesn't need to be a live search yet -- dispatch an action that accepts a defines a searchTerm state.auth.searchTerm = submission
//do a filter instead - display all registered chefs - then according to what the user inputs


export class GroupSearchForm extends React.Component{
    onChange(values) {
        const {company} = values;
        const groupQuery = {company}
        console.log(groupQuery);
        return //this.props.dispatch(updateProfile(values))
    }
        render(){
            return ( 
                <form  
                    className='groupQuery' 
                    onSubmit={this.props.handleSubmit(values => 
                        this.onSubmit(values)
                    )}>
                    <label  htmlFor='companyName'>Company Name</label>
                    <Field 
                        component={Input}
                        type='text'
                        name='company'
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
        form: 'groupsearch',
        onSubmitFail: (errors, dispatch) => dispatch(focus('profile', Object.keys(errors)[0]))
    })(GroupSearchForm)
