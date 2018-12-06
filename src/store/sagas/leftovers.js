import {put, takeEvery} from 'redux-saga/effects';
import * as actions from "../actions/actions"
import * as api from '../effects/api'
import {
    approveListingsFailure, approveListingsSuccess,
    createLeftoverFailure,
    createLeftoverSuccess,
    fetchLeftoversFailure,
    fetchLeftoversSuccess, fetchMyLeftoversFailure, fetchMyLeftoversSuccess
} from "../actions/leftovers";
import {notify, types} from "../effects/notifications"



function* fetchLeftovers() {
    try {
        let {data} = yield api.fetchLeftovers();
        yield put(fetchLeftoversSuccess(data))
    } catch (e) {
        notify(types.error, e.message);
        yield put(fetchLeftoversFailure(e))
    }
}

function* createLeftover(action) {
    try {
        let leftover = action.leftover;
        const {data} = yield api.createLeftover(leftover);
        notify(types.success, "Leftover listed");
        yield put(createLeftoverSuccess(data));

    } catch (e) {
        notify(types.error, e.message);
        yield put(createLeftoverFailure(e))
    }
}

function* fetchMyLeftovers() {
    try {
        const {data} = yield api.fetchMyLeftovers();
        yield put(fetchMyLeftoversSuccess(data))
    } catch (e) {
        notify(types.error, e.message);
        yield put(fetchMyLeftoversFailure(e))
    }
}

function* approveListings(action) {
    try {
        const {data} = yield  api.approveListings(action.listing);
        notify(types.success, "Leftover approved");
        yield put(approveListingsSuccess(data))
    } catch (error) {
        notify(types.error, error.message);
        yield put(approveListingsFailure(error))
    }
}


export function* leftoversWatcher() {
    yield takeEvery(actions.FETCH_LEFTOVERS, fetchLeftovers);
    yield takeEvery(actions.CREATE_LEFTOVER, createLeftover);
    yield takeEvery(actions.FETCH_MY_LEFTOVERS, fetchMyLeftovers);
    yield takeEvery(actions.APPROVE_LISTINGS, approveListings);
}
