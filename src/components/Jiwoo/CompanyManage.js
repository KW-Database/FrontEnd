import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EachManage from './EachManage';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Pagination from 'react-js-pagination';
import company from '../../Json/Companylist.json';

const Board_block = styled.div`
    position: absolute; left:280px; width:1040px;
`

const Title = styled.div`
    position: absolute; width: 560px; left:240px; height: 80px; top: 20px;
    display:flex; justify-content: center; align-items: center; 
    border-bottom: 1px solid black;
    font-weight: 500; font-size: 40px; 
`

const Search = styled.div`
    position: absolute; width:800px; height:70px; left:50px; top:150px; 
    display:flex; justify-content: center;
`

const Post = styled.button`
    position: absolute; width: 100px; height: 40px; left: 940px; top: 170px;
    font-size: 20px; color: #FFFFFF; background-color:skyblue;
    border: 0; border-radius:20px;
    box-shadow:2px 2px lightgray;
`

const List = styled.div`
    position: absolute; width:1040px; top: 240px; 
    display:flex; justify-content: center; background-color:#e7e7e7;
`

const CompanyList = styled.div`
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

const ID = styled.div`
    position:absolute; left:20px; width:50px;
    display:flex; justify-content:center;
`

const Name = styled.div`
    position:absolute; left:0px; width:1000px; width:1000px;
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

function CompanyManage () {
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
    
    let filtered_data = company.filter((val)=>{
        if(search === "") {
            return val;
        } else if(val.Name.toLowerCase().includes(search.toLowerCase())) {
            return val;
        }
    });

    let eachManage = filtered_data.slice(
        items*(page-1),
        items*(page-1) + items
    ).map((v) => (<EachManage key={v.ID}
        ID={v.ID} Name={v.Name} Date={v.Date} Info={v.Info}  
    />));
    
    return(
        <Board_block>
            <Title>주식회사 목록</Title>
            <Search><SearchBar search={search} onChange={onChange} /></Search>
            <Link to="/manage/enroll" style={{ textDecoration : 'none' }}><Post value="Post">등록</Post></Link>
            <List>
                <ID>번호</ID><Name>기업명</Name>
                <CompanyList>
                    {eachManage}<p />
                    <PaginationBox>
                      <Pagination
                        activePage={page}
                        itemsCountPerPage={items}
                        totalItemsCount={filtered_data.length}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}>
                      </Pagination>
                    </PaginationBox> 
                </CompanyList>
            </List>
        </Board_block>
    );
};

export default CompanyManage;