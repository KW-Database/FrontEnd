import React from 'react';
import styled from 'styled-components';
import './Chatting.css';
import sendImage from '../icon/send-icon.jpg';
import { Form } from 'react-bootstrap';

const Footer_ = styled.div`
    position:absolute; width:100%; height:50px; top:540px;
    display: flex; justify-content: center;align-items:center; 
    border:1px; padding-left:10px;
`

function footer () {
    const HandleClick = () => {
        //axios - post로 DB에 채팅정보 담기게
        axios.post('/exchange/chat', {params: {
            itemCode: props.itemCode
        }}).then(response => {
            setChat(response.data)
        })
        .catch(error => console.log(error));
    }

    const onSubmitSearch = (e) => {
        if (e.key === "Enter") {
          //axios - post DB에 채팅정보 담기게
          axios.get('/exchange/chat', {params: {
            itemCode: props.itemCode
        }}).then(response => {
            setChat(response.data)
        })
        .catch(error => console.log(error));
        }
      };
    return(
        <Footer_>
            <Form.Control placeholder="" classNanme="input-form" onKeyPress={onSubmitSearch} />
            <img className = "send-icon" src={sendImage} onClick={HandleClick}/>
        </Footer_>
    );
}

export default footer;