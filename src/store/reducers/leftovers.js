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
            const newLeftovers = state.leftovers.map(leftover=> {
                return leftover.id === action.leftover.id ?
                    action.leftover :
                    leftover;
            });
            return  {
                leftovers: newLeftovers,
                error: null,
                loading: false
            };
        case actions.APPROVE_LISTINGS_FAILURE:
            return state;
        case actions.APPROVE_LISTINGS:
            return state;
        case actions.DELETE_LEFTOVER_SUCCESS:
            const leftoversAfterDelete = state.leftovers.filter(item=>item.id !== action.id);
            return {
                leftovers: leftoversAfterDelete,
                error: null,
                loading: false
            };
        default:
            return state;
    }
};

export default leftovers;
