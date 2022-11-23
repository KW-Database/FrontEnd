import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import PostUpdate from '../../components/Jiwoo/PostUpdate';

const Title = styled.div`
    position: absolute; width: 560px; left:500px; height: 80px; top: 20px;
    display:flex; justify-content: center; align-items: center; 
    border-bottom: 1px solid black;
    font-weight: 500; font-size: 40px; 
`

function PostUpdatePage () {
    const location = useLocation();
       
    return(
        <div className="Page">
            <UpperLayer></UpperLayer>
            <div className="Background">
                <Title>게시글 수정</Title>
                <PostUpdate _title={location.state.Title} _content={location.state.Content} />
            </div>
        </div>
    );
}

export default PostUpdatePage;