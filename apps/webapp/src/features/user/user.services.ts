import axios from "axios";
import { store } from "../../app/store";
import { setIsFetching } from "../../components/progressbar/progressbar.slice";
import { getTextfieldByName } from "../../form/textfield/textfield.services";
import { setUser, setIsAuth } from "./user.slice";
import Cookies from "js-cookie";

export async function login() {
    const email = getTextfieldByName("loginEmail")?.value;
    const password = getTextfieldByName("loginPassword")?.value;

    if (!email || !password) return false;

    store.dispatch(setIsFetching(true));

    try {
        const response = await axios.post("http://localhost:8080/api/users/authenticate", {
            email,
            password,
        });
        const data = response.data;
        store.dispatch(
            setUser({
                token: data.token,
                email: data.user.email,
                id: data.user.id,
                role: data.user.role,
            })
        );
        Cookies.set("token", data.token, { expires: 365 });
        store.dispatch(setIsAuth(true));
        store.dispatch(setIsFetching(false));
    } catch (error) {
        store.dispatch(setIsFetching(false));
        Cookies.remove("token");
        return false;
    }

    return true;
}

export async function getUser(token: string) {
    const dispatch = store.dispatch;
    dispatch(setIsFetching(true));
    try {
        const response = await axios.get("http://localhost:8080/api/users/", {
            headers: { Authorization: `Bearer ${token}` },
        });

        const data = response.data;
        store.dispatch(
            setUser({
                token,
                email: data.user.email,
                id: data.user.id,
                role: data.user.role,
            })
        );
        store.dispatch(setIsAuth(true));
        dispatch(setIsFetching(false));
        return true;
    } catch (error) {
        store.dispatch(setIsFetching(false));
        Cookies.remove("token");
        dispatch(setIsFetching(false));
        return false;
    }
}
