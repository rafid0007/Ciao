import {takeLatest,put, call, all} from 'redux-saga/effects';

import userActionTypes from "./user.types";
import {
    signInSuccess,
    signInFailure,
    signOutFailure,
    signOutSuccess,
    signUpSuccess,
    signUpFailure
} from "./user.action";
import {auth, googleprovider, createUserProfileDocument, getCurrentUserAuth} from "../../firebase/firebase.utils";


function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch (e) {
        yield put(signInFailure(e));
    }
}

function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleprovider);
        yield getSnapshotFromUserAuth(user);
    } catch (e) {
        yield put(signInFailure(e));
    }
}

function* signInWithEmail({payload:{email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (e) {
        alert('Please use correct username or password');
        yield put(signInFailure(e));
    }
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUserAuth();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (e) {
        yield put(signInFailure(e));
    }
}

function* signOUt() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (e) {
        yield signOutFailure(e);
    }
}

function* signUp({payload:{displayName, email, password}}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, additionalData:{displayName}}));
    } catch (e) {
        alert(e);
        yield put(signUpFailure(e));
    }
}

function* signInAfterSingUp({payload:{user, additionalData}}) {
    yield getSnapshotFromUserAuth(user, additionalData);
}


function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOUt)
}

function* onSignUPStart() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp)
}

function* onSignUpSuccess() {
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSingUp)
}


export default function* userSagas() {
    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSignInStart), 
        call(onCheckUserSession), 
        call(onSignOutStart),
        call(onSignUPStart),
        call(onSignUpSuccess)
    ]);
}
