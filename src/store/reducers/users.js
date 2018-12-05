import * as actions from '../actions/actions'
import { NotificationManager} from 'react-notifications';


const INITIAL_STATE = {
    users: [], error: null, loading: true
};

const addresses = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.FETCH_USERS:
            return  {
                users: [],
                error: null,
                loading: true
            };
        case actions.FETCH_USERS_FAILURE:
            NotificationManager.error("error: ", action.error.message);
            return {
                users: [],
                error: action.e.message,
                loading: false
            };
        case actions.FETCH_USERS_SUCCESS:
            return {
                users: action.users,
                error: null,
                loading: false
            };
        default:
            return state;
    }
};

export default addresses;
