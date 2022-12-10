import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import UserInfoUpdate from '../../components/Jiwoo/UserInfoUpdate';

const Background = styled.div`
    position:absolute; top:70px; width:1560px; height:100%; 
    background-color:#daedf4;
`

function UserInfoUpdatePage () {
    const Data = useLocation();
    
    return(
        <div className="Page">
            <UpperLayer></UpperLayer>
            <Background>
                <UserInfoUpdate _ID={Data.state.ID} _PW={Data.state.PW} _Name={Data.state.Name} _Age={Data.state.Age} _Email={Data.state.Email}
                                _PhoneNum={Data.state.PhoneNum} _Sex={Data.state.Sex} _adminAuth={Data.state.AdminAuth} />
            </Background>
        </div>
    );
}

export default UserInfoUpdatePage;