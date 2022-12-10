import styled from "styled-components";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Recommend = styled.div`
  display: flex;
  flex-wrap : wrap;
  flex-direction:column;
  justify-content: center;
  background-color: #ecf0f1;
  height:10px; 
  border : 0;
  padding : 20px 30px;
  margin-bottom: 2px;
`;

const Name = styled.div`
    position: absolute; left:50px; width: 150px; 
    display:flex; justify-content:left;
`

const Price = styled.div`
    position: absolute; left:180px; width: 120px; 
    display:flex; justify-content:center;
`

const Diff = styled.div`
    position: absolute; left:320px; width: 120px; 
    display:flex; justify-content:center;
    color: ${props => (props.dif > 0) ? 'red' : 'skyblue'}
`


function EachRecommend(props) {
    const navigate = useNavigate();
    const seeRecommend = () => {
        navigate(`/${props.UserID}/exchange`, {state:{
            UserID: props.UserID, itemCode:props.itemCode, itemName:props.name}
        });
    } 
    
    function Arrow() {
        if(props.diffrate > 0)
            return '▲';
        else if(props.diffrate < 0)
            return '▼';
        else   
            return '-';
    }

    return (
        <Recommend onClick={seeRecommend}>
            <Name>{props.name}</Name>
            <Price>{props.price.toLocaleString('en-AU')}</Price>
            <Diff dif={props.diffrate}>{Arrow()} {props.diff.toLocaleString('en-AU')} ({props.diffrate}%)</Diff>    
        </Recommend>
    );
}

export default EachRecommend;