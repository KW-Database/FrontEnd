import React, {useState, useRef, useLayoutEffect} from 'react';
import axios from 'axios';
import './Chatting.css';
import styled from 'styled-components';
import {Toast, ToastContainer} from 'react-bootstrap';
import sendImage from '../icon/send-icon.jpg';
import { Form } from 'react-bootstrap';

const Footer_ = styled.div`
    position:absolute; width:100%; height:60px; top:540px;
    display: flex; justify-content: center; align-items:center; 
    border:1px; padding-left:10px;
`

function ChatLog(props) {
    const scrollRef = useRef();
    const [chat, setChat] = useState(props.message);
    const [content, setContent] = useState({
        con: ""
    });

    const HandleChange = (e) => {
        const {value, name} = e.target;
        setContent({
            ...content,
            [name]: value
        });
    }
    const HandleClick = () => {
        //axios - post로 DB에 채팅정보 담기게
        axios.post('/exchange/chat', {
            itemCode: props.message[0].itemCode,
            id: props.UserID,
            contents: content.con
        }).then(response => {
            console.log(response)
        }).catch(error => console.log(error));

        setContent({
            ...content,
            con: ""
        });

        axios.get('/exchange/renewChat', {params: {
            itemCode: props.message[0].itemCode
        }}).then(response => {
            setChat(response.data)
        })
    }
    const onSubmitSearch = (e) => {
        if (e.key === "Enter") {
          //axios - post DB에 채팅정보 담기게
          axios.post('/exchange/chat', {
            itemCode: props.message[0].itemCode,
            id: props.UserID,
            contents: content.con
        }).then(response => {
            console.log(response)
        }).catch(error => console.log(error));

        setContent({
            ...content,
            con: ""
        });
        
        axios.get('/exchange/renewChat', {params: {
            itemCode: props.message[0].itemCode
        }}).then(response => {
            setChat(response.data)
        })
        }
      };

    useLayoutEffect(() => {
        if (scrollRef) {
            scrollRef.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
            });
        }
    }, [chat]);

    return (
        <main className = "main-container">
            <ToastContainer bsPrefix = "toast-main-container">
              {
                  chat.map((item) => (
                      props.UserID === item.id ? (
                          <div>
                            <div className="my_send">나</div>
                            <Toast bg = 'info' className = "my-message">
                              <Toast.Body>{item.contents}</Toast.Body>
                            </Toast> 
                            <div className = "my_sendtime">{item.postTime.replace('T', ' ')}</div>
                          </div> 
                      )
                      : (
                          <div>
                            <div className="other_send">{item.id}</div>
                            <Toast bg = 'light' className = "other-message">
                                <Toast.Body>{item.contents}</Toast.Body>
                            </Toast>
                            <div className = "other_sendtime">{item.posTtime.replace('T', ' ')}</div>
                          </div> 
                      )
                  ))  
              }
              <div ref={scrollRef}></div>    
            </ToastContainer>
            <Footer_>
                <Form.Control name="con" value={content.con} className="input-form" placeholder="" onChange={HandleChange} onKeyPress={onSubmitSearch} />
                <img className = "send-icon" src={sendImage} onClick={HandleClick}/>
            </Footer_>
        </main>
    );
}
  
export default ChatLog;
