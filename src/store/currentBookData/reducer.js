import {
    GET_BOOK,
    GET_BOOK_SUCCESS,
    GET_BOOK_FAIL,
} from "./actionTypes";

const initialState = {
    id: null,
    volumeInfo: {
        imageLinks: {
            thumbnail: null
        },
        description: null,
        title: null,
        authors: [],
        categories: [],
    },
    loadingBook: false,
    error: {
        message: null
    },
};

const BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOK:
            state = { ...state, loadingBook: true };
            break;
        case GET_BOOK_SUCCESS:
            state = { ...state, book: action.payload, loadingBook: false };
            break;
        case GET_BOOK_FAIL:
            state = {
                ...state,
                error: {
                    message: "Error",
                },
                loadingPosts: false,
            };
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
};

export default BookReducer;