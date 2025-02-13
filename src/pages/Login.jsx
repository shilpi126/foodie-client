import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { login} from '../store/actions/auth-action'

const Login = () => {
    
    const [email, setEmail] = useState("") 
    const [password,setPassword]= useState("")
    const [error, setError] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    


    const validateEmail = () => {
        if(!email.includes("@")){
            setError((prevError)=>({...prevError, email:"Invalid Email..."}))
            return false;
        }else {
            setError((prevError)=>({...prevError, email:null}))
            return true;
        }
    }

    const validatePassword = () => {
        if(password.trim().length <= 6){
            setError((prevError)=>({...prevError, password:"Password must be longer than 6 charecter..."}))
            return false;
        }else {
            setError((prevError)=>({...prevError, password:null}))
            return true;
        }
    }


    const isFormValidate = () =>{
        
        const isEmailValid = validateEmail()
        const isPasswordValid = validatePassword()
        
        if(isEmailValid && isPasswordValid){
            return true;
        }else{
            return false;
        }

    }


    const handleFormSubmit = (e) =>{
        e.preventDefault();
        if(isFormValidate()){

            const data = {
                
                email,
                password
            }
            console.log( email,password)
            dispatch(login(data))
            
            
        }
        setEmail("")
        setPassword("")
    }
    

return (
    <React.Fragment>
    <div className='bg-slate-800 h-screen w-screen flex  items-center flex-col'>
    <h1 className='text-center pt-8 pb-4 text-2xl text-white'>Login</h1>

        <form onSubmit={handleFormSubmit} className=' p-6 rou mb-2 h-80 w-96 bg-slate-900 rounded-md'>
            
            <div className='mb-4 h-16'>
                <label htmlFor='email' className='text-white'>Email</label>
                <input
                id="email"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Enter Email...'
                className="h-10 w-80 outline-none rounded-md  pl-4"
                />
                {error && <p className='text-sm text-red-500'>{error.email}</p>}
            </div>
            <div className='mb-4 h-16'>
                <label htmlFor='password' className='text-white'>Password</label>
                <input
                id="password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='Enter Password...'
                className="h-10 w-80 outline-none rounded-md  pl-4"
                />
                {error && <p className='text-sm text-red-500'>{error.password}</p>}
            </div>
            <p className='text-white text-center'><Link to="/forgot-password">Forgot Password</Link></p>
            <button type='submit' className='w-80 mt-4 h-10 text-xl bg-orange-700 text-white rounded-md'>Submit</button>
            
        </form>
        <p className='text-white'>Dont Have Account? <Link to="/register">Sign up</Link></p>
        </div>
    </React.Fragment>
  )
}

export default Login