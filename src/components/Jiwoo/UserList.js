import React, { useState } from 'react';
import EachUser from './EachUser';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Title = styled.div`
    position: absolute; width: 1200px; height: 100px; left:-100px; top: 20px;
    display:flex; justify-content: center; align-items: center; background: #D9D9D9; 
    font-weight: 700; font-size: 50px;
`

const ListLayer = styled.div`
    position: absolute; left:300px; width:1000px;
`

const List = styled.div`
    position: relative; width:1000px; top: 150px;
    display:flex; justify-content: center;
`

const Search = styled.div`
    position: absolute; width:300px; height:60px; 
    display:flex; justify-content: center;
`

const Userlist = styled.div`
    display: grid; flex-direction: row; justify-content: center;
    padding: 8px; gap: 8px;
    position:absolute; top:100px; 
    border:3px solid gray; border-radius:10px;
    background-color:white; color:black;
    grid-template-columns : repeat(3, 1fr);
  @media screen and (max-width : 800px){
    grid-template-columns : repeat(1, 1fr);
  }
  @media screen and (max-width : 1000px) and (min-width : 200px){
    grid-template-columns : repeat(2, 1fr);
  }
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888888;
  &::-webkit-scrollbar-track {
    background-color: white;
`

function UserList() {
    const [search, setSearch] = useState("");
    //const [selectedData, setselectedData] = useState([]);
    const onChange = (e) => {
        setSearch(e.currentTarget.value);
    };
    const dummyData = [
        {ID:"ID1", name: "User1"},
        {ID:"ID2", name: "User2"},
        {ID:"ID3", name: "User3"},
        {ID:"ID4", name: "User4"},
        {ID:"ID5", name: "User5"}
    ]
    
    let eachUser = dummyData.filter((val)=>{
        if(search === "") {
            return val;
        } else if(val.name.toLowerCase().includes(search.toLowerCase()) || val.ID.toLowerCase().includes(search.toLowerCase())) {
            return val;
        }
    }).map((v) => (<EachUser key={v.ID}
        ID={v.ID} name={v.name}  
    />));
    
    return (
        <ListLayer>
            <Title>사용자 목록</Title>
            <List>
                <Search><SearchBar search={search} onChange={onChange} /></Search>
                <Userlist>
                    {eachUser}
                </Userlist>
            </List>
        </ListLayer>
    );
}

export default UserList;