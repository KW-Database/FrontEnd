import React from 'react';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';
import EachRecent from './EachRecent';

const List = styled.div`
    display:flex; justify-content: center;
    position:relative; top:15px;
    background-color:white; font-size:15px;
    font-family: 'Pretendard-Regular';
`

const RecentList = styled.div`
    display: grid; flex-direction: row; justify-content: center; align-items: center; 
    position:absolute; top:15px; width:450px;
    border-top:2px solid gray;
    background-color:white; color:black;
    grid-template-columns : repeat(1, 1fr);
  @media screen and (max-width : 800px){
    grid-template-columns : repeat(1, 1fr);
  }
  @media screen and (max-width : 1350px) and (min-width : 800px){
    grid-template-columns : repeat(2, 1fr);
  }
`

function Recently_added_table (props) {
    var i = 0;
    let eachRecent = props.publicList.sort((a, b) => {
        return new Date(b.publicDate) - new Date(a.publicDate)
    }).filter((val)=>{
        if(i < 10) {
            i++;
            return val;
        }
    }).map((v) => (<EachRecent key={v.itemName}
        name={v.itemName} price={v.executionPrice} diff={v.changeAmount} diffrate={v.changeRate} date={v.publicDate} UserID={props.UserID}
    />));
    
    return (
        <List>
            <RecentList>
                {eachRecent}
            </RecentList>
        </List>
    );
}

export default Recently_added_table;