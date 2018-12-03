import * as actions from '../actions/actions'


const INITIAL_STATE = {
    addresses: [], error: null, loading: true
};

const addresses = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.FETCH_ADDRESSES:
            return  {addresses: [], error: null, loading: true};
        case actions.FETCH_ADDRESSES_FAILURE:
            return {addresses: [], error: action.error, loading: false};
        case actions.FETCH_ADDRESSES_SUCCESS:
            return {addresses: action.leftovers, error: null, loading: false};
        case actions.DELETE_ADDRESS_FAILURE:
            // toastr
            return {addresses: action.addresses, error: action.e, loading: false};
        case actions.DELETE_ADDRESS_SUCCESS:
            const addresses = state.addresses.filter(address => address.id !== action.id);
            return {addresses: addresses, error: null, loading: false};
        case actions.CREATE_ADDRESS_SUCCESS:
            const posts2 = state.postList.posts.concat(action.post);
            return {...state, postList: {posts: posts2, error: null, loading: false}};
        default:
            return state;
    }
};

export default addresses;
