import {put, takeEvery} from 'redux-saga/effects';
import * as actions from "../actions/actions"
import * as api from '../effects/api'
import {
    createLeftovertFailure,
    createLeftovertSuccess,
    fetchLeftoversFailure,
    fetchLeftoversSuccess, fetchMyLeftoversFailure, fetchMyLeftoversSuccess
} from "../actions/leftovers";

function* fetchLeftovers() {
    try {
        let {data} = yield api.fetchLeftovers();
        yield put(fetchLeftoversSuccess(data))
    } catch (e) {
        yield put(fetchLeftoversFailure(e))
    }
}

function* createLeftover(action) {
    try {
        let leftover = action.leftover;
        leftover.timestamp = +new Date();
        const {data} = yield api.createLeftover(leftover);
        leftover.id = data.name;
        yield put(createLeftovertSuccess(leftover))
    } catch (e) {
        yield put(createLeftovertFailure(e))
    }
}

function* fetchMyLeftovers() {
    try {
        const {data} = yield api.fetchMyLeftovers();
        yield put(fetchMyLeftoversSuccess(data))

    } catch (e) {
        yield put(fetchMyLeftoversFailure(e))
    }
}


export function* leftoversWatcher() {
    yield takeEvery(actions.FETCH_LEFTOVERS, fetchLeftovers);
    yield takeEvery(actions.CREATE_LEFTOVER, createLeftover);
    yield takeEvery(actions.FETCH_MY_LEFTOVERS, fetchMyLeftovers);
}
