import React, { useState } from 'react';
import axios from 'axios';
import './Chatting.css';
import { Icon } from 'react-icons-kit';
import { refresh } from 'react-icons-kit/fa/refresh'
import { Navbar } from 'react-bootstrap';
import ChatLog from './ChatLog';

function Chatting (props) {
    const [chat, setChat] = useState(props.Chat);
    function DataRefresh () {
        //axios - get으로 데이터 동기화
        axios.get('/exchange/renewChat', {params: {
            itemCode: props.itemCode
        }}).then(response => {
            setChat(response.data)
        })
        .catch(error => console.log(error));
    }

    setTimeout(function run () {
        //axios - get으로 데이터 동기화
        axios.get('/exchange/renewChat', {params: {
            itemCode: props.itemCode
        }}).then(response => {
            setChat(response.data)
        })
        setTimeout(run, 5000);
      }, 1000);

    return(
        <div>
            <Navbar className="title_layer">
                <Navbar.Brand className="title">
                    <h3>{props.title}</h3>
                </Navbar.Brand>
                <Icon icon={refresh} className="refreshButton" size="30" onClick={DataRefresh} />
            </Navbar>
            <ChatLog UserID = {props.UserID} message = {chat} />
        </div>
    );
}

export default Chatting;