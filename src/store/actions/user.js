import * as actions from "./actions"


export const loginUser = user => ({
    type: actions.LOGIN_USER,
    user
});

export const loginUserSuccess = () => ({
    type: actions.LOGIN_USER_SUCCESS
});


export const loginUserFailure = error => ({
    type: actions.LOGIN_USER_SUCCESS,
    error
});


export const fetchUsers = () => ({
    type: actions.FETCH_LEFTOVERS
});

export const fetchUsersSuccess = users => ({
    type: actions.FETCH_USERS_SUCCESS,
    users
});

export const fetchUsersFailure = error => ({
    type: actions.FETCH_USERS_FAILURE,
    error
});
