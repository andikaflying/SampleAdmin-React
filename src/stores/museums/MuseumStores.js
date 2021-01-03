import { EventEmitter } from "events";
import React, { Component}  from 'react';

//dispatcher di sini objek
import dispatcher from "../../dispatcher";

class MuseumStores extends EventEmitter {
    constructor() {
        super();
        this.museums = [
            {
                id: 50,
                name: "Museum Geology",
                country: "Indonesia",
                totalRating: 50,
                address: "Unknown Address",
                phone: "+62312321321",
                youtubeCode: "w211232a",
                imageCover: "http://d2rormqr1qwzpz.cloudfront.net/photos/2013/08/26/52379-samsung-ssd-840-840-pro-g.jpg",
                websiteLink: "www.google.com"
            },
            {
                id: 51,
                name: "Lee Kuan Yew Museum",
                country: "Singapore",
                totalRating: 50,
                address: "Unknown Address",
                phone: "+62312321321",
                youtubeCode: "w211232a",
                imageCover: "http://d2rormqr1qwzpz.cloudfront.net/photos/2013/08/26/52379-samsung-ssd-840-840-pro-g.jpg",
                websiteLink: "www.google.com"
            },
            {
                id: 52,
                name: "Museum Sri Baduga",
                country: "Indonesia",
                totalRating: 50,
                address: "Unknown Address",
                phone: "+62312321321",
                youtubeCode: "w211232a",
                imageCover: "http://d2rormqr1qwzpz.cloudfront.net/photos/2013/08/26/52379-samsung-ssd-840-840-pro-g.jpg",
                websiteLink: "www.google.com"
            }
        ];
        this.countryList = ["Indonesia", "Malaysia", "Singapore", "Cambodia", "Myanmar", "Thailand", "Vietnam", "Timor Leste", "Laos", "Philliphines" ];
    }

    getAllMuseums() {
        return this.museums;
    }

    getCountryList() {
        return this.countryList;
    }

    getMuseum(id) {
        for (var i = 0; i < this.museums.length; i++) {
            if(id == this.museums[i].id ) {
                return this.museums[i];
            }
        } 

    }

    addMuseum() {

    }

    updateMuseum() {

    }

    deleteMuseum() {

    }

    //Dispatcher
    handleAllActions(action) {
        switch(action.name) {
            case "GET_ALL_MUSEUMS": {
                this.getAllMuseums();
            }
        }
    }
}

const museumStores = new MuseumStores;
//Dispatcher
dispatcher.register(museumStores.handleAllActions.bind(museumStores));
window.dispatcher = dispatcher;
export default museumStores;