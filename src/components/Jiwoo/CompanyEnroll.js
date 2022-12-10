import React, { useState } from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Write = styled.div`
    position: absolute; width:1000px; height:480px; left:300px; top:150px; padding:30px; padding-left:50px;
    text-align: left; background-color: white; font-size: 24px; 
    border-radius:10px; box-shadow:5px 5px lightgray;
    font-family: 'Pretendard-Regular';
`

const Item = styled.input`
    position: absolute; width:750px; height:40px; left:180px; top: 30px;
    background-color:white; font-size:20px;
    border-radius:5px;
`

const Title = styled.input`
    position: absolute; width:750px; height:40px; left:180px; top: 80px;
    background-color:white; font-size:20px;
    border-radius:5px;
`

const Content = styled.textarea`
    position: absolute; width:750px; height:250px; left:180px; top: 140px;
    background-color:white; font-size:20px; border:2px solid black;
    border-radius:5px;
`

const Submit = styled.button`
    position: absolute; width:120px; height:40px; left: 820px; top: 420px; 
    border:0; border-radius:20px; box-shadow:3px 3px #e7e7e7;
    font-size:20px; color:white; background-color:skyblue;
`

function CompanyEnroll ({UserID}) {
    const location = useLocation();
    const navigate = useNavigate();
    const [Inputs, setInputs] = useState({
        Code: '',
        Name: '',
        Info: ''
    });
    const { Code, Name, Info } = Inputs;
    
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...Inputs,
            [name]: value
        });
    };

    const onSubmit = (e) => {
        if (window.confirm('기업을 등록하시겠습니까?'))
        {
            if(Code === '')
                alert("종목코드를 입력하세요.")
            else if(Name === '')
                alert("기업명을 입력하세요.");
            else if(Info === '')
                alert("기업개요를 입력하세요.")
            else {
                axios.post(`/admin/company`, {
                    itemCode: Code, companyName:Name, companySummary: Info, itemNumber: 0, publicDate: new Date(), 
                }).then( response => {
                    console.log(response);
                    alert("기업이 등록되었습니다.");
                    navigate('/manage', {state:{
                        UserID: UserID
                    }})
                }).catch( error => {
                    console.log(error)
                });
            }
            e.preventDefault();
        } else {
            // They clicked no
        }  
    };

    return(
        <div>
            <Write>
                종목코드 : <Item type="text" name="Code" value={Code} placeholder="종목코드" onChange={onChange} /> <p />
                기업명 : <Title type="text" name="Name" value={Name} placeholder="기업명" onChange={onChange} /> <p />
                기업개요 : <Content name="Info" value={Info} placeholder="기업개요" onChange={onChange} />
                <Submit type="submit" value="Submit" onClick={onSubmit}>등록</Submit>
            </Write>
        </div>
    );
}

export default CompanyEnroll;