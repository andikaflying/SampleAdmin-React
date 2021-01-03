import React, { Component } from 'react';
//Artinya semua fungsi dimasukkan ke className OtherActions
import * as OtherActions from '../actions/OtherActions';

class Sidebar extends Component {

    render() {
        return(
           <div className="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">
                <div className="sidebar-wrapper">
                        <div className="logo">
                            <a href="http://www.creative-tim.com" className="simple-text">
                                Admin Page
                            </a>
                        </div>

                        <ul className="nav">
                            <li className="active">
                                <a href="#">
                                    <i className="pe-7s-note2"></i>
                                    <p>SEA - Museum</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="pe-7s-note2"></i>
                                    <p>SEA - Museum Gallery</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="pe-7s-note2"></i>
                                    <p>SEA - User</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="pe-7s-note2"></i>
                                    <p>IC - Culture</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="pe-7s-note2"></i>
                                    <p>IC - Culture Gallery</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="pe-7s-note2"></i>
                                    <p>IC - User</p>
                                </a>
                            </li>
                        </ul>
                </div>
            </div> 
        );
    }
}

export default Sidebar;