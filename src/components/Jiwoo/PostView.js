import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const View = styled.div`
    position: absolute; width:1000px; height:480px; left:275px; top:150px; padding:50px; 
    text-align: left; background-color: white; font-size: 24px; 
    border-radius:10px; box-shadow:5px 5px lightgray;
`

const Title = styled.input`
    position: absolute; width:800px; height:40px; left:150px; top: 50px;
    display:flex; justify-content: center; background-color:white; font-size:20px;
    border-radius:5px;
`

const Content = styled.textarea`
    position: absolute; width:800px; height:250px; left:150px; top: 140px;
    background-color:white; border: 2px solid gray;
    font-size:20px; font-family: sans-serif, "바탕";
    border-radius:5px;
`

const Button1 = styled.button`
    position: absolute; left: 630px; top: 420px; width:100px; height:40px;    
    border:0; border-radius:20px; 
    font-size:20px; color:white; background-color:skyblue;
    box-shadow:3px 3px #e7e7e7;
`

const Button2 = styled.button`
    position: absolute; left: 740px; top: 420px; width:100px; height:40px;    
    border:0; border-radius:20px; 
    font-size:20px; color:white; background-color:#CC0000;
    box-shadow:3px 3px #e7e7e7;
`

const Button3 = styled.button`
    position: absolute; left: 850px; top: 420px; width:100px; height:40px;    
    border:0; border-radius:20px; 
    font-size:20px; color:white; background-color:lightgreen;
    box-shadow:3px 3px #e7e7e7;
`
const UserInfo = {ID: "id_a"};

function PostView (props) { 
    const [Data, setData] = useState([]);
    const location = useLocation();
   // console.log(location.state.postId);
    
    useEffect(() => {  //{postId} 연결
        axios.get(`/agora/${location.state.postId}`)
        .then(response=>setData(response.data))
        .catch(error=>console.log(error))
    }, []);


    function DiffFunc(location) {
      

        const navigate = useNavigate();
        const goUpdate = () => {
            // 두번재 인자의 state 속성에 원하는 파라미터를 넣어준다. (id, job을 넣어봤다)
            navigate(`/board/${location.state.postId}/update`, {
              state: {
                postId:location.state.postId,
                ID:location.state.ID,
                Title: location.state.title,
                Content: location.state.content
              }
            });
        };
    
        if(UserInfo.ID === "admin") {
            return(
                <div>
                    <Button2 onClick={handleDelete}>글 삭제</Button2>
                    <Link to='/board' style={{ textDecoration : 'none' }}><Button3>뒤로가기</Button3></Link>
                </div>
            );
        } else if(UserInfo.ID === location.state.ID) {
           //console.log(Data.id);
            return(
                <div>
                    <Button1 onClick={goUpdate}>글 수정</Button1>
                    <Button2 onClick={handleDelete}>글 삭제</Button2>
                    <Link to='/board' style={{ textDecoration : 'none' }}><Button3>뒤로가기</Button3></Link>
                </div>
                 
            );
        } else {
            return(
                <Link to='/board' style={{ textDecoration : 'none' }}><Button3>뒤로가기</Button3></Link>
            );
        }
    }
    
    function handleDelete (e) {

        if (window.confirm('글을 삭제하시겠습니까?'))
            {
            
                axios.delete(`/agora/${location.state.postId}/delete`, { //"/{postId}/delete" 연결
                    data:{
                        postId: location.state.postId
                    }
                })
              
                alert("게시글이 삭제되었습니다.")
                e.preventDefault();
            } else {
                // They clicked no
            }  
    }
    return(
        <div>
            <View>
                제목 : <Title type="text" value={location.state.title} disabled /> <p /><br />
                내용 : <Content value={location.state.content} disabled />
                {DiffFunc(location)}
            </View>
        </div>
    );
}

export default PostView;