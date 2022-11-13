import React, { Component } from 'react';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';

class PostWritePage extends Component {
    render() {
        return(
            <div className="Page">
                <UpperLayer></UpperLayer>
                <div className="Background">
                    게시글
                </div>
            </div>
        );
    }
}

export default PostWritePage;