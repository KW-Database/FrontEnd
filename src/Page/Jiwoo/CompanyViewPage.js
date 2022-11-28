import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import CompanyView from '../../components/Jiwoo/CompanyView';

const Title = styled.div`
    position: absolute; width: 560px; left:520px; height: 80px; top: 20px;
    display:flex; justify-content: center; align-items: center; 
    border-bottom: 1px solid black;
    font-weight: 500; font-size: 40px; 
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