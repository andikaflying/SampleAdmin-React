import { EventEmitter } from "events";
import React, { Component}  from 'react';

//dispatcher di sini objek
import dispatcher from "../dispatcher";

class MuseumFormStores extends EventEmitter {
    constructor() {
        super();
        this.addMuseumVars = {
            title: "Add Museum",
            form: [ this.getMuseumDefaultForm("Add Museum", "A", "B", "C", "D")]
        };
        this.listNegara = ["Indonesia", "Malaysia", "Singapura"];
    }
                                                             
    getMuseumDefaultForm(title, museumName, _listNegara, alamat, deskripsi, index) {
        return (
            <div>
                <h3> {title} </h3>
                <div>
                    <label> Nama : </label> 
                    <input type="text" name="museum" value={museumName} /> <br/>
                </div>
                <div>
                    <label> Negara : </label> 
                </div>
                <div>
                    <label> Alamat : </label> 
                    <input type="text" name="alamat" value={alamat} /> <br/>
                </div>
                <div>
                    <label> Deskripsi : </label> 
                    <input type="text" name="deskripsi" value={deskripsi} /> <br/>
                </div>
                <div>
                    <input type="submit" value="OK" /> 
                </div>
            </div>
        );
    }

    getAddMuseumVars() {
        return this.addMuseumVars;
    }

    getListNegara() {
        return this.listNegara;
    }

    //Actions yg diolah dispatcher
    addNewForm() {
        this.addMuseumVars.form.push(this.getMuseumDefaultForm("Add Museum", "X", "Y", "Z", "R"));
        this.emit("change");
    }

    addNewCountry() {
        this.listNegara.push("Brunei Darusallam");
        this.emit("change");
    }

    //Dispatcher
    handleAllActions(action) {
        console.log("Aksi di museum form : ", action);
        switch(action.name) {
            case "ADD_NEW_FORM": {
                this.addNewForm();
            }
            case "ADD_NEW_COUNTRY": {
                this.addNewCountry();
            }
        }
    }
}

const museumFormStores = new MuseumFormStores;
//Dispatcher
dispatcher.register(museumFormStores.handleAllActions.bind(museumFormStores));
window.dispatcher = dispatcher;
export default museumFormStores;