import dispatcher from "../../dispatcher";

//Actions
export function addNewForm() {
    dispatcher.dispatch({
        name: "ADD_NEW_FORM"     
    });
}

export function addNewCountry() {
    dispatcher.dispatch({
        name: "ADD_NEW_COUNTRY"     
    });
}

export function getAllMuseums() {
    dispatcher.dispatch({
        name: "GET_ALL_MUSEUMS"
    });
}