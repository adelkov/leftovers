import { combineReducers } from 'redux'
import myLeftovers from "./myLeftovers";
import leftovers from "./leftovers";
import addresses from "./addresses";


export default combineReducers({
    leftovers,
    myLeftovers,
    addresses,
})
