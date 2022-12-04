import React, { Component } from 'react';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import UserInfo from '../../components/Jiwoo/UserInfo';

const Background = styled.div`
    position:absolute; top:70px; width:1560px; height:700px; 
    background-color:#daedf4;
`

class UserInfoPage extends Component {
    render() {
        return(
            <div className="Page">
                <UpperLayer></UpperLayer>
                <Background>
                    <UserInfo />
                </Background>
            </div>
        );
    }
}

export default UserInfoPage;