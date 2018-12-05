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
                error: action.error.message,
                loading: false
            };
        case actions.FETCH_LEFTOVERS_SUCCESS:
            return {
                leftovers: action.leftovers,
                error: null,
                loading: false
            };
        case actions.APPROVE_LISTINGS_SUCCESS:
            const approvedLeftoverIDs = action.leftovers.map(item => item.id);
            let newLeftovers = state.leftovers
                .filter(item => {
                    return !approvedLeftoverIDs.includes(item.id)
                })
                .concat(action.leftovers);
            return  {
                leftovers: newLeftovers,
                error: null,
                loading: false
            };
        case actions.APPROVE_LISTINGS_FAILURE:

            return state;
        case actions.APPROVE_LISTINGS:
            return state;

        default:
            return state;
    }
};

export default leftovers;
