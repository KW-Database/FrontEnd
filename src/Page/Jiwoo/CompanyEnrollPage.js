import React from 'react';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import CompanyEnroll from '../../components/Jiwoo/CompanyEnroll';

const Title = styled.div`
    position: absolute; width: 560px; left:520px; height: 80px; top: 20px;
    display:flex; justify-content: center; align-items: center; 
    border-bottom: 1px solid black;
    font-weight: 500; font-size: 40px; 
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