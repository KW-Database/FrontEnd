import styled from "styled-components";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = styled.div`
  display: flex;
  flex-wrap : wrap;
  flex-direction:column;
  height: 15px; 
  border-bottom : 2px solid white;
  background-color: #ecf0f1;
  padding : 15px 20px;
`

const 글ID = styled.div`
    position: absolute; width: 50px; 
    display:flex; justify-content:center;
`

const Title = styled.div`
    position: absolute; left:100px; width: 450px; text-align:left;
`

const ID = styled.div`
    position: absolute; left:500px; width: 200px; 
    display:flex; justify-content:center;
`

const Date = styled.div`
    position: absolute; left:700px; width: 200px; 
    display:flex; justify-content:center;
`

const View = styled.div`
    position: absolute; left:900px; width: 140px; 
    display:flex; justify-content:center;
`

function EachPost(props) {
    const navigate = useNavigate();
    const seePost = () => {
        navigate(`/board/${props.글ID}`, {
            state: {
                글ID : props.글ID,
                title : props.Title,
                content : props.Content,
                ID : props.ID
            },
        });
    } 
    return (
        <Post onClick={seePost}>
            <글ID>{props.글ID}</글ID>  
            <Title>{props.Title}</Title>  
            <ID>{props.ID}</ID>
            <Date>{props.Date}</Date>
            <View>{props.View}</View>        
        </Post>
    );
}

export default EachPost;