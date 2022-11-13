import styled from "styled-components";

const Company = styled.div`
  display: flex;
  flex-wrap : wrap;
  flex-direction:column;
  background-color: #ecf0f1;
  border : 5px solid black;
  border-radius: 20px;
  padding : 15px 20px;
  margin-bottom: 20px;
`;


function EachCompany(props) {
    return (
        <Company>
            {props.name}<br />{props.diff}▲<br />{props.diffrate}%       
        </Company>
    );
}

export default EachCompany;