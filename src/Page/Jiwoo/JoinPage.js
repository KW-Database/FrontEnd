import React, { Component } from 'react';
import JoinForm from '../../components/Jiwoo/JoinForm';
import '../../App.css';

class JoinPage extends Component {
    render() {
        return (
            <div className="Page">
                <div className="joinform">
                    <JoinForm></JoinForm>
                </div>    
            </div>
        );
    }
}

export default JoinPage;