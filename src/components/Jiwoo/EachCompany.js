import styled from "styled-components";

const Company = styled.div`
  display: flex;
  flex-wrap : wrap;
  flex-direction:column;
  background-color: #ecf0f1;
  height:20px; 
  border : 5px solid black;
  border-radius: 20px;
  padding : 15px 30px;
  margin-bottom: 20px;
`;

const Name = styled.div`
    position: absolute; left:50px; width: 200px; 
    display:flex; justify-content:center;
`

const Price = styled.div`
    position: absolute; left:300px; width: 150px; 
    display:flex; justify-content:center;
`

const Diff = styled.div`
    position: absolute; left:450px; width: 150px; 
    display:flex; justify-content:center;
`

const Like= styled.div`
    position: absolute; left:600px; width: 150px; 
    display:flex; justify-content:center;
`


function EachCompany(props) {
    return (
        <Company>
            <Name>{props.name}</Name>
            <Price>{props.endprice}</Price>
            <Diff>{props.diff}({props.diffrate}%)▲</Diff>
            <Like>{props.like}♥</Like>      
        </Company>
    );
}

export default EachCompany;