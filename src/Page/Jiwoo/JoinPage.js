import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import JoinForm from '../../components/Jiwoo/joinForm';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import '../../App.css';

export default class JoinPage extends Component {
    render() {
        return (
            <div className="JoinPage">
                <UpperLayer></UpperLayer>
                <JoinForm></JoinForm>
                <div id="additional">
                    Already have an Account? <Link to='/'>Sign In</Link>
                </div>
            </div>
        );
    }
}