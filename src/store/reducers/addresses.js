import * as actions from '../actions/actions'


const INITIAL_STATE = {
    addresses: [], error: null, loading: true
};

const addresses = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.FETCH_ADDRESSES:
            return  {
                addresses: [],
                error: null,
                loading: true
            };
        case actions.FETCH_ADDRESSES_FAILURE:
            return {
                addresses: [],
                error: action.e,
                loading: false
            };
        case actions.FETCH_ADDRESSES_SUCCESS:
            return {
                addresses: action.addresses,
                error: null,
                loading: false
            };
        case actions.DELETE_ADDRESS_FAILURE:
            return {
                addresses: action.addresses,
                error: action.e,
                loading: false
            };
        case actions.DELETE_ADDRESS_SUCCESS:
            const addressesAfterDelete = state.addresses.filter(address => address.id !== action.id);
            return {
                addresses: addressesAfterDelete,
                error: null,
                loading: false
            };
        case actions.CREATE_ADDRESS_SUCCESS:
            const addressesAfterCreate = state.addresses.concat(action.address);
            return {
                addresses: addressesAfterCreate,
                error: null,
                loading: false
            };
        default:
            return state;
    }
};

export default addresses;
