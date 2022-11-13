import React, { useState } from 'react';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import Today_finance_graph from '../../components/Today_finance';
import SearchCompany from '../../components/Jiwoo/SearchCompany';
import Top10_table from '../../components/Jiwoo/Top10';
import Recommend_buy_table from '../../components/Jiwoo/Recommend_buy';
import Recommend_sell_table from '../../components/Jiwoo/Recommend_sell';
import Recently_added_table from '../../components/Jiwoo/Recently_added';
import '../../App.css';

const Main_Page = styled.div`
    display:flex; justify-content:center;
    position:absolute; width:1000px;
`

const Today_finance = styled.div`
    position:absolute; width: 400px; height: 350px; top:100px;
    padding-top:20px; font-size:30px; text-align:left; background-color:white;
`

const Company_Search = styled.div`
    position:absolute; width: 400px; height: 350px; left: 800px; top:100px;
    padding-top:20px; text-align:left; background-color:white;
`

const Recommend_buy = styled.div`
    position:absolute; width: 400px; height: 350px; top: 450px; top:500px;
    padding-top:20px; font-size:30px; text-align: left; background-color:white;
`

const Recommend_sell = styled.div`
  position:absolute; width: 400px; height: 350px; left: 800px; top: 500px; 
  padding-top:20px; font-size:30px; text-align: left; background-color:white;
`

const Top10 = styled.div`
    position:absolute; width: 400px; height: 350px; top: 900px; 
    padding-top:20px; font-size:30px; text-align: left; background-color:white;
`

const Recently_added = styled.div`
    position:absolute; width: 400px; height: 350px; left: 800px; top: 900px; 
    padding-top:20px; padding-bottom:50px;
    font-size:30px; text-align: left; background-color:white;   
`;

const List = styled.div`
  box-sizing: border-box; position: absolute; width: 400px; height: 280px; 
  font-size:20px; text-align:center;
  overflow: auto;
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

const SeeMore = styled.div`
    position: absolute; width:100px; height:50px; left:330px; top:40px;
    font-size:15px; text-align:center;
`

function MainPage() {
    return (
        <Main_Page>
            <UpperLayer></UpperLayer>
            <Today_finance>
                오늘의 증시 <p />
                <List><Today_finance_graph /></List>
            </Today_finance>
            <Company_Search>
                <SearchCompany /> <p />
            </Company_Search>
            <Recommend_buy>
                추천 매수 <SeeMore>더보기▽</SeeMore> <p />
                <List><Recommend_buy_table /></List>   
            </Recommend_buy>
            <Recommend_sell>
                추천 매도 <SeeMore>더보기▽</SeeMore> <p />
                <List><Recommend_sell_table /></List>  
            </Recommend_sell>
            <Top10>
                TOP 10 <p />
                <List><Top10_table /></List>   
            </Top10>
            <Recently_added>
                최근 상장된 주식 <SeeMore>더보기▽</SeeMore> <p /> 
                <List><Recently_added_table /></List>   
            </Recently_added>    
            <p /><br />
        </Main_Page>   
    );
}

export default MainPage;