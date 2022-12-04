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
    position:absolute; top:20px; width:1560px; height:1650px; 
    background-color:#e7e7e7; 
`

const Main_Page = styled.div`
    display:flex; justify-content:center;
    position:absolute; left:260px; width:1040px; height:1600px; background-color:white;
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
    
    useEffect(() => {
		const fetchData = async() => {
          axios(
            {
                url: '/test/rank',
                method: 'get',
                baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            setData(response.data);
            //alert("성공")
          }).catch(function (error) {
            //alert(error);
        });
        }	
    }, []);

    return (
        <Background>
            <UpperLayer></UpperLayer>
            <div className="Background">
                {data}
                <Main_Page>
                    <Company_Search>
                        <SearchCompany /> <p />
                    </Company_Search>
                    <Title>오늘의 증시</Title>
                    <Today_finance>
                        <Today_finance_graph /> <p />
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
                        <List><Top10_table volumeRank={mainpage.volumeRank} upRank={mainpage.upRank} downRank={mainpage.downRank}/></List>   
                    </Top10>
                    <Recently_added>
                        최근 상장된 주식 <Link to={`/recently_added`} state={{}} style={{ textDecoration : 'none', color : 'black' }}><SeeMore>더보기▽</SeeMore></Link> <p /> 
                        <List><Recently_added_table publicDateList={mainpage.publicDateList} /></List>   
                    </Recently_added>    
                </Main_Page>  
            </div>
        </Background> 
    );
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