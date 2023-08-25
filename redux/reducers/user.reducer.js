import { USER_LOGIN, GET_USER, USER_LOGOUT } from "../actionTypes";



const initialState = {
    user: {},
    token: '',
    provider: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload.data,
                token: action.payload.token,
                provider: action.payload.provider
            };
        case GET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case USER_LOGOUT:
            return {
                ...state,
                user: {},
                token: '',
                provider: ''
            };
        default:
            return state;
    }
};

export default userReducer;