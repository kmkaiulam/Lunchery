import React from 'react'
import './ChefLiveSearch.css';
import {connect} from 'react-redux';
import ChefForm from './chefLiveSearch/ChefForm';
import ChefResults from './chefLiveSearch/ChefResults';
import RequestChefs from './RequestChefs';
import RequiresLogin from './RequiresLogin';
export class ChefLiveSearch extends React.Component {
    render(){
        return (
        <div className='live-search'>
            <ChefForm />
            <ChefResults />
        </div>
        );
    }
}
 


const mapStateToProps= (state,props) => {
    return {
        profileEdit: state.auth.profileEdit,
        chefResults: props.chefResults
    }
}
export default RequiresLogin()(RequestChefs()(connect(mapStateToProps)(ChefLiveSearch)))