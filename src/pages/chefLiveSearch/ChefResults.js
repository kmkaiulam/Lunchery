import React from 'react';
import {connect} from 'react-redux';
import './ChefResults.css';

//write function that filters the results beforehand and call through mapStateToProps
export class ChefResults  extends React.Component{
    render(){
        let results;
        if (this.props.chefResults == null || this.props.chefsLoaded === false)
        return (
            <div> Loading...</div>
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
        chefResults:state.auth.chefResults
        //add filter term here
    }
}

export default connect(mapStateToProps)(ChefResults);