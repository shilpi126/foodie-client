import axios from "axios"
import { authAction } from "../slices/authSlice";
const API = "AIzaSyDDR455SSe-iN_twizywBvF_pIElCFxmS4";
const token = localStorage.getItem("token")


export const register = (data) => {
    return async(dispatch) => {

        const registerUser = async() =>{
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API}`,{
                email:data.email,
                password:data.password,
                returnSecureToken:true,
            })
            const res = response.data;
            console.log(res)

        }


        try{
            await registerUser()
        }catch(error){
            console.log(error.message)

        }



    }
}



export const login = (data) => {
    return async(dispatch) => {

        const loginUser = async() =>{
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API}`,{
                email:data.email,
                password:data.password,
                returnSecureToken:true,
            })
            //console.log(response.data)
            return response.data;
        }


        try{
            const res = await loginUser()
            console.log(res)
            dispatch(authAction.login(res))
           
            
        }catch(error){
            console.log(error.message)

        }



    }
}



export const updateProfileData = (data) => {
    return async(dispatch) => {

        const updateUserProfile = async() =>{
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API}`,{
                idToken : token,
                displayName:data.name,
                photoUrl:data.url,
                returnSecureToken:true,
                
            })
            const res = response.data;
            return res;

        }


        try{
            const data = await updateUserProfile()
            console.log(data)

        }catch(error){
            console.log(error.message)

        }



    }
}

export const userProfileData = (data) => {
    return async(dispatch) => {

        const getUserProfile = async() =>{
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API}`,{
                idToken : token,
                
                
            })
            const res = response.data;
            return res;

        }


        try{
            const data = await getUserProfile()
            console.log(data)
            localStorage.setItem("userData",JSON.stringify(data))
        }catch(error){
            console.log(error.message)

        }



    }
}



export const forgotPasssword = (data) => {
    return async(dispatch) => {

        const forgotPassswordUser = async() =>{
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API}`,{
                email:data.email,
                requestType: "PASSWORD_RESET"
            })
            
        }


        try{
            await forgotPassswordUser()
            
        }catch(error){
            console.log(error.message)

        }



    }
}