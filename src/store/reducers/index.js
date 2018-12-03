import { combineReducers } from 'redux'
import myLeftovers from "./myLeftovers";
import leftovers from "./leftovers";
import users from "./users";
import addresses from "./addresses";


export default combineReducers({
    leftovers,
    myLeftovers,
    users,
    addresses
    // toastr: toastrReducer
})
