import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = styled.div`
  display:flex;
  align-items: center;
  position: relative;
  font-family: 'Pretendard-Regular';
`;

const Icon = styled.span`
  position: absolute;
  left : 15px;
  opacity: 0.4;
`;

const Input = styled.input`
  padding: 15px 50px;
  border : 1px solid rgba(0,0,0,0.2);
  border-radius: 5px;
  width: 1000px;
  font-size : 15px;
`;

function SearchCompany({User}) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const onChange = (e) => {
      setSearch(e.currentTarget.value);
  };
  const onSubmitSearch = (e) => {
    if (e.key === "Enter") {
      //키를 눌렀을 때 동작할 코드
      navigate('/search', { 
        state: { 
          result: e.currentTarget.value,
          User: User
        }
      });
    }
  };
  return (
    <Search>
            <Input type="text" value={search} onChange={onChange} onKeyPress={onSubmitSearch} placeholder=" 종목 검색" />
            <Icon><FontAwesomeIcon icon={faMagnifyingGlass} /></Icon>
    </Search>
  );
}

export default SearchCompany;