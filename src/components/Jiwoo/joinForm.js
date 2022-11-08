import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function JoinForm () {
    const [Inputs, setInputs] = useState({
        ID: '',
        PW: '',
        confirmPW: '',
        Name: '',
        Age: '',
        Email: '',
        PhoneNum: '',
        Sex: ''
    });

    const { ID, PW, confirmPW, Name, Age, Email, PhoneNum, Sex } = Inputs;

    const handleChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...Inputs,
            [name]: value
        });
    };
    
    const handleSubmit = (e) => {
        if(ID === '')
            alert("아이디를 입력하세요.");
        else if(PW === '')
            alert("비밀번호를 입력하세요.");
        else if(confirmPW === '')
            alert("비밀번호를 다시 입력하세요.");
        else if(confirmPW !== PW)
            alert("입력한 비밀번호가 서로 일치하지 않습니다.")
        else if(Name === '')
            alert("이름을 입력하세요.");
        else if(Age === '')
            alert("나이를 입력하세요.");
        else if(Email === '')
            alert("이메일을 입력하세요.");
        else if(PhoneNum === '' || PhoneNum.length !== 13 || (PhoneNum[3] !== '-' && PhoneNum[8] !== '-'))
            alert("올바른 형식의 전화번호를 입력하세요.");
        else if(Sex === '')
            alert("성별을 선택하세요.");
        else {
            alert("회원가입이 완료되었습니다.");
            e.preventDefault();
            //DB에 넣는 코드 추가
        }
    }
    
    return (
        <div>
            <h1>&nbsp;&nbsp;회원가입</h1><p />
            <input type="text" name="ID" value={ID} placeholder="Enter ID" id="join-write" onChange={handleChange}></input>
            <p />
            <input type="password" name="PW" value={PW} placeholder="Password" id="join-write" onChange={handleChange}></input>
            <p />
            <input type="password" name="confirmPW" value={confirmPW} placeholder="Confirm Password" id="join-write" onChange={handleChange}></input>
            <p />
            <input type="text" name="Name" value={Name} placeholder="Your Name" id="join-write" onChange={handleChange}></input>
            <p />
            <input type="text" name="Age" value={Age} placeholder="Your Age (숫자만)" id="join-write" onChange={handleChange}></input>
            <p />
            <input type="text" name="Email" value={Email} placeholder="Your Email Address" id="join-write" onChange={handleChange}></input>
            <p />
            <input type="text" name="PhoneNum" value={PhoneNum} placeholder="Enter Your Phone Number ( - 포함 )" id="join-write" onChange={handleChange}></input>
            <p />
            <select name="Sex" value={Sex} id="join-write" font-color="solid gray" onChange={handleChange}>
                <option value="">Your Sex</option>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
            <p />
            <input type="submit" value="SIGN UP" id="sign-up" onClick={handleSubmit}></input>
            <p />
            <br />
            Already have an Account? <Link to='/'>Sign In</Link>    
        </div> 
    );
}

export default JoinForm;
