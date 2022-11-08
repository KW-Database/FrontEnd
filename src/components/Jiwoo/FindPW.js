import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

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
        <div>
            <h1>&nbsp;&nbsp;비밀번호 찾기</h1><p />
            <input type="text" name="ID" value={ID} placeholder="Enter ID" id="find-write" onChange={handleChange}></input>
            <p />
            <input type="text" name="Name" value={Name} placeholder="Your Name" id="find-write" onChange={handleChange}></input>
            <p />
            <input type="text" name="Email" value={Email} placeholder="Your Email Address" id="find-write" onChange={handleChange}></input>
            <p />
            <input type="text" name="PhoneNum" value={PhoneNum} placeholder="Enter Your Phone Number ( - 포함 )" id="find-write" onChange={handleChange}></input>
            <p />
            <button value="find-button" id="find-button" onClick={handleClick}>아이디 찾기</button>
        </div>    
    );
}

export default FindPW;