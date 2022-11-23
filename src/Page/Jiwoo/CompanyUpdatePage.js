import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import CompanyUpdate from '../../components/Jiwoo/CompanyUpdate';

const Title = styled.div`
    position: absolute; width: 560px; left:520px; height: 80px; top: 20px;
    display:flex; justify-content: center; align-items: center; 
    border-bottom: 1px solid black;
    font-weight: 500; font-size: 40px; 
`

function CompanyUpdatePage () {
    const location = useLocation();
       
    return(
        <div className="Page">
            <UpperLayer></UpperLayer>
            <div className="Background">
                <Title>주식회사 정보수정</Title>
                <CompanyUpdate _Name={location.state.Name} _Date={location.state.Date} _Info={location.state.Info} />
            </div>
        </div>
    );
}

export default CompanyUpdatePage;