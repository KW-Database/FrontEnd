import React, { Component } from 'react';
import styled from 'styled-components';
import Recently_added_table2 from '../../components/Jiwoo/Recently_added2';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import recently_added from '../../Json/recently_added';

const Title = styled.div`
    position: absolute; width: 560px; left:500px; height: 80px; top: 20px;
    display:flex; justify-content: center; align-items: center; 
    border-bottom: 1px solid black;
    font-weight: 500; font-size: 40px; 
`

const Layer = styled.div`
    position: absolute; width: 1000px; left: 300px; top: 150px;
    display:flex; justify-content: center; align-items: center;
`

class RecentlyAddedPage extends Component {
    render() {
        return(
            <div className="Page">
                <UpperLayer></UpperLayer>
                <div className="Background">
                    <Title>최근에 상장된 주식</Title>
                    <Layer><Recently_added_table2 recently_added={recently_added}/></Layer>
                </div>
            </div>
        );
    }
}

export default RecentlyAddedPage;