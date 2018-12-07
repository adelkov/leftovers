import {put, takeEvery} from 'redux-saga/effects';
import * as actions from "../actions/actions"
import * as api from '../effects/api'
import {setUser, setEmail, clearUser} from "../effects/LS";
import history from "../../utils/history"
import {fetchUsersFailure, fetchUsersSuccess, logoutUserFailure, logoutUserSuccess} from "../actions/user";
import {notify, types} from "../effects/notifications"


function* loginUser(action) {
    try {
        let user = action.user;
        setEmail(user.email);
        const {data} = yield api.loginUser(user);
        setUser(data);
        history.push("/restaurant")
    } catch (e) {
        notify(types.error, "Login failed: Invalid credentials");
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

function* logoutUser() {
    try {
        yield api.logoutUser();
        clearUser();
        history.push("/home");
        notify("success", "You have logged out.");
        yield put(logoutUserSuccess());
    } catch (e) {
        yield put(logoutUserFailure(e))
    }
}


export function* usersWatcher() {
    yield takeEvery(actions.LOGIN_USER, loginUser);
    yield takeEvery(actions.FETCH_USERS, fetchUsers);
    yield takeEvery(actions.LOGOUT_USER, logoutUser);
}

