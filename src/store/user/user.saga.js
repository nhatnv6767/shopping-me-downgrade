import {takeLatest, put, all, call} from 'redux-saga/effects'
import {USER_ACTION_TYPES} from "./user.types"
import {createUserDocumentFromAuth, getCurrentUser} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
        console.log(userSnapshot)
        console.log(userSnapshot.data)
    } catch (e) {

    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser)
        if (!userAuth) return;

    } catch (e) {

    }
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION,)
}

export function* userSagas() {
    yield all([])
}