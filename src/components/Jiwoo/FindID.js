import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';

const Find = styled.div`
    position:absolute; top:130px; width:600px; height:450px; 
    padding:10px 50px 10px 50px; border:5px solid gray; border-radius:15px; 
    justify-content:center; align-items:center; 
    font-family: 'Pretendard-Regular';
`

const Find_write = styled.input`
    width:450px; height:40px; font-size:15px; margin:10px;
    border:1px solid black; border-radius:5px;
    box-shadow:2px 2px #e7e7e7;
`

const Find_button = styled.button`
    width: 300px; height: 40px; font-size: 15px; 
    border:0; border-radius:10px; background-color:skyblue;
    box-shadow:3px 3px #e7e7e7;
`

function FindID () {
    const [Data, setData]=useState([]);
    const [Inputs, setInputs] = useState({
        Name: '',
        Email: '',
        PhoneNum: ''
    });

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
        if(Name === '')
            alert("이름을 입력하세요.");
        else if(Email === '')
            alert("이메일을 입력하세요.")
        else if(PhoneNum === '')
            alert("전화번호를 입력하세요.");
        else {
            axios.get('/user/findID', {params: {
                nickname: Name,
                email: Email,
                phone_number: PhoneNum.toString()
                }
            }).then( response => {
                console.log(response);
                setData(response.data);
                alert("찾으시는 아이디는 " + response.data + " 입니다." );
            }).catch( error =>
                console.log(error)
            );
        }
    }
    
    return (
        <Find>
            <p /><h1>&nbsp;아이디 찾기</h1><p />
            <Find_write type="text" name="Name" value={Name} placeholder="이름" onChange={handleChange} />
            <p />
            <Find_write type="text" name="Email" value={Email} placeholder="이메일" onChange={handleChange} />
            <p />
            <Find_write type="text" name="PhoneNum" value={PhoneNum} placeholder="전화번호 ( ex) 010xxxxxxxx )" onChange={handleChange} />
            <p />
            <Find_button value="find-button" onClick={handleClick} >아이디 찾기</Find_button><p /><br />
            <Link to='/login'>로그인</Link>하시겠습니까?
        </Find>
    );
}

export default FindID;