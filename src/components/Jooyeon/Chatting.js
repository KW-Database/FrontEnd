import React, { useState } from 'react';
import './Chatting.css';
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
        {contents:"Okay", id:"jiwoo0629", posttime:"2022-12-03 14:50:27"}
    ])

    const getMessage = (contents, id, time) =>{
      setMessage((current) => [...current,({contents:contents, id:id, time:time})])
    }

    return(
        <div>
            <Navbar className="title_layer">
                <Navbar.Brand className="title">
                    <h3>{props.title}</h3>
                </Navbar.Brand>
            </Navbar>
            <ChatLog UserID = {UserID} message = {message} />
            <Footer setMessage = {getMessage}/>
        </div>
    );
}

export default Chatting;