import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const View = styled.div`
    position: absolute; width:1000px; height:480px; left:280px; top:150px; padding:50px; 
    text-align: left; background-color: white; font-size: 24px; 
    border-radius:10px; box-shadow:5px 5px lightgray;
    font-family: 'Pretendard-Regular';
`

const Title = styled.input`
    position: absolute; width:750px; height:40px; left:170px; top: 45px;
    display:flex; justify-content: center; background-color:white; font-size:20px;
    border-radius:5px;
`

const Date = styled.input `
    position: absolute; width:750px; height:40px; left:170px; top: 100px;
    display:flex; justify-content: center; background-color:white; font-size:20px;
    border-radius:5px;
`

const Content = styled.textarea`
    position: absolute; width:750px; height:250px; left:170px; top: 160px;
    display:flex; text-align:topleft; border:2px solid gray;
    background-color:white; font-size:20px; font-family: sans-serif, "바탕";
    border-radius:5px;
`

const Button1 = styled.button`
    position: absolute; left: 600px; top: 430px; width:100px; height:40px;    
    border:0; border-radius:20px; box-shadow:2px 2px lightgray;
    font-size:20px; color:white; background-color:skyblue;
`

const Button2 = styled.button`
    position: absolute; left: 710px; top: 430px; width:100px; height:40px;    
    border:0; border-radius:20px; box-shadow:2px 2px lightgray;
    font-size:20px; color:white; background-color:#CC0000;
`

const Button3 = styled.button`
    position: absolute; left: 820px; top: 430px; width:100px; height:40px;    
    border:0; border-radius:20px; box-shadow:2px 2px lightgray;
    font-size:20px; color:white; background-color:lightgreen;
`

function CompanyView () { 
    const [Data, setData] = useState([]);
    const location = useLocation();

    useEffect(() => {
        axios(
            {
                url: `/company`,
                method: 'get',
                baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            setData(response.data);
            //alert("성공")
          }).catch(function (error) {
            //alert(error);
        });
    }, []);
    
    function handleDelete (e) {
        if (window.confirm('기업정보를 삭제하시겠습니까?'))
        {
            axios(
                {                        
                    url: `/company`,
                    method: 'delete',
                    data: {code: location.state.itemCode},//?
                    baseURL: 'http://localhost:8080',
                }
            ).then(function (response) {
                //alert("성공")
            }).catch(function (error) {
                //alert(error);
            });
            alert("기업정보가 삭제되었습니다.")
            //redirect
            e.preventDefault();
        } else {
            // They clicked no
        }  
    }
    
    function HandleManage(location) {
        const navigate = useNavigate();
        const goUpdate = () => {
            // 두번재 인자의 state 속성에 원하는 파라미터를 넣어준다. (id, job을 넣어봤다)
            navigate(`/manage/${location.state.ID}/update`, {
              state: {
                Name: location.state.Name,
                Date: location.state.Date,
                Info: location.state.Info
              }
            });
        };
        
        return(
            <div>
                <Button1 onClick={goUpdate}>수정</Button1>
                <Button2 onClick={handleDelete}>삭제</Button2>
                <Link to='/manage' style={{ textDecoration : 'none' }}><Button3>뒤로가기</Button3></Link>
            </div>     
        );
    }
    return(
        <div>
            <View>
                &nbsp;&nbsp; 기업명 : <Title type="text" value={location.state.Name} disabled /> <p />
                상장날짜 : <Date type="text" value={location.state.Date} disabled /> <p />
                기업개요 : <Content value={location.state.Info} disabled />
                {HandleManage(location)}
            </View>
        </div>
    );
}

export default CompanyView;