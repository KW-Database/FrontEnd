import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JoinPage from './Page/Jiwoo/JoinPage';
import LoginPage from './Page/Jiwoo/LoginPage';
import FindIDPage from './Page/Jiwoo/FindIDPage';
import FindPWPage from './Page/Jiwoo/FindPWPage';
import MainPage from './Page/Jiwoo/MainPage';

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
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
