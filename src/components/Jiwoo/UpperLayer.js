import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../App.css';
import Home from '../../images/Home.jpg';

const Upper_layer = styled.div`
    position: fixed; z-index:1; width: 1540px; height: 70px; left: 0px; top: 0px;
    display: flex; align-items: center; background-color:white;
`

const Home_button = styled.img`
    position: absolute; width: 60px; height: 50px; top: -1px;
    padding: 12px 32px; border-radius: 8px;
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

const UserData = {
    ID: "admin"
}

function UpperLayer() {
    if(UserData.ID === "admin") {
        return( 
            <Upper_layer>
                <Link to="/" style={{ textDecoration : 'none', color : 'gray' }}><Home_button src={Home} alt="Home" /></Link>
                <Title>
                    <Link to="/manage" style={{ textDecoration : 'none', color : 'gray' }}><h2>주식회사 관리</h2></Link>
                    <Link to="/board" style={{ textDecoration : 'none', color : 'gray' }}><h2>토론 게시판</h2></Link>
                </Title>
                <Link to="/login" style={{ textDecoration : 'none', color : 'gray' }}><Logout value="logout">Logout</Logout></Link>
            </Upper_layer>
        );
    } else if(UserData.ID === ":user") {
        return (
            <Upper_layer>
                <Link to="/" style={{ textDecoration : 'none', color : 'gray' }}><Home_button src={Home} alt="Home" /></Link>
                <Title>
                    <Link to="/" style={{ textDecoration : 'none', color : 'gray' }}><h2>매수/매도</h2></Link>
                    <Link to="/" style={{ textDecoration : 'none', color : 'gray' }}><h2>내 보유자산</h2></Link>
                    <Link to="/:user/likelist" style={{ textDecoration : 'none', color : 'gray' }}><h2>내 관심주식</h2></Link>
                    <Link to="/board" style={{ textDecoration : 'none', color : 'gray' }}><h2>토론 게시판</h2></Link>
                    <Link to="/:user/profile" style={{ textDecoration : 'none', color : 'gray' }}><h2>내 프로필</h2></Link>
                </Title>
                <Link to="/login" style={{ textDecoration : 'none', color : 'gray' }}><Logout value="logout">Logout</Logout></Link>
            </Upper_layer>
        ); 
    }
}

export default UpperLayer;