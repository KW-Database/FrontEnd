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

function Recently_added_table2 (props) { 
    const Data = props.recently_added;
    
    var i = 0;
    let eachRecent2 = Data.sort((a, b) => {
        return new Date(b.publicDate) - new Date(a.publicDate)
    }).filter((val)=>{
        if(i < 6) {
            i++;
            return val;
        }
    }).map((v) => (<EachRecent2 key={v.itemName}
        name={v.itemName} price={v.executionPrice} diff={v.changeAmount} diffrate={v.changeRate} date={v.publicDate}
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