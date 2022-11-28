import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import EachCompany from './EachCompany';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
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

const PageNumber = styled.div`
    width: 1000px; height: 40px;
    display: flex; justify-content:center; align-items: center;
    color: black;
`

const Category = styled.div`
  position:absolute; top:90px; left:20px;
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

const Like = styled.div`
    position: absolute; left:850px; width: 100px; 
    display:flex; text-align:left;
`

const LikeButton= styled.button`
    position: absolute; left:950px; width:25px; height:45px;
    font-size:15px; font-weight:700; margin-top:1px;
    border:0; border-radius:3px; 
    display:flex; justify-content:center; align-items:center;
`

function LikeList() {
    const navigate = useNavigate();
    const move = () => {
        navigate('/:user/exchange');
        //매수/매도 화면으로 이동하도록 수정
    }

    const handleClick = (e) => {
        if (window.confirm('관심 목록에서 삭제하시겠습니까?'))
        {
            // They clicked Yes
            alert('삭제되었습니다.')
        }
        else
        {
            // They clicked no
        }
    }
    
    const [search, setSearch] = useState("");
    //const [currentPage, setCurrentPage] = useState(1);
    //const [DataPerPage, setPostsPerPage] = useState(5);
    
    const onChange = (e) => {
        setSearch(e.currentTarget.value);
    };

    /*const indexOfLast = currentPage * DataPerPage;
    const indexOfFirst = indexOfLast - DataPerPage;
    const currentData = () => {
        let currentPosts = 0;
        currentPosts = dummyData.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    };*/
    
    let eachCom = likelist.filter((val)=>{
        if(search === "") {
            return val;
        } else if(val.itemName.toLowerCase().includes(search.toLowerCase())) {
            return val;
        }
    }).map((props) => {
        return (
            <div>
                <LikeButton onClick = {handleClick}>X</LikeButton>
                <Company onClick={move}>
                    <Name>{props.itemName}</Name>
                    <Price>{props.price}</Price>
                    <Diff dif={props.changeRate}>▲ {props.changeAmount} ({props.changeRate}%)</Diff>  
                    <Like>♥ {props.likedNum}</Like>
                </Company>
            </div>    
        );
    });
    
    var num=1;
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
                    <PageNumber>
                        <Link to='/:user/likelist' style={{ textDecoration : 'none', color : 'black' }}>{num}</Link>
                    </PageNumber> 
                </CompanyList>
            </List>
        </ListLayer>
    );
}

export default LikeList;

/*
<PageNumber>
    <Link to='/:user/likelist' style={{ textDecoration : 'none', color : 'black' }}>{num}</Link>
</PageNumber> 
*/