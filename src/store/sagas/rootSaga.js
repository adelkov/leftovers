import {all} from "redux-saga/effects";
import {usersWatcher} from "./users";
import {leftoversWatcher} from "./leftovers";

export default function* rootSaga() {
    yield all([
        usersWatcher(),
        leftoversWatcher()
    ])
}
