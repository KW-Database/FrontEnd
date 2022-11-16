import React, { Component } from 'react';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import UserInfo from '../../components/Jiwoo/UserInfo';
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

const dummyData = {
    ID: "jiwoo0629", PW: "1234", Name: "정지우", Age : 24, Email: "wldn990629@gmail.com", PhoneNum: "010-3757-2108", Sex: "Male"
};

class UserInfoPage extends Component {
    render() {
        return(
            <div className="Page">
                <UpperLayer></UpperLayer>
                <div className="Background">
                    <UserImage>
                        <Circle src={User} alt="UserImage" />
                        {dummyData.ID}
                    </UserImage>
                    <UserInfo Data={dummyData} />
                </div>
            </div>
        );
    }
}

export default UserInfoPage;