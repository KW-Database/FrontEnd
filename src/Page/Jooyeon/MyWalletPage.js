import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import MyStock from '../../components/Jooyeon/MyStock';
import MyWallet from '../../components/Jooyeon/MyWallet';


function MyWalletPage () {
    
        const location = useLocation();
        const [Data, setData] = useState([]);
        useEffect(() => {
            axios(
                {
                    url: `/myWallet`,
                    method: 'get',
                    data: location.state.itemCode,
                    baseURL: 'http://localhost:8080',
                }
              ).then(function (response) {
                setData(response.data);
                //alert("성공")
              }).catch(function (error) {
                //alert(error);
            });
        }, []);
        
        return(
            <div className="Page">
                <UpperLayer></UpperLayer>
                <div className="Background">
                    <MyWallet mywallet={Data}/>
                    <MyStock mystock={Data}/>                    
                </div>
            </div>
        );
    
}

export default MyWalletPage;
