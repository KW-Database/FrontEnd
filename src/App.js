import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JoinPage from './Page/Jiwoo/JoinPage';
import LoginPage from './Page/Jiwoo/LoginPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />}></Route>
            <Route path='/join' element={<JoinPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
