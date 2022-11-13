import React, { Component } from 'react';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import LikeList from '../../components/Jiwoo/LikeList';

class LikeListPage extends Component {
    render() {
        return(
            <div className="Page">
                <UpperLayer />
                <div className="Background">
                    <LikeList />
                </div>
            </div>
        );
    }
}

export default LikeListPage;