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
//LUNCH GROUP
export const LUNCH_GROUP_CREATE_CLICK = 'app/auth/LUNCH_GROUP_CREATE_CLICK';
export const LUNCH_GROUP_CREATE_CANCEL= 'app/auth/LUNCH_GROUP_CREATE_CANCEL';
export const LUNCH_GROUP_CREATE_REQUEST= 'app/auth/LUNCH_GROUP_CREATE_REQUEST';
export const LUNCH_GROUP_CREATE_SUCCESS= 'app/auth/LUNCH_GROUP_CREATE_SUCCESS';
export const LUNCH_GROUP_CREATE_ERROR= 'app/auth/LUNCH_GROUP_CREATE_ERROR';
export const LUNCH_GROUP_JOIN_REQUEST= 'app/auth/LUNCH_GROUP_JOIN_REQUEST';
export const LUNCH_GROUP_JOIN_SUCCESS= 'app/auth/LUNCH_GROUP_JOIN_SUCCESS';
export const LUNCH_GROUP_JOIN_ERROR= 'app/auth/LUNCH_GROUP_JOIN_ERROR';
export const LUNCH_GROUP_LEAVE_REQUEST= 'app/auth/LUNCH_GROUP_LEAVE_REQUEST';
export const LUNCH_GROUP_LEAVE_SUCCESS= 'app/auth/LUNCH_GROUP_LEAVE_SUCCESS';
export const LUNCH_GROUP_LEAVE_ERROR= 'app/auth/LUNCH_GROUP_LEAVE_ERROR';
//GROUP
export const GROUP_LOAD = 'app/auth/CHEF_LOAD';
export const GROUP_FILTER = 'app/auth/CHEF_FILTER';
export const GROUP_REQUEST = 'app/auth/CHEF_REQUEST';
export const GROUP_SUCCESS = 'app/auth/CHEF_SUCCESS';
export const GROUP_ERROR = 'app/auth/CHEF_ERROR';
//WORKWEEK
export const WORKWEEK_LOAD = 'app/auth/WORKWEEK_LOAD';
export const WORKWEEK_EDIT_CLICK= 'app/auth/WORKWEEK_EDIT_CLICK';
export const WORKWEEK_EDIT_CANCEL = 'app/auth/WORKWEEK_EDIT_CANCEL';
export const WORKWEEK_UPDATE_REQUEST = 'app/auth/WORKWEEK_UPDATE_REQUEST';
export const WORKWEEK_SUCCESS = 'app/auth/WORKWEEK_SUCCESS';
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
//LUNCHGROUP
export const lunchGroupCreateClick = () => ({
    type: LUNCH_GROUP_CREATE_CLICK
});
export const lunchGroupCreateCancel = () => ({
    type:LUNCH_GROUP_CREATE_CANCEL
});
export const lunchGroupCreateRequest = () => ({
    type: LUNCH_GROUP_CREATE_REQUEST
});
export const lunchGroupCreateSuccess = newLunchGroup => ({
    type: LUNCH_GROUP_CREATE_REQUEST,
    newLunchGroup
});
export const lunchGroupCreateError = error => ({
    type: LUNCH_GROUP_CREATE_ERROR,
    error
});
export const lunchGroupJoinRequest = () => ({
    type: LUNCH_GROUP_JOIN_REQUEST
});
export const lunchGroupJoinSuccess = newLunchGroup => ({
    type: LUNCH_GROUP_JOIN_SUCCESS,
    newLunchGroup
});
export const lunchGroupJoinError = error => ({
    type: LUNCH_GROUP_JOIN_ERROR,
    error
});
export const lunchGroupLeaveRequest = () => ({
    type: LUNCH_GROUP_LEAVE_REQUEST
});
export const lunchGroupLeaveSuccess = () => ({
    type: LUNCH_GROUP_LEAVE_SUCCESS
});
export const lunchGroupLeaveError = error => ({
    type: LUNCH_GROUP_LEAVE_ERROR,
    error
});


//GROUP
export const groupLoad = () => ({
    type: GROUP_LOAD,
});

export const groupRequest = (groupId) => ({
    type: GROUP_REQUEST,
    groupId
});

export const groupFilter = (searchTerm) => ({
    type: GROUP_FILTER,
    searchTerm
});

export const groupSuccess = groupResults => ({
    type: GROUP_SUCCESS,
    groupResults
});

export const groupError = error => ({
    type: GROUP_ERROR,
    error
});









// ----INITIAL STATE----
const initialState = {
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null,
    groupResults: null,
    chefAccount: false,
    chefsLoaded: false,
    profileEdit: false,
    profileUpToDate: false,
    createLunchGroup: false,
    lunchGroupUpdated: false,
    authLoading: false,
    loading:false,
    error: null,
    searchTerm:'',
    newGroup: null
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
            authLoading: true,
            error: null,
        });
    } else if (action.type === AUTH_SUCCESS) {
        return Object.assign({}, state, {
            authLoading: false,
            currentUser: action.currentUser,
        });
    } else if (action.type === AUTH_ERROR) {
        return Object.assign({}, state, {
            authLoading: false,
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
            profileUpToDate: true,
            profileEdit: false,
            chefsLoaded: false
        });
    } else if (action.type === PROFILE_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if (action.type === LUNCH_GROUP_CREATE_CLICK) {
        return Object.assign({}, state, {
            createLunchGroup: true
        });
    } else if (action.type === LUNCH_GROUP_CREATE_CANCEL) {
        return Object.assign({}, state, {
            createLunchGroup: false
        });
    } else if (action.type === LUNCH_GROUP_CREATE_REQUEST) {
         return Object.assign({}, state, {
            loading: true,
        });
    } else if (action.type === LUNCH_GROUP_CREATE_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            newLunchGroup: action.newLunchGroup,
            lunchGroupUpdated: true,
       });
    } else if (action.type === LUNCH_GROUP_CREATE_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if (action.type === LUNCH_GROUP_JOIN_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
        });
    } else if (action.type === LUNCH_GROUP_JOIN_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
        });        
    } else if (action.type === LUNCH_GROUP_JOIN_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if (action.type === LUNCH_GROUP_LEAVE_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
        });
    } else if (action.type === LUNCH_GROUP_LEAVE_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            lunchGroupUpdated: true
        });        
    } else if (action.type === LUNCH_GROUP_LEAVE_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if (action.type === GROUP_REQUEST) {
        return Object.assign({}, state, {
            loading:true,
            error: null,
        });
    } else if (action.type === GROUP_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            groupResults: action.groupResults, 
            lunchGroupUpdated: false,
        });
    } else if (action.type === GROUP_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error, 
        });    
    } else if (action.type === GROUP_FILTER) {
        return Object.assign({}, state, {
           searchTerm: action.searchTerm
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

//   CHANGE TO GET GROUP INFO
export const getGroupResults = () => dispatch => {
    dispatch(groupRequest())
    return (
        fetch(`${API_BASE_URL}/groups/`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            }
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(groupInfo => {
            console.log(groupInfo)
            dispatch(groupSuccess(groupInfo))
        }) 
        .catch(err => {
            console.log(err);
            const {code} = err;
            const message =
                code === 401
                    ? 'Cannot get group results'
                    : 'please try again';
            dispatch(groupError(err));
            return Promise.reject(
                new SubmissionError({
                    _error: message
            })
            );
        })
    )
};

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

//LUNCHGROUP FUNCTIONS
export const lunchGroupCreate = () => (dispatch) => {
    dispatch(lunchGroupCreateClick());
}

export const lunchGroupCancel = () => (dispatch) => {
    dispatch(lunchGroupCreateCancel());
}

export const createNewGroup = (newLunchGroup) => (dispatch, getState) => {
    console.log('posting a new group')
    dispatch(lunchGroupCreateRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/groups/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(newLunchGroup)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(newGroup => {
        dispatch(lunchGroupCreateSuccess(newGroup))
        dispatch(lunchGroupCancel())
    })
    .catch(err => {
        console.log(err);
        const {code} = err;
        const message =
            code === 401
                ? 'Cannot update'
                : 'please try again';
        dispatch(lunchGroupCreateError(err));
        return Promise.reject(
            new SubmissionError({
                _error: message
            })
        );
    })
};

export const filterLunchGroups = (searchTerm) => (dispatch, getState) => {
    dispatch(groupFilter(searchTerm))
}

export const joinLunchGroup = (groupId) => (dispatch, getState) => {
    console.log(`joining a new group: ${groupId}`)
    dispatch(lunchGroupJoinRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/groups/members/${groupId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify()
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(newGroup => {
        console.log(newGroup)
        dispatch(lunchGroupJoinSuccess(newGroup))
        dispatch(getGroupResults())}
    )
    .catch(err => {
        console.log(err);
        const {code} = err;
        const message =
            code === 401
                ? 'Cannot join'
                : 'please try again';
        dispatch(lunchGroupJoinError(err));
        return Promise.reject(
            new SubmissionError({
                _error: message
            })
        );
    })
};

export const leaveLunchGroup = (groupId) => (dispatch, getState) => {
    console.log(`leaving lunch group: ${groupId}`)
    dispatch(lunchGroupLeaveRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/groups/members/${groupId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify()
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => 
        dispatch(lunchGroupLeaveSuccess())    
    )
    .catch(err => {
        console.log(err);
        const {code} = err;
        const message =
            code === 401
                ? 'Not authorized or'
                : 'No longer a member of this group';
        dispatch(lunchGroupLeaveError(err));
        return Promise.reject(
            new SubmissionError({
                _error: message
            })
        );
    })
};



//AUTHENTICATION FUNCTIONS
// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken.user));
    saveAuthToken(authToken);
};



//}

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
