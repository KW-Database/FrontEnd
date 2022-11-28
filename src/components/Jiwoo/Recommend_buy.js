import React from 'react';
import styled from 'styled-components';
import EachRecommend from './EachRecommend';

const List = styled.div`
    display:flex; justify-content: center; 
    font-size:15px;
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

const dummyData = [
    {name: "기업1", endprice : 1, diff : 1, diffrate: 1, trans: 10},
    {name: "기업2", endprice : 2, diff : 2, diffrate: 2, trans: 20},
    {name: "기업3", endprice : 3, diff : 3, diffrate: 3, trans: 15},
    {name: "기업4", endprice : 4, diff : 4, diffrate: 4, trans: 25},
    {name: "기업5", endprice : 5, diff : 5, diffrate: 5, trans: 30},
    {name: "기업6", endprice : 6, diff : 6, diffrate: 6, trans: 10},
    {name: "기업7", endprice : 7, diff : 1, diffrate: -1, trans: 15},
    {name: "기업8", endprice : 8, diff : 2, diffrate: -2, trans: 20},
    {name: "기업9", endprice : 9, diff : 3, diffrate: -3, trans: 25},
    {name: "기업10", endprice : 10, diff : 4, diffrate: -4, trans: 15},
    {name: "기업11", endprice : 11, diff : 5, diffrate: -5, trans: 15},
    {name: "기업12", endprice : 12, diff : 6, diffrate: -6, trans: 25}
  ];

function Recommend_buy_table () {
       
    var i = 0;
    let eachRecommend = dummyData.filter((val)=>{
        if(i < 10) {
            i++;
            return val;
        }
    }).map((v) => (<EachRecommend key={v.name}
        name={v.name} endprice={v.endprice} diff={v.diff} diffrate={v.diffrate}
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