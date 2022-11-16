import React, { useState } from 'react';
import EachUser from './EachUser';
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

const Userlist = styled.div`
    display: grid; flex-direction: row; justify-content: center; align-items: center; 
    padding: 8px; gap: 8px; width: 750px; 
    position:absolute; top:100px; border:3px solid gray; border-radius:10px;
    background-color:white; color:black;
    grid-template-columns : repeat(2, 1fr);
  @media screen and (max-width : 800px){
    grid-template-columns : repeat(1, 1fr);
  }
  @media screen and (max-width : 1350px) and (min-width : 800px){
    grid-template-columns : repeat(2, 1fr);
  }
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
        {ID:"ID5", name: "User5"},
        {ID:"ID6", name: "User6"}
    ]
    //let eachCom = dummyData.filter(v => selectedData.includes(v.name))
    let eachUser = dummyData.map((v) => (<EachUser key={v.ID}
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