import React from 'react';
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
`

const Title = styled.div`
    position:absolute; width:1000px; height:60px;
    displya: flex; justify-content: center; align-items: center;
    border-bottom:1px solid black;
`

const Graph = styled.div`
    position:absolute; left: 0px; top:60px; height:340px;
    display:flex; justify-content: center;
`

const Info = styled.div`
    position:absolute; left:700px; top:60px; height:340px;
    display:flex; justify-content: center;
    border-left: 1px solid gray;
`

const BuySell_layer = styled.div`    
    position: absolute; width:1000px; height:200px; left:50px; top:430px; 
    display:flex; justify-content: center; background-color:white;
`

const Chat_layer = styled.div`
    position: absolute; width:400px; height:600px; left:1100px; top:20px; 
    display:flex; justify-content: center; background-color:white; 
    
`

function ExchangePage () {
    return(
        <div className="Page">
            <UpperLayer></UpperLayer>
            <div className="Background">
                <Exchange>
                    <Title><Exchange_title /></Title>
                    <Graph><Exchange_graph /></Graph>
                    <Info><StockByAge /></Info>
                </Exchange>
                <BuySell_layer><BuySell /></BuySell_layer>
                <Chat_layer><Chatting title="코스피" /></Chat_layer>
            </div>
        </div>
    );
        
}

export default ExchangePage;