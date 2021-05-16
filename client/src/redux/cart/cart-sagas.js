import {takeLatest, call, all, put} from 'redux-saga/effects';

import userActionTypes from "../user/user.types";
import {clearCart} from "./cart.action";

function* clearCartOnSignOutSuccess() {
    yield put(clearCart());
}

function* onSignOutSuccess() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOutSuccess)
}

export function* cartSagas() {
    yield all([call(onSignOutSuccess)])
}