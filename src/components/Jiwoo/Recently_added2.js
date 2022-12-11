import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Pagination from 'react-js-pagination';
import EachRecent2 from './EachRecent2';

const Search = styled.div`
    position: absolute; width:800px; top:0px; left:100px;
    display:flex; justify-content: center;
    font-family: 'Pretendard-Regular';
`

const List = styled.div`
    display:flex; justify-content: center; top:100px; 
    background-color:#e7e7e7; font-size:15px;
`

const RecentList = styled.div`
    display: grid; flex-direction: row; justify-content: center; align-items: center; 
    position:absolute; top:120px; width:1000px;
    border-top:2px solid gray;
    background-color:#e7e7e7; color:black;
    grid-template-columns : repeat(1, 1fr);
  @media screen and (max-width : 800px){
    grid-template-columns : repeat(1, 1fr);
  }
  @media screen and (max-width : 1350px) and (min-width : 800px){
    grid-template-columns : repeat(2, 1fr);
  }
`

const Name = styled.div`
    position: absolute; left:50px; width: 350px; top:90px;
    display:flex; text-align:left;
`

const Price = styled.div`
    position: absolute; left:420px; width: 200px; top:90px;
    display:flex; justify-content:center;
`

const Diff = styled.div`
    position: absolute; left:630px; width: 200px; top:90px;
    display:flex; justify-content:center;
`

const _Date = styled.div`
    position: absolute; left:840px; width: 150px; top:90px;
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

function Recently_added_table2 (props) { 
    const Data = props.publicList;
    
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

    let filtered_data = Data.sort((a, b) => {
        return new Date(b.publicDate) - new Date(a.publicDate);
    }).filter((val)=>{
        if(search===""){
            return val;
        }
        else if(val.itemName.toLowerCase().includes(search.toLowerCase())){
            return val;
        }
    });

    let eachRecent2 = filtered_data.slice(
        items*(page-1),
        items*(page-1) + items
    ).map((v) => (<EachRecent2 key={v.itemName}
        name={v.itemName} price={v.executionPrice} diff={v.changeAmount} diffrate={v.changeRate} date={v.publicDate} UserID={props.UserID}
    />));
    
    return (
        <List>
            <Search><SearchBar search={search} onChange={onChange} /></Search>
            <Name>회사명</Name><Price>현재가</Price><Diff>상승/하락</Diff><_Date>상장날짜</_Date><p />
            <RecentList>
                {eachRecent2}<p />
                <PaginationBox>
                      <Pagination
                        activePage={page}
                        itemsCountPerPage={items}
                        totalItemsCount={filtered_data.length}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}>
                      </Pagination>
                    </PaginationBox> 
            </RecentList>
        </List>
    );
}

export default Recently_added_table2;