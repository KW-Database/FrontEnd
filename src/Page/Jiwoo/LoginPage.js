import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class LoginPage extends Component {
    render() {
        return (
            <div className="Page">
                <div id="Login">
                    <h1>Log in</h1>
                    <h4>Email address or user name</h4>
                    <input type="text" placeholder="ID" id="UserID"></input>
                    <p />
                    <h4>Password</h4>
                    <input type="password" placeholder="Password" id="UserPW"></input>
                    <p />
                    <Link to="/"><button id="loginbutton">Log in</button></Link><p />
                    <Link to='/findID'>Forget your ID</Link> / <Link to='/findPW'>Forget your password</Link><p />
                    Don't have an account? <Link to='/join'>Sign up</Link>
                </div>
            </div>
        );
    }
}

export default LoginPage;