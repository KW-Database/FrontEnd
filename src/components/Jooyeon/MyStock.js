import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from '../Jiwoo/SearchBar';
import Pagination from 'react-js-pagination';

const ListLayer = styled.div`
    display:flex; justify-content:center; 
    font-family: 'Pretendard-Regular';
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
    position: absolute; left:640px; width: 160px; 
    display:flex; align-items:center; text-align:left;
    color: ${props => (props.dif > 0) ? 'red' : props.dif<0?'skyblue':'gray'};
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

function MyStock(props){
    const navigate = useNavigate();
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

    let filtered_data = props.Data.ratePerCompany.filter((val)=>{
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
    ).map((pro)=>{
        const Move = () => {            
            navigate(`/${props.UserID}/exchange`, {state:{
                UserID: props.UserID, itemCode:pro.itemCode, itemName:pro.itemName
            }});
            //매수/매도 화면으로 이동하도록 수정
        }
        function Arrow(p) {
            if(p > 0)
                return '▲';
            else if(p < 0)
                return '▼';

        }
        return(
            <div>
                <Company onClick={Move}>
                    <Name>{pro.itemName.toLocaleString('en-AU')}</Name>
                    <Price>{(pro.appraisal/pro.itemNumber).toLocaleString('en-AU')}</Price>
                    <Diff dif={pro.totalRate}>{Arrow(pro.totalRate)} {((pro.appraisal - pro.purchase)/pro.itemNumber).toFixed(2).toLocaleString('en-AU')} ({(pro.totalRate).toFixed(2)}%)</Diff>  
                    <Count>{pro.itemNumber}</Count>
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