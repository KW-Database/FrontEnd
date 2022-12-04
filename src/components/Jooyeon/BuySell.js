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
    position:absolute; width:120px; height:30px; left:700px; top:150px;
    display:flex; justify-content:center; background-color:skyblue;
    font-size:15px; font-weight:600;
    border:0; border-radius:20px;
`

const SellButton = styled.button`
    position:absolute; width:120px; height:30px; left:850px; top:150px;
    display:flex; justify-content:center; background-color:red;
    font-size:15px; font-weight:600;
    border:0; border-radius:20px;
`

const OptionButton = styled.button`
    position: absolute; left:440px; top:55px;
    width:70px; height:30px; font-size:15px; margin-left:10px; margin-top:5px;
    border:0; border-radius:5px; text-align:center; background-color:lightgreen;
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

    const HandleChange = (e) => {
        const { value, name } = e.target;
        setpurchase({
            ...purchase,
            [name]: value
        })
    }

    var total;
    if (price === 0 || count === 0)
        total = 0;
    else
        total = count * price;

    var possible;
    if (price === 0)
        possible = 0;
    else
        possible = Math.floor(Price_info.cash / price);

    const HandlePrice = () => {
        setpurchase({
            price: Price_info.cur
        })
    }

    const HandleBuy = () => {
        alert("매수");
        if(count === 0 || count.isNaN()) {
            alert("주문수량을 올바르게 입력하세요.");
        } else if(price === 0 || price.isNaN()) {
            alert("주문가격을 올바르게 입력하세요.");
        }
    }

    const HandleSell = () => {
        alert("매도");
        if(count === 0 || count.isNaN()) {
            alert("주문수량을 올바르게 입력하세요.");
        } else if(price === 0 || price.isNaN()) {
            alert("주문가격을 올바르게 입력하세요.");
        }
    }

    return(
        <div>
            <InputLayer>
                주문수량&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" name="count" value={count} onChange={HandleChange} /> 주<br />
                주문금액&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" name="price" value={price} onChange={HandleChange} /> 원<br />
                거래금액&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" name="total" value={total} disabled /> 원<br />
                주문가능수량&nbsp;&nbsp;<Input type="text" name="possible" value={possible} disabled /> 주<br />
            </InputLayer>
            <OptionButton onClick = {HandlePrice}>시장가</OptionButton>
            <BuyInfoLayer>
                상한가&nbsp;<Input2 type="text" name="BuyHighest" value={(Price_info.yesterday * 1.3).toFixed(0)} disabled /> 원 <p />
                하한가&nbsp;<Input2 type="text" name="BuyLowest" value={(Price_info.yesterday * 0.7).toFixed(0)} disabled /> 원 <p />
            </BuyInfoLayer>
            <BuyButton onClick = {HandleBuy}>매수</BuyButton> 
            <SellButton onClick = {HandleSell}>매도</SellButton>
        </div>
    );
}

export default BuySell;