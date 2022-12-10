import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EachPost from './EachPost';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Pagination from 'react-js-pagination';
//import Board_Data from '../../Json/Board.json';

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
    position: absolute; width: 100px; height: 40px; left: 940px; top: 165px;
    font-size: 20px; color: #FFFFFF; background-color:skyblue;
    border:0; border-radius:20px;
    box-shadow:3px 3px lightgray;
`

const MainList = styled.div`
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

const PaginationBox = styled.div`
  .pagination { display: flex; justify-content: center; margin-top: 15px;}
  ul { list-style: none; padding: 0; }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem; 
  }
  ul.pagination li:first-child{ border-radius: 5px 0 0 5px; }
  ul.pagination li:last-child{ border-radius: 0 5px 5px 0; }
  ul.pagination li a { text-decoration: none; color: #337ab7; font-size: 1rem; }
  ul.pagination li.active a { color: white; }
  ul.pagination li.active { background-color: #337ab7; }
  ul.pagination li a:hover,
  ul.pagination li a.active { color: blue; }
`

function Board ({List, UserID}) {
    //const [list, setList] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const items = 5;
   

    const handlePageChange = (page) => { 
        setPage(page); 
    };
    const onChange = (e) => {
        setPage(1);
        setSearch(e.currentTarget.value);
    };


    let filtered_data = List.filter((val)=>{ //Board_Data
        if(search === "") {
            return val;
        } else if(val.title.toLowerCase().includes(search.toLowerCase())) {
            return val;
        }
    })

    var i=0;
    let eachPost = filtered_data.slice(
        items*(page-1),
        items*(page-1) + items    
    ).reverse().map((v) => {
        i=i+1;
        return(<EachPost key={v.postId}
            User={UserID} num={items*(page-1)+i} postId={v.postId} Title={v.title} Content={v.contents} ID={v.id} Date={v.postTime.replace('T', ' ')} View={v.hitCount} 
        />)
    });

    
    return(
        <Board_block>
            <Title>토론 게시판</Title>
            <Search><SearchBar search={search} onChange={onChange} /></Search>
            <Link to="/board/write" state={{UserID:UserID}} style={{ textDecoration : 'none', color : 'black' }}><Post value="Post">글 작성</Post></Link>
            <MainList>
                <글ID>번호</글ID><_Title>제목</_Title><ID>아이디</ID><Date>날짜</Date><View>조회수</View><p />
                <BoardList>
                    {eachPost}<p />
                    <PaginationBox>
                      <Pagination
                        activePage={page}
                        itemsCountPerPage={items}
                        totalItemsCount={filtered_data.length}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}>
                      </Pagination>
                    </PaginationBox>       
                </BoardList>
            </MainList>
        </Board_block>
    );
}

export default Board;