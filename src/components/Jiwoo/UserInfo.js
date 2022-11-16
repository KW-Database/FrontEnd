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

const Button1 = styled.button`
    position: absolute; width: 180px; height: 45px; left: 300px; top: 390px;
    background: #111111; opacity: 0.5; border-radius: 32px; 
    font-size:24px; color: white;
`

const Button2 = styled.button`
    position: absolute; width: 180px; height: 45px; left: 550px; top: 390px;
    background: red; opacity: 0.5; border-radius: 32px; 
    font-size:24px; color: white;
`

const Userdata = {
    ID: ":user"
}

function handleDelete () {
    if(Userdata.ID === "admin") {
        if (window.confirm('회원 정보를 삭제하시겠습니까?'))
        {
            // They clicked Yes
            alert('회원 정보가 삭제되었습니다.')
        }
        else
        {
            // They clicked no
        }
    }
    else if(Userdata.ID === ":user") {
        if (window.confirm('회원탈퇴를 하시겠습니까?'))
        {
            // They clicked Yes
            alert('회원탈퇴 되었습니다.')
        }
        else
        {
            // They clicked no
        }
    }
}

function DiffButton(e) {
    const navigate = useNavigate();
    const goUpdate = () => {
        // 두번재 인자의 state 속성에 원하는 파라미터를 넣어준다. (id, job을 넣어봤다)
        navigate('/:user/update', {
          state: {
            ID: e.ID,
            Name: e.Name,
            Age: e.Age,
            Email: e.Email,
            PhoneNum: e.PhoneNum,
            Sex: e.Sex
          }
        });
    };

    if(Userdata.ID === "admin") {
        return(
            <Button1 onClick={handleDelete}>Delete</Button1>
        );
    } else if(Userdata.ID === ":user") {
        return(
            <div>
                <Button1 onClick={goUpdate}>Go Update</Button1>
                <Button2 onClick={handleDelete}>Delete</Button2>
            </div>
        );
    }
}

function UserInfo ({Data}) {
    const [Inputs, setInputs] = useState({
        ID: Data.ID,
        PW: Data.PW,
        Name: Data.Name,
        Age: Data.Age,
        Email: Data.Email,
        PhoneNum: Data.PhoneNum,
        Sex: Data.Sex
    });
    
    const { ID, PW, Name, Age, Email, PhoneNum, Sex } = Inputs;

    const diffFunc = () => {
        if(Userdata.ID === "admin") {
            return(
                <Info_block>
                    ID
                    <Input_text name="ID" value={ID} disabled />
                    <p />
                    PW
                    <Input_text name="PW" value={PW} disabled />
                    <p />
                    Name
                    <Input_text name="Name" value={Name} disabled />
                    <p />
                    Age
                    <Input_text name="Age" value={Age} disabled />
                    <p />
                    Email
                    <Input_text name="Email" value={Email} disabled />
                    <p />
                    PhoneNum
                    <Input_text name="PhoneNum" value={PhoneNum} disabled />
                    <p />
                    Sex
                    <Input_text name="Sex" value={Sex} disabled />
                    {DiffButton(Inputs)}
                </Info_block>    
            );
        } else if(Userdata.ID === ":user") {
            return (
                <Info_block>
                    ID
                    <Input_text name="ID" value={ID} disabled />
                    <p />
                    Name
                    <Input_text name="Name" value={Name} disabled />
                    <p />
                    Age
                    <Input_text name="Age" value={Age} disabled />
                    <p />
                    Email
                    <Input_text name="Email" value={Email} disabled />
                    <p />
                    PhoneNum
                    <Input_text name="PhoneNum" value={PhoneNum}  disabled />
                    <p />
                    Sex
                    <Input_text name="Sex" value={Sex} disabled />
                    {DiffButton(Inputs)}
                </Info_block>    
            );
        }
    }

    return(
        <User_Info>
        <Title>Profile</Title>
        {diffFunc()}
        </User_Info>
    );
}

export default UserInfo;