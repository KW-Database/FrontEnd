import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EachPost from './EachPost';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Board_block = styled.div`
    position: absolute; left:200px; width:1200px;
`

const Title = styled.div`
    position: absolute; width: 1200px; height: 100px; top: 20px;
    display:flex; justify-content: center; align-items: center; background: #D9D9D9; 
    font-weight: 700; font-size: 50px;
`
const Search = styled.div`
    position: absolute; width:300px; height:70px; left:55px; top:140px; 
    display:flex; justify-content: center;
`

const Post = styled.button`
    position: absolute; width: 120px; height: 40px; left: 1080px; top: 150px;
    font-size: 20px; color: #FFFFFF; background-color:skyblue;
    border:1px solid black; border-radius:10px;

`

const List = styled.div`
    position: absolute; width:1200px; top: 210px; 
    display:flex; justify-content: center; background-color:white;
`

const BoardList = styled.div`
    display: grid; flex-direction: row; justify-content: center; align-items: center; 
    padding: 8px; gap: 8px; width: 1200px; height: 400px;
    border:3px solid gray;
    background-color:white; color:black;
    grid-template-columns : repeat(1, 1fr);
  @media screen and (max-width : 800px){
    grid-template-columns : repeat(1, 1fr);
  }
  @media screen and (max-width : 1200px) and (min-width : 800px){
    grid-template-columns : repeat(2, 1fr);
  }
`

function Board () {
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.currentTarget.value);
    };
    const dummyData = [
        {글ID: 1, Title: "제목1", ID: "author1", Date: "2022-11-01", View: 5},
        {글ID: 2, Title: "제목2", ID: "author2", Date: "2022-11-02", View: 10},
        {글ID: 3, Title: "제목3", ID: "author3", Date: "2022-11-03", View: 15},
        {글ID: 4, Title: "제목4", ID: "author4", Date: "2022-11-04", View: 20},
        {글ID: 5, Title: "제목5", ID: "author5", Date: "2022-11-05", View: 25}
    ]
    //let eachCom = dummyData.filter(v => selectedData.includes(v.name))
    let eachPost = dummyData.map((v) => (<EachPost key={v.글ID}
        글ID={v.글ID} Title={v.Title} ID={v.ID} Date={v.Date} View={v.View}  
    />));
    return(
        <Board_block>
            <Title>토론 게시판</Title>
            <Search><SearchBar search={search} onChange={onChange} /></Search>
            <Link to="/board/write"><Post value="Post">글 작성</Post></Link>
            <List>
                <BoardList>
                    {eachPost}
                </BoardList>
            </List>
        </Board_block>
    );
}

export default Board;