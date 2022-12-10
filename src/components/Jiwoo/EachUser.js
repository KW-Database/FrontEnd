import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const User = styled.div`
  display: flex;
  flex-wrap : wrap;
  flex-direction:column;
  height: 10px;
  justify-content: center;
  background-color: #ecf0f1;
  border-bottom:2px solid white;
  padding : 20px 30px;
  margin-bottom: 2px;
`;

const Name = styled.div`
    position: absolute; left:50px; width: 350px;
    display:flex; justify-content:center;
`

const ID = styled.div`
    position: absolute; left:450px; width: 350px; 
    display:flex; justify-content:center;
`

function EachUser(props) {
    const navigate = useNavigate();
    const move = () => {
        navigate(`/${props.id}/profile`, {state:{
            UserID: props.UserID,
            id: props.id
        }});
    }

    return (
        <User onClick={move}>
            <ID>{props.id}</ID>
            <Name>{props.name}</Name>
        </User>
    );
}

export default EachUser;