import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

const Joinform = styled.div`
    position: absolute; width: 440px; height: 560px; left: 550px; top: 50px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const Join_write = styled.input`
    width:400px; height:35px; font-size:15px; 
    border:1px solid black; border-radius:5px;
`

const Join_select = styled.select`
    width:150px; height:35px; font-size:15px; 
    border:1px solid black; border-radius:5px; font-color:solid gray;
`

const Dup_test = styled.button`
    position:absolute; left:450px;
    width: 100px; height:35px;
    border:0; border-radius:8px; background-color:lightgray;
`

const Sign_up = styled.input`
    width: 200px; height: 35px; 
    border:0; border-radius:10px; background-color:skyblue;   
`

function JoinForm () {
    const navigate = useNavigate();
    const [Data, setData]=useState([]);
    const [Dup, setDup] = useState(false);
    const [Inputs, setInputs] = useState({
        ID: '',
        PW: '',
        confirmPW: '',
        Name: '',
        Age: '',
        Email: '',
        PhoneNum: '',
        Sex: ''
    });

    const { ID, PW, confirmPW, Name, Age, Email, PhoneNum, Sex } = Inputs;

    const handleChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...Inputs,
            [name]: value
        });
    };

    const handleDup = (e) => {
        //DB에 API 보내서 중복여부확인 
        //-> 존재하면 dup=true, alert("아이디가 이미 존재합니다.")
        //-> 존재안하면 dup=false, alert("사용가능한 아이디입니다.")
        //
        axios.get('/user/signup/DupId', {params: 
                {id: ID}
            }).then( response => {
                console.log(response.data)
                if(response.data === 'OK') {
                    setDup(false);
                    alert("사용 가능한 아이디입니다.");
                } else {
                    setDup(true);
                    alert("아이디가 이미 존재합니다.")
                }
            }).catch( error => {
                console.log(error);
            });
            
    }
    
    const handleSubmit = (e) => {
        if(ID === '')
            alert("아이디를 입력하세요.");
        else if(Dup === true)
            alert("이미 존재하는 아이디입니다. 아이디를 다시 입력하세요.")
        else if(PW === '')
            alert("비밀번호를 입력하세요.");
        else if(confirmPW === '')
            alert("비밀번호를 다시 입력하세요.");
        else if(confirmPW !== PW)
            alert("입력한 비밀번호가 서로 일치하지 않습니다.")
        else if(Name === '')
            alert("이름을 입력하세요.");
        else if(Age === '')
            alert("나이를 입력하세요.");
        else if(Email === '')
            alert("이메일을 입력하세요.");
        else if(PhoneNum === '' || PhoneNum.length !== 11)
            alert("올바른 형식의 전화번호를 입력하세요.");
        else if(Sex === '')
            alert("성별을 선택하세요.");
        else {
            //DB에 넣는 코드 추가
            axios.post('/user/signup', {
                id:ID, pw:PW, nickname: Name, age: Age, email: Email, phoneNumber: PhoneNum, sex: Sex, adminAuth:"0"
            }).then( response => {
                console.log(response);
                alert("회원가입이 완료되었습니다.");
                navigate('/login');
            }).catch(error => {
                console.log(error);
            })
            
            e.preventDefault();
        }
    }
    
    return (
        <Joinform>
            <h1>&nbsp;회원가입</h1><p />
            <Join_write type="text" name="ID" value={ID} placeholder="아이디" onChange={handleChange} />
            <Dup_test onClick={handleDup}>중복확인</Dup_test>
            <p />
            <Join_write type="password" name="PW" value={PW} placeholder="비밀번호" onChange={handleChange} />
            <p />
            <Join_write type="password" name="confirmPW" value={confirmPW} placeholder="비밀번호 확인" onChange={handleChange} />
            <p />
            <Join_write type="text" name="Name" value={Name} placeholder="이름" onChange={handleChange} />
            <p />
            <Join_write type="text" name="Age" value={Age} placeholder="나이 (숫자만)" onChange={handleChange} />
            <p />
            <Join_write type="text" name="Email" value={Email} placeholder="이메일" onChange={handleChange} />
            <p />
            <Join_write type="text" name="PhoneNum" value={PhoneNum} placeholder="전화번호 ( ex) 010xxxxxxxx )" onChange={handleChange} />
            <p />
            <Join_select name="Sex" value={Sex}  onChange={handleChange}>
                <option value="">성별</option>
                <option value="M">남</option>
                <option value="F">여</option>
            </Join_select>
            <p />
            <Sign_up type="submit" value="회원가입" id="sign-up" onClick={handleSubmit} />
            <p />
            <br />
            Already have an Account? <Link to='/login'>Sign In</Link>    
        </Joinform> 
    );
}

export default JoinForm;
