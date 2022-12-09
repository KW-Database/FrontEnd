import React, { Component , useState, useEffect} from 'react';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import Board from '../../components/Jiwoo/Board';
import axios from 'axios';
const Board_Page = styled.div`
    display:flex; justify-content:center;
`

function BoardPage(){
//class BoardPage extends Component {
    const [list, setData] = useState([]);

    useEffect(() => {
        axios.get('/agora')
        .then(response => setData(response.data))
        .catch(error => console.log(error))   
    }, []);


    if(JSON.stringify(list)==="[]"){
        return (
            <div className="Background">
                <UpperLayer></UpperLayer>
            </div>
        );
    }
    else{
        //console.log(list[0].postTime);
        return (
            <Board_Page>
                <UpperLayer />
                <div className="Background">
                    <Board List={list}/>    
                </div>
            </Board_Page>
        );
    }
}
       
export default BoardPage;