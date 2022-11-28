import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/icomoon/home';

const Upper_layer = styled.div`
    position: fixed; z-index:1; width: 1540px; height: 70px; left: 0px; top: 0px;
    display: flex; align-items: center; background-color:white;
`

const Title = styled.div`
    position: absolute; width: 1200px; height:70px; left:150px;
    display: flex; align-items: center; justify-content: center;
`

const Logout = styled.button`
    position: absolute; left: 1400px; top: 15px; width:100px; height:40px;    
    border:0; border-radius:20px; 
    font-size:20px; color:white; background-color:skyblue;
`

const UserID = "jiwoo0629";

function UpperLayer() {
    if(UserID === "") {
        return(
            <Upper_layer>
                <Link to="/" style={{ textDecoration : 'none', color : 'gray' }}><Icon icon={home} id="HomeButton" size="50" /></Link>
                <Title>
                    <Link to="/board" style={{ textDecoration : 'none', color : 'gray' }}><h2>토론 게시판</h2></Link>
                </Title>
                <Link to="/login" style={{ textDecoration : 'none', color : 'gray' }}><Logout value="logout">로그인</Logout></Link>
            </Upper_layer>
        );
    } else if(UserID === "admin") {
        return( 
            <Upper_layer>
                <Link to="/" style={{ textDecoration : 'none', color : 'gray' }}><Icon icon={home} id="HomeButton" size="50" /></Link>
                <Title>
                    <Link to="/manage" style={{ textDecoration : 'none', color : 'gray' }}><h2>주식회사 관리</h2></Link>
                    <Link to="/board" style={{ textDecoration : 'none', color : 'gray' }}><h2>토론 게시판</h2></Link>
                </Title>
                <Link to="/login" style={{ textDecoration : 'none', color : 'gray' }}><Logout value="logout">로그아웃</Logout></Link>
            </Upper_layer>
        );
    } else {
        return (
            <Upper_layer>
                <Link to="/" style={{ textDecoration : 'none', color : 'gray' }}><Icon icon={home} id="HomeButton" size="50" /></Link>
                <Title>
                    <Link to={`/${UserID}/exchange`} style={{ textDecoration : 'none', color : 'gray' }}><h2>매수/매도</h2></Link>
                    <Link to={`/${UserID}/mywallet`} style={{ textDecoration : 'none', color : 'gray' }}><h2>내 보유자산</h2></Link>
                    <Link to={`/${UserID}/likelist`} style={{ textDecoration : 'none', color : 'gray' }}><h2>내 관심주식</h2></Link>
                    <Link to="/board" style={{ textDecoration : 'none', color : 'gray' }}><h2>토론 게시판</h2></Link>
                    <Link to={`/${UserID}/profile`} style={{ textDecoration : 'none', color : 'gray' }}><h2>내 프로필</h2></Link>
                </Title>
                <Link to="/login" style={{ textDecoration : 'none', color : 'gray' }}><Logout value="logout">로그아웃</Logout></Link>
            </Upper_layer>
        ); 
    }
}

export default UpperLayer;