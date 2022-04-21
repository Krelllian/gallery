import { takeLatest, put, call, delay } from "redux-saga/effects";
import axios from "axios";
import { GET_BOOK } from "./actionTypes";


import {
    getBookSuccess,
    getBookFail,
} from "./actions";

const apiKey = process.env.REACT_APP_API_KEY
const bookUrl = 'https://www.googleapis.com/books/v1/volumes/'

function* onGetBook({ payload }) {
    try {
        console.log(payload)
        yield console.log('id onGetBooks', `${bookUrl}${payload}`)
        const response = yield call(axios.get, `${bookUrl}${payload}`);
        yield delay(500)
        console.log('response', response)
        yield put(getBookSuccess(response.data));
    } catch (error) {
        yield put(getBookFail(error.response));
    }
}


function* BookSaga() {
    yield takeLatest(GET_BOOK, onGetBook);
}

export default BookSaga;