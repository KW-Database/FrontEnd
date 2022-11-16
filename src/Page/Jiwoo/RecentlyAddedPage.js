import React, { Component } from 'react';
import styled from 'styled-components';
import Recently_added_table from '../../components/Jiwoo/Recently_added';
import UpperLayer from '../../components/Jiwoo/UpperLayer';

const Title = styled.div`
    position: absolute; width: 1200px; height: 100px; left: 200px; top: 20px;
    display:flex; justify-content: center; align-items: center; background: #D9D9D9; 
    font-weight: 700; font-size: 50px;
`

const Layer = styled.div`
    position: absolute; width: 1200px; height:500px; left: 200px; top: 150px;
    display:flex; justify-content: center; align-items: center; background: white;
`

class RecentlyAddedPage extends Component {
    render() {
        return(
            <div className="Page">
                <UpperLayer></UpperLayer>
                <div className="Background">
                    <Title>최근에 상장된 주식</Title>
                    <Layer><Recently_added_table /></Layer>
                </div>
            </div>
        );
    }
}

export default RecentlyAddedPage;