import React from 'react';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import CompanyEnroll from '../../components/Jiwoo/CompanyEnroll';

const Title = styled.div`
    position: absolute; width: 1200px; height: 100px; left: 200px; top: 20px;
    display:flex; justify-content: center; align-items: center; background: #D9D9D9; 
    font-weight: 700; font-size: 50px;
`

function CompanyEnrollPage () {
    return(
        <div className="Page">
            <UpperLayer />
            <div className="Background">
                <Title>회사 등록</Title>
                <CompanyEnroll />
            </div>
        </div>
    );  
}

export default CompanyEnrollPage;