import React from 'react';
import styled from 'styled-components';
import EachRecommend from './EachRecommend';
import mainpage from '../../Json/mainpage.json';

const List = styled.div`
    display:flex; justify-content: center; 
    font-size:15px;
    font-family: 'Pretendard-Regular';
`

const RecommendList = styled.div`
    display: grid; flex-direction: row; justify-content: center; align-items: center; 
    width:500px;
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

function Recommend_buy_table ({UserID, Data}) {  

    var i = 0;
    let eachRecommend = Data.filter((val)=>{
        if(i < 10) {
            i++;
            return val;
        }
    }).map((v) => (<EachRecommend key={v.itemCode}
        name={v.itemName} price={v.executionPrice} diff={v.changeAmount} diffrate={v.changeRate} itemCode={v.itemCode} UserID={UserID}
    />));
    
    return (
        <List>
            <RecommendList>
                {eachRecommend}
            </RecommendList>
        </List>
    );
}

export default Recommend_buy_table;