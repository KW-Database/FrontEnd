import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    position:absolute; left:180px; top:5px; width:140px;
    font-size:20px; font-weight:600;
    border-bottom:1px solid gray;
`

const Content = styled.div`
    position:absolute; left:10px; top:40px; 
    width:480px; height:160px;
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

function CompanyInfo ({Data}) {
    return(
        <div>
            <Title>기업 개요</Title>
            <Content>{Data}</Content>
        </div>    
    );
}

export default CompanyInfo;