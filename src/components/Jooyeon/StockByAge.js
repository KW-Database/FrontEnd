import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    position:absolute; left:20px; top:15px; width:250px;
    font-size:20px; font-weight:600;
    border-bottom:1px solid gray;
`

const Info = styled.div`
    position:absolute; left:20px; top:50px; width:250px; height:280px;
    font-size:15px; text-align:left;
`

const Container = styled.div`
    width:250px; height:35px;
`

const Age = styled.div`
    position:relative; width:100px; 
    font-size:18px; text-align:right;
`

const Count = styled.div`
    position:relative; left:120px; top:-28px; width:100px;
    font-size:18px; text-align:center;
`

const Unit = styled.div`
    position:relative; left:240px; top:320px;
    font-size:10px; text-align:left;
`

const dummyData = [
    {age: "20세미만", count: 10},
    {age: "20대", count: 10},
    {age: "30대", count: 20},
    {age: "40대", count: 20},
    {age: "50대", count: 10},
    {age: "60대", count: 10},
    {age: "70대", count: 10},
    {age: "80세이상", count: 10}
];

function StockByAge () {
    let eachAge = dummyData.map((v) => (
        <Container>
            <Age>{v.age} :</Age><Count>{v.count.toLocaleString('en-AU')}</Count>
        </Container>
    ));
    
    return(
        <div>
            <Title>연령대별 보유주식</Title>
            <Info>{eachAge}</Info>
            <Unit>( 단위 : 주 )</Unit>
        </div>
    );

}

export default StockByAge;