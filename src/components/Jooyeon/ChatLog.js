import React, {useRef, useLayoutEffect} from 'react';
import './Chatting.css';
import {Toast, ToastContainer} from 'react-bootstrap';

function ChatLog(props) {
    const scrollRef = useRef();

    useLayoutEffect(() => {
        if (scrollRef) {
            scrollRef.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
            });
        }
    }, []);
    return (
        <main className = "main-container">
            <ToastContainer bsPrefix = "toast-main-container">
              {
                  props.message.map((item) => (
                      props.UserID === item.id ? (
                          <div>
                            <div className="my_send">나</div>
                            <Toast bg = 'info' className = "my-message">
                              <Toast.Body>{item.contents}</Toast.Body>
                            </Toast> 
                            <div className = "my_sendtime">{item.postTime}</div>
                          </div> 
                      )
                      : (
                          <div>
                            <div className="other_send">{item.id}</div>
                            <Toast bg = 'light' className = "other-message">
                                <Toast.Body>{item.contents}</Toast.Body>
                            </Toast>
                            <div className = "other_sendtime">{item.posTtime}</div>
                          </div> 
                      )
                  ))  
              }
              <div ref={scrollRef}></div>  
              
            </ToastContainer>
        </main>
    );
}
  
export default ChatLog;
