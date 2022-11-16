import React from 'react';
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
  width: 600px;
  font-size : 15px;
`;

function SearchBar({search, onChange}) {
    return(
        <Search>
            <Input type="text" value={search} onChange={onChange} placeholder="Search" />
            <Icon><FontAwesomeIcon icon={faMagnifyingGlass} size="2x" /></Icon>
        </Search>
    );
}

export default SearchBar;