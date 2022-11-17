import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EachManage from './EachManage';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Board_block = styled.div`
    position: absolute; left:200px; width:1200px;
`

const Title = styled.div`
    position: absolute; width: 1200px; height: 100px; top: 20px;
    display:flex; justify-content: center; align-items: center; background: #D9D9D9; 
    font-weight: 700; font-size: 50px;
`
const Search = styled.div`
    position: absolute; width:600px; height:70px; left:250px; top:140px; 
    display:flex; justify-content: center;
`

const Post = styled.button`
    position: absolute; width: 120px; height: 40px; left: 1080px; top: 150px;
    font-size: 20px; color: #FFFFFF; background-color:skyblue;
    border:1px solid black; border-radius:10px;
`

const List = styled.div`
    position: absolute; width:1200px; top: 210px; 
    display:flex; justify-content: center; background-color:white;
`

const CompanyList = styled.div`
    display: grid; flex-direction: row; justify-content: center; align-items: center; 
    padding: 8px; gap: 8px; width: 1200px;
    border:3px solid gray;
    background-color:white; color:black;
    grid-template-columns : repeat(1, 1fr);
  @media screen and (max-width : 800px){
    grid-template-columns : repeat(1, 1fr);
  }
  @media screen and (max-width : 1200px) and (min-width : 800px){
    grid-template-columns : repeat(2, 1fr);
  }
`

const PageNumber = styled.div`
    width: 1200px; height: 40px;
    display: flex; justify-content:center; align-items: center;
    color: black;
`

function CompanyManage () {
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.currentTarget.value);
    };
    const dummyData = [
        {ID: 1, Name: "회사1", Date: "2022-11-01", Info: "개요1"},
        {ID: 2, Name: "회사2", Date: "2022-11-02", Info: "개요2"},
        {ID: 3, Name: "회사3", Date: "2022-11-03", Info: "개요3"},
        {ID: 4, Name: "회사4", Date: "2022-11-04", Info: "개요4"},
        {ID: 5, Name: "회사5", Date: "2022-11-05", Info: "개요5"}
    ]
    
    let eachManage = dummyData.filter((val)=>{
        if(search === "") {
            return val;
        } else if(val.Name.toLowerCase().includes(search.toLowerCase())) {
            return val;
        }
    }).map((v) => (<EachManage key={v.ID}
        ID={v.ID} Name={v.Name} Date={v.Date} Info={v.Info}  
    />));
    
    let num=1;
    return(
        <Board_block>
            <Title>주식회사 목록</Title>
            <Search><SearchBar search={search} onChange={onChange} /></Search>
            <Link to="/manage/enroll" style={{ textDecoration : 'none' }}><Post value="Post">등록</Post></Link>
            <List>
                <CompanyList>
                    {eachManage}
                    <PageNumber>
                        <Link to='/manage' style={{ textDecoration : 'none' }}>{num}</Link>
                    </PageNumber>
                </CompanyList>
            </List>
        </Board_block>
    );
};

export default CompanyManage;