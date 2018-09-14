

const initialState={
    isLoggingIn: false,
    user:  {
        workweek: {
            monday: 'Chef Amy',
            tuesday: 'Chef Guy',
            wednesday: 'Chef Max',
            thursday: 'Chef Gladys',
            friday: 'Not Scheduled'
        },
        messages:[
            {
            from: 'Chef Amy',
            company:'ABC Company', 
            text: 'Your request has been accepted!', 
            },
            {from:'Chef Taylor',
            company: 'CIM',
            text: 'Sorry we cannot accomodate your dietary restrictions.'
            }
        ],
        mychefs: [{
            name: 'Chef Amy',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74PsvREfbIsR6FqZy3L4sCQ0KTK4BwL7cpkT3qb4dqp8ybntXWw',
            speciality: 'Indian',
            dish: 'https://images.media-allrecipes.com/userphotos/720x405/1116370.jpg'
        },
        {
        name: 'Chef Guy',
        image: 'https://assets3.thrillist.com/v1/image/2670144/size/tmg-gift_guide_default.jpg',
        speciality: 'American',
        dish: 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/Easy_Steak_Frites-LEDE.jpg?itok=IdQsXmBP'
        }
    ]
    }
}

export default function authReducer(state=initialState, action) {
    if(action.type===LOGIN_REQUEST){
       return Object.assign({}, state, {isLoggingIn: true})
    }
    if(action.type===LOGIN_SUCCESS){
        return Object.assign({}, state, {isLoggingIn: false, currentUser: action.data})
    }
    
    return state;
} 
export const Login = (username, password) => dispatch => {
    console.log(username, password);
    dispatch(LoginRequest());
    setTimeout(function(){dispatch(LoginSuccess(username))}, 2000);
}


const LOGIN_REQUEST= 'LOGIN_REQUEST'
const LOGIN_SUCCESS= 'LOGIN_SUCCESS'
const SIGNUP_REQUEST= 'SIGNUP_REQUEST'
const SIGNUP_SUCCESS= 'SIGNUP_SUCCESS'

export const SignupRequest = () => ({type: SIGNUP_REQUEST})
export const SignupSuccess = (user) => ({type:SIGNUP_SUCCESS, data: user})
export const LoginRequest = () => ({type: LOGIN_REQUEST })
export const LoginSuccess = (user) => ({type: LOGIN_SUCCESS, data: user})
