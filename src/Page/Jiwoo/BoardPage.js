import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import Board from '../../components/Jiwoo/Board';

const Board_Page = styled.div`
    display:flex; justify-content:center;
`

const PageNumber = styled.div`
    position: absolute; width: 120px; height: 40px; left: 720px; top: 650px;
    display: flex; justify-content:center; align-items: center;
    color: black;
`

class BoardPage extends Component {
    render() {
        var num=1;
        return (
            <Board_Page>
                <UpperLayer />
                <div className="Background">
                    <Board />
                    <PageNumber>
                        <Link to='/board'>{num}</Link>
                    </PageNumber>
                </div>
            </Board_Page>
        );
    }
}

export default BoardPage;