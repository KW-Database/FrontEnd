import React from 'react';
import { useLocation } from 'react-router-dom';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import LikeList from '../../components/Jiwoo/LikeList';

function LikeListPage () {
    const location = useLocation();
    return(
        <div className="Page">
            <UpperLayer />
            <div className="Background">
                <LikeList UserID={location.state.UserID}/>
            </div>
        </div>
    );
}

export default LikeListPage;