import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const View = styled.div`
    position: absolute; width:1100px; height:400px; left:200px; top:150px; padding:50px; 
    text-align: left; background-color: white; font-size: 24px; 
`

const Title = styled.input`
    position: absolute; width:900px; height:40px; left:170px; top: 40px;
    display:flex; justify-content: center; background-color:white; font-size:24px;
`

const Date = styled.input `
    position: absolute; width:900px; height:40px; left:170px; top: 100px;
    display:flex; justify-content: center; background-color:white; font-size:24px;
`

const Content = styled.input`
    position: absolute; width:900px; height:250px; left:170px; top: 160px;
    background-color:white; font-size:24px;
`

const Button1 = styled.button`
    position: absolute; left: 750px; top: 420px; width:100px; height:40px;    
    border:0; border-radius:20px; 
    font-size:20px; color:white; background-color:skyblue;
`

const Button2 = styled.button`
    position: absolute; left: 860px; top: 420px; width:100px; height:40px;    
    border:0; border-radius:20px; 
    font-size:20px; color:white; background-color:#CC0000;
`

const Button3 = styled.button`
    position: absolute; left: 970px; top: 420px; width:100px; height:40px;    
    border:0; border-radius:20px; 
    font-size:20px; color:white; background-color:lightgreen;
`

function handleDelete () {
    alert("회사 정보가 삭제되었습니다.")
    //DB에서 데이터 삭제
}

function HandleManage(location) {
    const navigate = useNavigate();
    const goUpdate = () => {
        // 두번재 인자의 state 속성에 원하는 파라미터를 넣어준다. (id, job을 넣어봤다)
        navigate('/manage/:id/update', {
          state: {
            Name: location.state.Name,
            Date: location.state.Date,
            Info: location.state.Info
          }
        });
    };
    
    return(
        <div>
            <Button1 onClick={goUpdate}>Update</Button1>
            <Button2 onClick={handleDelete}>Delete</Button2>
            <Link to='/manage' style={{ textDecoration : 'none' }}><Button3>Exit</Button3></Link>
        </div>     
    );
}

function CompanyView () { 
    const location = useLocation();
    return(
        <div>
            <View>
                &nbsp;&nbsp;&nbsp; 기업명 : <Title type="text" value={location.state.Name} disabled /> <p />
                상장날짜 : <Date type="text" value={location.state.Date} disabled /> <p />
                기업개요 : <Content type="textarea" value={location.state.Info} disabled />
                {HandleManage(location)}
            </View>
        </div>
    );
}

export default CompanyView;