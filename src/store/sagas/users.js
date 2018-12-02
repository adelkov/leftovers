import { takeEvery} from 'redux-saga/effects';
import * as actions from "../actions/actions"
import * as api from '../effects/api'
import {setUser, setEmail} from "../effects/localStorage";
import {navigate} from "@reach/router";



function* loginUser(action) {
    try {
        let user = action.user;
        setEmail(user.email);
        const {data} = yield api.loginUser(user);
        setUser(data);
        navigate("/leftovers")
    } catch (e) {
        console.log(e);
        navigate("/login")
    }
}


export function* usersWatcher() {
    yield takeEvery(actions.LOGIN_USER, loginUser);

}

