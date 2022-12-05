import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import userinfo from '../../Json/userinfo';
import userlist from '../../Json/userlist';
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
    position:absolute; left:150px; width:400px; height:35px; font-size:20px;
    border:1px solid black; border-radius:5px; color: black;
    box-shadow:2px 2px lightgray;
`

const Button1 = styled.button`
    position: absolute; width: 180px; height: 45px; left: 80px; top: 370px;
    background: #111111; opacity: 0.5; 
    border:0; border-radius: 32px; 
    font-size:20px; color: white;
    box-shadow:3px 3px lightgray;
`

const Button2 = styled.button`
    position: absolute; width: 180px; height: 45px; left: 340px; top: 370px;
    background: red; opacity: 0.5;
    border:0; border-radius: 32px; 
    font-size:20px; color: white;
    box-shadow:3px 3px lightgray;
`

const Button3 = styled.button`
    position: absolute; width: 180px; height: 45px; left: 210px; top: 370px;
    background: red; opacity: 0.5; 
    border:0; border-radius: 32px; 
    font-size:20px; color: white;
    box-shadow:3px 3px lightgray;
`

function UserInfo () {
    const [Data, setData] = useState([]);
    const { state } = useLocation();
    const UserID = state.UserID;

    useEffect(() => {
        axios(
            {
                url: `/info`,
                method: 'get',
                data: UserID,
                baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            setData(response.data);
            //alert("성공")
          }).catch(function (error) {
            //alert(error);
        });
    }, []);

    var Info;
    if(UserID === "admin") {
        var i;
        for(i=0; i<userlist.length;i++) {
            if(state.id === userlist[i].id)
                break;
        }
        Info = state;
    } else {
        Info = userinfo;
    }

    const Inputs = {
        ID: Info.id,
        PW: Info.pw,
        Name: Info.name,
        Age: Info.age,
        Email: Info.email,
        PhoneNum: Info.phoneNumber,
        Sex: Info.sex
    };
    
    const { ID, PW, Name, Age, Email, PhoneNum, Sex } = Inputs;

    const diffFunc = () => {
        var printSex;
        if(Sex === "M")
            printSex = "남";
        else
            printSex = "여";
        if(UserID === "admin") {
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

    function handleDelete (e) {
        if(UserID === "admin") {
            if (window.confirm('회원 정보를 삭제하시겠습니까?'))
            {
                // They clicked Yes
                axios(
                    {
                      url: `/delete`,
                      method: 'delete',
                      data: state.UserID,
                      baseURL: 'http://localhost:8080',
                    }
                  ).then(function (response) {
                      setData(response.data);
                      //alert("성공")
                  }).catch(function (error) {
                      //alert(error);
                  });
                  alert('회원 정보가 삭제되었습니다.')
                  //redirect
                  e.preventDefault();
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
                axios(
                    {
                      url: `/delete`,
                      method: 'delete',
                      data: state.UserID,
                      baseURL: 'http://localhost:8080',
                    }
                  ).then(function (response) {
                      setData(response.data);
                      //alert("성공")
                  }).catch(function (error) {
                      //alert(error);
                  });
                  alert('회원탈퇴 되었습니다.')
                  //redirect
                  e.preventDefault();
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
            
            navigate(`/${e.ID}/update`, {
              state: {
                ID: e.ID,
                PW: e.PW,
                Name: e.Name,
                Age: e.Age,
                Email: e.Email,
                PhoneNum: e.PhoneNum,
                Sex: e.Sex,
                AdminAuth: userinfo.adminAuth
              }
            });
        };
    
        if(UserID === "admin") {
            return(
                <Button3 onClick={handleDelete}>삭제</Button3>
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


    return(
        <User_Info>
        <Title>내 프로필</Title>
        {diffFunc()}
        </User_Info>
    );
}

export default UserInfo;