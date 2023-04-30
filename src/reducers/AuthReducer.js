const initState = {
    user: null,
    isErr: false,
    isLoading: false,
    isWrongPassword: false,
    isNotExistUser: false,
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        //login
        case "IS_LOGGING":
            return { ...state, isLoading: true, isWrongPassword: false };
        case "LOGIN_SUCCESSFULLY":
            return { ...state, isLoading: false, isWrongPassword: false, user: action.payload };
        case "IS_WRONG_PASSWORD":
            return { ...state, isWrongPassword: true, isLoading: false };
        // register
        case "IS_REGISTERING":
            return { ...state, isLoading: true, isWrongPassword: false };
        case "REGISTER_SUCCESSFULLY":
            return { ...state, isLoading: false, isWrongPassword: false, user: action.payload };
        case "REGISTER_ERROR":
            return { ...state, isLoading: false, isWrongPassword: false, user: null, isErr: true };
        //logout
        case "LOGOUT":

            return { ...state, isLoading: false, isWrongPassword: false, isErr: false, user: null };
        default:
            return state; // explicitly return initial state if state is undefined

    }
}
export default AuthReducer