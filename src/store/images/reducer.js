import {
    SET_IMAGES_IS_LOADING,
    GET_IMAGES_SUCCESS,
    GET_IMAGES_FAIL,
} from "./actionTypes";


const initialState = {
    books: {
        items: []
    },
    loadingImages: false,
    error: {
        message: null
    },
};

const ImageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_IMAGES_IS_LOADING:
            state = { ...state, loadingImages: true };
            break;
        case GET_IMAGES_SUCCESS:
            state = { ...state, books: action.payload, loadingImages: false }
            break;
        case GET_IMAGES_FAIL:
            state = {
                ...state, error: {
                    message: "Fail to load images",
                }, loadingImages: false
            }
            break;

        default:
            state = { ...state };
            break;
    }
    return state;
};

export default ImageReducer;