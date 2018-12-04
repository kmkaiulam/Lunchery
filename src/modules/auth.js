// ----IMPORTS----
import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from '../utils/error';
import {saveAuthToken, clearAuthToken} from '../utils/auth';

// ----ACTIONS----
//AUTHORIZATION
export const SET_AUTH_TOKEN = 'app/auth/SET_AUTH_TOKEN';
export const CLEAR_AUTH = 'app/auth/CLEAR_AUTH';
export const AUTH_REQUEST = 'app/auth/AUTH_REQUEST';
export const AUTH_SUCCESS = 'app/auth/AUTH_SUCCESS';
export const AUTH_ERROR = 'app/auth/AUTH_ERROR';
//PROFILE
export const PROFILE_LOAD = 'app/auth/PROFILE_LOAD';
export const PROFILE_EDIT_CLICK = 'app/auth/PROFILE_EDIT_CLICK';
export const PROFILE_EDIT_CANCEL = 'app/auth/PROFILE_EDIT_CANCEL';
export const PROFILE_UPDATE_REQUEST = 'app/auth/PROFILE_UPDATE_REQUEST';
export const PROFILE_SUCCESS = 'app/auth/PROFILE_SUCCESS';
export const PROFILE_ERROR = 'app/auth/PROFILE_ERROR';
//CHEF
export const CHEF_LOAD = 'app/auth/CHEF_LOAD';
export const CHEF_FILTER = 'app/auth/CHEF_FILTER';
export const CHEF_REQUEST = 'app/auth/CHEF_REQUEST';
export const CHEF_SUCCESS = 'app/auth/CHEF_SUCCESS';
export const CHEF_ERROR = 'app/auth/CHEF_ERROR';
//WORKWEEK
export const WORKWEEK_LOAD = 'app/auth/WORKWEEK_LOAD';
export const WORKWEEK_EDIT_CLICK= 'app/auth/WORKWEEK_EDIT_CLICK';
export const WORKWEEK_EDIT_CANCEL = 'app/auth/WORKWEEK_EDIT_CANCEL';
export const WORKWEEK_UPDATE_REQUEST = 'app/auth/WORKWEEK_UPDATE_REQUEST';
export const WORKWEEK_SUCESS = 'app/auth/WORKWEEK_SUCCESS';
export const WORKWEEK_ERROR = 'app/auth/WORKWEEK_ERROR';
// ----ACTION CREATORS----
//AUTHORIZATION
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
    
});

export const authError = error => ({
    type: AUTH_ERROR,
    error
});

//PROFILE
export const profileLoad = () => ({
    type: PROFILE_LOAD
});

export const profileEditClick = () => ({
    type: PROFILE_EDIT_CLICK
});

export const profileEditCancel = () => ({
    type: PROFILE_EDIT_CANCEL
});

export const profileUpdateRequest = () => ({
    type: PROFILE_UPDATE_REQUEST
});

export const profileSuccess = profileUpdate => ({
    type: PROFILE_SUCCESS,
    profileUpdate
});

export const profileError = error => ({
    type: PROFILE_ERROR,
    error
});

//CHEF
export const chefLoad = () => ({
    type: CHEF_LOAD,
});

export const chefSuccess = chefResults => ({
    type: CHEF_SUCCESS,
    chefResults
});

export const chefError = error => ({
    type: CHEF_ERROR,
    error
});

export const chefFilter = () => ({
    type: CHEF_FILTER,
});

export const chefRequest = () => ({
    type: CHEF_REQUEST
});

//WORKWEEK
export const workWeekLoad = () => ({
    type: WORKWEEK_LOAD
});

export const workWeekEditClick = () => ({
    type: WORKWEEK_EDIT_CLICK
});

export const workWeekEditCancel = () => ({
    type: WORKWEEK_EDIT_CANCEL
});

export const workWeekUpdateRequest = () => ({
    type: WORKWEEK_UPDATE_REQUEST
});

export const workWeekSuccess = workWeekUpdate => ({
    type: WORKWEEK_SUCESS,
    workWeekUpdate
});

export const workWeekError = error => ({
    type: WORKWEEK_ERROR,
    error
});







// ----INITIAL STATE----
const initialState = {
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null,
    chefResults: null,
    chefAccount: false,
    chefsLoaded: false,
    profileEdit: false,
    profileUpToDate: false,
    loading: false,
    error: null,
    searchTerm:'',
    workWeekEdit: false
};


// ----REDUCER----
export default function authReducer(state=initialState, action) {
    if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    } else if (action.type === CLEAR_AUTH) {
        return Object.assign({}, state, {
            authToken: null,
            currentUser: null
        });
    } else if (action.type === AUTH_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null,
        });
    } else if (action.type === AUTH_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            currentUser: action.currentUser,
        });
    } else if (action.type === AUTH_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if (action.type === PROFILE_LOAD) {
        return Object.assign({}, state, {
            profileUpToDate: true,
        });
    } else if (action.type === PROFILE_EDIT_CLICK) {
            return Object.assign({}, state, {
                profileEdit: true
        });
    } else if (action.type === PROFILE_EDIT_CANCEL) {
        return Object.assign({}, state, {
            profileEdit: false
    });
    } else if (action.type === PROFILE_UPDATE_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === PROFILE_SUCCESS) {
        let newUserInfo = Object.assign({}, state.currentUser, action.profileUpdate)
        return Object.assign({}, state, {
            loading: false,
            currentUser: newUserInfo,
            profileUpToDate: false,
            profileEdit: false,
            chefsLoaded: false
        });
    } else if (action.type === PROFILE_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if (action.type === CHEF_LOAD) {
        return Object.assign({}, state, {
            chefsLoaded: true
        });
    } else if (action.type === CHEF_SUCCESS) {
        return Object.assign({}, state, {
            chefResults: action.chefResults 
        });
    } else if (action.type === WORKWEEK_EDIT_CLICK) {
        return Object.assign({}, state, {
           workWeekEdit: true
        });
    } else if (action.type === WORKWEEK_EDIT_CANCEL) {
        return Object.assign({}, state, {
           workWeekEdit: false 
        });
    } else if (action.type === WORKWEEK_UPDATE_REQUEST) {
        return Object.assign({}, state, {
            error: null,
            loading: true
            });
    }
    return state;
}

// ----ACTION FUNCIONS----
export const getUserInfo = (authToken) => dispatch => {
    const decodedToken =jwtDecode(authToken);
    const userId = decodedToken.user.id
    return (
        fetch(`${API_BASE_URL}/users/${userId}`, {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authToken}`
            }
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(userInfo => {
                dispatch(profileLoad())
                dispatch(authSuccess(userInfo))
            })
    )
};
export const getChefInfo = (authToken) => dispatch => {
    return (
        fetch(`${API_BASE_URL}/users/chefs`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(chefInfo => {
            console.log(chefInfo)
            dispatch(chefLoad())
            dispatch(chefSuccess(chefInfo))
        })   
    )
}

//PROFILE FUNCTIONS
export const profileEdit = () => (dispatch) => {
    dispatch(profileEditClick());
}

export const profileCancelEdit = () => (dispatch) => {
    dispatch(profileEditCancel());
}

export const updateProfile = profile => (dispatch, getState) => {
    dispatch(profileUpdateRequest());
    //can clean up with deconstructing (with  one get state)
    const authToken = getState().auth.authToken;
    const chefId = getState().auth.currentUser.id;

    return fetch(`${API_BASE_URL}/users/${chefId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
            profile
        })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(updatedProfile => {
        dispatch(profileSuccess(updatedProfile))}
    )
    .catch(err => {
        console.log(err);
        const {code} = err;
        const message =
            code === 401
                ? 'Cannot update'
                : 'please try again';
        dispatch(profileError(err));
        return Promise.reject(
            new SubmissionError({
                _error: message
            })
        );
    })
};
//WORKWEEK FUNCTIONS
export const workWeekEdit = () => (dispatch) => {
    dispatch(workWeekEditClick());
}

export const workWeekCancel = () => (dispatch) => {
    dispatch(workWeekEditCancel());
}

//AUTHENTICATION FUNCTIONS
// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken.user));
    saveAuthToken(authToken);
};


export const login = (username, password) => dispatch => {
    dispatch(authRequest());
    console.log('user logging in')
    return (
        fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(({authToken}) => storeAuthInfo(authToken, dispatch))
            .catch(err => {
                const {code} = err;
                const message =
                    code === 401
                        ? 'Incorrect username or password'
                        : 'Unable to login, please try again';
                dispatch(authError(err));
                // Could not authenticate, so return a SubmissionError for Redux
                // Form
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                    })
                );
            })
    );
};

export const logout = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    console.log('Logging out')
    dispatch(clearAuth());
    clearAuthToken(authToken);
}


export const refreshAuthToken = () => (dispatch, getState) => {
    dispatch(authRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            // Provide our existing token as credentials to get a new one
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            // We couldn't get a refresh token because our current credentials
            // are invalid or expired, or something else went wrong, so clear
            // them and sign us out
            dispatch(authError(err));
            dispatch(clearAuth());
            clearAuthToken(authToken);
        });
};
