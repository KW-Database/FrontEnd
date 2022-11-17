import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const User_Info = styled.div`
    position: absolute; width: 800px; height: 550px; left: 540px; top: 45px;
    padding-left:40px; text-align:left;
    font-size: 24px; background-color:white;
`

const Title = styled.div`
    position: absolute; width: 200px; height: 40px; left: 80px; top: 20px;
    font-size:40px; margin-bottom:100px;
`

const Info_block = styled.div`
    position: absolute; top: 100px;
`

const Input_text = styled.input`
    position:absolute; left:150px; width:400px; height:30px; font-size:20px;
    border:1px solid black; border-radius:5px; color: black;
`

const Input_Select = styled.select`
    position:absolute; left:150px; width:150px; height:30px;
    border:1px solid black; border-radius:5px;
`

const Button = styled.button`
    position: absolute; width: 180px; height: 45px; left: 300px; top: 360px;
    background: #111111; opacity: 0.25; border-radius: 32px; 
    font-size:24px; color: white;
`


function UserInfoUpdate (props) {
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
            alert("정보가 수정되었습니다.");
            e.preventDefault();
            //DB에 적용하는 과정
        }
    }

    return(
        <User_Info>
        <Title>Profile</Title>
          <Info_block>
            ID
            <Input_text name="ID" value={ID} onChange={handleChange} />
            <p />
            Name
            <Input_text name="Name" value={Name} onChange={handleChange} />
            <p />
            Age
            <Input_text name="Age" value={Age} onChange={handleChange} />
            <p />
            Email
            <Input_text name="Email" value={Email} onChange={handleChange} />
            <p />
            PhoneNum
            <Input_text name="PhoneNum" value={PhoneNum} onChange={handleChange} />
            <p />
            Sex
            <Input_Select value={Sex} onChange={handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </Input_Select>
            <Button onClick={handleUpdate}>Apply</Button>    
          </Info_block>    
        </User_Info>
    );
}

export default UserInfoUpdate;