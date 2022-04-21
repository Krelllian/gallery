import { takeLatest, put, call, takeLeading, select, delay } from "redux-saga/effects";
import axios from "axios";
import { useSelector } from "react-redux";

import {
    SET_IMAGES_IS_LOADING, GET_IMAGES,
    GET_IMAGES_SUCCESS, GET_IMAGES_FAIL,
} from "./actionTypes";


import {
    setImagesIsLoading,
    getImagesSuccess,
} from "./actions";

const apiKey = process.env.REACT_APP_API_KEY
const booksUrl = 'https://www.googleapis.com/books/v1/volumes/'

//export const getStoreDataBook = (store) => store.ImageReducer.books.items[0]

function* onGetImages() {
    try {
        console.log('apiKey', apiKey)
        yield put(setImagesIsLoading());
        const response = yield call(axios.get, `${booksUrl}?q=nature&key=${apiKey}&maxResults=24`);
        //  console.log('get images onGetImages', response.data)
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