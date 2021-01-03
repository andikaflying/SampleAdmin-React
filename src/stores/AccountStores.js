import { EventEmitter } from "events";
import React, { Component}  from 'react';

//dispatcher di sini objek
import dispatcher from "../dispatcher";

class AccountStores extends EventEmitter {
    
    constructor() {
        super();
    }

    doLogin() {
        this.emit("change");
    }

    doLogout() {
        this.emit("change");
    }

    //Action yg dieksekusi di store
    handleAllActions(action) {
        switch(action.name) {
            case "DO_LOGIN": {
                this.doLogin();
            }
            case "DO_LOGOUT": {
                this.doLogout();
            }
        }
    }

}

const accountStores = new AccountStores;
//Dispatcher
dispatcher.register(accountStores.handleAllActions.bind(Stores));
window.dispatcher = dispatcher;
export default museumFormStores;

/** 
 * COMPONENT --> ACTION --> DISPATCHER --> STORES --> COMPONENT
 * 
 * 
 * 
*/