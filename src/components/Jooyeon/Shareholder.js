import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    position:absolute; left:80px; top:5px; width:140px;
    font-size:20px; font-weight:600;
    border-bottom:1px solid gray;
`
const Content = styled.div`
    position:absolute; left:10px; top:40px; 
    width:280px; height:160px;
    font-size:15px; text-align:left;
    display:grid; overflow: auto;
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 6px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #888888;
      &::-webkit-scrollbar-track {
        background-color: white;
`

const Line = styled.div`
    width:280px; height:20px;
    margin-bottom:0px;
`

function Shareholder ({Data}) {
    //주요주주 리스트 확인해서 넣기
    var i=0;
    let eachHolder = Data.map((props)=>{
        i=i+1;
        return(
            <Line>{i}. {props.majorHolders}</Line>
        )
    })

    return(
        <div>
            <Title>주요 주주</Title>
            <Content>
                {eachHolder}
            </Content>
        </div>    
    );
}

export default Shareholder;