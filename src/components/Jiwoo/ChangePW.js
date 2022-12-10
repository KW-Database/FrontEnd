import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';


const Change = styled.div`
    position:absolute; top:200px; width:600px; height:350px; 
    padding:10px 50px 10px 50px; border:5px solid gray; border-radius:15px; 
    justify-content:center; align-items:center; 
    font-family: 'Pretendard-Regular';
`

const Change_write = styled.input`
    width:450px; height:40px; font-size:15px; margin:10px;
    border:1px solid black; border-radius:5px;
    box-shadow:2px 2px #e7e7e7;
`

const Change_button = styled.button`
    width: 300px; height: 40px; font-size: 15px; 
    border:0; border-radius:10px; background-color:skyblue;
    box-shadow:3px 3px #e7e7e7;
`


function ChangePW({_ID}){
    const navigate = useNavigate();
    const [Inputs, setInputs]=useState({
        PW: '',
        confirmPW:''
    })

    const{PW, confirmPW}=Inputs;

    const handleChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...Inputs,
            [name]: value
        });
    };
    // console.log(props_ID)
    const handleSubmit=(e)=>{
        if(confirmPW==='')
            alert("비밀번호를 입력하세요.");
        else if(confirmPW === '')
            alert("비밀번호를 다시 입력하세요.");
        else if(confirmPW !== PW)
            alert("입력한 비밀번호가 서로 일치하지 않습니다.")
        else{
            axios.post(`/user/changePW`, 
            {
                id: _ID, //??
                pw: PW
    
            })
            .then(response=>{
                console.log(response)
                alert("비밀번호가 변경되었습니다.")
                navigate('/login');
            })
            .catch(error=>console.log(error))
        }
    }

    return(
        <Change>
            <p /><h1>&nbsp;새 비밀번호 입력하기</h1><p />
            <Change_write  type="password" name="PW" value={PW} placeholder="새 비밀번호 입력" onChange={handleChange} />
            <Change_write  type="password" name="confirmPW" value={confirmPW} placeholder="새 비밀번호 확인" onChange={handleChange} /><p /><br />
            <Change_button value="change-button" onClick={handleSubmit} >비밀번호 등록</Change_button>
        </Change>
    )
}

export default ChangePW;