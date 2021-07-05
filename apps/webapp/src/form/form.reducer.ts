import { combineReducers } from "@reduxjs/toolkit";
import textfieldReducer from "./textfield/textfield.slice";

export default combineReducers({
    textfield: textfieldReducer,
});
