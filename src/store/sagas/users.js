import {put, takeEvery} from 'redux-saga/effects';
import * as actions from "../actions/actions"
import * as api from '../effects/api'
import {setUser, setEmail} from "../effects/LS";
import {navigate} from "@reach/router";
import history from "../../utils/history"


function* loginUser(action) {
    try {
        let user = action.user;
        setEmail(user.email);
        const {data} = yield api.loginUser(user);
        setUser(data);
        history.push("/restaurant")
    } catch (e) {
        console.log("not logged in");
        navigate("/login")
    }
}


export function* usersWatcher() {
    yield takeEvery(actions.LOGIN_USER, loginUser);

}

