import * as actions from '../actions/actions'

const INITIAL_STATE = {
    email: ""
};

const email = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.SET_USER:
            return {email: action.email};
        default:
            return state;
    }
};

export default email
