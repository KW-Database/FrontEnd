import React, { Component } from 'react';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import Board from '../../components/Jiwoo/Board';

const Board_Page = styled.div`
    display:flex; justify-content:center;
`

class BoardPage extends Component {
    render() {
        return (
            <Board_Page>
                <UpperLayer />
                <div className="Background">
                    <Board />    
                </div>
            </Board_Page>
        );
    }
}

export default BoardPage;