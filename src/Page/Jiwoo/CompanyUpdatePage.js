import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import CompanyUpdate from '../../components/Jiwoo/CompanyUpdate';

const Title = styled.div`
    position: absolute; width: 1200px; height: 100px; left: 200px; top: 20px;
    display:flex; justify-content: center; align-items: center; background: #D9D9D9; 
    font-weight: 700; font-size: 50px;
`

function CompanyUpdatePage () {
    const location = useLocation();
       
    return(
        <div className="Page">
            <UpperLayer></UpperLayer>
            <div className="Background">
                <Title>게시글 수정</Title>
                <CompanyUpdate _Name={location.state.Name} _Date={location.state.Date} _Info={location.state.Info} />
            </div>
        </div>
    );
}

export default CompanyUpdatePage;