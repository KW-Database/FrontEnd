import styled from "styled-components";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Recommend = styled.div`
  display: flex;
  flex-wrap : wrap;
  flex-direction:column;
  justify-content:center;
  background-color: #ecf0f1;
  height:10px; 
  border-bottom: 2px solid white;
  padding : 20px 30px;
  margin-bottom: 2px;
  font-family: 'Pretendard-Regular';
`;

const Name = styled.div`
    position: absolute; left:50px; width: 350px; 
    display:flex; text-align:left;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
`

const Price = styled.div`
    position: absolute; left:420px; width: 200px; 
    display:flex; justify-content:center;
`

const Diff = styled.div`
    position: absolute; left:680px; width: 150px; 
    display:flex; align-items:center; text-align:left;
    color: ${props => (props.dif > 0) ? 'red' : 'skyblue'}
`

const Date = styled.div`
    position: absolute; left:840px; width: 150px; 
    display:flex; justify-content:center;
`


function EachRecent2(props) {
    const navigate = useNavigate();
    const seeRecent2 = () => {
        navigate(`/${props.UserID}/exchange`, {state:{
                UserID:props.UserID, itemCode:props.itemCode, itemName:props.name
            }}
        );
    }
    return (
        <Recommend onClick={seeRecent2}>
            <Name>{props.name}</Name>
            <Price>{props.price.toLocaleString('en-AU')}</Price>
            <Diff dif={props.diffrate}>▲ {props.diff.toLocaleString('en-AU')} ({props.diffrate}%)</Diff> 
            <Date>{props.date}</Date>      
        </Recommend>
    );
}

export default EachRecent2;