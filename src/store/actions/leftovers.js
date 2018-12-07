import * as actions from "./actions"


export const fetchLeftovers = () => ({
    type: actions.FETCH_LEFTOVERS
});

export const fetchLeftoversSuccess = (leftovers) => ({
    type: actions.FETCH_LEFTOVERS_SUCCESS,
    leftovers
});

export const fetchLeftoversFailure = (error) => ({
    type: actions.FETCH_LEFTOVERS_FAILURE,
    error
});


export const createLeftoverSuccess = leftover => ({
    type: actions.CREATE_LEFTOVER_SUCCESS,
    leftover
});

export const createLeftoverFailure = error => ({
    type: actions.CREATE_LEFTOVER_FAILURE,
    error
});

export const createLeftover = leftover => ({
    type: actions.CREATE_LEFTOVER,
    leftover
});

export const fetchMyLeftovers = () => ({
    type: actions.FETCH_MY_LEFTOVERS
});

export const fetchMyLeftoversSuccess = leftovers => ({
    type: actions.FETCH_MY_LEFTOVERS_SUCCESS,
    leftovers
});

export const fetchMyLeftoversFailure = error => ({
    type: actions.FETCH_MY_LEFTOVERS_FAILURE,
    error
});

export const approveListings = listing => ({
    type: actions.APPROVE_LISTINGS,
    listing
});

export const approveListingsFailure = error => ({
    type: actions.APPROVE_LISTINGS_FAILURE,
    error
});

export const approveListingsSuccess = leftover => ({
    type: actions.APPROVE_LISTINGS_SUCCESS,
    leftover
});

export const deleteLeftover = id => ({
    type: actions.DELETE_LEFTOVER,
    id
});

export const deleteLeftoverSuccess = id => ({
    type: actions.DELETE_LEFTOVER_SUCCESS,
    id
});

export const deleteLeftoverFailure = error => ({
    type: actions.DELETE_LEFTOVER_FAILURE,
    error
});


