import React, { Component } from 'react';
//Artinya semua fungsi dimasukkan ke className OtherActions
import * as OtherActions from '../actions/OtherActions';

class Logout extends Component {

    constructor() {
        super();
    }
    
    doLogout() {
		OtherActions.doLogout();
    }

}

export default Logout;