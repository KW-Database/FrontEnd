import React, { Component } from 'react';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import UserList from '../../components/Jiwoo/UserList';

class UserListPage extends Component {
    render() {
        return(
            <div className="Page">
                <UpperLayer />
                <div className="Background">
                    <UserList />
                </div>
            </div>
        );
    }
}

export default UserListPage;