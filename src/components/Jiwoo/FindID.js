import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const Find = styled.div`
    position:absolute; top:100px; width:500px; height:500px; 
    padding:10px 50px 10px 50px; border:5px solid gray; border-radius:15px; 
    justify-content:center; align-items:center; 
`

const Find_write = styled.input`
    width:400px; height:50px; font-size:20px; margin:20px;
    border:1px solid black; border-radius:5px;
`

const Find_button = styled.button`
    width: 300px; height: 40px; font-size: 15px; 
    border-radius:10px; background-color:skyblue;
`

function FindID () {
    const [Inputs, setInputs] = useState({
        Name: '',
        Email: '',
        PhoneNum: ''
    });
    const Navigate = useNavigate();

    const { Name, Email, PhoneNum } = Inputs;

    const handleChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...Inputs,
            [name]: value
        });
    };

    const handleClick = (e) => {
        //Name, Email, PhoneNum의 조합이 DB 안에 존재하면 해당하는 ID 출력, 아니면 에러메시지 출력
        alert("아이디 찾기");
        Navigate('/login');
    }
    
    return (
        <Find>
            <h1>&nbsp;&nbsp;아이디 찾기</h1><p />
            <Find_write type="text" name="Name" value={Name} placeholder="Your Name" onChange={handleChange} />
            <p />
            <Find_write type="text" name="Email" value={Email} placeholder="Your Email Address" onChange={handleChange} />
            <p />
            <Find_write type="text" name="PhoneNum" value={PhoneNum} placeholder="Enter Your Phone Number ( - 포함 )" onChange={handleChange} />
            <p />
            <Find_button value="find-button" onClick={handleClick} >아이디 찾기</Find_button><p />
            Do you want to <Link to='/login'>Sign In</Link>?
        </Find>
    );
}

export default FindID;