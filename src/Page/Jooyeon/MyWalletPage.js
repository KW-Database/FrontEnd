import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import MyStock from '../../components/Jooyeon/MyStock';
import MyWallet from '../../components/Jooyeon/MyWallet';


function MyWalletPage () {  
        const location = useLocation();
        const [Data, setData] = useState([]);
        useEffect(() => {
            axios.get(`/myWallet`, {params:{
                id: location.state.UserID
            }}).then(function (response) {
                setData(response.data);
                //alert("성공")
              }).catch(function (error) {
                //alert(error);
            });
        }, []);
        //mywallet={Data}
        //mystock={Data} 
        if(JSON.stringify(Data)==="[]"){
            return (
                <div className="Background">
                    <UpperLayer></UpperLayer>
                </div>
            );
        }
        else {
            return(
                <div className="Page">
                    <UpperLayer></UpperLayer>
                    <div className="Background">
                        <MyWallet Data={Data}/> 
                        <MyStock Data={Data}/>       
    
                    </div>
                </div>
            );
        }
    
}

export default MyWalletPage;
