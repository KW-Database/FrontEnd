import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import '../../App.css';

const Login = styled.div`
    position:absolute; top:100px; width:500px; height:450px; 
    padding:10px 50px 10px 50px; border:5px solid gray; border-radius:15px; justify-content:center;
`

const User_Login = styled.input `
    width:500px; height:35px; font-size:15px;
    border:2px solid black; border-radius:5px; 
`
const Loginbutton = styled.button `
    width:70%; height:50px; font-size:20px; background-color:solid gray;
    border:0; border-radius:20px; margin-top:20px; color:black;
`

class LoginPage extends Component {
    render() {
        return (
            <div className="Page">
                <Login>
                    <h1>Log in</h1>
                    <h4>Email address or user name</h4>
                    <User_Login type="text" placeholder="ID"></User_Login>
                    <p />
                    <h4>Password</h4>
                    <User_Login type="password" placeholder="Password" ></User_Login>
                    <p />
                    <Link to="/" style={{ textDecoration : 'none', color : 'gray' }}><Loginbutton>Log in</Loginbutton></Link><p />
                    <Link to='/findID' style={{ textDecoration : 'none', color : 'gray' }}>Forget your ID</Link> / <Link to='/findPW' style={{ textDecoration : 'none', color : 'gray' }}>Forget your password</Link><p />
                    Don't have an account? <Link to='/join'>Sign up</Link>
                </Login>
            </div>
        );
    }
}

export default LoginPage;