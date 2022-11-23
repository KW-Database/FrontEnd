import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userinfo from '../../Json/userinfo';
import styled from 'styled-components';

const User_Info = styled.div`
    position: absolute; width: 850px; height: 550px; left: 300px; top: 45px;
    padding-left:150px; text-align:left; 
    font-size: 24px; background-color:white;
`

const Title = styled.div`
    position: absolute; width: 200px; height: 40px; left: 400px; top: 20px;
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
    position: absolute; width: 180px; height: 45px; left: 130px; top: 370px;
    background: #111111; opacity: 0.5; border-radius: 32px; 
    font-size:20px; color: white;
`

const Button2 = styled.button`
    position: absolute; width: 180px; height: 45px; left: 400px; top: 370px;
    background: red; opacity: 0.5; border-radius: 32px; 
    font-size:20px; color: white;
`

function handleDelete () {
    if(userinfo.id === "admin") {
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
    else {
        if (window.confirm('회원탈퇴 하시겠습니까?'))
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
        navigate(`/${e.ID}/update`, {
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

    if(userinfo.id === "admin") {
        return(
            <Button1 onClick={handleDelete}>삭제</Button1>
        );
    } else {
        return(
            <div>
                <Button1 onClick={goUpdate}>회원정보 수정</Button1>
                <Button2 onClick={handleDelete}>회원 탈퇴</Button2>
            </div>
        );
    }
}

function UserInfo (props) {
    const Inputs = {
        ID: userinfo[0].id,
        PW: userinfo[0].pw,
        Name: userinfo[0].name,
        Age: userinfo[0].age,
        Email: userinfo[0].email,
        PhoneNum: userinfo[0].phoneNumber,
        Sex: userinfo[0].sex
    };
    
    const { ID, PW, Name, Age, Email, PhoneNum, Sex } = Inputs;

    const diffFunc = () => {
        var printSex;
        if(Sex === "M")
            printSex = "남";
        else
            printSex = "여";
        if(userinfo.id === "admin") {
            return(
                <Info_block>
                    아이디
                    <Input_text name="ID" value={ID} disabled />
                    <p />
                    비밀번호
                    <Input_text name="PW" value={PW} disabled />
                    <p />
                    이름
                    <Input_text name="Name" value={Name} disabled />
                    <p />
                    나이
                    <Input_text name="Age" value={Age} disabled />
                    <p />
                    이메일
                    <Input_text name="Email" value={Email} disabled />
                    <p />
                    전화번호
                    <Input_text name="PhoneNum" value={PhoneNum} disabled />
                    <p />
                    성별
                    <Input_text name="Sex" value={printSex} disabled />
                    {DiffButton(Inputs)}
                </Info_block>    
            );
        } else {
            return (
                <Info_block>
                    아이디
                    <Input_text name="ID" value={ID} disabled />
                    <p />
                    이름
                    <Input_text name="Name" value={Name} disabled />
                    <p />
                    나이
                    <Input_text name="Age" value={Age} disabled />
                    <p />
                    이메일
                    <Input_text name="Email" value={Email} disabled />
                    <p />
                    전화번호
                    <Input_text name="PhoneNum" value={PhoneNum}  disabled />
                    <p />
                    성별
                    <Input_text name="Sex" value={printSex} disabled />
                    {DiffButton(Inputs)}
                </Info_block>    
            );
        }
    }

    return(
        <User_Info>
        <Title>내 프로필</Title>
        {diffFunc()}
        </User_Info>
    );
}

export default UserInfo;