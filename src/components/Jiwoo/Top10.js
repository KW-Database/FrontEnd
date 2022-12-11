import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EachRecommend from './EachRecommend';

const List = styled.div`
    display:flex; justify-content: center; 
    background-color:white; font-size:15px;
    font-family: 'Pretendard-Regular';
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
font-family: 'Pretendard-Regular';
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
  font-family: 'Pretendard-Regular';
`

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
        name={v.itemName} price={v.executionPrice} diff={v.changeAmount} diffrate={v.changeRate} UserID={props.UserID}
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