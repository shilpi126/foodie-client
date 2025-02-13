import React, { useEffect } from 'react';
import './App.css';
import Register from './pages/Register';
import { BrowserRouter, Navigate, Route } from 'react-router';
import { Routes } from 'react-router';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import SingleCategoryItems from './pages/SingleCategoryItems';
import ItemDetailsPage from './pages/ItemDetailsPage';
import Header from './components/Header';
import Category from './components/Category';
import CartModal from './pages/CartModal';
import {useSelector, useDispatch} from "react-redux"
import { addtoCartItem, getCartData } from './store/actions/cart-action';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)

  
  useEffect(()=>{
    dispatch(getCartData())
  },[])


  return (
    <div className='bg-slate-950 text-white  h-screen w-screen'>
      <BrowserRouter>
     {isLoggedIn &&  <Header/>}
      <Routes>
      <Route path='/' element={isLoggedIn ? <Home/> : <Navigate to="/login" />}/>

        <Route path='/login' element={!isLoggedIn ? <Login/> : <Navigate to="/" />}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/same-category-items/:id' element={<ItemDetailsPage/>}/>
        
        <Route path='/:id' element={<SingleCategoryItems/>}/>
        <Route path='/cart' element={<CartModal/>}/>
        <Route path='/success' element={<OrderSuccessPage/>}/>
        <Route path='/user-profile' element={<UserProfilePage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
