import React, { Component } from 'react';
import FindID from '../../components/Jiwoo/FindID';
import '../../App.css';

class FindIDPage extends Component {
    render() {
        return (
            <div className="Page">
                <div id="Find">
                    <FindID></FindID>
                </div>    
            </div>
        );
    }
}

export default FindIDPage;