import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Manage = styled.div`
  display: flex;
  flex-wrap : wrap;
  flex-direction:column;
  height: 10px; 
  justify-content: center;
  border-bottom : 2px solid white;
  background-color: #ecf0f1;
  padding : 20px 30px;
  font-family: 'Pretendard-Regular';
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
                itemCode: props.itemCode,
                Name: props.Name,
                Date: props.Date,
                Info: props.Info,
                UserID: props.UserID
            }
        });
    } 
    return (
        <Manage onClick={seeManage}>
            <ID>{props.num}</ID>
            <Name>{props.Name}</Name>   
        </Manage>
    );
}

export default EachManage;