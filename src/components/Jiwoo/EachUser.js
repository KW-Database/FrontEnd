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
  margin-bottom: 20px;
`;

function EachUser(props) {
    const navigate = useNavigate();
    const move = () => {
        navigate('/:user/profile');
    }

    return (
        <User onClick={move}>
            {props.ID}<br />{props.name}
        </User>
    );
}

export default EachUser;