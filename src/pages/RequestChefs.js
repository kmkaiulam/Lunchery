import React from 'react';
import {connect} from 'react-redux';
import {getChefInfo} from '../modules/auth';

export default () => Component => {
    function RequestChefs(props) {
        if (props.chefsLoaded !== true) {
            console.log('Getting Chef Results')
            props.dispatch(getChefInfo(props.authToken));
        }
        const {...passThroughProps} = props;
        return <Component {...passThroughProps} />;
    }

    const displayName = Component.displayName || Component.name || 'Component';
    RequestChefs.displayName = `RequestsChefs(${displayName})`;

    const mapStateToProps = (state, props) => ({
        authToken: state.auth.authToken,
        chefsLoaded: state.auth.chefsLoaded,
        chefResults: state.auth.chefResults,
    });

    return connect(mapStateToProps)(RequestChefs);
};

        
        

//is there a quick way to check if this function is still being used without needing to look through my code?
//Have lot of superfluous code that I didn't get sort through and get rid of when I rethought through my app