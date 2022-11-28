import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EachManage from './EachManage';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Board_block = styled.div`
    position: absolute; left:280px; width:1040px;
`

const Title = styled.div`
    position: absolute; width: 560px; left:240px; height: 80px; top: 20px;
    display:flex; justify-content: center; align-items: center; 
    border-bottom: 1px solid black;
    font-weight: 500; font-size: 40px; 
`

const Search = styled.div`
    position: absolute; width:800px; height:70px; left:50px; top:150px; 
    display:flex; justify-content: center;
`

const Post = styled.button`
    position: absolute; width: 100px; height: 40px; left: 940px; top: 160px;
    font-size: 20px; color: #FFFFFF; background-color:skyblue;
    border: 1px solid black; border-radius:20px;
`

const List = styled.div`
    position: absolute; width:1040px; top: 240px; 
    display:flex; justify-content: center; background-color:#e7e7e7;
`

const CompanyList = styled.div`
    display: grid; flex-direction: row; width: 1040px; 
    position: absolute; top:30px;
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
    width: 1040px; height: 40px;
    display: flex; justify-content:center; align-items: center;
    color: black;
`

const ID = styled.div`
    position:absolute; left:20px; width:50px;
    display:flex; justify-content:center;
`

const Name = styled.div`
    position:absolute; left:0px; width:1000px; width:1000px;
    display:flex; justify-content:center;
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
                <ID>번호</ID><Name>기업명</Name>
                <CompanyList>
                    {eachManage}<p />
                    <PageNumber>
                        <Link to={`/manage?page=${num}`} style={{ textDecoration : 'none', color : 'black'}}>{num}</Link>
                    </PageNumber>
                </CompanyList>
            </List>
        </Board_block>
    );
};

export default CompanyManage;