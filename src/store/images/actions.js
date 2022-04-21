import {
    SET_IMAGES_IS_LOADING, GET_IMAGES_FAIL, GET_IMAGES_SUCCESS, GET_IMAGES
} from "./actionTypes";

export const getImages = () => {
    return {
        type: GET_IMAGES
    };
};

export const setImagesIsLoading = () => {
    return {
        type: SET_IMAGES_IS_LOADING
    };
};

export const getImagesSuccess = (images) => {
    console.log('getImagesSuccess', images)
    return {
        type: GET_IMAGES_SUCCESS,
        payload: images,
    };
};

export const getImagesFail = () => {
    return {
        type: GET_IMAGES_FAIL,

    };
};