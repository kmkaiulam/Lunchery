import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export default () => Component => {
    function RequiresLogin(props) {
        const {authenticating, loggedIn, error, ...passThroughProps} = props;
        if (authenticating) {
             return <div>Authenticating...</div>;
        }
        else if (!loggedIn || error) {
            return <Redirect to='/login' />;
        }
        return <Component {...passThroughProps} />;
    }

    const displayName = Component.displayName || Component.name || 'Component';
    RequiresLogin.displayName = `RequiresLogin(${displayName})`;

    const mapStateToProps = (state, props) => ({
        authenticating: state.auth.authLoading,
        loggedIn: state.auth.currentUser !== null,
        error: state.auth.error
    });

    return connect(mapStateToProps)(RequiresLogin);
};
