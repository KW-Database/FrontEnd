import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EachPost from './EachPost';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Board_block = styled.div`
    position: absolute; left:280px; width:1040px;
`

const Title = styled.div`
    position: absolute; width: 560px; left:220px; height: 80px; top: 20px;
    display:flex; justify-content: center; align-items: center; 
    border-bottom: 1px solid black;
    font-weight: 500; font-size: 40px; 
`

const Search = styled.div`
    position: absolute; width:800px; height:70px; left:50px; top:150px; 
    display:flex; justify-content: center;
`

const Post = styled.button`
    position: absolute; width: 100px; height: 40px; left: 940px; top: 160px;
    font-size: 20px; color: #FFFFFF; background-color:skyblue;
    border: 1px solid black; border-radius:20px;
`

const List = styled.div`
    position: absolute; width:1040px; top: 240px; 
    display:flex; justify-content: center; background-color:#e7e7e7;
`

const BoardList = styled.div`
    display: grid; flex-direction: row; width: 1040px; 
    position: absolute; top:30px;
    border-top:2px solid gray; 
    background-color:#e7e7e7; color:black;
    grid-template-columns : repeat(1, 1fr);
  @media screen and (max-width : 800px){
    grid-template-columns : repeat(1, 1fr);
  }
  @media screen and (max-width : 1040px) and (min-width : 800px){
    grid-template-columns : repeat(2, 1fr);
  }
`

const 글ID = styled.div`
    position: absolute; left:0px; width: 90px; 
    display:flex; justify-content:center;
`

const _Title = styled.div`
    position: absolute; left:100px; width: 450px; text-align:left;
`

const ID = styled.div`
    position: absolute; left:500px; width: 200px; 
    display:flex; justify-content:center;
`

const Date = styled.div`
    position: absolute; left:700px; width: 200px; 
    display:flex; justify-content:center;
`

const View = styled.div`
    position: absolute; left:900px; width: 140px; 
    display:flex; justify-content:center;
`

const PageNumber = styled.div`
    width: 1040px; height: 40px;
    display: flex; justify-content:center; align-items: center;
    color: black;
`

function Board () {
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.currentTarget.value);
    };
    const dummyData = [
        {글ID: 1, Title: "제목1", Content: "내용1", ID: "jiwoo0629", Date: "2022-11-01", View: 5},
        {글ID: 2, Title: "제목2", Content: "내용2", ID: "author2", Date: "2022-11-02", View: 10},
        {글ID: 3, Title: "제목3", Content: "내용3", ID: "author3", Date: "2022-11-03", View: 15},
        {글ID: 4, Title: "제목4", Content: "내용4", ID: "author4", Date: "2022-11-04", View: 20},
        {글ID: 5, Title: "제목5", Content: "내용5", ID: "author5", Date: "2022-11-05", View: 25}
    ]

    let eachPost = dummyData.filter((val)=>{
        if(search === "") {
            return val;
        } else if(val.Title.toLowerCase().includes(search.toLowerCase())) {
            return val;
        }
    }).map((v) => (<EachPost key={v.글ID}
        글ID={v.글ID} Title={v.Title} Content={v.Content} ID={v.ID} Date={v.Date} View={v.View} 
    />));
    
    var num=1;
    return(
        <Board_block>
            <Title>토론 게시판</Title>
            <Search><SearchBar search={search} onChange={onChange} /></Search>
            <Link to="/board/write" style={{ textDecoration : 'none', color : 'black' }}><Post value="Post">글 작성</Post></Link>
            <List>
                <글ID>번호</글ID><_Title>제목</_Title><ID>아이디</ID><Date>날짜</Date><View>조회수</View><p />
                <BoardList>
                    {eachPost}<p />
                    <PageNumber>
                        <Link to={`/board?page=${num}`} style={{ textDecoration : 'none', color : 'black' }}>{num}</Link>
                    </PageNumber>        
                </BoardList>
            </List>
        </Board_block>
    );
}

export default Board;