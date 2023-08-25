import { USER_LOGIN, USER_LOGOUT } from "../actionTypes";

export const loginUserAction = (payload) => {
    return {
        type: USER_LOGIN,
        payload: payload,
    };
};

export const logoutUserAction = () => {
    return {
        type: USER_LOGOUT,
        payload: {},
    };
};