import { configureStore, ThunkAction, Action, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/user.slice";
import formsReducer from "../components/form/forms.reducer";
import progressBarReducer from "../components/progressbar/progressbar.slice";
import redirectReducer from "../components/redirect/redirect.slice";
import { api } from "./api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        user: userReducer,
        forms: formsReducer,
        progressBar: progressBarReducer,
        redirect: redirectReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
