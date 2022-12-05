import React from 'react';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import MyStock from '../../components/Jooyeon/MyStock';
import MyWallet from '../../components/Jooyeon/MyWallet';


function MyWalletPage () {
        return(
            <div className="Page">
                <UpperLayer></UpperLayer>
                <div className="Background">
                    <MyWallet  />
                    <MyStock  />                    
                </div>
            </div>
        );
    
}

export default MyWalletPage;
