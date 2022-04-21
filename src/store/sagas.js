import { all, fork } from "redux-saga/effects";

import ImagesSaga from "./images/saga";
import BookSaga from './currentBookData/saga'

export default function* rootSaga() {
    yield all([fork(ImagesSaga), fork(BookSaga)]);
}