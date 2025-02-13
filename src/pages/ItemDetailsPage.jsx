import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import {useDispatch, useSelector} from "react-redux"
import { cartAction } from '../store/slices/cartSlice'
import {  addtoCartItem, getCartData} from '../store/actions/cart-action'
import { getSingleRecipeData } from '../store/actions/recipe-action'


const ItemDetailsPage = () => {
    
    const {id} = useParams()
    
    const dispatch = useDispatch()
    const active = useSelector((state)=>state.cart.addCartData)
    console.log(active)
    const item = useSelector((state)=>state.recipe.singleData)
  //console.log(item)

const activeData = active.find((item)=>item.itemId === id)
  
console.log(id, activeData)


const handleAddToCart = () => {
  
      dispatch(addtoCartItem(item));
      
};
    



    useEffect(()=>{
    
    dispatch(getSingleRecipeData(id))

    },[])





  return (

    <div className='w-screen h-screen flex  justify-center  bg-slate-950 text-white '>
          <div  className=' h-96 lg:h-80  w-[60%] mt-8 rounded-md p-6 flex  flex-wrap  shadow-md shadow-slate-600'>
          
          
            
            
        <img src={item.images}  alt='image' className=' w-full md:w-80  h-48 md:h-56 mr-0 md:mr-6  rounded-md'/>
        <div className=' mt-4 lg:mt-0'>
        <h1 className=' text-md'>Title : {item.title}</h1>
        <p className='text-sm overflow-hidden'>Category : {item.category}</p>
        <p className=' '>Ingredient : {item.ingredient}</p>
        <h1 className=' text-md'>Price : {item.price}</h1>
        
      {!activeData &&   <button id={item.id} onClick={handleAddToCart} className='h-8 w-32  text-center bg-orange-600 text-white rounded-md  mt-2'>Add To Cart</button>
        }

        {activeData && <Link to="/cart"><button className='h-8 w-32  text-center bg-slate-600 text-white rounded-md  mt-2'>Go To Cart</button></Link >
        }


        </div>
      </div>
      </div>
      
  )
}

export default ItemDetailsPage