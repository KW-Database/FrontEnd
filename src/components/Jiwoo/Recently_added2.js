import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EachRecent2 from './EachRecent2';

const List = styled.div`
    display:flex; justify-content: center; 
    background-color:#e7e7e7; font-size:15px;
`

const RecentList = styled.div`
    display: grid; flex-direction: row; justify-content: center; align-items: center; 
    position:absolute; top:30px; width:1000px;
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

const PageNumber = styled.div`
    width: 1000px; height: 40px;
    display: flex; justify-content:center; align-items: center;
    color: black;
`

const Name = styled.div`
    position: absolute; left:50px; width: 350px; 
    display:flex; text-align:left;
`

const Price = styled.div`
    position: absolute; left:420px; width: 200px; 
    display:flex; justify-content:center;
`

const Diff = styled.div`
    position: absolute; left:630px; width: 200px; 
    display:flex; justify-content:center;
`

const _Date = styled.div`
    position: absolute; left:840px; width: 150px; 
    display:flex; justify-content:center;
`

const dummyData = [
    {name: "기업1", endprice : 1, diff : 1, diffrate: 1, date:"2022-11-15"},
    {name: "기업2", endprice : 2, diff : 2, diffrate: 2, date:"2022-11-14"},
    {name: "기업3", endprice : 3, diff : 3, diffrate: 3, date:"2022-11-14"},
    {name: "기업4", endprice : 4, diff : 4, diffrate: 4, date:"2022-11-13"},
    {name: "기업5", endprice : 5, diff : 5, diffrate: 5, date:"2022-11-12"},
    {name: "기업6", endprice : 6, diff : 6, diffrate: 6, date:"2022-11-11"},
    {name: "기업7", endprice : 7, diff : 1, diffrate: -1, date:"2022-11-11"},
    {name: "기업8", endprice : 8, diff : 2, diffrate: -2, date:"2022-11-10"},
    {name: "기업9", endprice : 9, diff : 3, diffrate: -3, date:"2022-11-09"},
    {name: "기업10", endprice : 10, diff : 4, diffrate: -4, date:"2022-11-09"},
    {name: "기업11", endprice : 11, diff : 5, diffrate: -5, date:"2022-11-08"},
    {name: "기업12", endprice : 12, diff : 6, diffrate: -6, date:"2022-11-08"}
  ];

function Recently_added_table2 () { 
    dummyData.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    })

    var i = 0;
    let eachRecent2 = dummyData.filter((val)=>{
        if(i < 6) {
            i++;
            return val;
        }
    }).map((v) => (<EachRecent2 key={v.name}
        name={v.name} endprice={v.endprice} diff={v.diff} diffrate={v.diffrate} date={v.date}
    />));
    
    var num=1;
    return (
        <List>
            <Name>회사명</Name><Price>현재가</Price><Diff>상승/하락</Diff><_Date>상장날짜</_Date><p />
            <RecentList>
                {eachRecent2}<p />
                <PageNumber>
                    <Link to='/recently_added' style={{ textDecoration : 'none' }}>{num}</Link>
                </PageNumber>
            </RecentList>
        </List>
    );
}

export default Recently_added_table2;