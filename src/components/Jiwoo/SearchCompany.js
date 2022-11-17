import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = styled.div`
  display:flex;
  align-items: center;
  position: relative;
`;

const Icon = styled.span`
  position: absolute;
  left : 15px;
  opacity: 0.4;
`;

const Input = styled.input`
  padding: 20px 50px;
  border : 1px solid rgba(0,0,0,0.2);
  border-radius: 5px;
  width: 1000px;
  font-size : 15px;
`;

function SearchCompany() {
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
          result: e.currentTarget.value
        }
      });
    }
  };
  return (
    <Search>
            <Input type="text" value={search} onChange={onChange} onKeyPress={onSubmitSearch} placeholder="Search" />
            <Icon><FontAwesomeIcon icon={faMagnifyingGlass} size="2x" /></Icon>
    </Search>
  );
}

export default SearchCompany;