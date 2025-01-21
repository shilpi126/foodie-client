import React from 'react';
import './App.css';
import Register from './pages/Register';
import { BrowserRouter, Route } from 'react-router';
import { Routes } from 'react-router';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Login/>}/>
       
    </Routes>
    </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
