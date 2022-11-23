import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const Result = styled.div`
  display: flex;
  flex-wrap : wrap;
  flex-direction:column;
  height: 15px; 
  border-bottom : 2px solid white;
  background: #ecf0f1;
  padding : 15px 20px;
`

const ID = styled.div`
    position:absolute; left:20px; width:50px;
    display:flex; justify-content:center;
`

const Name = styled.div`
    position:absolute; left:300px; width: 700px;
    display:flex; text-align:left; 
`

function EachResult(props) {
    const navigate = useNavigate();
    const move = () => {
        navigate('/:user/exchange');
        //매수/매도 화면으로 이동하도록 수정
    }

    return (
        <Result onClick={move}>
            <ID>{props.ID}</ID>
            <Name>{props.name}</Name>
        </Result>
    );
}

export default EachResult;