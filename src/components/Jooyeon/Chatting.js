import React, { useState } from 'react';
import './Chatting.css';
import { Icon } from 'react-icons-kit';
import { refresh } from 'react-icons-kit/fa/refresh'
import { Navbar } from 'react-bootstrap';
import Footer from './Footer';
import ChatLog from './ChatLog';

const UserID = "jiwoo0629";

function Chatting (props) {
    const [message, setMessage] = useState([
        {contents:"hi", id:"gwon99", posttime:"2022-12-03 14:47:03"},
        {contents:"hi", id:"jiwoo0629", posttime:"2022-12-03 14:47:30"},
        {contents:"who r u", id:"gwon99", posttime:"2022-12-03 14:48:03"},
        {contents:"I'm Jiwoo", id:"jiwoo0629", posttime:"2022-12-03 14:48:30"},
        {contents:"Oh, I'm Jiwon", id:"gwon99", posttime:"2022-12-03 14:49:25"},
        {contents:"hi", id:"kiki-daehakseng", posttime:"2022-12-03 14:49:57"},
        {contents:"bye", id:"leeli99", posttime:"2022-12-03 14:49:15"},
        {contents:"Okay", id:"jiwoo0629", posttime:"2022-12-03 14:50:27"}
    ])

    const getMessage = (contents, id, time) =>{
      setMessage((current) => [...current,({contents:contents, id:id, time:time})])
    }

    function DataRefresh () {
        //axios - get으로 데이터 동기화
        alert("동기화");
    }

    setTimeout(function run() {
        //axios - get으로 데이터 동기화
        setTimeout(run, 5000);
      }, 5000);

    return(
        <div>
            <Navbar className="title_layer">
                <Navbar.Brand className="title">
                    <h3>{props.title}</h3>
                </Navbar.Brand>
                <Icon icon={refresh} className="refreshButton" size="30" onClick={DataRefresh} />
            </Navbar>
            <ChatLog UserID = {UserID} message = {message} />
            <Footer setMessage = {getMessage}/>
        </div>
    );
}

export default Chatting;