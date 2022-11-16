import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import UserInfoUpdate from '../../components/Jiwoo/UserInfoUpdate';
import User from '../../images/User.jpg';

const UserImage = styled.div`
    display:flex; justify-content:center; align-items:center;
    position: relative; width: 315px; height: 385px; left: 86px; top: 126px;
    background-color:white; font-size: 30px;
`

const Circle = styled.img`
    position: absolute; top:60px;
    width: 80px; height: 80px;
`

function UserInfoUpdatePage () {
    const Data = useLocation();
    
    return(
        <div className="Page">
            <UpperLayer></UpperLayer>
            <div className="Background">
                <UserImage>
                    <Circle src={User} alt="UserImage" />
                    {Data.state.ID}
                </UserImage>
                <UserInfoUpdate _ID={Data.state.ID} _Name={Data.state.Name} _Age={Data.state.Age}
                                _Email={Data.state.Email} _PhoneNum={Data.state.PhoneNum} _Sex={Data.state.Sex} />
            </div>
        </div>
    );
}

export default UserInfoUpdatePage;