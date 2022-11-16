import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const User = styled.div`
  display: flex;
  flex-wrap : wrap;
  flex-direction:column;
  background-color: #ecf0f1;
  border : 5px solid black;
  border-radius: 20px;
  padding : 15px 20px;
  font-size:20px;
  margin-bottom: 20px;
`;

function EachResult(props) {
    const navigate = useNavigate();
    const move = () => {
        navigate('/');
        //매수/매도 화면으로 이동하도록 수정
    }

    return (
        <User onClick={move}>
            {props.name}
        </User>
    );
}

export default EachResult;