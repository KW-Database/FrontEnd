import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './Chatting.css';
import sendImage from '../icon/send-icon.jpg';
import { Form } from 'react-bootstrap';

const Footer_ = styled.div`
    position:absolute; width:100%; height:60px; top:540px;
    display: flex; justify-content: center; align-items:center; 
    border:1px; padding-left:10px;
    font-family: 'Pretendard-Regular';
`

function Footer (props) {
    const [chat, setContent] = useState({
        content: ""
    });

    const HandleChange = (e) => {
        const {value, name} = e.target
        setContent({
            ...chat,
            [name]: value
        });
    }
    const HandleClick = () => {
        //axios - post로 DB에 채팅정보 담기게
        axios.post('/exchange/chat', {
            itemCode: props.itemCode,
            id: props.UserID,
            contents: chat.content
        }).then(response => {
            console.log(response)
        })
        .catch(error => console.log(error));
        setContent({
            ...chat,
            content: ""
        })
    }

    const onSubmitSearch = (e) => {
        if (e.key === "Enter") {
          //axios - post DB에 채팅정보 담기게
          axios.post('/exchange/chat', {
            itemCode: props.itemCode,
            id: props.UserID,
            contents: chat.content
        }).then(response => {
            console.log(response)
        })
        .catch(error => console.log(error));
        setContent({
            ...chat,
            content: ""
        })
        }
      };
    return(
        <Footer_>
            <Form.Control name="content" value={chat.content} className="input-form" placeholder="" onChange={HandleChange} onKeyPress={onSubmitSearch} />
            <img className = "send-icon" src={sendImage} onClick={HandleClick}/>
        </Footer_>
    );
}

export default Footer;