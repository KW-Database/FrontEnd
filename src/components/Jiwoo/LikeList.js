import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Pagination from 'react-js-pagination';
import likelist from  '../../Json/likelist';

const Title = styled.div`
    position: absolute; width: 560px; height: 80px; top: 20px;
    display:flex; justify-content: center; align-items: center; 
    border-bottom: 1px solid black;
    font-weight: 500; font-size: 40px; 
`

const ListLayer = styled.div`
    display:flex; justify-content:center; 
`

const List = styled.div`
    position: absolute; width:1040px; top: 150px;
    display:flex; justify-content: center;
`

const Search = styled.div`
    position: absolute; width:800px; left:120px;
    display:flex; justify-content: center;
`

const CompanyList = styled.div`
    display: grid; flex-direction: row; width: 1000px; 
    position: absolute; top:120px; left:20px;
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

const Category = styled.div`
  position:absolute; top:90px; left:20px;
`

const Company = styled.div`
  display: flex;
  flex-wrap : wrap;
  flex-direction:column;
  height: 10px; 
  justify-content:center;
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

const Like = styled.div`
    position: absolute; left:850px; width: 100px; 
    display:flex; text-align:left;
`

const LikeButton= styled.button`
    position: absolute; left:950px; width:25px; height:40px;
    font-size:15px; font-weight:700; margin-top:1px;
    border:0; border-radius:3px; 
    display:flex; justify-content:center; align-items:center;
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

const UserID = "jiwoo0629"

function LikeList() {
    const navigate = useNavigate();
    const move = () => {
        navigate(`/${UserID}/exchange`);
        //매수/매도 화면으로 이동하도록 수정
    }

    const [Data, setData] = useState([]);
    
    useEffect(() => {
		axios(
            {
                url: '/user/likedItem',
                method: 'get',
                data: {id: UserID},
                baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            setData(response.data);
            //alert("성공")
          }).catch(function (error) {
            //alert(error);
        });
    }, []);


    const handleClick = (e) => {
        if (window.confirm('관심 목록에서 삭제하시겠습니까?'))
        {
            // They clicked Yes
            axios(
                {
                    url: '/user/likedItem',
                    method: 'delete',
                    data: {
                        id: UserID, 
                        itemCode: e.target.value
                    },
                    baseURL: 'http://localhost:8080',
                }
              ).then(function (response) {
                //alert("성공")
              }).catch(function (error) {
                //alert(error);
            });
            alert('삭제되었습니다.')
        }
        else
        {
            // They clicked no
        }
    }
    
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

    let filtered_data = likelist.filter((val)=>{
        if(search === "") {
            return val;
        } else if(val.itemName.toLowerCase().includes(search.toLowerCase())) {
            return val;
        }
    })
 
    let eachCom = filtered_data.slice(
        items*(page-1),
        items*(page-1) + items
    ).map((props) => {
        return (
            <div>
                <LikeButton value={props.itemCode} onClick = {handleClick}>X</LikeButton>
                <Company onClick={move}>
                    <Name>{props.itemName}</Name>
                    <Price>{props.price}</Price>
                    <Diff dif={props.changeRate}>▲ {props.changeAmount} ({props.changeRate}%)</Diff>  
                    <Like>♥ {props.likedNum}</Like>
                </Company>
            </div>    
        );
    });

    return (
        <ListLayer>
            <Title>관심 목록</Title>
            <List>
                <Search><SearchBar search={search} onChange={onChange} /></Search>
                <Category>
                    <Name>기업명</Name><Price>현재가</Price><DiffTitle>상승/하락</DiffTitle><Like>관심수</Like>    
                </Category><p />
                <CompanyList>
                    {eachCom} <p />
                    <PaginationBox>
                      <Pagination
                        activePage={page}
                        itemsCountPerPage={items}
                        totalItemsCount={filtered_data.length}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}>
                      </Pagination>
                    </PaginationBox>
                </CompanyList>
            </List>
        </ListLayer>
    );
}

export default LikeList;