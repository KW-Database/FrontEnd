import React, { useState }from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from '../Jiwoo/SearchBar';
//import EachStock from './EachStock';
import mystock from '../../Json/mystock.json'

const Title=styled.div`
    position: absolute; width: 560px; height: 80px; top: 20px;
    display:flex; justify-content: center; align-items: center; 
    border-bottom: 1px solid black;
    font-weight: 500; font-size: 40px; 
`

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
  height: 15px; 
  border-bottom : 2px solid white;
  background-color: #ecf0f1;
  padding : 15px 20px;
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

function MyStock(){
    
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.currentTarget.value);
    };
    
    let eachStock = mystock.filter((val)=>{
        if(search===""){
            return val;
        }
        else if(val.Name.toLowerCase().includes(search.toLowerCase())){
            return val;
        }
    }).map((props)=>{
        return(
            <div>
                <Company>
                    <Name>{props.Name}</Name>
                    <Price>{props.Price}</Price>
                    <Diff dif={props.Rate}>▲ {props.changeAmount} ({props.changeRate}%)</Diff>  
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
                <Name>기업명</Name><Price>현재가</Price><DiffTitle>상승/하락</DiffTitle>
            </Category><p />
            <StockList>
                {eachStock} <p />
                <PageNumber>
                    <Link to='/:user/mywallet' style={{ textDecoration : 'none', color : 'black' }}>{num}</Link>
                </PageNumber> 
            </StockList>
        </List>
    </ListLayer>

    );

}
export default MyStock;