import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const View = styled.div`
    position: absolute; width:1000px; height:480px; left:275px; top:150px; padding:50px; 
    text-align: left; background-color: white; font-size: 24px; 
`

const Title = styled.input`
    position: absolute; width:800px; height:40px; left:150px; top: 40px;
    display:flex; justify-content: center; background-color:white; font-size:20px;
`

const Content = styled.textarea`
    position: absolute; width:800px; height:250px; left:150px; top: 140px;
    background-color:white; border: 2px solid gray;
    font-size:20px; font-family: sans-serif, "바탕";
`

const Button1 = styled.button`
    position: absolute; left: 630px; top: 420px; width:100px; height:40px;    
    border:0; border-radius:20px; 
    font-size:20px; color:white; background-color:skyblue;
`

const Button2 = styled.button`
    position: absolute; left: 740px; top: 420px; width:100px; height:40px;    
    border:0; border-radius:20px; 
    font-size:20px; color:white; background-color:#CC0000;
`

const Button3 = styled.button`
position: absolute; left: 850px; top: 420px; width:100px; height:40px;    
border:0; border-radius:20px; 
font-size:20px; color:white; background-color:lightgreen;
`
const UserInfo = {ID: "jiwoo0629"};

function PostView (props) { 
    const [Data, setData] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
        axios(
            {
                url: `/${location.state.postId}`,
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

    function DiffFunc(location) {
        const navigate = useNavigate();
        const goUpdate = () => {
            // 두번재 인자의 state 속성에 원하는 파라미터를 넣어준다. (id, job을 넣어봤다)
            navigate(`/board/${location.state.postId}/update`, {
              state: {
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
                axios(
                      {
                        url: `/${props.postId}/delete`,
                        method: 'delete',
                        baseURL: 'http://localhost:8080',
                      }
                    ).then(function (response) {
                        //alert("성공")
                    }).catch(function (error) {
                        //alert(error);
                    });
                    alert("게시글이 삭제되었습니다.")
                    //redirect
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