import * as actions from '../actions/actions'


const INITIAL_STATE = {
    myLeftovers: [], error: null, loading: true
};

const myLeftovers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.FETCH_MY_LEFTOVERS:
            return  {myLeftovers: [], error: null, loading: true};
        case actions.FETCH_MY_LEFTOVERS_FAILURE:
            return {myLeftovers: [], error: action.error, loading: false};
        case actions.FETCH_MY_LEFTOVERS_SUCCESS:
            return {myLeftovers: action.leftovers, error: null, loading: false};
        case actions.CREATE_LEFTOVER_SUCCESS:
            let leftover = action.leftover;
            const leftovers = state.myLeftovers.concat(leftover);
            return  {
                    leftovers,
                    error: null,
                    loading: false
                };
        default:
            return state;
    }
};

export default myLeftovers;
