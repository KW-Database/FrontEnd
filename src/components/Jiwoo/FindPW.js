import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const Find = styled.div`
    position:absolute; top:90px; width:600px; height:550px; 
    padding:10px 50px 10px 50px; border:5px solid gray; border-radius:15px; 
    justify-content:center; align-items:center; 
`

const Find_write = styled.input`
    width:450px; height:40px; font-size:15px; margin:10px;
    border:1px solid black; border-radius:5px;
`

const Find_button = styled.button`
    width: 300px; height: 40px; font-size: 15px; 
    border:1px solid black; border-radius:10px; background-color:skyblue;
`

function FindPW () {
    const [Inputs, setInputs] = useState({
        ID: '',
        Name: '',
        Email: '',
        PhoneNum: ''
    });
    const Navigate = useNavigate();

    const { ID, Name, Email, PhoneNum } = Inputs;

    const handleChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...Inputs,
            [name]: value
        });
    };

    const handleClick = (e) => {
        //ID, Name, Email, PhoneNum의 조합이 DB 안에 존재하면 해당하는 PW 출력, 아니면 에러메시지 출력
        alert("비밀번호 찾기");
        Navigate('/');
    }
    
    return (
        <Find>
            <h1>&nbsp;&nbsp;비밀번호 찾기</h1><p />
            <Find_write type="text" name="ID" value={ID} placeholder="아이디" onChange={handleChange} />
            <p />
            <Find_write type="text" name="Name" value={Name} placeholder="이름" onChange={handleChange} />
            <p />
            <Find_write type="text" name="Email" value={Email} placeholder="이메일" onChange={handleChange} />
            <p />
            <Find_write type="text" name="PhoneNum" value={PhoneNum} placeholder="전화번호 ( ex) 010-xxxx-xxxx )" onChange={handleChange} />
            <p />
            <Find_button value="find-button" onClick={handleClick} >비밀번호 찾기</Find_button><p />
            아이디가 기억나지 않는다면? <Link to='/findID'>아이디 찾기</Link><p />
            <Link to='/login'>로그인</Link>하시겠습니까?
        </Find>    
    );
}

export default FindPW;