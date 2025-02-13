import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateProfileData, userProfileData } from '../store/actions/auth-action'

const UserProfilePage = () => {
    const userData =JSON.parse( localStorage.getItem("userData"))
    const user = {...userData.users[0]}
    const [name,setName]=useState("")
    const [url,setUrl] =useState("")
    //console.log(user)
    const [active,setActive] = useState(false)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(userProfileData())
    },[])


    const handleFormSubmit =(e)=>{
        e.preventDefault()
        console.log(name,url)
        const data={name,url}

        dispatch(updateProfileData(data))
    
    }
    
return (
    <div className='flex justify-center items-center flex-col m-8'>
        <h1 className='mb-2'>User Profile </h1>
        <div >
          {active &&   <form onSubmit={handleFormSubmit} className='mt-4 flex flex-col justify-center w-96 h-64  shadow-md shadow-slate-500 rounded-md p-4'>
                <label htmlFor='name'>Name</label>
                <input
                type="text"
                id="name"
                placeholder='Enter Name...'
                value={name}
                onChange={(e)=>(setName(e.target.value))}
                className='h-8 p-2 rounded-md w-[100%] mb-4 text-black'
                />
                <label htmlFor='url'>Photo </label>
                <input
                type="url"
                id="url"
                placeholder='Enter Url...'
                value={url}
                onChange={(e)=>(setUrl(e.target.value))}
                className='h-8 p-2 rounded-md w-[100%] mb-4 text-black'
                />
            <div >
            <button type='submit'     className='bg-amber-600 rounded-md text-white  h-10 w-40 mr-6'>Submit</button>
                <button onClick={(e)=>setActive(false)} className='h-10 rounded-md w-40 bg-slate-800 text-white'>Cancle</button>

            </div>
            </form>}

        {!active &&     <button onClick={(e)=>setActive(true)} className='h-10 w-60 bg-slate-800 text-white'>Update Profile</button>
    }
        </div>
        <div className='w-96 h-32 mt-8 flex justify-between shadow-md shadow-slate-600 p-4'>
        
            <img src={user.photoUrl} className='w-24 h-24 rounded-full border-2 border-amber-500'/>
            
         <div className='pt-4 '>
         <p>Name : {user.displayName}</p>
          <p >Email : {user.email}</p>
         </div>

        </div>
    </div>
  )
}

export default UserProfilePage