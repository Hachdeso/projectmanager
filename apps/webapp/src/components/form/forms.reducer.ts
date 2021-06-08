import { combineReducers } from "redux";
import textFormsReducer from "./textfields/textfields.slice";

export default combineReducers({
    textFields: textFormsReducer,
});
