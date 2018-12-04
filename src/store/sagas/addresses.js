import {put, takeEvery} from 'redux-saga/effects';
import * as actions from "../actions/actions"
import * as api from '../effects/api'
import {
    createAddressFailure, createAddressSuccess, deleteAddressFailure, deleteAddressSuccess, fetchAddressesFailure, fetchAddressesSuccess,
} from "../actions/addresses";



function* fetchAddresses() {
    try {
        let {data} = yield api.fetchAddresses();
        yield put(fetchAddressesSuccess(data))
    } catch (e) {
        yield put(fetchAddressesFailure(e))
    }
}

function* createAddress(action) {
    try {
        let address = action.address;
        const {data} = yield api.createAddress(address);
        yield put(createAddressSuccess(data))
    } catch (e) {
        yield put(createAddressFailure(e))
    }
}

function* deleteAddress(action) {
    try {
        yield api.deleteAddress(action.id);
        yield put(deleteAddressSuccess(action.id))
    } catch (e) {
        yield put(deleteAddressFailure(e))
    }
}


export function* addressesWatcher() {
    yield takeEvery(actions.FETCH_ADDRESSES, fetchAddresses);
    yield takeEvery(actions.CREATE_ADDRESS, createAddress);
    yield takeEvery(actions.DELETE_ADDRESS, deleteAddress);
}
