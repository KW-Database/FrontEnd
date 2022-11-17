import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const View = styled.div`
    position: absolute; width:1100px; height:400px; left:200px; top:150px; padding:50px; 
    text-align: left; background-color: white; font-size: 24px; 
`

const Title = styled.input`
    position: absolute; width:900px; height:40px; left:150px; top: 40px;
    display:flex; justify-content: center; background-color:white; font-size:24px;
`

const Content = styled.input`
    position: absolute; width:900px; height:250px; left:150px; top: 140px;
    background-color:white; font-size:24px;
`

const Button1 = styled.button`
    position: absolute; left: 730px; top: 420px; width:100px; height:40px;    
    border:0; border-radius:20px; 
    font-size:20px; color:white; background-color:skyblue;
`

const Button2 = styled.button`
    position: absolute; left: 840px; top: 420px; width:100px; height:40px;    
    border:0; border-radius:20px; 
    font-size:20px; color:white; background-color:#CC0000;
`

const Button3 = styled.button`
position: absolute; left: 950px; top: 420px; width:100px; height:40px;    
border:0; border-radius:20px; 
font-size:20px; color:white; background-color:lightgreen;
`

const dummyData = { title: "제목1", content: "내용1"};
const UserInfo = {ID: ":id"};

function handleDelete () {
    alert("게시글이 삭제되었습니다.")
    //DB에서 데이터 삭제
}

function DiffFunc() {
    const navigate = useNavigate();
    const goUpdate = () => {
        // 두번재 인자의 state 속성에 원하는 파라미터를 넣어준다. (id, job을 넣어봤다)
        navigate('/board/:id/update', {
          state: {
            Title: dummyData.title,
            Content: dummyData.content
          }
        });
    };

    if(UserInfo.ID === "admin") {
        return(
            <div>
                <Button2 onClick={handleDelete}>Delete</Button2>
                <Link to='/board' style={{ textDecoration : 'none' }}><Button3>Exit</Button3></Link>
            </div>
        );
    } else if(UserInfo.ID === ":id") {
        return(
            <div>
                <Button1 onClick={goUpdate}>Update</Button1>
                <Button2 onClick={handleDelete}>Delete</Button2>
                <Link to='/board' style={{ textDecoration : 'none' }}><Button3>Exit</Button3></Link>
            </div>
             
        );
    } else {
        return(
            <Link to='/board' style={{ textDecoration : 'none' }}><Button3>Exit</Button3></Link>
        );
    }
}

function PostView () { 
    return(
        <div>
            <View>
                제목 : <Title type="text" value={dummyData.title} disabled /> <p /><br />
                내용 : <Content type="textarea" value={dummyData.content} disabled />
                {DiffFunc()}
            </View>
        </div>
    );
}

export default PostView;