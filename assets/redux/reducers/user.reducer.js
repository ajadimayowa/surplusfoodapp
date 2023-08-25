import { USER_LOGIN, GET_USER } from "../actionTypes";



const initialState = {
    userData: {},
    token: '',
};

const userReducer = (state = initialState, action) => {
    // console.log('action', action)
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                userData: action.payload.payload,
                token: action.payload.token,
            };
        case GET_USER:
            return {
                ...state,
                userData: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;