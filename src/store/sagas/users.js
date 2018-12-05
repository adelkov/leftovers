import {put, takeEvery} from 'redux-saga/effects';
import * as actions from "../actions/actions"
import * as api from '../effects/api'
import {setUser, setEmail} from "../effects/LS";
import history from "../../utils/history"
import {fetchUsersFailure, fetchUsersSuccess} from "../actions/user";


function* loginUser(action) {
    try {
        let user = action.user;
        setEmail(user.email);
        const {data} = yield api.loginUser(user);
        setUser(data);
        history.push("/restaurant")
    } catch (e) {
        history.push("/login")
    }
}

function* fetchUsers() {
    try {
        const {data} = yield api.fetchUsers();
        yield put(fetchUsersSuccess(data))
    } catch (e) {
        yield put(fetchUsersFailure(e))
    }
}


export function* usersWatcher() {
    yield takeEvery(actions.LOGIN_USER, loginUser);
    yield takeEvery(actions.FETCH_USERS, fetchUsers);
}

