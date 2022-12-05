import React, { useState, useEffect }from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import SearchBar from '../Jiwoo/SearchBar';
import Pagination from 'react-js-pagination';
import mywallet from '../../Json/mywallet'

const ListLayer = styled.div`
    display:flex; justify-content:center; 
`
const List = styled.div`
    position: absolute; width:1040px; top: 250px;
    display:flex; justify-content: center;
`
const Search = styled.div`
    position: absolute; width:800px; top:130px; left:120px;
    display:flex; justify-content: center;
`

const Category = styled.div`
  position:absolute; top:210px; left:20px;
`

const StockList = styled.div`
    display: grid; flex-direction: row; width: 1000px; 
    position: absolute; top:240px; left:20px;
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

const PaginationBox = styled.div`
  .pagination { display: flex; justify-content: center; margin-top: 15px;}
  ul { list-style: none; padding: 0; }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem; 
  }
  ul.pagination li:first-child{ border-radius: 5px 0 0 5px; }
  ul.pagination li:last-child{ border-radius: 0 5px 5px 0; }
  ul.pagination li a { text-decoration: none; color: #337ab7; font-size: 1rem; }
  ul.pagination li.active a { color: white; }
  ul.pagination li.active { background-color: #337ab7; }
  ul.pagination li a:hover,
  ul.pagination li a.active { color: blue; }
`

const UserID = "jiwoo0629";

function MyStock(props){
    const [Data, setData] = useState([]);
    
    useEffect(() => {
		axios(
            {
                url: '/mywallet',
                method: 'get',
                data: UserID,
                baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            setData(response.data);
            //alert("성공")
          }).catch(function (error) {
            //alert(error);
        });
    }, []);

    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const items = 5;
    const handlePageChange = (page) => { 
        setPage(page); 
    };
    const onChange = (e) => {
        setPage(1);
        setSearch(e.currentTarget.value);
    };

    const navigate = useNavigate();
    const move = () => {
        navigate(`/${UserID}/exchange`);
        //매수/매도 화면으로 이동하도록 수정
    }

    let filtered_data = mywallet.ratePerCompany.filter((val)=>{
        if(search===""){
            return val;
        }
        else if(val.itemName.toLowerCase().includes(search.toLowerCase())){
            return val;
        }
    });
    
    let eachStock = filtered_data.slice(
        items*(page-1),
        items*(page-1) + items
    ).map((props)=>{
        return(
            <div>
                <Company onClick={move}>
                    <Name>{props.itemName.toLocaleString('en-AU')}</Name>
                    <Price>{props.appraisal.toLocaleString('en-AU')}</Price>
                    <Diff dif={props.totalRate}>▲ {(props.appraisal - props.purchase).toLocaleString('en-AU')} ({(props.totalRate).toFixed(2)}%)</Diff>  
                    <Count>{props.itemNumber}</Count>
                </Company>
            </div>
        )
    })

    return(
    
    <ListLayer>
        <List>
            <Search><SearchBar search={search} onChange={onChange} /></Search>
            <Category>
                <Name>기업명</Name><Price>현재가</Price><DiffTitle>상승/하락</DiffTitle><Count>보유주식 수</Count>
            </Category><p />
            <StockList>
                {eachStock} <p />
                <PaginationBox>
                      <Pagination
                        activePage={page}
                        itemsCountPerPage={items}
                        totalItemsCount={filtered_data.length}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}>
                      </Pagination>
                    </PaginationBox> 
            </StockList>
        </List>
    </ListLayer>

    );

}
export default MyStock;