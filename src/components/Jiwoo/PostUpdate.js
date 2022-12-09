import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Update = styled.div`
    position: absolute; width:1000px; height:480px; left:275px; top:150px; padding:50px; 
    text-align: left; background-color: white; font-size: 24px; 
    border-radius:10px; box-shadow:5px 5px lightgray;
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
                        //hitCount:3
                    }
                ).then(response=>setData(response.data),
                         alert("성공"))
                    .catch(error=>alert(error));
                    //console.log();
     
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