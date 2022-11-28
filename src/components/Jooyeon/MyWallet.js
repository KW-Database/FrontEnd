import React from 'react';
import styled from 'styled-components';

const Layer=styled.div`
    display:flex; justify-content:center;
`

const WalletTable =styled.div`
    position: absolute; width: 1040px; height: 300px; top:50px; margin:auto;
    display:flex; justify-content: center; align-items: center;
    background-color:#daedf4; border-radius:20px;

`

const Title=styled.div`
    position: absolute; width: 1040px; height: 80px; left:70px; top: 20px;
    display:flex; text-align:left; 
    font-weight: 700; font-size: 35px; 
`

const Money=styled.div`
    position:absolute; width: 450px; left:70px; border-right:1px solid black;
    font-weight: 500; font-size:30px; text-align: left;
`

const Asset=styled.div`
    position:absolute; width: 450px; left:600px;
    font-weight: 500; font-size:30px; text-align: left;
`

//
const Buy=styled.div`
    position:absolute; width: 450px; left:70px; top:200px; 
    font-weight: 700; font-size:25px; text-align: left;
` 

const Profit=styled.div`
    position:absolute; width: 450px; left:600px; top:200px;
    font-weight: 700; font-size:25px; text-align: left;
`
//

const Earning=styled.div`
    position:absolute; width: 450px; left:70px; top: 250px;
    font-weight: 700; font-size:25px; text-align: left;
`
const EarningRatio=styled.div` 
    position:absolute; width: 450px; left:600px; top: 250px;
    font-weight: 700; font-size:25px; text-align: left;
`

const Value = styled.div`
    position:relative; width:50px; left:300px; top:-35px; 
    font-weight: 500; font-size:25px; text-align:right;
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
                <Money>보유KRW <br /> {dummyData.money}</Money>
                <Asset>총 보유자산 <br /> {dummyData.asset}</Asset><p />
                <Buy>총 매수 <Value>{dummyData.buy}</Value></Buy>
                <Profit>평가손익 <Value>{dummyData.earning-dummyData.buy}</Value></Profit><p />
                <Earning>총 평가 <Value> {dummyData.earning}</Value></Earning>
                <EarningRatio>수익률 <Value>{dummyData.earningRatio}%</Value></EarningRatio>
            </WalletTable>
        </Layer>
        
    )
    
    

};

export default MyWallet;