import * as actions from "./actions"


export const setUser = email => {
    return {
        type: actions.SET_USER,
        email
    }
};


export const loginUser = user => {
    return {
        type: actions.LOGIN_USER,
        user
    }
};

export const loginUserSuccess = token => {
    return {
        type: actions.LOGIN_USER_SUCCESS,
        token
    }
};

export const loginUserFailure = error => {
    return {
        type: actions.LOGIN_USER_SUCCESS,
        error
    }
};
