import { combineReducers } from "redux";

import ImageReducer from "./images/reducer";
import BookReducer from "./currentBookData/reducer";

const rootReducer = combineReducers({
    ImageReducer,
    BookReducer,
});

export default rootReducer;