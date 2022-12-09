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

const Exchange = styled.div`    
    position: absolute; width:1000px; height:400px; left:50px; top:20px; 
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
    position: absolute; width:1000px; height:210px; left:50px; top:430px; 
    display:flex; justify-content: center; background-color:white;
    border-radius:5px; box-shadow:3px 3px lightgray;
`

const Chat_layer = styled.div`
    position: absolute; width:400px; height:610px; left:1100px; top:20px; 
    display:flex; justify-content: center; background-color:white; 
    border-radius:5px; box-shadow:3px 3px lightgray;
`

const price = 35.65;

function ExchangePage () {
    const [Data, setData] = useState([]);
    const location = useLocation();
    useEffect(() => {
        /*var obj_par = JSON.parse(obj_str);
        console.log(obj_str);
        /*let map = new Map([
            ["id", "kiki"],
            ["itemCode", location.state.itemCode]
        ]);*/
        //obj.set("id", "kiki");
        //obj.set("itemCode", location.state.itemCode);
        //const obj = Object.fromEntries(map)
        axios.get('/exchange', {params:{
            id: location.state.UserID,
            itemCode: location.state.itemCode
        }})
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    }, []);

    //{"id": "jiwoo", "itemCode": "000050"}

    if(JSON.stringify(Data)==="[]"){
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
                <div className="Background">
                    <Exchange>
                        <Title><Exchange_title Data={Data} itemName={location.state.itemName}/></Title>
                        <Graph><Exchange_graph Data={Data} itemName={location.state.itemName}/></Graph>
                        <Info><StockByAge /></Info>
                    </Exchange>
                    <BuySell_layer><BuySell /></BuySell_layer>
                    <Chat_layer><Chatting title="코스피" /></Chat_layer>
                </div>
            </div>
        );
    }   
}

export default ExchangePage;