import { store } from "../../app/store";
import { setRedirect } from "./redirect.slice";

export function redirectTo(to: string) {
    const dispatch = store.dispatch;
    dispatch(setRedirect(to));
    setTimeout(() => {
        dispatch(setRedirect(""));
    }, 50);
}
