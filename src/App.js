import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JoinPage from './Page/Jiwoo/JoinPage';
import LoginPage from './Page/Jiwoo/LoginPage';
import FindIDPage from './Page/Jiwoo/FindIDPage';
import FindPWPage from './Page/Jiwoo/FindPWPage';
import MainPage from './Page/Jiwoo/MainPage';
import UserInfoPage from './Page/Jiwoo/UserInfoPage';
import LikeListPage from './Page/Jiwoo/LikeListPage';
import BoardPage from './Page/Jiwoo/BoardPage';
import PostWritePage from './Page/Jiwoo/PostWritePage';
import PostViewPage from './Page/Jiwoo/PostViewPage';
import PostUpdatePage from './Page/Jiwoo/PostUpdatePage';
import UserListPage from './Page/Jiwoo/UserListPage';
import UserInfoUpdatePage from './Page/Jiwoo/UserInfoUpdatePage';
import CompanyManagePage from './Page/Jiwoo/CompanyManagePage';
import CompanyEnrollPage from './Page/Jiwoo/CompanyEnrollPage';
import CompanyViewPage from './Page/Jiwoo/CompanyViewPage';
import CompanyUpdatePage from './Page/Jiwoo/CompanyUpdatePage';
import SearchResultPage from './Page/Jiwoo/SearchResultPage';
import RecommendPage from './Page/Jiwoo/RecommendPage';
import RecentlyAddedPage from './Page/Jiwoo/RecentlyAddedPage';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/join' element={<JoinPage />}></Route>
            <Route path='/findID' element={<FindIDPage />}></Route>
            <Route path='/findPW' element={<FindPWPage />}></Route>
            <Route path='/search' element={<SearchResultPage />}></Route>
            <Route path='/:user/profile' element={<UserInfoPage />}></Route>
            <Route path='/:user/update' element={<UserInfoUpdatePage />}></Route>
            <Route path='/:user/likelist' element={<LikeListPage />}></Route>
            <Route path='/board' element={<BoardPage />}></Route>
            <Route path='/board/write' element={<PostWritePage />}></Route>
            <Route path='/board/:id' element={<PostViewPage />}></Route>
            <Route path='/board/:id/update' element={<PostUpdatePage />}></Route>
            <Route path='/admin' element={<UserListPage />}></Route>
            <Route path='/manage' element={<CompanyManagePage />}></Route>
            <Route path='/manage/enroll' element={<CompanyEnrollPage />}></Route>
            <Route path='/manage/:id' element={<CompanyViewPage />}></Route>
            <Route path='/manage/:id/update' element={<CompanyUpdatePage />}></Route>
            <Route path='/recommend' element={<RecommendPage />}></Route>
            <Route path='/recently_added' element={<RecentlyAddedPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
