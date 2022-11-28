import React, { Component } from 'react';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import Exchange_graph from '../../components/Jooyeon/Exchange';



class ExchangePage extends Component{
    render() {
        return(
            <div className="Page">
                <UpperLayer></UpperLayer>
                <div className="Background">
                    <Exchange_graph/>
                </div>
            </div>
        );
    }
}

export default ExchangePage;