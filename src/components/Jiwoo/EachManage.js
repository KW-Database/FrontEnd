import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Post = styled.div`
  display: flex;
  flex-wrap : wrap;
  flex-direction:column;
  height: 30px;
  background-color: #ecf0f1;
  padding : 15px 20px;
  margin-bottom: 10px;
`;

const ID = styled.div`
    position: absolute; width: 50px; 
    display:flex; justify-content:center;
`

const Name = styled.div`
    position: absolute; left:50px; width: 1150px; 
    display:flex; justify-content:center;
`

function EachManage(props) {
    const navigate = useNavigate();
    const seeManage = () => {
        navigate('/manage/:id', {
            state: {
                Name: props.Name,
                Date: props.Date,
                Info: props.Info
            }
        });
    } 
    return (
        <Post onClick={seeManage}>
            <ID>{props.ID}</ID>  
            <Name>{props.Name}</Name>         
        </Post>
    );
}

export default EachManage;