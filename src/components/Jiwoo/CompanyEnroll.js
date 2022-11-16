import React, { useState } from 'react';
import styled from 'styled-components';

const Write = styled.div`
    position: absolute; width:1100px; height:400px; left:200px; top:150px; padding:50px; 
    text-align: left; background-color: white; font-size: 24px; 
`

const Title = styled.input`
    position: absolute; width:900px; height:40px; left:150px; top: 40px;
    display:flex; justify-content: center; background-color:white; font-size:24px;
`

const Content = styled.textarea`
    position: absolute; width:900px; height:250px; left:150px; top: 140px;
    background-color:white; font-size:24px;
`

const Submit = styled.button`
    position: absolute; left: 950px; top: 420px; width:120px; height:40px;    
    border:0; border-radius:20px; 
    font-size:20px; color:white; background-color:skyblue;
`

function CompanyEnroll () {
    const [Inputs, setInputs] = useState({
        Name: '',
        Info: ''
    });
    const { Name, Info } = Inputs;
    
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...Inputs,
            [name]: value
        });
    };

    const onSubmit = (e) => {
        if(Name=== '')
            alert("기업명을 입력하세요.");
        else if(Info === '')
            alert("기업개요를 입력하세요.");
        else {
            alert("회사가 등록되었습니다.");
            e.preventDefault();
            //DB에 넣는 코드 추가
        }
    }

    return(
        <div>
            <Write>
                기업명 : <Title type="text" name="Name" value={Name} placeholder="기업명" onChange={onChange} /> <p /><br />
                기업개요 : <Content name="Info" value={Info} placeholder="기업개요" onChange={onChange} />
                <Submit type="submit" value="Submit" onClick={onSubmit}>Submit</Submit>
            </Write>
        </div>
    );
}

export default CompanyEnroll;