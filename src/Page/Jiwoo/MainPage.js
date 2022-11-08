import React, { useState } from 'react';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import SearchCompany from '../../components/Jiwoo/SearchCompany';
import '../../App.css';

function MainPage() {
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.currentTarget.value);
    };
    return (
        <div className="Page">
            <UpperLayer></UpperLayer>
            <div id="Today_finance">
                오늘의 증시 <p />
                <div id="Today_finance_graph"></div>
            </div>
            <div id="Search_Company">
                <SearchCompany value={search} onChange = {onChange} />    
            </div>   
        </div>
    );
}

export default MainPage;