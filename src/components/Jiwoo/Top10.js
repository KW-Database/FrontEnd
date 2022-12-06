import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EachRecommend from './EachRecommend';

const List = styled.div`
    display:flex; justify-content: center; 
    background-color:white; font-size:15px;
`

const Button = styled.button`
display: inline-flex;
align-items: center;
outline: none;
border: none;
border-radius: 4px;
font-size:20px;
color: black;
background-color:white;
cursor: pointer;
padding-left: 1rem;
padding-right: 1rem;
`

const Top10_List = styled.div`
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

/*const dummyData = [
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
  ];*/

function Top10_table (props) {
    const [option, setoption] = useState({
        op: '거래량'
    })
    const [Data, setData] = useState(props.volumeRank)

    const DiffOption = (e) => {
        setoption({
            ...option,
            op: e.target.value,
        })
    }

    useEffect(() => {
        if(option.op === '거래량') {
            setData(props.volumeRank);
        } else if(option.op === '상승') {
           setData(props.upRank);
        } else if(option.op === '하락') {
            setData(props.downRank);
        }
    })
    

    var i = 0;
    let eachRecommend = Data.sort((a, b) => {
        if(option.op === '거래량') {
            return b.volume - a.volume;
        } else if(option.op === '상승') {
            return b.changeRate - a.changeRate;
        } else if(option.op === '하락') {
            return a.changeRate - b.changeRate;
        }
    }).filter((val)=>{
        if(i < 10) {
            i++;
            return val;
        }
    }).map((v) => (<EachRecommend key={v.itemName}
        name={v.itemName} price={v.executionPrice} diff={v.changeAmount} diffrate={v.changeRate}
    />));
    
        //변수명이 일치하지 않아서 그런가봐??
        //volumneRank가 아닌건가
        

    return (
        <div>
            <Button value="거래량" onClick={DiffOption}>거래량</Button>|
            <Button value="상승" onClick={DiffOption}>상승</Button>|
            <Button value="하락" onClick={DiffOption}>하락</Button><p />
            <List>
                <Top10_List>
                    {eachRecommend}
                </Top10_List>
            </List>
        </div>
        
    );
}

export default Top10_table;