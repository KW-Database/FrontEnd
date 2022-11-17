import React, { Component } from 'react';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import Recommend_buy_table from '../../components/Jiwoo/Recommend_buy';
import Recommend_sell_table from '../../components/Jiwoo/Recommend_sell';

const Title = styled.div`
    position: absolute; width: 1200px; height: 100px; left: 200px; top: 20px;
    display:flex; justify-content: center; align-items: center; background: #D9D9D9; 
    font-weight: 700; font-size: 50px;
`

const BuyLayer = styled.div`
    position: absolute; width: 560px; height:500px; left: 200px; top: 150px;
    display:flex; justify-content: center; align-items: center; background: white;
`

const SellLayer = styled.div`
    position: absolute; width: 560px; height:500px; left: 840px; top: 150px;
    display:flex; justify-content: center; align-items: center; background: white;
`

const SubTitle = styled.div`
    display:flex; justify-content:center; 
    position:absolute; top:20px; width:500px; font-size:30px;
`

class RecommendPage extends Component {
    render() {
        return(
            <div className="Page">
                <UpperLayer />
                <div className="Background">
                    <Title>추천 매수/매도</Title>
                    <BuyLayer>
                        <SubTitle>추천 매수</SubTitle>
                        <Recommend_buy_table />
                    </BuyLayer>
                    <SellLayer>
                        <SubTitle>추천 매도</SubTitle>
                        <Recommend_sell_table />
                    </SellLayer>
                </div>
            </div>
        );
    }
}

export default RecommendPage;