import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router'
import { forgotPasssword} from '../store/actions/auth-action'

const ForgotPassword = () => {
    const [email, setEmail] = useState("") 
    
    const [error, setError] = useState({})
    const dispatch = useDispatch()




    const validateEmail = () => {
        if(!email.includes("@")){
            setError((prevError)=>({...prevError, email:"Invalid Email..."}))
            return false;
        }else {
            setError((prevError)=>({...prevError, email:null}))
            return true;
        }
    }

 


    const isFormValidate = () =>{
        
        const isEmailValid = validateEmail()
    
        if(isEmailValid ){
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
                
            }
            console.log( email)
            dispatch(forgotPasssword(data))

            
        }


        setEmail("")
        
    }
    

return (
    <React.Fragment>
    <div className='bg-slate-800 h-screen w-screen flex  items-center flex-col'>
    <h1 className='text-center pt-8 pb-4 text-2xl text-white'>ForgotPassword</h1>

        <form onSubmit={handleFormSubmit} className='w-[100%] p-6 rou mb-2 h-60 w-96 bg-slate-900 rounded-md'>
            
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
            
            <button type='submit' className='w-80 mt-4 h-10 text-xl bg-orange-700 text-white rounded-md'>Submit</button>
            
        </form>
        <p className='text-white'>Dont Have Account? <Link to="/register">Sign up</Link></p>
        </div>
    </React.Fragment>
    )
}

export default ForgotPassword