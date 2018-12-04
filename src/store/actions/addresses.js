import * as actions from "./actions"


export const fetchAddresses = () => ({
 type: actions.FETCH_ADDRESSES
});

export const fetchAddressesSuccess = (addresses) => ({
    type: actions.FETCH_ADDRESSES_SUCCESS,
    addresses
});

export const fetchAddressesFailure = (e) => ({
    type: actions.FETCH_ADDRESSES_FAILURE,
    e
});

export const createAddress = (address) => ({
    type: actions.CREATE_ADDRESS,
    address
});

export const deleteAddress = (id) => ({
    type: actions.DELETE_ADDRESS,
    id
});

export const deleteAddressFailure = () => ({
    type: actions.DELETE_ADDRESS_FAILURE,
});

export const deleteAddressSuccess = (id) => ({
    type: actions.DELETE_ADDRESS_SUCCESS,
    id
});

export const createAddressSuccess = (address) => ({
    type: actions.CREATE_ADDRESS_SUCCESS,
    address
});

export const createAddressFailure = (error) => ({
    type: actions.CREATE_ADDRESS_FAILURE,
    error
});
