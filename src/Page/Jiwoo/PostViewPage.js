import React, { Component } from 'react';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import PostView from '../../components/Jiwoo/PostView';

const Title = styled.div`
    position: absolute; width: 1200px; height: 100px; left: 200px; top: 20px;
    display:flex; justify-content: center; align-items: center; background: #D9D9D9; 
    font-weight: 700; font-size: 50px;
`

class PostViewPage extends Component {
    render() {
        return(
            <div className="Page">
                <UpperLayer></UpperLayer>
                <div className="Background">
                    <Title>게시글 조회</Title>
                    <PostView />
                </div>
            </div>
        );
    }
}

export default PostViewPage;