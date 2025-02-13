import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { getOrderData, getOrderStatus } from '../store/actions/cart-action'
const OrderSuccessPage = () => {
  const orderData = useSelector((state)=>state?.cart.orderData)

console.log(orderData)
  const dispatch = useDispatch()

  useEffect(()=>{
    
    dispatch(getOrderData())
  },[])
  

  return (
    <div className=' bg-slate-950 text-white'>
      <h1 className='text-center text-3xl pt-4  pb-4'>Order Status</h1>
<div className='flex flex-wrap justify-evenly mt-4'>
      
      {orderData &&
        orderData?.map((item)=>(
         <div key={item.id} className='  h-[100%] w-96 mb-4    rounded-md shadow-md shadow-slate-600'>
          <h1 className={`text-center pt-2  text-sm capitalize ${item.status === "delivered" ? "text-green-500" : item.status === "rejected" ? "text-red-500" : "text-orange-500"}`}>{item.status}</h1>

           <div>
          {  item?.cart?.map((d,i)=>(


          <div key={d.id} className='p-4'>

            <div  className='flex justify-between  mt-2 border-2 border-slate-800  rounded-md p-4'>
          
        <div><img src={d.images} className='w-28  h-24 mr-8 rounded-md'/></div>
        <div>
        <p>Title : {d.title}</p>
          <p>Price : {d.price}</p>
          <p>Quantity : {d.quantity}</p>
          <p>Total Price : {d.totalPrice}</p>
        </div>
        
          
      </div>
          </div>
          ))}

          
          
          </div>
 
         
         </div>
        ))
      }
      </div>
    </div>
  )
}

export default OrderSuccessPage