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
    width:250px; height:30px;
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

function StockByAge ({Data}) {
    function diffAge (age) {
        var _age;
        if(age === 10)
            _age = "미성년자";
        else if (age === 80)
            return age+"대 이상";
        else
            return age+"대";
        return _age;
    }

    let eachAge = Data.map((v) => (
        <Container>
            <Age>{diffAge(v.ages)} :</Age><Count>{v.itemNumber.toLocaleString('en-AU')}</Count>
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