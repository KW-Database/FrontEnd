import styled from "styled-components";
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = styled.div`
  display: flex;
  flex-wrap : wrap;
  flex-direction:column;
  height: 10px; 
  justify-content: center;
  border-bottom : 2px solid white;
  background-color: #ecf0f1;
  padding : 20px 30px;
  font-family: 'Pretendard-Regular';
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
        axios.post(`/agora/${props.postId}`
        ).then(response=>{ 
            console.log(response.data)
        })
        .catch(error=>alert(error));  

        navigate(`/board/${props.postId}`, {
            state: {
                User : props.User,
                postId : props.postId,
                title : props.Title,
                content : props.Content,
                ID : props.ID,
                Date : props.Date,
                View : props.View+1
            },
        });
    } 
    return (
        <Post onClick={seePost}>
            <글ID>{props.num}</글ID>  
            <Title>{props.Title}</Title>  
            <ID>{props.ID}</ID>
            <Date>{props.Date}</Date>
            <View>{props.View}</View>        
        </Post>
    );
}

export default EachPost;