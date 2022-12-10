import React, { Component , useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ChangePW from "../../components/Jiwoo/ChangePW"

function ChangePWPage () {
    const location=useLocation();

    return (
        <div className="Page">
            <ChangePW _ID={location.state.ID} />   
        </div>
    );

}

export default ChangePWPage;