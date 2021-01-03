import React, { Component } from 'react';
//Artinya semua fungsi dimasukkan ke className OtherActions
import * as OtherActions from '../actions/OtherActions';

class Login extends Component {

    doLogin() {
		OtherActions.doLogin();
    }

    render() {
        return(
            <div className="top-grids-2">
				<div className="w3l-main">
				   <h3>Login Here</h3>
					<form action="#" method="post">
						<input type="text" className="name" name="username" placeholder="Username" required="" />
						<input type="password" className="password" name="password" placeholder="Password" required="" />
						<input type="submit" value="LOGIN" onClick={ this.doLogin.bind(this) } />
					</form>	
				</div>
			</div>
        );
    }
}

export default Login;