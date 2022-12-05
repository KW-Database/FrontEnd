import React, { useState } from 'react';
import styled from 'styled-components';
import price_info from '../../Json/BuySell.json';

const Likebutton = styled.button`
    position:absolute; top:15px; left:10px; width:30px; height:30px; 
    display:flex; justify-content:center;
    background-color:${props => (props.liked === 0) ? 'lightgreen' : 'white'}; 
    border:0; border-radius:5px;
    font-size:20px; font-weight:700;
`

const Name = styled.div`
    position:absolute; top:15px; left:50px; width:150px; height:30px;
    display:flex; align-items: center; 
    font-size:25px; font-weight:600; text-align: left; 
`

const Price = styled.div`
    position:absolute; top:15px; left:220px; width:150px; height:30px;
    display:flex; align-items: center; 
    font-size:25px; font-weight:600; text-align: left; 
    border-right:1px solid gray;
`

const Rate = styled.div`
    font-size:15px; color:${props => props.color};
`

const Info = styled.div`
    position:absolute; top:15px; left:400px; width:600px; height:50px;
    display:flex; align-items: center;
    font-size:15px;
`

function Exchange_title () {
    const [like, setlike] = useState({
        liked : price_info.liked
    });

    const HandleClick = () => {
        var num;
        if(like.liked === 1) {
            num = 0;
            //axios - delete로 이 주식을 관심목록에서 제거
        } else {    
            num = 1;
            //axios - post로 이 주식을 관심목록에 추가
        }
        setlike({
            ...like,
            liked: num
        })
    }

    var col;
    var arrow;
    if(price_info.diffrate > 0) {
        col = 'red';
        arrow = '▲';
    } else if(price_info.diffrate < 0) {
        col = 'skyblue';
        arrow = '▼';
    } else {
        col = 'gray';
        arrow = '-';
    }

    
    return(
        <div>
            <Likebutton liked={like.liked} onClick={HandleClick}>☆</Likebutton>
            <Name>{price_info.name}&nbsp;<h6>{price_info.code}</h6></Name>
            <Price>{price_info.cur}&nbsp;<Rate color={col}>{arrow}&nbsp;{(price_info.diffrate).toFixed(2)}%</Rate></Price>
            <Info>
                전일 &nbsp;&nbsp;&nbsp;&nbsp; {price_info.yesterday} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                시가 &nbsp;&nbsp;&nbsp;&nbsp; {price_info.start} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                고가 &nbsp;&nbsp;&nbsp;&nbsp; {price_info.highest} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                저가 &nbsp;&nbsp;&nbsp;&nbsp; {price_info.lowest} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Info>
        </div>
    );
}

export default Exchange_title;