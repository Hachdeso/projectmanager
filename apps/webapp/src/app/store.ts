import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "../features/user/user.slice";
import progressbarReducer from "../components/progressbar/progressbar.slice";
import formReducer from "../form/form.reducer";
import redirectReducer from "../components/redirect/redirect.slice";
import drawerReducer from "../components/drawer/drawer.slice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        form: formReducer,
        progressbar: progressbarReducer,
        redirect: redirectReducer,
        drawer: drawerReducer,
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
