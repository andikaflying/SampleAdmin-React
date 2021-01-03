import React, { Component } from 'react';
//Artinya semua fungsi dimasukkan ke className OtherActions
import * as OtherActions from '../actions/OtherActions';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

class MainView extends Component {

    render() {
        return(
            <div className="wrapper">
                <Sidebar />
                <div className="main-panel">
                    <Header title={this.props.title} />
                    { this.props.page }
                    <Footer />                    
                </div>
            </div> 
        );
    }

}

export default MainView;