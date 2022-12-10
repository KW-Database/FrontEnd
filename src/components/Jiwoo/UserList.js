import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EachUser from './EachUser';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Pagination from 'react-js-pagination';
import userlist from '../../Json/userlist.json'

const Title = styled.div`
    position: absolute; width: 560px; left:220px; height: 80px; top: 20px;
    display:flex; justify-content: center; align-items: center; 
    border-bottom: 1px solid black;
    font-weight: 500; font-size: 40px; 
`

const ListLayer = styled.div`
    position: absolute; left:300px; width:1000px;
    font-family: 'Pretendard-Regular';
`

const List = styled.div`
    position: absolute; width:800px; top: 150px; 
    display:flex; justify-content: center;
`

const Search = styled.div`
    position: absolute; width:1040px; height:60px; top:5px; left:-15px;
    display:flex; justify-content: center;
`

const _UserList = styled.div`
    display: grid; flex-direction: row; width: 800px; 
    position: absolute; top:100px; left:105px;
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

const Category = styled.div`
    position:absolute; top:70px; left:105px;
`

const Name = styled.div`
    position: absolute; left:50px; width: 350px; 
    display:flex; justify-content:center;
`

const ID = styled.div`
    position: absolute; left:450px; width: 350px; 
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

function UserList({UserID}) {
    const [Data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const items = 5;
    
    useEffect(()=>{
        axios.get('/admin/user')
        .then(response => {
            console.log(response)
            setData(response.data)
        }).catch(error => console.log(error));
    }, [])

    const handlePageChange = (page) => { 
        setPage(page); 
    };
    const onChange = (e) => {
        setPage(1);
        setSearch(e.currentTarget.value);
    };

    let filtered_data = Data.filter((val)=>{
        if(search === "") {
            return val;
        } else if(val.nickname.toLowerCase().includes(search.toLowerCase()) || val.id.toLowerCase().includes(search.toLowerCase())) {
            return val;
        }
    });
    
    let eachUser = filtered_data.slice(
        items*(page-1),
        items*(page-1) + items
    ).map((v) => (<EachUser key={v.id}
        id={v.id} pw={v.pw} name={v.nickname} age={v.age} email={v.email} phoneNumber={v.phoneNumber} sex={v.sex} UserID={UserID}
    />));
    
    return (
        <ListLayer>
            <Title>사용자 목록</Title>
            <List>
                <Search><SearchBar search={search} onChange={onChange} /></Search>
                <Category><Name>사용자명</Name><ID>아이디</ID></Category><p />
                <_UserList>
                    {eachUser}<p />
                    <PaginationBox>
                      <Pagination
                        activePage={page}
                        itemsCountPerPage={items}
                        totalItemsCount={filtered_data.length}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}>
                      </Pagination>
                    </PaginationBox> 
                </_UserList>
            </List>
        </ListLayer>
    );
}

export default UserList;