import React, { useState } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { LuSearch } from "react-icons/lu";
import authSlice, { authAction } from '../store/slices/authSlice'
import { MdLogout } from "react-icons/md";
import { Link, useNavigate } from 'react-router'
import { IoCartOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const userData =JSON.parse( localStorage.getItem("userData"))
  //const user = {...userData?.users[0]}
  const totalQuantity = useSelector((state)=>state.cart.addCartData)
  const dispatch = useDispatch()
  console.log(totalQuantity)
  const navigate = useNavigate()
  const [search, setSearch] = useState("")

    const handleClick = () => {
        dispatch(authAction.logout())
        navigate("/login")
    }


  return (
    <React.Fragment>
        <div className='h-16 sticky top-0 w-screen flex justify-between bg-slate-950 border-b-2 border-slate-700   p-2'>
          
          <Link to="/">
          <div className='text-white ml-4 '>
              <img src='https://th.bing.com/th/id/OIP.L8x8x5GgK12TUvDKGgwL3wHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7' className='w-10 h-10 rounded-full border-2 border-orange-400'/>
            </div></Link>
            <div className='flex justify-center items-center w-80 h-8 mt-2 bg-white border-2  border-slate-700 rounded-md'>
                <label htmlFor='search' className='pl-2 text-slate-700'><LuSearch  size={20}/></label>
                <input
                type='search'
                id='search'
                placeholder='Search Hare...'
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                className='w-80 h-[100%]  p-2  rounded-md'
            /></div>
            <div className='flex justify-center items-center text-white'>  
              <Link to="/cart"><div className='mr-4 flex'><IoCartOutline size={20} /> <p className='relative bottom-3 bg-red-500 w-4 h-4 text-center  text-xs pb-2 rounded-full'>{totalQuantity ? totalQuantity.length : 0}</p></div></Link>
              <Link to="/success"><div className='mr-4'><BsBoxSeam  size={20}/></div></Link>


            <button onClick={handleClick} className=' mr-4  text-sm text-white  text-center rounded-md'><MdLogout   size={20}/></button>
            {/* <Link to="/user-profile"><div className='mr-4'><img src={user.photoUrl} alt='user logo' className='w-10 h-10 rounded-full border-2 border-amber-500'/></div></Link> */}
          </div>

        </div>
    </React.Fragment>
  )
}

export default Header