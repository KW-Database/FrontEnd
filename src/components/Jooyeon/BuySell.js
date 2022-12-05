import React, { useState } from 'react';
import styled from 'styled-components';
import Price_info from '../../Json/BuySell.json';

const InputLayer = styled.div`
    position: absolute; width:450px; height:150px; left:50px; top:20px;
    align-items: center; text-align:left; 
    font-size:20px; background-color:white;
`

const Input = styled.input`
    width:200px; height:30px; font-size:20px; margin-left:10px; margin-top:5px;
    border:0; border-bottom:1px solid black; text-align:center;
`

const BuyButton = styled.button`
    position:absolute; width:120px; height:30px; left:700px; top:160px;
    display:flex; justify-content:center; background-color:skyblue;
    font-size:15px; font-weight:600;
    border:0; border-radius:20px; box-shadow:2px 2px lightgray;
`

const SellButton = styled.button`
    position:absolute; width:120px; height:30px; left:850px; top:160px;
    display:flex; justify-content:center; background-color:red;
    font-size:15px; font-weight:600;
    border:0; border-radius:20px; box-shadow:2px 2px lightgray;
`

const OptionButton = styled.button`
    position: absolute; left:440px; top:55px;
    width:70px; height:30px; font-size:15px; margin-left:10px; margin-top:5px;
    border:0; border-radius:5px; text-align:center; background-color:lightgreen;
    box-shadow:2px 2px lightgray;
`

const BuyInfoLayer = styled.div`
    position: absolute; width:220px; height:150px; left:700px; top:20px;
    align-items: center; text-align:left; 
    font-size:15px; background-color:white;
`

const Input2 = styled.input`
    width:100px; height:30px; font-size:15px; margin-left:10px; margin-top:5px;
    border:0; border-bottom:1px solid black; text-align:center;
`

function BuySell () {  
    const [purchase, setpurchase] = useState({
        count: 0, price: 0
    })
    const {count, price} = purchase;
    const possible_sell = Number(Price_info.itemNumber);

    const HandleChange = (e) => {
        const { value, name } = e.target;
        setpurchase({
            ...purchase,
            [name]: value
        })
    }

    var total;
    if (price == 0 || count == 0)
        total = 0;
    else
        total = count * price;

    var possible_buy;
    if (price == 0)
        possible_buy = 0;
    else
        possible_buy = Math.floor(Price_info.cash / price);

    const HandlePrice = () => {
        setpurchase({
            ...purchase,
            price: Price_info.cur
        })
    }

    const HandleBuy = () => {      
        if(count == 0 ) {
            alert("수량을 올바르게 입력하세요.")
        } else if(price == 0 ) {
            alert("가격을 올바르게 입력하세요.")
        } else if(total > possible_buy) {
            alert("보유한 현금보다 더 많은 양을 구매할 수 없습니다. 수량과 금액을 다시 입력하세요.")
        } else {
            alert("매수");
        }
    }

    const HandleSell = () => {
        if(count == 0) {
            alert("수량을 올바르게 입력하세요.");  
        } else if(price == 0 ) {
            alert("가격을 올바르게 입력하세요.");
        } else if(count > Price_info.itemNumber) {
            alert("보유한 주식보다 많은 양을 판매할 수 없습니다. 수량을 다시 입력하세요.");
        } else {
            alert("매도");
        }
    }

    return(
        <div>
            <InputLayer>
                거래수량&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" name="count" value={count} onChange={HandleChange} /> 주<br />
                거래금액&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" name="price" value={price} onChange={HandleChange} /> 원<br />
                거래총금액&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" name="total" value={total.toLocaleString('en-AU')} disabled /> 원<br />
                주문가능수량&nbsp;&nbsp;<Input type="text" name="possible_buy" value={possible_buy.toLocaleString('en-AU')} disabled /> 주<br />
                판매가능수량&nbsp;&nbsp;<Input type="text" name="possible_sell" value={possible_sell.toLocaleString('en-AU')} disabled /> 주
            </InputLayer>
            <OptionButton onClick = {HandlePrice}>시장가</OptionButton>
            <BuyInfoLayer>
                상한가&nbsp;<Input2 type="text" name="BuyHighest" value={Math.floor(Price_info.yesterday * 1.3).toLocaleString('en-AU')} disabled /> 원 <p />
                하한가&nbsp;<Input2 type="text" name="BuyLowest" value={Math.floor(Price_info.yesterday * 0.7).toLocaleString('en-AU')} disabled /> 원 <p />
            </BuyInfoLayer>
            <BuyButton onClick = {HandleBuy}>매수</BuyButton> 
            <SellButton onClick = {HandleSell}>매도</SellButton>
        </div>
    );
}

export default BuySell;