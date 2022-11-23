import React, { useState } from 'react';
import styled from 'styled-components';

const Write = styled.div`
    position: absolute; width:900px; height:400px; left:275px; top:150px; padding:50px; 
    text-align: left; background-color: white; font-size: 24px; 
`

const Title = styled.input`
    position: absolute; width:800px; height:40px; left:150px; top: 40px;
    display:flex; justify-content: center; background-color:white; font-size:20px;
`

const Content = styled.textarea`
    position: absolute; width:800px; height:250px; left:150px; top: 140px;
    background-color:white; font-size:20px; font-family: sans-serif, "바탕";
`

const Submit = styled.button`
    position: absolute; left: 830px; top: 420px; width:120px; height:40px;    
    border:0; border-radius:20px; 
    font-size:20px; color:white; background-color:skyblue;
`

function PostWrite () {
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
        if(title === '')
            alert("제목을 입력하세요.");
        else if(content === '')
            alert("내용을 입력하세요.");
        else {
            alert("게시글이 작성되었습니다.");
            e.preventDefault();
            //DB에 넣는 코드 추가
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