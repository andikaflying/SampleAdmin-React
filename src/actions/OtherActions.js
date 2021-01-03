import dispatcher from "../dispatcher";

export function doLogin() {
    dispatcher.dispatch({
        name: "DO_LOGIN"
    });
}

export function doLogout() {
    dispatcher.dispatch({
        name: "DO_LOGOUT"
    });
}