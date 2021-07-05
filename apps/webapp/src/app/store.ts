import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "../features/user/user.slice";
import progressbarReducer from "../components/progressbar/progressbar.slice";

export const store = configureStore({
    reducer: {
        user: userReducer,
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
