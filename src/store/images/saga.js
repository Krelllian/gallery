import { takeLatest, put, call, delay } from "redux-saga/effects";
import axios from "axios";

import {
    GET_IMAGES
} from "./actionTypes";


import {
    setImagesIsLoading,
    getImagesSuccess,
} from "./actions";

const apiKey = process.env.REACT_APP_API_KEY
const booksUrl = 'https://www.googleapis.com/books/v1/volumes/'


function* onGetImages() {
    try {
        yield put(setImagesIsLoading());
        const response = yield call(axios.get, `${booksUrl}?q=nature&key=${apiKey}&maxResults=24`);
        yield delay(500)
        yield put(getImagesSuccess(response.data))
    } catch (error) {
        console.log(error);
    }

}

function* ImagesSaga() {
    yield takeLatest(GET_IMAGES, onGetImages);
}

export default ImagesSaga;