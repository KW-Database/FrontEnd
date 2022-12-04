import React, { useState }from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from '../Jiwoo/SearchBar';
import mywallet from '../../Json/mywallet'

const ListLayer = styled.div`
    display:flex; justify-content:center; 
`
const List = styled.div`
    position: absolute; width:1040px; top: 250px;
    display:flex; justify-content: center;
`
const Search = styled.div`
    position: absolute; width:800px; top:120px; left:120px;
    display:flex; justify-content: center;
`

const StockList = styled.div`
    display: grid; flex-direction: row; width: 1000px; 
    position: absolute; top:220px; left:20px;
    border-top:2px solid gray; 
    background-color:#e7e7e7; color:black;
    grid-template-columns : repeat(1, 1fr);
  @media screen and (max-width : 800px){
    grid-template-columns : repeat(1, 1fr);
  }
  @media screen and (max-width : 1040px) and (min-width : 800px){
    grid-template-columns : repeat(2, 1fr);
  }
`

const PageNumber = styled.div`
    width: 1000px; height: 40px;
    display: flex; justify-content:center; align-items: center;
    color: black;
`
const Category = styled.div`
  position:absolute; top:190px; left:20px;
`

const Company = styled.div`
  display: flex;
  flex-wrap : wrap;
  flex-direction:column;
  justify-content: center;
  height: 10px; 
  border-bottom : 2px solid white;
  background-color: #ecf0f1;
  padding : 20px 30px;
`


const Name = styled.div`
    position: absolute; left:50px; width: 300px; 
    display:flex; text-align:left;
`

const Price = styled.div`
    position: absolute; left:350px; width: 200px; 
    display:flex; justify-content:center;
`

const DiffTitle = styled.div`
    position: absolute; left:550px; width: 250px; 
    display:flex; justify-content:center;
`

const Diff = styled.div`
    position: absolute; left:550px; width: 250px; 
    display:flex; justify-content:center;
    color: ${props => (props.dif > 0) ? 'red' : 'skyblue'};
`

const Count = styled.div`
    position: absolute; left:800px; width: 200px; 
    display:flex; justify-content:center;
`

const UserID = "jiwoo0629";

function MyStock(props){
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.currentTarget.value);
    };

    const navigate = useNavigate();
    const move = () => {
        navigate(`/${UserID}/exchange`);
        //매수/매도 화면으로 이동하도록 수정
    }
    
    let eachStock = mywallet.ratePerCompany.filter((val)=>{
        if(search===""){
            return val;
        }
        else if(val.itemName.toLowerCase().includes(search.toLowerCase())){
            return val;
        }
    }).map((props)=>{
        return(
            <div>
                <Company onClick={move}>
                    <Name>{props.itemName}</Name>
                    <Price>{props.appraisal}</Price>
                    <Diff dif={props.totalRate}>▲ {props.appraisal - props.purchase} ({(props.totalRate).toFixed(2)}%)</Diff>  
                    <Count>{props.itemNumber}</Count>
                </Company>
            </div>
        )
    })

    var num=1;

    return(
    
    <ListLayer>
        <List>
            <Search><SearchBar search={search} onChange={onChange} /></Search>
            <Category>
                <Name>기업명</Name><Price>현재가</Price><DiffTitle>상승/하락</DiffTitle><Count>보유주식 수</Count>
            </Category><p />
            <StockList>
                {eachStock} <p />
                <PageNumber>
                    <Link to={`/${UserID}/mywallet?page=${num}`} style={{ textDecoration : 'none', color : 'black' }}>{num}</Link>
                </PageNumber> 
            </StockList>
        </List>
    </ListLayer>

    );

}
export default MyStock;