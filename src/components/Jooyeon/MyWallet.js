import React from 'react';
import styled from 'styled-components';
import mywallet from '../../Json/mywallet'

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
    position: absolute; width: 1040px; height: 230px; top:120px; margin:auto;
    display:flex; justify-content: center; align-items: center;
    background-color:#daedf4; 
    border-radius:10px; box-shadow:5px 5px lightgray;
`

const Money=styled.div`
    position:absolute; width: 450px; left:70px; top:30px; border-right:1px solid black;
    font-weight: 500; font-size:30px; text-align: left;
`

const Asset=styled.div`
    position:absolute; width: 450px; left:600px; top:30px;
    font-weight: 500; font-size:30px; text-align: left;
`

//
const Buy=styled.div`
    position:absolute; width: 450px; left:70px; top:130px; 
    font-weight: 700; font-size:25px; text-align: left;
` 

const Profit=styled.div`
    position:absolute; width: 450px; left:600px; top:130px;
    font-weight: 700; font-size:25px; text-align: left;
`
//

const Earning=styled.div`
    position:absolute; width: 450px; left:70px; top: 180px;
    font-weight: 700; font-size:25px; text-align: left;
`
const EarningRatio=styled.div` 
    position:absolute; width: 450px; left:600px; top: 180px;
    font-weight: 700; font-size:25px; text-align: left;
`

const Value = styled.div`
    position:relative; width:50px; left:300px; top:-35px; 
    font-weight: 500; font-size:25px; text-align:right;
`

/*const dummyData={ //보유현금, 총보유자산, 매수, 평가, 수익률, 평가손익: earning-buy
    money:100, //보유현금
    asset:500,//총보유자산
    buy:200,//매수
    earning: 30,
    earningRatio: 70
};*/

//data: location.state.itemCode,

function MyWallet(props){
    const [Data, setData] = useState([]);

    return(
        <Layer>
            <Title>내 보유자산</Title>
            <WalletTable>
                <Money>보유KRW <br /> {mywallet.cash.toLocaleString('en-AU')}</Money>
                <Asset>총 보유자산 <br /> {mywallet.totalHoldings.toLocaleString('en-AU')}</Asset><p />
                <Buy>총 매수 <Value>{mywallet.totalPurchase.toLocaleString('en-AU')}</Value></Buy>
                <Profit>평가손익 <Value>{(mywallet.totalAppraisal-mywallet.totalPurchase).toLocaleString('en-AU')}</Value></Profit><p />
                <Earning>총 평가 <Value> {mywallet.totalAppraisal.toLocaleString('en-AU')}</Value></Earning>
                <EarningRatio>수익률 <Value>{(mywallet.totalRate).toFixed(2)}%</Value></EarningRatio>
            </WalletTable>
        </Layer>
        
    )

};

export default MyWallet;