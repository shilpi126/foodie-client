import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { emptyCartData, placeOrderData } from '../store/actions/cart-action'


const CheckoutPage = () => {
const [userData,setUserData] = useState({
    
    name:"",
    phoneNo:"",
    cashOnDelivery:false,
    address:{
    houseNo :"",
    city:"",
    state:"",
    pincode:"",
    }
})

const data = useSelector((state)=>state.cart.cartItems)
const total = useSelector((state)=>state.cart.total)
const navigate = useNavigate()
const dispatch = useDispatch()


//console.log(data)
const handleFromSubmit = (e) =>{
  e.preventDefault();
  const checkoutData = {
    userData,
    cartData:data,
    totalAmount:total,
    status:"pending",
  }
  console.log(checkoutData)
dispatch(placeOrderData(checkoutData))
dispatch(emptyCartData())
navigate("/success")

}


  return (
<div className='flex justify-center p-4 flex-wrap items-center  bg-slate-950 '>
<div className='w-[60%] '>
  <h1 className='text-center  text-2xl'>Your Cart Items</h1>
<ul className='p-4 flex flex-col justify-center  items-center'>
      {data && data.map((item,i)=>(
        <li key={item.id} className='w-[80%] p-2 h-20 border-2 mb-2 border-slate-500  rounded-md flex justify-between'>
          <img src={item.images} className='w-16 h-[100%] rounded-md'/>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
          <p>Total Price : {item.totalPrice}</p>
        </li>
      ))

    }</ul>

<div className='flex justify-center flex-col items-center w-[100%] '>
  
<p className='text-center mb-2 w-44   text-white text-xl'> Total Price : {total}</p>

</div>
</div>
    
    <form onSubmit={handleFromSubmit} className='border-2 border-slate-400 m-2  w-[50%] p-4 flex flex-wrap justify-between'>
    
    <div className='mb-2 h-14 flex flex-col'>
                <label htmlFor='name' className=''>User name :</label>
                <input
                id="name"
                type="text"
                value={userData.name}
                onChange={(e)=>setUserData((prev)=>({...prev,name:e.target.value}))}
                placeholder='Enter Name...'
                required
                className="h-10 w-60 outline-none text-black rounded-md  pl-4 border-2 border-slate-700"
                />

            </div>
            <div className='mb-2 h-14 flex flex-col'>
                <label htmlFor='phoneNo' className=''>Phone No :</label>
                <input
                id="phoneNo"
                type="text"
                value={userData.phoneNo}
                onChange={(e)=>setUserData((prev)=>({...prev,phoneNo:e.target.value}))}
                placeholder='Enter Phone No...'
                required
                className="h-10 w-60 text-black outline-none rounded-md  pl-4 border-2 border-slate-700"
                />

            </div>
            <div className='mb-2 h-14 flex flex-col'>
                <label htmlFor='houseNo' className=''> House No :</label>
                <input
                id="houseNo"
                type="text"
                value={userData.address.houseNo}
                onChange={(e)=>setUserData((prev)=>({...prev,address:{...prev.address, houseNo:e.target.value}}))}
                placeholder='Enter House No...'
                required
                className="h-10 w-60 text-black outline-none rounded-md  pl-4 border-2 border-slate-700"
                />

            </div>
            <div className='mb-2 h-14 flex flex-col'>
                <label htmlFor='city' className=''> City :</label>
                <input
                id="city"
                type="text"
                value={userData.city}
                onChange={(e)=>setUserData((prev)=>({...prev, address:{...prev.address,city:e.target.value}}))}
                placeholder='Enter City...'
                required
                className="h-10 w-60 text-black outline-none rounded-md  pl-4 border-2 border-slate-700"
                />

            </div>
            <div className='mb-2 h-14 flex flex-col'>
                <label htmlFor='state' className=''>State :</label>
                <input
                id="state"
                type="text"
                value={userData.state}
                onChange={(e)=>setUserData((prev)=>({...prev, address:{...prev.address,state:e.target.value}}))}
                placeholder='Enter State...'
                required
                className="h-10 w-60 text-black outline-none rounded-md  pl-4 border-2 border-slate-700"
                />

            </div>
            <div className='mb-2 h-14 flex flex-col'>
                <label htmlFor='pincode' className=''>Pincode :</label>
                <input
                id="pincode"
                type="text"
                value={userData.pincode}
                onChange={(e)=>setUserData((prev)=>({...prev, address:{...prev.address,pincode:e.target.value}}))}
                placeholder='Enter Pincode...'
                required
                className="h-10 w-60 text-black outline-none rounded-md  pl-4 border-2 border-slate-700"
                />

            </div>
            <div className='m-2 h-14  flex  justify-center'>
                <label htmlFor='cashOnDelivery' className=''>Cash On Delivery :</label>
                <input
                id="cashOnDelivery"
                type="checkbox"
                value={userData.cashOnDelivery}
                onChange={(e)=>setUserData((prev)=>({...prev,cashOnDelivery:true}))}
                
                required
                className="h-8 w-8 text-black outline-none rounded-md  ml-4 border-2 border-slate-700"
                />

            </div>
            

            <button type='submit' className='bg-orange-500 w-60 h-10 text-white text-lg rounded-md '>Place Order</button>
    </form>


</div>
  )
}

export default CheckoutPage