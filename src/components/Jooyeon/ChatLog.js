import React, {useState, useRef, useLayoutEffect} from 'react';
import axios from 'axios';
import './Chatting.css';
import styled from 'styled-components';
import {Toast, ToastContainer, Navbar, Form} from 'react-bootstrap';
import sendImage from '../icon/send-icon.jpg';
import { Icon } from 'react-icons-kit';
import { refresh } from 'react-icons-kit/fa/refresh'

const Footer_ = styled.div`
    position:absolute; width:100%; height:60px; top:540px;
    display: flex; justify-content: center; align-items:center; 
    border:1px; padding-left:10px;
    font-family: 'Pretendard-Regular';
`

function ChatLog(props) {
    const scrollRef = useRef();
    const [chat, setChat] = useState(props.message);
    const [content, setContent] = useState({
        con: ""
    });

    const DataRefresh = () => {
        //axios - get으로 데이터 동기화
        axios.get('/exchange/renewChat', {params: {
            itemCode: props.itemCode
        }}).then(response => {
            console.log(response);
            setChat(response.data)
        })
        .catch(error => console.log(error));
    }

    /*setTimeout(function run () {
        //axios - get으로 데이터 동기화
        axios.get('/exchange/renewChat', {params: {
            itemCode: props.itemCode
        }}).then(response => {
            setChat(response.data)
        })
        setTimeout(run, 5000);
      }, 1000);*/

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
            itemCode: props.itemCode,
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
            itemCode: props.itemCode
        }}).then(response => {
            setChat(response.data)
        })
    }
    const onSubmitSearch = (e) => {
        if (e.key === "Enter") {
          //axios - post DB에 채팅정보 담기게
          axios.post('/exchange/chat', {
            itemCode: props.itemCode,
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
            itemCode: props.itemCode
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
            <Navbar className="title_layer">
                <Navbar.Brand className="title">
                    <h3>{props.title}</h3>
                </Navbar.Brand>
                <Icon icon={refresh} className="refreshButton" size="30" onClick={DataRefresh} />
            </Navbar>
            <ToastContainer bsPrefix = "toast-main-container">
              {
                  chat.sort((a,b)=> {
                    return new Date(a.postTime) - new Date(b.postTime)
                  })
                  .map((item) => (
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
                            <div className = "other_sendtime">{item.postTime.replace('T', ' ')}</div>
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
