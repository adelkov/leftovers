import { combineReducers } from 'redux'
import myLeftovers from "./myLeftovers";
import leftovers from "./leftovers";
import users from "./users";


export default combineReducers({
    leftovers,
    myLeftovers,
    users
    // toastr: toastrReducer
})
