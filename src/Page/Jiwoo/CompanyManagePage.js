import React, { Component } from 'react';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import CompanyManage from '../../components/Jiwoo/CompanyManage';

class CompanyManagePage extends Component {
    render() {
        return(
            <div className="Page">
                <UpperLayer />
                <div className="Background">
                    <CompanyManage />
                    
                </div>
            </div>
        );
    }
}

export default CompanyManagePage;