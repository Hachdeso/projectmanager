import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "../features/user/user.slice";
import formsReducer from "../components/form/forms.reducer";
import progressBarReducer from "../components/progressbar/progressbar.slice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        forms: formsReducer,
        progressBar: progressBarReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
