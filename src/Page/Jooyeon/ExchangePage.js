import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import Exchange_title from '../../components/Jooyeon/ExchangeTitle';
import Exchange_graph from '../../components/Jooyeon/Exchange';
import BuySell from '../../components/Jooyeon/BuySell';
import Chatting from '../../components/Jooyeon/Chatting';
import StockByAge from '../../components/Jooyeon/StockByAge';
import CompanyInfo from '../../components/Jooyeon/Company_info';
import Share_holder from '../../components/Jooyeon/Shareholder';

const Background = styled.div`
    position:absolute; top:20px; width:1560px; height:960px; 
    background-color:#e7e7e7; 
`

const Exchange = styled.div`    
    position: absolute; width:1000px; height:400px; left:50px; top:90px; 
    display:flex; justify-content: center; background-color:white;
    border-radius:5px;  box-shadow:3px 3px lightgray;
`

const Title = styled.div`
    position:absolute; width:1000px; height:60px;
    displya: flex; justify-content: center; align-items: center;
    border-bottom:2px solid gray;
`

const Graph = styled.div`
    position:absolute; left: 0px; top:60px; height:340px;
    display:flex; justify-content: center;
`

const Info = styled.div`
    position:absolute; left:700px; top:60px; height:340px;
    display:flex; justify-content: center;
    border-left: 2px solid gray;
`

const BuySell_layer = styled.div`    
    position: absolute; width:1000px; height:210px; left:50px; top:500px; 
    display:flex; justify-content: center; background-color:white;
    border-radius:5px; box-shadow:3px 3px lightgray;
`

const Company_layer = styled.div`    
    position: absolute; width:1000px; height:210px; left:50px; top:720px; 
    display:flex; justify-content: center; background-color:white;
    border-radius:5px; box-shadow:3px 3px lightgray;
`

const Company_info = styled.div`
    position:absolute; left:0px; top:5px; 
    width:500px; height:200px;
    border-right:1px solid black;
`

const Shareholder = styled.div`
    position:absolute; left:500px; top:5px;
    width:500px; height:200px;
`

const Chat_layer = styled.div`
    position: fixed; width:400px; height:610px; left:1080px; top:100px; 
    display:flex; justify-content: center; background-color:white; 
    border-radius:5px; box-shadow:3px 3px lightgray;
`

function ExchangePage () {
    const [Data, setData] = useState([]);
    const [Chat, setChat] = useState([]);
    const location = useLocation();
    useEffect(() => {
        axios.get('/exchange', {params:{
            id: location.state.UserID,
            itemCode: location.state.itemCode
        }}).then(response => setData(response.data))
        .catch(error => console.log(error));

        axios.get('/exchange/renewChat',{params: {
            itemCode: location.state.itemCode
        }}).then(response => setChat(response.data))
        .catch(error => console.log(error));
    }, []);

    setTimeout(function run() {
        //axios - get으로 데이터 동기화
        axios.get('/exchange/renewChat',{params: {
            itemCode: location.state.itemCode
        }}).then(response => setChat(response.data))
        .catch(error => console.log(error));
        setTimeout(run, 5000);
      }, 5000);

    if(JSON.stringify(Data)==="[]" || JSON.stringify(Data)==="[]"){
        return (
            <div>
                <UpperLayer></UpperLayer>
            </div>
        );
    }
    else{
        return(
            <div className="Page">
                <UpperLayer></UpperLayer>
                <Background>
                    <Exchange>
                        <Title><Exchange_title Data={Data} itemName={location.state.itemName}/></Title>
                        <Graph><Exchange_graph Data={Data} itemName={location.state.itemName}/></Graph>
                        <Info><StockByAge Data={Data.holderAge}/></Info>
                    </Exchange>
                    <BuySell_layer><BuySell Data={Data} UserID={location.state.UserID}/></BuySell_layer>
                    <Company_layer>
                        <Company_info><CompanyInfo Data={Data.companyInfo.companySummary} /></Company_info>
                        <Shareholder><Share_holder /></Shareholder>
                    </Company_layer>
                    <Chat_layer><Chatting UserID={location.state.UserID} itemCode={location.state.itemCode} title={location.state.itemName} Chat={Chat} /></Chat_layer>
                </Background>
            </div>
        );
    }   
}

export default ExchangePage;