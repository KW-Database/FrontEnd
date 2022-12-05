import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Write = styled.div`
    position: absolute; width:1000px; height:480px; left:300px; top:150px; padding:50px; 
    text-align: left; background-color: white; font-size: 24px; 
    border-radius:10px; box-shadow:5px 5px lightgray;
`

const Title = styled.input`
    position: absolute; width:750px; height:40px; left:180px; top: 50px;
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

function CompanyEnroll () {
    const location = useLocation();
    const [Data, setData] = useState([]);
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
        if (window.confirm('기업을 등록하시겠습니까?'))
        {
            if(Name === '')
                alert("기업명을 입력하세요.");
            else if(Info === '')
                alert("기업개요를 입력하세요.")
            else {
                axios(
                    {                        
                        url: `/company/write`,
                        method: 'post',
                        data: {itemCode: location.itemCode, itemName:Name, date: new Date(), info: Info},
                        baseURL: 'http://localhost:8080',
                    }
                ).then(function (response) {
                    setData(response.data);
                    //alert("성공")
                }).catch(function (error) {
                    //alert(error);
                });
            }
                alert("기업이 등록되었습니다.");
                e.preventDefault();
        } else {
            // They clicked no
        }  
    }

    return(
        <div>
            <Write>
                기업명 : <Title type="text" name="Name" value={Name} placeholder="기업명" onChange={onChange} /> <p /><br />
                기업개요 : <Content name="Info" value={Info} placeholder="기업개요" onChange={onChange} />
                <Submit type="submit" value="Submit" onClick={onSubmit}>등록</Submit>
            </Write>
        </div>
    );
}

export default CompanyEnroll;