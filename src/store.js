import {createStore, applyMiddleware, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './utils/auth';
import {setAuthToken, refreshAuthToken} from './modules/auth';
import authReducer from './modules/auth';

const store = createStore(
    combineReducers({
        auth: authReducer,
        form: formReducer 
    }),
    applyMiddleware(thunk)
);

const authToken = loadAuthToken();


if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

console.log(store.getState())
export default store;
