import styled from "styled-components";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Recommend = styled.div`
  display: flex;
  flex-wrap : wrap;
  flex-direction:column;
  background-color: #ecf0f1;
  justify-content:center;
  height:10px; 
  border : 0;
  padding : 20px 30px;
  margin-bottom: 2px;
  font-family: 'Pretendard-Regular';
`;

const Name = styled.div`
    position: relative; left:-5px; width: 120px; 
    display:flex; align-items:center; text-align:left;
`

const Price = styled.div`
    position: absolute; left:150px; width: 80px; 
    display:flex; align-items:center; text-align:left;
`

const Diff = styled.div`
    position: absolute; left:230px; width: 130px; 
    display:flex; align-items:center; text-align:left;
    color: ${props => (props.dif > 0) ? 'red' : 'skyblue'}
`

const Date = styled.div`
    position: absolute; left:350px; width: 100px; 
    display:flex; justify-content:center;
`

function EachRecent(props) {
    const navigate = useNavigate();
    const seeRecent = () => {
        navigate(`/${props.UserID}/exchange`);
    }     
    return (
        <Recommend onClick={seeRecent}>
            <Name>{props.name}</Name>
            <Price>{props.price.toLocaleString('en-AU')}</Price>
            <Diff dif={props.diffrate}>▲ {props.diff.toLocaleString('en-AU')} ({props.diffrate}%)</Diff>   
            <Date>{props.date}</Date>      
        </Recommend>
    );
}

export default EachRecent;