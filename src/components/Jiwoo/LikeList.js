import React, { useState } from 'react';
import EachCompany from './EachCompany';
import styled from 'styled-components';
import SearchBar from './SearchBar';

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

const Search = styled.div`
    position: absolute; width:300px; height:70px; 
    display:flex; justify-content: center;
`

const CompanyList = styled.div`
    display: grid; flex-direction: row; justify-content: center; align-items: center; 
    padding: 8px; gap: 8px; width: 750px; 
    position:absolute; top:100px; border:3px solid gray; border-radius:10px;
    background-color:white; color:black;
    grid-template-columns : repeat(1, 1fr);
  @media screen and (max-width : 800px){
    grid-template-columns : repeat(1, 1fr);
  }
  @media screen and (max-width : 1350px) and (min-width : 800px){
    grid-template-columns : repeat(2, 1fr);
  }
`

function LikeList() {
    const [search, setSearch] = useState("");
    //const [selectedData, setselectedData] = useState([]);
    const onChange = (e) => {
        setSearch(e.currentTarget.value);
    };
    const dummyData = [
        {name: "기업1", endprice : 10, diff : 1, diffrate: 1, like: 10},
        {name: "기업2", endprice : 20, diff : 2, diffrate: 2, like: 8},
        {name: "기업3", endprice : 30, diff : 3, diffrate: 3, like: 12},
        {name: "기업4", endprice : 40, diff : 4, diffrate: 4, like: 5},
        {name: "기업5", endprice : 50, diff : 5, diffrate: 5, like: 3}
    ]
    
    let eachCom = dummyData.filter((val)=>{
        if(search === "") {
            return val;
        } else if(val.name.toLowerCase().includes(search.toLowerCase())) {
            return val;
        }
    }).map((v) => (<EachCompany key={v.name}
        name={v.name} endprice={v.endprice} diff={v.diff} diffrate={v.diffrate} like={v.like}
    />));
    
    return (
        <ListLayer>
            <Title>관심 목록</Title>
            <List>
                <Search><SearchBar search={search} onChange={onChange} /></Search>
                <CompanyList>
                    {eachCom}
                </CompanyList>
            </List>
        </ListLayer>
    );
}

export default LikeList;