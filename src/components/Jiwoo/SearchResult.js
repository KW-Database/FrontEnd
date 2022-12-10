import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import EachResult from './EachResult';
import styled from 'styled-components';
import Pagination from 'react-js-pagination';

const Title = styled.div`
    position: absolute; width: 560px; height: 80px; top: 20px;
    display:flex; justify-content: center; align-items: center; 
    border-bottom: 1px solid black;
    font-weight: 500; font-size: 40px; 
`

const ListLayer = styled.div`
    display:flex; justify-content:center; 
`

const List = styled.div`
    position: absolute; width:800px; top: 150px;
    display:flex; justify-content: center;
`

const Userlist = styled.div`
    display: grid; flex-direction: row; justify-content: center; align-items: center; 
    position:absolute; width: 800px; top:30px;
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

const ID = styled.div`
    position:absolute; left:20px; width:50px;
    display:flex; justify-content:center;
`

const Name = styled.div`
    position:absolute; left:350px; width: 450px;
    display:flex; text-align:left; 
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

function SearchResult() {
    const [Data, setData] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
        axios.get(`search`, {params:{
            name: location.state.result
        }})
          .then( response => setData(response.data))
          .catch( error => alert(error));
    }, []);

    const Value = location.state.result;

    const [page, setPage] = useState(1);
    const items = 5;
    const handlePageChange = (page) => { 
        setPage(page); 
    };

    let filtered_data = Data.filter((val)=>{
        if(Value === '') {
            return val;
        } else if(val.itemName.toLowerCase().includes(Value.toLowerCase())) {
            return val;
        }
    })

    var i=0;
    let eachResult = filtered_data.slice(
        items*(page-1),
        items*(page-1) + items
    ).map((v) => {
        i=i+1;
        return(<EachResult key={v.itemCode} 
            User={location.state.User} ID={items*(page-1)+i} itemCode={v.itemCode} itemName={v.itemName}  
        />);  
    });
    
    return (
        <ListLayer>
            <Title>'{Value}' 검색 결과</Title>
            <List>
                <ID>번호</ID><Name>기업명</Name>
                <Userlist>
                    {eachResult}<p />
                    <PaginationBox>
                      <Pagination
                        activePage={page}
                        itemsCountPerPage={items}
                        totalItemsCount={filtered_data.length}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}>
                      </Pagination>
                    </PaginationBox> 
                </Userlist>
            </List>
        </ListLayer>
    );
}

export default SearchResult;