import {
    GET_BOOK,
    GET_BOOK_SUCCESS,
    GET_BOOK_FAIL,
} from "./actionTypes";

export const getBook = (id) => {
    return {
        type: GET_BOOK,
        payload: id
    };
};

export const getBookSuccess = (bookData) => {
    return {
        type: GET_BOOK_SUCCESS,
        payload: bookData,
    };
};

export const getBookFail = (error) => {
    return {
        type: GET_BOOK_FAIL,
        payload: error,
    };
};