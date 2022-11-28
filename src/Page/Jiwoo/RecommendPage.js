import React, { Component } from 'react';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import Recommend_buy_table from '../../components/Jiwoo/Recommend_buy';
import Recommend_sell_table from '../../components/Jiwoo/Recommend_sell';

const Title = styled.div`
    position: absolute; width: 560px; left:500px; height: 80px; top: 20px;
    display:flex; justify-content: center; align-items: center; 
    border-bottom: 1px solid black;
    font-weight: 500; font-size: 40px; 
`

const BuyLayer = styled.div`
    position: absolute; width: 540px; height:600px; left: 250px; top: 120px;
    display:flex; justify-content: center; align-items: center; 
`

const SellLayer = styled.div`
    position: absolute; width: 540px; height:600px; left: 810px; top: 120px;
    display:flex; justify-content: center; align-items: center; 
`

const Table = styled.div`
    position: absolute; top:90px; 
`

const SubTitle = styled.div`
    display:flex; justify-content:center; 
    position:absolute; top:20px; width:500px; font-size:30px;
`

const Category = styled.div`
  position:absolute; top:-10px;
`

const Name = styled.div`
    position: absolute; left:50px; width: 150px; 
    display:flex; justify-content:left;
`

const Price = styled.div`
    position: absolute; left:200px; width: 120px; 
    display:flex; justify-content:center;
`

const Diff = styled.div`
    position: absolute; left:330px; width: 120px; 
    display:flex; justify-content:center;
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
                        <Table>
                            <Category><Name>회사명</Name><Price>현재가</Price><Diff>상승/하락</Diff></Category><p />
                            <Recommend_buy_table />
                        </Table>
                    </BuyLayer>
                    <SellLayer>
                        <SubTitle>추천 매도</SubTitle>
                        <Table>
                            <Category><Name>회사명</Name><Price>현재가</Price><Diff>상승/하락</Diff></Category><p />
                            <Recommend_sell_table />
                        </Table>
                    </SellLayer>
                </div>
            </div>
        );
    }
}

export default RecommendPage;