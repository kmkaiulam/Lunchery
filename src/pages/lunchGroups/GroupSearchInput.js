import React from 'react';
import {connect} from 'react-redux';
import {filterLunchGroups} from '../../modules/auth';

export class GroupSearchInput extends React.Component{
    handleChange(event) {
        return this.props.dispatch(filterLunchGroups(event.target.value))
    }
        render(){
            return ( 
                <div>
                   
                    <label htmlFor='companyName'> </label>
                    <input aria-label='company search' placeholder='Search by Company' onChange={ (e) => this.handleChange(e)}/>
                </div>
            )      
        }
}

export default connect()(GroupSearchInput);
