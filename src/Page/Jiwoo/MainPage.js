import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import Today_finance_graph from '../../components/Jiwoo/Today_finance';
import SearchCompany from '../../components/Jiwoo/SearchCompany';
import Top10_table from '../../components/Jiwoo/Top10';
import Recommend_buy_table from '../../components/Jiwoo/Recommend_buy';
import Recommend_sell_table from '../../components/Jiwoo/Recommend_sell';
import Recently_added_table from '../../components/Jiwoo/Recently_added';
import mainpage from '../../Json/mainpage.json';

const Background = styled.div`
    position:absolute; top:20px; width:1560px; height:1680px; 
    background-color:#e7e7e7; 
`

const Main_Page = styled.div`
    display:flex; justify-content:center;
    position:absolute; left:260px; width:1040px; height:1580px; background-color:white;
    border-radius:5px;
`

const Company_Search = styled.div`
    position:absolute; width: 1000px; height: 30px; top:20px;
    text-align:left; 
`

const Title = styled.div`
    position:absolute; width: 200px; height:50px; left:20px; top:100px;
    font-size:30px; text-align:left; 
`

const Today_finance = styled.div`
    position:absolute; width: 1000px; height: 350px; top:150px;
    padding-top:20px; border:1px solid black;
    border-radius:5px;
    box-shadow:6px 6px 2px 2px #e7e7e7; 
`

const Recommend_buy = styled.div`
    position:absolute; width: 450px; height: 350px; left:20px; top:500px;
    padding-top:20px; font-size:30px; text-align: left; 
`

const Recommend_sell = styled.div`
  position:absolute; width: 450px; height: 350px; left: 550px; top: 500px; 
  padding-top:20px; font-size:30px; text-align: left; 
`

const Top10 = styled.div`
    position:absolute; width: 450px; left:20px; top: 1020px; 
    padding-top:20px; padding-bottom:50px;
    font-size:30px; text-align: left; 
`

const Recently_added = styled.div`
    position:absolute; width: 450px; height: 350px; left: 550px; top: 1020px; 
    padding-top:20px; font-size:30px; text-align: left;    
`;

const List = styled.div`
  box-sizing: border-box; position: absolute; width: 450px; height: 280px; 
  font-size:20px; text-align:center;
`

const SeeMore = styled.div`
    position: absolute; width:100px; height:50px; left:380px; top:40px;
    font-size:15px; text-align:center;
`

function MainPage() {
    const [data, setData] = useState([]);
    const [Id, setId] = useState("");
    
    useEffect(() => {
        axios.get('/profile/username')
        .then(response => {
            setId(response.data)
        })
        .catch(error => console.log(error))

        axios.get('/home')
        .then(response => setData(response.data))
        .catch(error => console.log(error));
    }, []);

    if(JSON.stringify(data)==="[]"){
        return (
            <Background>
                <UpperLayer UserID={Id}></UpperLayer>
            </Background>
        );
    }
    else{
    return (
        <Background>
            <UpperLayer User={Id}></UpperLayer>
            <div className="Background">
                <Main_Page>
                    <Company_Search>
                        <SearchCompany User={Id}/> <p />
                    </Company_Search>
                    <Title>오늘의 증시</Title>
                    <Today_finance>
                        <Today_finance_graph Data={data}/> <p />
                    </Today_finance>
                    <Recommend_buy>
                        추천 매수 <Link to='/recommend' style={{ textDecoration : 'none', color : 'black' }}><SeeMore>더보기▽</SeeMore></Link> <p />
                        <List><Recommend_buy_table /></List>   
                    </Recommend_buy>
                    <Recommend_sell>
                        추천 매도 <Link to='/recommend' style={{ textDecoration : 'none', color : 'black' }}><SeeMore>더보기▽</SeeMore></Link> <p />
                        <List><Recommend_sell_table /></List>  
                    </Recommend_sell>
                    <Top10>
                        TOP 10
                        <List><Top10_table volumeRank={data.volumeRank} upRank={data.upRank} downRank={data.downRank}/></List>   
                    </Top10>
                    <Recently_added>
                        최근 상장된 주식 <Link to='/recently_added' state={data.publicList} style={{ textDecoration : 'none', color : 'black' }}><SeeMore>더보기▽</SeeMore></Link> <p /> 
                        <List><Recently_added_table publicList={data.publicList} /></List>   
                    </Recently_added>    
                </Main_Page>
              
        </div>
        </Background> 
    );
    }
}

export default MainPage;


//json에 추가
/*"todayFinance" : [
        {
        "name": "코스피",
        "data": [
          { "x": 1996, "y": 162 },
                ...
        ],
      }, {
        "name": "코스닥",
        "data": [
          { "x": 1996, "y": 700 },
                ...
        ],
      }, {
        "name": "코스피200",
        "data": [
          { "x": 1996, "y": 330 },
                ...
        ],
      }];
*/