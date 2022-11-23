import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Manage = styled.div`
  display: flex;
  flex-wrap : wrap;
  flex-direction:column;
  height: 15px; 
  border-bottom : 2px solid white;
  background-color: #ecf0f1;
  padding : 15px 20px;
`

const ID = styled.div`
    width: 50px; 
    display:flex; justify-content:center;
`

const Name = styled.div`
    position:absolute; left:0px; width:1000px; 
    display:flex; justify-content:center;
`


function EachManage(props) {
    const navigate = useNavigate();
    const seeManage = () => {
        navigate(`/manage/${props.ID}`, {
            state: {
                ID: props.ID,
                Name: props.Name,
                Date: props.Date,
                Info: props.Info
            }
        });
    } 
    return (
        <Manage onClick={seeManage}>
            <ID>{props.ID}</ID>
            <Name>{props.Name}</Name>   
        </Manage>
    );
}

export default EachManage;