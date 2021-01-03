import React, { Component } from 'react';
//Artinya semua fungsi dimasukkan ke className OtherActions
import * as OtherActions from '../actions/OtherActions';

class Footer extends Component {

    render() {
        return(
          <footer className="footer">
                        <div className="container-fluid">
                            <p className="copyright pull-right">
                                &copy; <script>document.write(new Date().getFullYear())</script> <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
                            </p>
                        </div>
            </footer>
        );
    }
}

export default Footer;