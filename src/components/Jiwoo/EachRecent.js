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
`;

const Name = styled.div`
    position: relative; left:10px; width: 130px; 
    display:flex; justify-content:left;
`

const Price = styled.div`
    position: absolute; left:140px; width: 80px; 
    display:flex; justify-content:center;
`

const Diff = styled.div`
    position: absolute; left:220px; width: 130px; 
    display:flex; justify-content:center;
    color: ${props => (props.dif > 0) ? 'red' : 'skyblue'}
`

const Date = styled.div`
    position: absolute; left:350px; width: 100px; 
    display:flex; justify-content:center;
`

const UserID = "jiwoo0629";

function EachRecent(props) {
    const navigate = useNavigate();
    const seeRecent = () => {
        navigate(`/${UserID}/exchange`);
    }     
    return (
        <Recommend onClick={seeRecent}>
            <Name>{props.name}</Name>
            <Price>{props.price}</Price>
            <Diff dif={props.diffrate}>▲ {props.diff} ({props.diffrate}%)</Diff>   
            <Date>{props.date}</Date>      
        </Recommend>
    );
}

export default EachRecent;