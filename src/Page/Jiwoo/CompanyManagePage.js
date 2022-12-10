import React from 'react';
import { useLocation } from 'react-router-dom';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import CompanyManage from '../../components/Jiwoo/CompanyManage';

function CompanyManagePage () {
    const location = useLocation();
    
    return(
        <div className="Page">
            <UpperLayer />
            <div className="Background">
                <CompanyManage UserID={location.state.UserID} />
            </div>
        </div>
    );  
    
}

export default CompanyManagePage;