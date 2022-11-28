import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EachUser from './EachUser';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Title = styled.div`
    position: absolute; width: 560px; left:220px; height: 80px; top: 20px;
    display:flex; justify-content: center; align-items: center; 
    border-bottom: 1px solid black;
    font-weight: 500; font-size: 40px; 
`

const ListLayer = styled.div`
    position: absolute; left:300px; width:1000px;
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

const PageNumber = styled.div`
    width: 800px; height: 40px;
    display: flex; justify-content:center; align-items: center;
    color: black;
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
    
    var num=1;
    return (
        <ListLayer>
            <Title>사용자 목록</Title>
            <List>
                <Search><SearchBar search={search} onChange={onChange} /></Search>
                <Category><Name>사용자명</Name><ID>아이디</ID></Category><p />
                <_UserList>
                    {eachUser}<p />
                    <PageNumber>
                        <Link to='/admin' style={{ textDecoration : 'none' }}>{num}</Link>
                    </PageNumber>
                </_UserList>
            </List>
        </ListLayer>
    );
}

export default UserList;