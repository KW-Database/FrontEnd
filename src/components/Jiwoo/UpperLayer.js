import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/icomoon/home';

const Upper_layer = styled.div`
    position: fixed; z-index:1; width: 1540px; height: 70px; left: 0px; top: 0px;
    display: flex; align-items: center; background-color:white;
    font-family: 'Ycomputer-Regular';
`

const Title = styled.div`
    position: absolute; width: 1200px; height:70px; left:150px;
    display: flex; align-items: center; justify-content: center;
`

const Logout = styled.button`
    position: absolute; left: 1400px; top: 15px; width:100px; height:40px;    
    border:0; border-radius:20px; 
    font-size:18px; color:white; background-color:skyblue;
    box-shadow:2px 2px lightgray;
`

function UpperLayer() {
    const [Id, setId] = useState("");

    useEffect(()=> {
        axios.get('/profile/username')
        .then(response => {
            setId(response.data)
        })
        .catch(error => console.log(error))
    }, [])

    if(Id === "admin") {
        return( 
            <form action="/logout" method="post">
                <Upper_layer>
                <Link to="/" style={{ textDecoration : 'none', color : 'gray' }}><Icon icon={home} id="HomeButton" size="50" /></Link>
                <Title>
                    <Link to="/admin" state={{UserID:Id}} style={{ textDecoration : 'none', color : 'gray' }}><h2>사용자 관리</h2></Link>
                    <Link to="/manage" state={{UserID:Id}} style={{ textDecoration : 'none', color : 'gray' }}><h2>주식회사 관리</h2></Link>
                    <Link to="/board" state={{UserID:Id}} style={{ textDecoration : 'none', color : 'gray' }}><h2>토론 게시판</h2></Link>
                </Title>
                <Logout id="btn-login" className="btn btn-primary" >로그아웃</Logout>
            </Upper_layer>
            </form> 
        );
    } else {
        return (
                <form action="/logout" method="post">
                    <Upper_layer>
                    <Link to="/" style={{ textDecoration : 'none', color : 'gray' }}><Icon icon={home} id="HomeButton" size="50" /></Link>
                    <Title>
                        <Link to={`/${Id}/mywallet`} state={{UserID:Id}} style={{ textDecoration : 'none', color : 'gray' }}><h2>내 보유자산</h2></Link>
                        <Link to={`/${Id}/likelist`} state={{UserID:Id}} style={{ textDecoration : 'none', color : 'gray' }}><h2>내 관심주식</h2></Link>
                        <Link to="/board" state={{UserID:Id}} style={{ textDecoration : 'none', color : 'gray' }}><h2>토론 게시판</h2></Link>
                        <Link to={`/${Id}/profile`} state={{id:Id, UserID:Id}} style={{ textDecoration : 'none', color : 'gray' }}><h2>내 프로필</h2></Link>
                    </Title>
                    <Logout id="btn-login" className="btn btn-primary" >로그아웃</Logout>
                    </Upper_layer>
                </form>
        ); 
    }
}

export default UpperLayer;