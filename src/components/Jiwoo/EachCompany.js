import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Company = styled.div`
  display: flex;
  flex-wrap : wrap;
  flex-direction:column;
  height: 10px; 
  justify-content:center;
  border-bottom : 2px solid white;
  background-color: #ecf0f1;
  padding : 20px 30px;
`

const Name = styled.div`
    position: absolute; left:50px; width: 300px; 
    display:flex; text-align:left;
`

const Price = styled.div`
    position: absolute; left:350px; width: 200px; 
    display:flex; justify-content:center;
`

const Diff = styled.div`
    position: absolute; left:550px; width: 250px; 
    display:flex; justify-content:center;
    color: ${props => (props.dif > 0) ? 'red' : 'skyblue'};
`

const Like = styled.div`
    position: absolute; left:850px; width: 100px; 
    display:flex; text-align:left;
`

const LikeButton= styled.button`
    position: absolute; left:950px; width:25px; height:45px;
    font-size:15px; font-weight:700; margin-top:1px;
    border:0; border-radius:3px; 
    display:flex; justify-content:center; align-items:center;
`

function EachCompany(props) {
    const navigate = useNavigate();
    const move = () => {
        navigate('/:user/exchange');
        //매수/매도 화면으로 이동하도록 수정
    }

    const handleClick = (e) => {
        if (window.confirm('관심 목록에서 삭제하시겠습니까?'))
        {
            // They clicked Yes
            alert('삭제되었습니다.')
        }
        else
        {
            // They clicked no
        }
    }
    
    return (
        <div>
            <LikeButton onClick = {handleClick}>X</LikeButton>
            <Company onClick={move}>
                <Name>{props.name}</Name>
                <Price>{props.endprice}</Price>
                <Diff dif={props.diffrate}>▲ {props.diff} ({props.diffrate}%)</Diff>  
                <Like>♥ {props.like}</Like>
            </Company>
        </div>    
    );
}

export default EachCompany;