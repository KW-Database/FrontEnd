import React, { Component } from 'react';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import PostView from '../../components/Jiwoo/PostView';

const Title = styled.div`
    position: absolute; width: 560px; left:500px; height: 80px; top: 20px;
    display:flex; justify-content: center; align-items: center; 
    border-bottom: 1px solid black;
    font-weight: 500; font-size: 40px; 
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