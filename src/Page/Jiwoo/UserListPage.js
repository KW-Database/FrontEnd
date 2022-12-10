import React from 'react';
import {useLocation} from 'react-router-dom';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import UserList from '../../components/Jiwoo/UserList';

function UserListPage () {
    const location = useLocation();
    return(
        <div className="Page">
            <UpperLayer UserID={location.state.UserID}/>
            <div className="Background">
                <UserList UserID={location.state.UserID}/>
            </div>
        </div>
    );
}

export default UserListPage;