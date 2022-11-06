import React, { useState } from 'react';
import '../../App.css';

function JoinForm() {
        const [inputs, setinputs] = useState({
            ID: "",
            PW: "",
            confirmPW: "",
            Name: "",
            Age: "",
            Email: "",
            PhoneNum: "",
            Sex: ""
        })

        const handleOnChange = (e) => {
            setinputs({
                ...inputs,
                [e.target.name]: e.target.value
            })
        }

        return (
            <div id="joinform">
                <input type="text" name="ID" placeholder="Enter ID" id="join-write" onChange={handleOnChange}></input>
                <p />
                <input type="password" name="PW" placeholder="Password" id="join-write" onChange={handleOnChange}></input>
                <p />
                <input type="text" name="confirmPW" placeholder="Confirm Password" id="join-write" onChange={(e)=>{
                    if(e.target.value !== inputs.PW.target.value)
                        alert("비밀번호가 일치하지 않습니다.")
                    else   
                        setinputs(e.target.value);
                }}></input>
                <p />
                <input type="text" name="Name" placeholder="Your Name" id="join-write" onChange={handleOnChange}></input>
                <p />
                <input type="text" name="Age" placeholder="Your Age" id="join-write" onChange={handleOnChange}></input>
                <p />
                <input type="text" name="Email" placeholder="Your Email Address" id="join-write" onChange={handleOnChange}></input>
                <p />
                <input type="text" name="PhoneNum" placeholder="Enter Your Phone Number " id="join-write" onChange={handleOnChange}></input>
                <input type="radio" name="Sex" value="male" onChange={handleOnChange} defaultChecked> male </input>
                <input type="radio" name="Sex" value="female" onChange={handleOnChange}> female </input>  
                <button value="SIGN UP" id="sign-up"></button>                            
            </div>  
        );
}

export default JoinForm;