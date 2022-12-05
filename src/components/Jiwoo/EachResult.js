import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const Result = styled.div`
  display: flex;
  flex-wrap : wrap;
  flex-direction:column;
  height: 10px; 
  justify-content: center;
  border-bottom : 2px solid white;
  background: #ecf0f1;
  padding : 20px 30px;
`

const ID = styled.div`
    position:absolute; left:20px; width:50px;
    display:flex; justify-content:center;
`

const Name = styled.div`
    position:absolute; left:350px; width: 450px;
    display:flex; text-align:left; 
`

const UserID = "jiwoo0629"

function EachResult(props) {
    const navigate = useNavigate();
    const move = () => {
        navigate(`/${UserID}/exchange`, {state:{
            UserID: UserID, itemCode:props.itemCode
        }});
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