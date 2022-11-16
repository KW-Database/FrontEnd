import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import CompanyView from '../../components/Jiwoo/CompanyView';

const Title = styled.div`
    position: absolute; width: 1200px; height: 100px; left: 200px; top: 20px;
    display:flex; justify-content: center; align-items: center; background: #D9D9D9; 
    font-weight: 700; font-size: 50px;
`

function CompanyViewPage () {
    return(
        <div className="Page">
            <UpperLayer></UpperLayer>
            <div className="Background">
                <Title>주식회사 정보조회</Title>
                <CompanyView />
            </div>
        </div>
    );   
}


export default CompanyViewPage;