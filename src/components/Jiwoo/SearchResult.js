import React from 'react';
import { useLocation } from 'react-router-dom';
import EachResult from './EachResult';
import styled from 'styled-components';

const Title = styled.div`
    position: absolute; width: 1200px; height: 100px; left: 200px; top: 20px;
    display:flex; justify-content: center; align-items: center; background: #D9D9D9; 
    font-weight: 700; font-size: 50px;
`

const ListLayer = styled.div`
    display:flex; justify-content:center; 
`

const List = styled.div`
    position: absolute; width:800px; top: 150px;
    display:flex; justify-content: center; background-color:white;
`

const Userlist = styled.div`
    display: grid; flex-direction: row; justify-content: center; align-items: center; 
    padding: 8px; gap: 8px; width: 800px; 
    position:absolute; border:3px solid gray; border-radius:10px;
    background-color:white; color:black;
    grid-template-columns : repeat(1, 1fr);
  @media screen and (max-width : 800px){
    grid-template-columns : repeat(1, 1fr);
  }
  @media screen and (max-width : 1350px) and (min-width : 800px){
    grid-template-columns : repeat(2, 1fr);
  }
`

function SearchResult() {
    const location = useLocation();
    
    const dummyData = [
        {name: "회사1"},
        {name: "회사2"},
        {name: "회사3"},
        {name: "회사4"},
        {name: "회사5"}
    ]
    const Value = location.state.result;

    let eachResult = dummyData.filter((val)=>{
        if(Value === "") {
            return val;
        } else if(val.name.toLowerCase().includes(Value.toLowerCase())) {
            return val;
        }
    }).map((v) => (<EachResult 
        key={v.name} name={v.name}  
    />));
    
    return (
        <ListLayer>
            <Title>검색 결과</Title>
            <List>
                <Userlist>
                    {eachResult}
                </Userlist>
            </List>
        </ListLayer>
    );
}

export default SearchResult;