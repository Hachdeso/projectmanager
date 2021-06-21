import { store } from "../../app/store";
import { setRedirect as setRedir } from "./redirect.slice";

export function setRedirect(path: string) {
    const dispatch = store.dispatch;
    dispatch(setRedir(path));
    setTimeout(() => {
        dispatch(setRedir(""));
    }, 200);
}
