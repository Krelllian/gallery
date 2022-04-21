import { takeLatest, put, call, delay } from "redux-saga/effects";
import axios from "axios";
import { GET_BOOK } from "./actionTypes";


import {
    getBookSuccess,
    getBookFail,
} from "./actions";


const bookUrl = 'https://www.googleapis.com/books/v1/volumes/'

function* onGetBook({ payload }) {
    try {
        const response = yield call(axios.get, `${bookUrl}${payload}`);
        yield delay(500)
        yield put(getBookSuccess(response.data));
    } catch (error) {
        yield put(getBookFail(error.response));
    }
}


function* BookSaga() {
    yield takeLatest(GET_BOOK, onGetBook);
}

export default BookSaga;