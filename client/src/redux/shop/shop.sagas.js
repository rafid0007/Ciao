import {takeLatest, call, put, all} from 'redux-saga/effects';

import {firestore, convertCollectionsSnapShotToMap} from "../../firebase/firebase.utils";
import shopActionTypes from "./shop.types";
import {fetchCollectionsSuccess, fetchCollectionsFailure} from "./shop.actions";

function* fetchCollectionsAsync() {
    
    try {
        const collectionsRef = firestore.collection('collections');
        const snapshot = yield collectionsRef.get();
        const collectionsMap = yield call(convertCollectionsSnapShotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (e) {
        yield put(fetchCollectionsFailure(e.message));
    }
}

function* fetchCollectionsStart() {
    yield takeLatest(shopActionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync);
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}