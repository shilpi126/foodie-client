import React, { useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { Link } from 'react-router'
import { decreaseCartQuantity, deleteCartData, getCartData, increaseCartQuantity} from '../store/actions/cart-action'
import { cartAction } from '../store/slices/cartSlice'


const CartModal = () => {

const data = useSelector((state)=>state.cart.addCartData)
//const totalPrice = useSelector((state)=>state.cart.totalPrice)
const total = useSelector((state)=>state.cart.total)
const dispatch = useDispatch()

//console.log(data)





const handleDecrease = (item) => {
  if(item.quantity > 1){
    dispatch(decreaseCartQuantity(item))
   
  }else{
    dispatch(deleteCartData(item.id))
  }

  
}


const handleIncrease = (data) => {
  
  dispatch(increaseCartQuantity(data))

}





  return (
<div className='bg-slate-950   pt-4 mt-0'>
  <h1 className='text-center text-white text-2xl'>Your Cart Items</h1>
<ul className='p-4 flex flex-wrap  justify-evenly  items-center '>
      {data && data?.map((item,i)=>(
        <li key={item.id} className='w-96 p-4 h-48  mb-2  rounded-md flex  shadow-md shadow-slate-600 '>
          <img src={item.images} className='h-40  w-40 rounded-md '/>
          
          <div className='text-white ml-4'>
          <p>Title : {item.title}</p>
          <p>Price : {item.price}</p>
          <p>Quantity : {item.quantity}</p>
          <p>Total Price : {item.totalPrice}</p>
<div className='flex justify-between border-2 border-slate-700 h-8 mt-2 w-32  '>         
   <button  onClick={()=>{handleDecrease(item)}} className='bg-orange-500 w-10 h-[100%] '>-</button>
<p className='w-8 h-8 text-center text-xl '>{item.quantity}</p>
          <button  onClick={()=>{handleIncrease(item)}} className='bg-orange-500 w-10 h-[100%] '>+</button></div>
          </div>
        </li>
      ))

    }</ul>

<div className='flex justify-center flex-col items-center w-[100%] '>
  
<p className='text-center mb-4 text-white text-xl'> Total Price : {total}</p>
<Link to="/checkout" className='text-center bg-orange-600 p-2  w-60 h-12 rounded-md text-white text-xl'>Checkout Page</Link>
</div>
</div>
  )
}

export default CartModal