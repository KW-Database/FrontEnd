import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { Link } from 'react-router-dom';
//import { Button } from 'react-bootstrap';
import '../../App.css';

const Login = styled.div`
    position:absolute; top:150px; width:600px; height:400px; 
    padding:10px 50px 10px 50px; border:5px solid gray; border-radius:15px; 
`

const User_Login = styled.input`
    width:500px; height:40px; font-size:15px;
    border:2px solid black; border-radius:5px; 
    box-shadow:2px 2px #e7e7e7;
`
const Loginbutton = styled.button`
    width:250px; height:40px; font-size:20px; background-color:skyblue;
    border:0; border-radius:20px; margin-top:20px; color:black;
    box-shadow:3px 3px #e7e7e7;
`
function LoginPage () {
    const [Input, setInput] = useState({
        username: '',
        password: ''
    })

    const HandleChange = (e) => {
        const { value, name } = e.target;
        setInput({
            ...Input,
            [name]: value
        });
    }
    return (
        <div className="Page">
            <Login>
                <form action="/loginProcess" method="post">
                    <br /><h1>로그인</h1><br />
                    <User_Login type="text" name="username" id="username" placeholder=" 아이디" ></User_Login>
                    <p />
                    <User_Login type="password" name="password" id="password" placeholder=" 비밀번호" ></User_Login>
                    <p />
                    <Loginbutton id="btn-login" className="btn btn-primary">로그인</Loginbutton><p />
                    <Link to='/findID' style={{ textDecoration : 'none', color : 'gray' }}>아이디 찾기</Link> / &nbsp;
                    <Link to='/findPW' style={{ textDecoration : 'none', color : 'gray' }}>비밀번호 찾기</Link> / &nbsp;
                    <Link to='/join' style={{ textDecoration : 'none', color : 'gray' }}>회원가입</Link>
                </form>
            </Login>
        </div>
    );
}

export default LoginPage;