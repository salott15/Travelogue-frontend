const initialState = {
    name:'notLoggedIn Dude',
    loggedIn: false,
    errorMessage: ''
}

function users(state = initialState, action){
    switch (action.type)
    {
        case 'LOGIN_USER' :
            return {...state, loggedIn: true, name:action.paylod.email}

        case 'GET_USER' :
            return {...state, currentUser: action.paylod}

        case 'USER_REGISTER_ERROR' :
            return {...state, errorMessage: action.error}

        default :
            return state;
    }
}

export default users;