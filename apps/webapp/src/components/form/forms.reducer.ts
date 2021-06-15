import { combineReducers } from "redux";
import textFormsReducer from "./textfields/textfields.slice";
import buttonsReducer from "./buttons/buttons.slice";

export default combineReducers({
    textFields: textFormsReducer,
    buttons: buttonsReducer,
});
