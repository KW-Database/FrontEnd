import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Navigate, useLocation } from 'react-router-dom';

const Update = styled.div`
    position: absolute; width:1000px; height:480px; left:275px; top:150px; padding:50px; 
    text-align: left; background-color: white; font-size: 24px; 
    border-radius:10px; box-shadow:5px 5px lightgray;
    font-family: 'Pretendard-Regular';
`

const Title = styled.input`
    position: absolute; width:800px; height:40px; left:150px; top: 50px;
    display:flex; justify-content: center; background-color:white; font-size:20px;
    border-radius:5px;
`

const Content = styled.textarea`
    position: absolute; width:800px; height:250px; left:150px; top: 140px;
    background-color:white; border:2px solid gray;
    font-size:20px; font-family: sans-serif, "바탕";
    border-radius:5px;
`

const Submit = styled.button`
    position: absolute; left: 830px; top: 420px; width:120px; height:40px;    
    border:0; border-radius:20px; 
    font-size:20px; color:white; background-color:skyblue;
    box-shadow:3px 3px #e7e7e7;
`

function PostUpdate(props) {
    const location=useLocation();
    const navigate = useNavigate();

    const [Data, setData] = useState([]);
    const [Inputs, setInputs] = useState({
        title: props._title,
        content: props._content
    });
    const { title, content } = Inputs;
    
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...Inputs,
            [name]: value
        });
    };

    const onSubmit = (e) => {
        if (window.confirm('글을 수정하시겠습니까?'))
        {
            // They clicked Yes
            if(title === '')
                alert("제목을 입력하세요.");
            else if(content === '')
                alert("내용을 입력하세요.");
            else {
                  //console.log(location.state.postId);
                 // console.log(new Date().toISOString().slice(0, 19).replace('T', ' '));
                     
                  axios.post(`/agora/${location.state.postId}/update`,
                    {
                        postId: props._postId,
                        id:props._id,
                        title:title,
                        contents:content,
                        //postTime:new Date().toISOString().slice(0, 19).replace('T', ' '),
                        hitCount: props._view
                    }
                ).then(response=>{ 
                    console.log(response.data) 
                    navigate(`/board/${props._postId}`, {
                        state: {
                            User: props.User,
                            postId : props._postId,
                            title : title,
                            content : content,
                            ID : props._id,
                            Date : new Date().toISOString().slice(0, 19).replace('T', ' '),
                            View : props._view
                        },
                    });
                })
                .catch(error=>alert(error));     
                //redirect
                e.preventDefault();
            }
        } else {
            // They clicked no
        }    
    }

    return(
        <div>
            <Update>
                제목 : <Title type="text" name="title" value={title} placeholder="제목" onChange={onChange} /> <p /><br />
                내용 : <Content name="content" value={content} placeholder="내용" onChange={onChange} />
                <Submit type="submit" value="Submit" onClick={onSubmit}>수정하기</Submit>
            </Update>
        </div>
    );

    console.log(content);



}

export default PostUpdate;