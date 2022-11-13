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
            <Route path='/:user/profile' element={<UserInfoPage />}></Route>
            <Route path='/:user/likelist' element={<LikeListPage />}></Route>
            <Route path='/board' element={<BoardPage />}></Route>
            <Route path='/board/write' element={<PostWritePage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
