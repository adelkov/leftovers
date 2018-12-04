import * as actions from '../actions/actions'


const INITIAL_STATE = {
    leftovers: [], error: null, loading: true
};

const leftovers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.FETCH_LEFTOVERS:
            return {
                leftovers: [],
                error: null,
                loading: true
            };
        case actions.FETCH_LEFTOVERS_FAILURE:
            return {
                leftovers: [],
                error: action.error,
                loading: false
            };
        case actions.FETCH_LEFTOVERS_SUCCESS:
            return {
                leftovers: action.leftovers,
                error: null,
                loading: false
            };
        default:
            return state;
    }
};

export default leftovers;
