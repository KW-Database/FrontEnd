import React from 'react';
import { useLocation, Link } from 'react-router-dom';
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
    const location = useLocation();
    
    const dummyData = [
        {ID: 1, name: "회사1"},
        {ID: 2, name: "회사2"},
        {ID: 3, name: "회사3"},
        {ID: 4, name: "회사4"},
        {ID: 5, name: "회사5"}
    ]
    const Value = location.state.result;

    let eachResult = dummyData.filter((val)=>{
        if(Value === "") {
            return val;
        } else if(val.name.toLowerCase().includes(Value.toLowerCase())) {
            return val;
        }
    }).map((v) => (<EachResult 
        key={v.ID} ID={v.ID} name={v.name}  
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