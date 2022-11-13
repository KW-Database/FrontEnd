import styled from "styled-components";

const Post = styled.div`
  display: flex;
  flex-wrap : wrap;
  flex-direction:column;
  height: 30px;
  background-color: #ecf0f1;
  padding : 15px 20px;
  margin-bottom: 10px;
`;

const 글ID = styled.div`
    position: absolute; width: 50px; 
    display:flex; justify-content:center;
`

const Title = styled.div`
    position: absolute; left:50px; width: 500px; 
    display:flex; justify-content:center;
`

const ID = styled.div`
    position: absolute; left:550px; width: 200px; 
    display:flex; justify-content:center;
`

const Date = styled.div`
    position: absolute; left:750px; width: 250px; 
    display:flex; justify-content:center;
`

const View = styled.div`
    position: absolute; left:1000px; width: 200px; 
    display:flex; justify-content:center;
`

function EachPost(props) {
    return (
        <Post>
            <글ID>{props.글ID}</글ID>  
            <Title>{props.Title}</Title>  
            <ID>{props.ID}</ID>
            <Date>{props.Date}</Date>
            <View>{props.View}</View>        
        </Post>
    );
}

export default EachPost;