import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const User_Info = styled.div`
    position: absolute; width: 850px; height: 550px; left: 350px; top: 45px;
    padding-left:150px; text-align:left;
    font-size: 24px; background-color:white;
    border-radius:10px; box-shadow:5px 5px lightgray;
`

const Title = styled.div`
    position: absolute; width: 200px; height: 40px; left: 350px; top: 20px;
    font-size:40px; margin-bottom:100px;
`

const Info_block = styled.div`
    position: absolute; top: 100px;
`

const Input_text = styled.input`
    position:absolute; left:150px; width:400px; height:30px; font-size:20px;
    border:1px solid black; border-radius:5px; color: black;
    box-shadow:2px 2px lightgray;
`

const Input_Select = styled.select`
    position:absolute; left:150px; width:150px; height:30px;
    border:1px solid black; border-radius:5px; font-size:20px;
    box-shadow:2px 2px lightgray;
`

const Button = styled.button`
    position: absolute; width: 180px; height: 45px; left: 210px; top: 360px;
    border:1px solid black; border-radius: 32px; 
    font-size:20px; color: white; background: gray;
    box-shadow:3px 3px lightgray;
`


function UserInfoUpdate (props) {
    const [Data, setData] = useState([]);

    const [Inputs, setInputs] = useState({
        ID: props._ID,
        Name: props._Name,
        Age: props._Age,
        Email: props._Email,
        PhoneNum: props._PhoneNum,
        Sex: props._Sex
    });
    
    const { ID, Name, Age, Email, PhoneNum, Sex } = Inputs;

    const handleChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...Inputs,
            [name]: value
        });
    };

    const handleUpdate = (e) => {
        
            if (window.confirm('정보를 수정하시겠습니까?'))
            {
                if(ID === '')
                    alert("아이디를 입력하세요.");
                else if(Name === '')
                    alert("이름을 입력하세요.");
                else if(Age === '')
                    alert("나이를 입력하세요.");
                else if(Email === '')
                    alert("이메일을 입력하세요.");
                else if(PhoneNum === '' || PhoneNum.length !== 13 || (PhoneNum[3] !== '-' && PhoneNum[8] !== '-'))
                    alert("올바른 형식의 전화번호를 입력하세요.");
                else {
                    axios(
                        {
                          url: `/update`,
                          method: 'post',
                          data: {id: ID, pw: props.PW, name: Name, age: Age, email: Email, phoneNum: PhoneNum, sex: Sex, adminAuth: props.adminAuth},
                          baseURL: 'http://localhost:8080',
                        }
                      ).then(function (response) {
                          setData(response.data);
                          //alert("성공")
                      }).catch(function (error) {
                          //alert(error);
                      });
                      alert("정보가 수정되었습니다.");
                      //redirect
                      e.preventDefault();
                }                
            }
            else
            {
            // They clicked no
            }

            e.preventDefault();
            //DB에 적용하는 과정
        }
    

    var printSex;
    if(Sex === "M")
        printSex = "남";
    else
        printSex = "여";
    return(
        <User_Info>
        <Title>내 프로필</Title>
          <Info_block>
            아이디
            <Input_text name="ID" value={ID} onChange={handleChange} />
            <p />
            이름
            <Input_text name="Name" value={Name} onChange={handleChange} />
            <p />
            나이
            <Input_text name="Age" value={Age} onChange={handleChange} />
            <p />
            이메일
            <Input_text name="Email" value={Email} onChange={handleChange} />
            <p />
            전화번호
            <Input_text name="PhoneNum" value={PhoneNum} onChange={handleChange} />
            <p />
            성별
            <Input_Select defaultValue={printSex} onChange={handleChange}>
                <option value="M">남</option>
                <option value="F">여</option>
            </Input_Select>
            <Button onClick={handleUpdate}>수정하기</Button>    
          </Info_block>    
        </User_Info>
    );
}

export default UserInfoUpdate;