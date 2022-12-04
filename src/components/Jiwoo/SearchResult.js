import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import EachResult from './EachResult';
import styled from 'styled-components';

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
    position:absolute; left:300px; width: 700px;
    display:flex; text-align:left; 
`

const PageNumber = styled.div`
    width: 800px; height: 40px;
    display: flex; justify-content:center; align-items: center;
    color: black; 
`

function SearchResult() {
    const [Data, setData] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
        axios(
            {
                url: `/search`,
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
    
    const dummyData = [
        {ID: 1, itemCode:"000001", name: "기업1"},
        {ID: 2, itemCode:"000002", name: "기업2"},
        {ID: 3, itemCode:"000003", name: "기업3"},
        {ID: 4, itemCode:"000004", name: "기업4"},
        {ID: 5, itemCode:"000005", name: "기업5"}
    ]
    const Value = location.state.result;

    let eachResult = dummyData.filter((val)=>{
        if(Value === "") {
            return val;
        } else if(val.name.toLowerCase().includes(Value.toLowerCase())) {
            return val;
        }
    }).map((v) => (<EachResult key={v.ID} 
        ID={v.ID} itemCode={v.itemCode} name={v.name}  
    />));
    
    var num=1;
    return (
        <ListLayer>
            <Title>'{Value}' 검색 결과</Title>
            <List>
                <ID>번호</ID><Name>기업명</Name>
                <Userlist>
                    {eachResult}<p />
                    <PageNumber>
                        <Link to='/search' style={{ textDecoration : 'none', color : 'black' }}>{num}</Link>
                    </PageNumber>
                </Userlist>
            </List>
        </ListLayer>
    );
}

export default SearchResult;