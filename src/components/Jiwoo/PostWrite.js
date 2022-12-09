import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { redirect } from 'react-router-dom';

const Write = styled.div`
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
    background-color:white; font-size:20px; font-family: sans-serif, "바탕";
    border-radius:5px;
`

const Submit = styled.button`
    position: absolute; left: 830px; top: 420px; width:120px; height:40px;    
    border:0; border-radius:20px; box-shadow:3px 3px #e7e7e7;
    font-size:20px; color:white; background-color:skyblue;
`

const UserInfo = {ID: "id_a"}; //

function PostWrite (props) {
    const [Data, setData] = useState([]);
    const [Inputs, setInputs] = useState({
        title: '',
        content: ''
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
        if (window.confirm('글을 등록하시겠습니까?'))
        {
            // They clicked Yes
            if(title === '')
                alert("제목을 입력하세요.");
            else if(content === '')
                alert("내용을 입력하세요.");
            else {
                axios.post(`/agora/write`, 
                    {
                       // post_id:500,
                        id:UserInfo.ID,
                        title:title,
                        contents:content,
                        postTime:new Date().toISOString().slice(0, 19),//.replace('T', ' '),
                        hitCount:0
                    }

                )
                .then(response=>setData(response.data),
                alert("성공"))
           .catch(error=>alert(error));
                alert("게시글이 등록되었습니다.");
                //redirect
                e.preventDefault();
            }
        } else {
            // They clicked no
        }    
    }

    return(
        <div>
            <Write>
                제목 : <Title type="text" name="title" value={title} placeholder="제목" onChange={onChange} /> <p /><br />
                내용 : <Content name="content" value={content} placeholder="내용" onChange={onChange} />
                <Submit type="submit" value="Submit" onClick={onSubmit}>등록</Submit>
            </Write>
        </div>
    );
}

export default PostWrite;