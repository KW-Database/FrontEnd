import React, { useState } from 'react';
import styled from "styled-components";
import SearchBar from './SearchBar';

const Table = styled.div`
    display:flex; justify-content:center;
`

const dummyData = [
  {name: "기업1", desc: "기업개요1"}
];

function SearchCompany() {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
      setSearch(e.currentTarget.value);
  };
  return (
    <div>
      <SearchBar value={search} onChange={onChange} /> <p />
      <Table>
        <table class="ComapnySearch" border="1">
          <tr>
            <td width="70px" height="40px">기업명</td>
            <td>{dummyData[0].name}</td>
          </tr>
          <tr>
            <td>기업개요</td>
            <td class="company_desc" height="230px">{dummyData[0].desc}</td>
          </tr>
        </table> 
      </Table>
    </div>
  );
}

export default SearchCompany;