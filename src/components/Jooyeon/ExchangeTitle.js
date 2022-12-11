import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import price_info from '../../Json/BuySell.json';

const Likebutton = styled.button`
    position:absolute; top:15px; left:10px; width:30px; height:30px; 
    display:flex; justify-content:center;
    background-color:${props => (props.liked === 1) ? 'lightgreen' : 'white'}; 
    border:0; border-radius:5px;
    font-size:20px; font-weight:700;
    font-family: 'Pretendard-Regular';
`

const Name = styled.div`
    position:absolute; top:15px; left:50px; width:120px; height: 30px;
    display:flex; align-items: center; 
    font-size:16px; font-weight:600; text-align: left; 
    font-family: 'Pretendard-Regular';
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
`

const Code = styled.div`
    position:absolute; top:20px; left:190px; width:90px; height: 30px;
    display:flex; align-items: center; 
    font-size:16px; font-weight:600; text-align: left; 
    font-family: 'Pretendard-Regular';
    overflow: hidden;
`

const Price = styled.div`
    position:absolute; top:15px; left:270px; width:200px; height:30px;
    display:flex; align-items: center; 
    font-size:25px; font-weight:600; text-align: left; 
    border-right:1px solid gray;
    font-family: 'Pretendard-Regular';
`

const Rate = styled.div`
    font-size:15px; color:${props => props.color};
`

const Info = styled.div`
    position:absolute; top:5px; left:500px; width:600px; height:50px;
    display:flex; align-items: center;
    font-size:15px;
    font-family: 'Pretendard-Regular';
`

function Exchange_title ({Data, Like, UserID, itemName}) {
    const [like, setlike] = useState(Like);

    const HandleClick = () => {
        if(like === 1) {
            //axios - delete로 이 주식을 관심목록에서 제거
            axios.delete('/user/likedItem', {
                params:{
                    id: UserID,
                    itemCode: Data.companyInfo.itemCode
                }
            }).then(response => {
                setlike(0)
                console.log(response);
            }).catch(error => {
                console.log(error)
            });
            alert('관심 목록에서 삭제되었습니다.')
        } else {    
            //axios - post로 이 주식을 관심목록에 추가
            axios.post('/user/likedItem', {}, {
                params:{
                    id: UserID,
                    itemCode: Data.companyInfo.itemCode
                }
            }).then(response => {
                setlike(1)
                console.log(response);
              }).catch(error => {
                console.log(error)
            });
            alert('관심목록에 추가되었습니다.')
        }
    }

    var col;
    var arrow;
    var diffrate = (Data.curPrice - Data.dayCondition[(Data.dayCondition.length)-1].endPrice) / Data.dayCondition[(Data.dayCondition.length)-1].endPrice;
    if(diffrate > 0) {
        col = 'red';
        arrow = '▲';
    } else if(diffrate < 0) {
        col = 'skyblue';
        arrow = '▼';
    } else {
        col = 'gray';
        arrow = '-';
    }

    
    //data.diffrate는 (오늘 현재 값 - 어제 endPrice) / 어제 endPrice 로 계산    
    return(
        <div>
            <Likebutton liked={like} onClick={HandleClick}>☆</Likebutton>
            <Name>{itemName}</Name>
            <Code><h6>{Data.companyInfo.itemCode}</h6></Code>
            <Price>{Data.curPrice.toLocaleString('en-AU')}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rate color={col}>{arrow}&nbsp;{diffrate.toFixed(2)}%</Rate></Price>
            <Info>
                전일 &nbsp;&nbsp; {Data.dayCondition[(Data.dayCondition.length)-1].endPrice.toLocaleString('en-AU')} &nbsp;&nbsp;&nbsp;&nbsp;
                시가 &nbsp;&nbsp; {Data.dayCondition[(Data.dayCondition.length)-1].startPrice.toLocaleString('en-AU')} &nbsp;&nbsp;&nbsp;&nbsp;
                고가 &nbsp;&nbsp; {Data.dayCondition[(Data.dayCondition.length)-1].highestPrice.toLocaleString('en-AU')} &nbsp;&nbsp;&nbsp;&nbsp;
                저가 &nbsp;&nbsp; {Data.dayCondition[(Data.dayCondition.length)-1].lowestPrice.toLocaleString('en-AU')} &nbsp;&nbsp;&nbsp;&nbsp;
            </Info>
        </div>
    );
}

export default Exchange_title;