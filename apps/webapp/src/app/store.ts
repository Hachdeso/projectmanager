import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "../features/user/user.slice";
import progressbarReducer from "../components/progressbar/progressbar.slice";
import formReducer from "../form/form.reducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        form: formReducer,
        progressbar: progressbarReducer,
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
