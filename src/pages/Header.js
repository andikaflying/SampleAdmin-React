import React, { Component } from 'react';
//Artinya semua fungsi dimasukkan ke className OtherActions
import * as OtherActions from '../actions/OtherActions';

class Header extends Component {

    render() {
        return(
           <nav className="navbar navbar-default navbar-fixed">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">{ this.props.title } </a>
                            </div>
                            <div className="collapse navbar-collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <p>
                                                Account &nbsp;
                                                <b className="caret"></b>
                                            </p>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Another action</a></li>
                                            <li className="divider"></li>
                                            <li><a href="#">Logout</a></li>
                                        </ul>
                                    </li>
                                    <li className="separator hidden-lg hidden-md"></li>
                                </ul>
                            </div>
                        </div>
            </nav>
        );
    }
}

export default Header;
