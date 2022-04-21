import { combineReducers } from "redux";

import ImageReducer from "./images/reducer";

const rootReducer = combineReducers({
    ImageReducer,
});

export default rootReducer;