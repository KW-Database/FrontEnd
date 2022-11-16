import React, { Component } from 'react';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import PostWrite from '../../components/Jiwoo/PostWrite';

const Title = styled.div`
    position: absolute; width: 1200px; height: 100px; left: 200px; top: 20px;
    display:flex; justify-content: center; align-items: center; background: #D9D9D9; 
    font-weight: 700; font-size: 50px;
`

class PostWritePage extends Component {
    render() {
        return(
            <div className="Page">
                <UpperLayer></UpperLayer>
                <div className="Background">
                    <Title>게시글 작성</Title>
                    <PostWrite />
                </div>
            </div>
        );
    }
}

export default PostWritePage;