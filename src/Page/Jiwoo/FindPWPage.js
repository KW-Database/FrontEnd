import React, { Component } from 'react';
import FindPW from '../../components/Jiwoo/FindPW';
import '../../App.css';

class FindPWPage extends Component {
    render() {
        return (
            <div className="Page">
                <div id="Find">
                    <FindPW></FindPW>
                </div>    
            </div>
        );
    }
}

export default FindPWPage;