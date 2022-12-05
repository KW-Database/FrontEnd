import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
    const [Data, setData]=useState([]);
    const [Dup, setDup] = useState([]);
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
        axios(
            {
                url:`/signup/DupId`,
                method: 'get',
                data: {id: ID},
                baseURL: 'http://localhost:8080',
            }
            ).then(function (response) {
                setDup(response.data);
                //alert("아이디가 이미 존재합니다.")
            }).catch(function (error) {
                //alert("사용가능한 아이디입니다");
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
        else if(PhoneNum === '' || PhoneNum.length !== 13 || (PhoneNum[3] !== '-' && PhoneNum[8] !== '-'))
            alert("올바른 형식의 전화번호를 입력하세요.");
        else if(Sex === '')
            alert("성별을 선택하세요.");
        else {
            //DB에 넣는 코드 추가
            axios(
                {
                    url:`/signup`,
                    method:'post',
                    data:{id:ID, pw:PW, name: Name, age: Age, email: Email, phoneNum: PhoneNum, sex: Sex}, //??adminauth
                    baseURL:'http://localhost:8080',
                }
            ).then(function (response) {
                //alert("성공")
            }).catch(function (error) {
                //alert(error);
            })
            alert("회원가입이 완료되었습니다.");
            e.preventDefault();
        }
    }
    
    return (
        <Joinform>
            <h1>&nbsp;&nbsp;회원가입</h1><p />
            <Join_write type="text" name="ID" value={ID} placeholder="Enter ID" onChange={handleChange} />
            <Dup_test onClick={handleDup}>중복확인</Dup_test>
            <p />
            <Join_write type="password" name="PW" value={PW} placeholder="Password" onChange={handleChange} />
            <p />
            <Join_write type="password" name="confirmPW" value={confirmPW} placeholder="Confirm Password" onChange={handleChange} />
            <p />
            <Join_write type="text" name="Name" value={Name} placeholder="Your Name" onChange={handleChange} />
            <p />
            <Join_write type="text" name="Age" value={Age} placeholder="Your Age (숫자만)" onChange={handleChange} />
            <p />
            <Join_write type="text" name="Email" value={Email} placeholder="Your Email Address" onChange={handleChange} />
            <p />
            <Join_write type="text" name="PhoneNum" value={PhoneNum} placeholder="Enter Your Phone Number ( ex) 010-xxxx-xxxx )" onChange={handleChange} />
            <p />
            <Join_select name="Sex" value={Sex}  onChange={handleChange}>
                <option value="">Your Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </Join_select>
            <p />
            <Sign_up type="submit" value="SIGN UP" id="sign-up" onClick={handleSubmit} />
            <p />
            <br />
            Already have an Account? <Link to='/login'>Sign In</Link>    
        </Joinform> 
    );
}

export default JoinForm;
