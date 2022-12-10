import React from 'react';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import UserInfo from '../../components/Jiwoo/UserInfo';

const Background = styled.div`
    position:absolute; top:70px; width:1560px; height:700px; 
    background-color:#daedf4;
`

function UserInfoPage () {
    const location = useLocation();
    return(
        <div className="Page">
            <UpperLayer></UpperLayer>
            <Background>
                <UserInfo UserID={location.state.UserID} />
            </Background>
        </div>
    );        
}

export default UserInfoPage;