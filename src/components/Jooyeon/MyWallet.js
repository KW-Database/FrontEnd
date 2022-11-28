import React from 'react';
import styled from 'styled-components';

const Title=styled.div`
    position: absolute; width: 560px; height: 80px; top: 20px;
    display:flex; justify-content: center; align-items: center; 
    border-bottom: 1px solid black;
    font-weight: 500; font-size: 40px; 
`
const Layer=styled.div`
    display:flex; justify-content:center;
`

const WalletTable =styled.div`
    position: absolute; width: 1040px; height: 300px; margin:auto;
    display:flex; justify-content: center; align-items: center;
    background-color:#daedf4; 

`

const Money=styled.div`
    position:absolute; width: 450px; left:70px;
    font-size:30px; text-align: left;
`

const Asset=styled.div`
    position:absolute; width: 450px; left:600px;
    font-size:30px; text-align: left;
`

//
const Buy=styled.div`
    position:absolute; width: 450px; left:70px; top:180px;
    font-size:30px; text-align: left;
` 

const Profit=styled.div`
    position:absolute; width: 450px; left:600px; top:180px;
    font-size:30px; text-align: left;
`
//

const Earning=styled.div`
    position:absolute; width: 450px; left:70px; top: 230px;
    font-size:30px; text-align: left;
`
const EarningRatio=styled.div` 
    position:absolute; width: 450px; left:600px; top: 230px;
    font-size:30px; text-align: left;
`
//


const dummyData={ //보유현금, 총보유자산, 매수, 평가, 수익률, 평가손익: earning-buy
    money:100, //보유현금
    asset:500,//총보유자산
    buy:200,//매수
    earning: 30,
    earningRatio: 70
};

function MyWallet(){
    return(
        <Layer>
            <WalletTable>
                <Title>내 보유자산</Title>
                <Money>보유현금: {dummyData.money}</Money>
                <Asset>총 자산: {dummyData.asset}</Asset><p />
                <Buy>총 매수: {dummyData.buy}</Buy>
                <Profit>평가손익: {dummyData.earning-dummyData.buy}</Profit><p />
                <Earning>총 평가: {dummyData.earning}</Earning>
                <EarningRatio>수익률: {dummyData.earningRatio}</EarningRatio>
            </WalletTable>
        </Layer>
        
    )
    
    

};

export default MyWallet;