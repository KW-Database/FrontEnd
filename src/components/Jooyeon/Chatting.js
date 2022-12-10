import React from 'react';
import './Chatting.css';
import ChatLog from './ChatLog';

function Chatting (props) {
    return(
        <div>
            <ChatLog UserID = {props.UserID} itemCode={props.itemCode} title={props.title} message = {props.Chat} />
        </div>
    );
}

export default Chatting;