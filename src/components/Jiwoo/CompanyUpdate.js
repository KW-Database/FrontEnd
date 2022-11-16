import React, { useState } from 'react';
import styled from 'styled-components';

const Update = styled.div`
    position: absolute; width:1100px; height:400px; left:200px; top:150px; padding:50px; 
    text-align: left; background-color: white; font-size: 24px; 
`

const Title = styled.input`
    position: absolute; width:900px; height:40px; left:170px; top: 40px;
    display:flex; justify-content: center; background-color:white; font-size:24px;
`

const Date = styled.input `
    position: absolute; width:900px; height:40px; left:170px; top: 100px;
    display:flex; justify-content: center; background-color:white; font-size:24px;
`

const Content = styled.input`
    position: absolute; width:900px; height:250px; left:170px; top: 160px;
    background-color:white; font-size:24px;
`

const Submit = styled.button`
    position: absolute; left: 950px; top: 420px; width:120px; height:40px;    
    border:0; border-radius:20px; 
    font-size:20px; color:white; background-color:skyblue;
`

function CompanyUpdate(props) {
    const [Inputs, setInputs] = useState({
        name: props._Name,
        date: props._Date,
        info: props._Info
    });
    const { name, date, info } = Inputs;
    
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...Inputs,
            [name]: value
        });
    };

    const onSubmit = (e) => {
        if(name === '')
            alert("기업명을 입력하세요.");
        else if(date === '')
            alert("상장날짜를 입력하세요.");
        else if(info === '')
            alert("기업개요를 입력하세요.")
        else {
            alert("회사 정보가 수정되었습니다.");
            e.preventDefault();
            //DB에 넣는 코드 추가
        }
    }

    return(
        <div>
            <Update>
                &nbsp;&nbsp;&nbsp; 기업명 : <Title type="text" name="name" value={name} placeholder="기업명" onChange={onChange} /> <p />
                상장날짜 : <Date type="text" name="date" value={date} placeholder="상장날짜" onChange={onChange} /> <p />
                기업개요 : <Content name="info" value={info} placeholder="기업개요" onChange={onChange} />
                <Submit type="submit" value="Submit" onClick={onSubmit}>Update</Submit>
            </Update>
        </div>
    );
}

export default CompanyUpdate;