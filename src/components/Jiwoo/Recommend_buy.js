import React from 'react';
import styled from 'styled-components';

const Table = styled.div`
    display:flex; justify-content:center; font-size:20px;
`

const dummyData = [
    {name: "기업1", endprice : 1, diff : 1, diffrate: 1},
    {name: "기업2", endprice : 2, diff : 2, diffrate: 2},
    {name: "기업3", endprice : 3, diff : 3, diffrate: 3},
    {name: "기업4", endprice : 4, diff : 4, diffrate: 4},
    {name: "기업5", endprice : 5, diff : 5, diffrate: 5},
    {name: "기업6", endprice : 6, diff : 6, diffrate: 6},
    {name: "기업7", endprice : 7, diff : 7, diffrate: 7},
    {name: "기업8", endprice : 8, diff : 8, diffrate: 8},
    {name: "기업9", endprice : 9, diff : 9, diffrate: 9},
    {name: "기업10", endprice : 10, diff : 10, diffrate: 10},
    {name: "기업11", endprice : 11, diff : 11, diffrate: 11},
    {name: "기업12", endprice : 12, diff : 12, diffrate: 12}
  ];

function Recommend_buy_table () {
       
    function TableRow () {
        //테이블에 for문 돌려서 출력하기 위한 함수 (추가 구현)
        var i;
        var tr=0;
        for(i=0; i<10; i++) {
            
        }
        return tr;
    }
    
    return (
        <div>
            <Table>
                <table border="1">
                    <tr>
                        <td>기업명</td><td>종가</td><td>변화량</td><td>변화율</td>
                    </tr>
                    <tr>
                        <td>{dummyData[0].name}</td><td>{dummyData[0].endprice}</td><td>{dummyData[0].diff}</td><td>{dummyData[0].diffrate}</td>
                    </tr>
                    <tr>
                        <td>{dummyData[1].name}</td><td>{dummyData[1].endprice}</td><td>{dummyData[1].diff}</td><td>{dummyData[1].diffrate}</td>
                    </tr>
                    <tr>
                        <td>{dummyData[2].name}</td><td>{dummyData[2].endprice}</td><td>{dummyData[2].diff}</td><td>{dummyData[2].diffrate}</td>
                    </tr>
                    <tr>
                        <td>{dummyData[3].name}</td><td>{dummyData[3].endprice}</td><td>{dummyData[3].diff}</td><td>{dummyData[3].diffrate}</td>
                    </tr>
                    <tr>
                        <td>{dummyData[4].name}</td><td>{dummyData[4].endprice}</td><td>{dummyData[4].diff}</td><td>{dummyData[4].diffrate}</td>
                    </tr>
                    <tr>
                        <td>{dummyData[5].name}</td><td>{dummyData[5].endprice}</td><td>{dummyData[5].diff}</td><td>{dummyData[5].diffrate}</td>
                    </tr>
                    <tr>
                        <td>{dummyData[6].name}</td><td>{dummyData[6].endprice}</td><td>{dummyData[6].diff}</td><td>{dummyData[6].diffrate}</td>
                    </tr>
                </table>
            </Table>
        </div>  
    );
}

export default Recommend_buy_table;