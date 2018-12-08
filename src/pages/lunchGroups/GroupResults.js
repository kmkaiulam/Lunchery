import React from 'react';
import {connect} from 'react-redux';
import './GroupResults.css';

//write function that filters the results beforehand
//call through mapStateToProps 
//if searchTerm !== '' results=this.props.groupResults.filter(this.props.searchTerm).map
export class GroupResults  extends React.Component{
    render(){
        let results;
        if (this.props.chefResults == null || this.props.chefsLoaded === false)
        return (
            <div> Loading.... work in progress</div>
        )
        else
         results= this.props.chefResults.map((chefResult, index) => 
            <div key={index} className='chefResult'>
                <div> Chef {chefResult.chefProfile.displayName}</div>
                <div> Company: {chefResult.chefProfile.company} in {chefResult.chefProfile.location} </div>
                <div> Style: {chefResult.chefProfile.style} </div>
            </div>
        )
        return (
            <div className='chefResults'>
                {results}
            </div>
        )
        
    }
}



const mapStateToProps = (state, props) => {
    console.log(state)
    return {
        authToken:state.auth.authToken,
        chefsLoaded: state.auth.chefsLoaded,
        chefResults:state.auth.chefResults,
        groupResults: state.auth.groupResults
        //add filter term here
    }
}

export default connect(mapStateToProps)(GroupResults);