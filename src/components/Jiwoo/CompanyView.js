import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const View = styled.div`
    position: absolute; width:1000px; height:480px; left:280px; top:150px; padding:50px; 
    text-align: left; background-color: white; font-size: 24px; 
    border-radius:10px; box-shadow:5px 5px lightgray;
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
    const navigate = useNavigate();
    const location = useLocation();
    
    function HandleManage() {
        function handleDelete (e) {
            if (window.confirm('기업정보를 삭제하시겠습니까?'))
            {
                axios.delete('/admin/company', {params:{
                    code: location.state.itemCode
                }
                }).then( response => {
                    console.log(response)
                    alert("기업정보가 삭제되었습니다.")
                    navigate('/manage', {state:{
                        UserID:location.state.UserID
                    }})
                }).catch(error => {
                    console.log(error);
                });
                e.preventDefault();
            } else {
                // They clicked no
            }  
        }
        
        return(
            <div>
                <Button2 onClick={handleDelete}>삭제</Button2>
                <Link to='/manage' state={{UserID:location.state.UserID}} style={{ textDecoration : 'none' }}><Button3>뒤로가기</Button3></Link>
            </div>     
        );
    }
    return(
        <div>
            <View>
                &nbsp;&nbsp; 기업명 : <Title type="text" value={location.state.Name} disabled /> <p />
                상장날짜 : <Date type="text" value={location.state.Date} disabled /> <p />
                기업개요 : <Content value={location.state.Info} disabled />
                {HandleManage()}
            </View>
        </div>
    );
}

export default CompanyView;