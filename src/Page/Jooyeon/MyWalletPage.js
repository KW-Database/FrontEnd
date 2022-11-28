import React, { Component } from 'react';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import MyStock from '../../components/Jooyeon/MyStock';
import MyWallet from '../../components/Jooyeon/MyWallet';

class MyWalletPage extends Component{
    render() {
        return(
            <div className="Page">
                <UpperLayer></UpperLayer>
                <div className="Background">
                    <MyWallet/>
                    <MyStock/>
                </div>
            </div>
        );
    }
}

export default MyWalletPage;
