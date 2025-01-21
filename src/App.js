import React from 'react';
import './App.css';
import Register from './pages/Register';
import { BrowserRouter, Route } from 'react-router';
import { Routes } from 'react-router';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import SingleCategoryItems from './pages/SingleCategoryItems';
import ItemDetailsPage from './pages/ItemDetailsPage';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/same-category-items' element={<SingleCategoryItems/>}/>
        <Route path='/same-category-items/:id' element={<ItemDetailsPage/>}/>
        
        <Route path='/' element={<Home/>}/>
       
    </Routes>
    </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
