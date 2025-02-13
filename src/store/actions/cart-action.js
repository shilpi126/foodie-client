import axios from "axios"
import { cartAction } from "../slices/cartSlice";
import { data } from "react-router";
const API = "https://recipe-bee4a-default-rtdb.firebaseio.com";
const user = localStorage.getItem("uid")
//console.log(user)





export const addtoCartItem = (data) => {
    const id = data.id;
    return async(dispatch) => {
        const addToCartData = async() =>{
            const response = await axios.post(`${API}/recipe/cart/${user}.json`,
                {
                    itemId:data.id,
                    title:data.title,
                    category:data.category,
                    quantity:1,
                    images:data.images,
                    ingredient:data.ingredient,
                    price:data.price,
                    //totalPrice : data.price,

                }
            )
            const res = response.data;
            console.log(res)
            return res;
        }
        try{
            const res = await addToCartData()
            console.log("0000000",res)
            dispatch(cartAction.addCart({res,data}))
            
            

        }catch(error){
            console.log(error.message)
}

    }
}



export const increaseCartQuantity = (data) => {
    const id = data.id;
    console.log(id)

    console.log("",data)
    return async(dispatch) => {

        const cartData = async() =>{
            const response = await axios.put(`${API}/recipe/cart/${user}/${id}.json`,
            {
                ...data,
                quantity:data.quantity + 1,
            }
            
            )
            const res = response.data;
            console.log(res)
            return res;
        }
        try{
            const result = await cartData()
            console.log("--->",result)
            dispatch(cartAction.increaseQuantity(data))
        

        }catch(error){
            console.log(error.message)
    }

}
}


export const decreaseCartQuantity = (data) => {
    const id = data.id;
    console.log(id)

    console.log("",data)
    return async(dispatch) => {

        const cartData = async() =>{
            const response = await axios.put(`${API}/recipe/cart/${user}/${id}.json`,
            {
                ...data,
                quantity:data.quantity - 1,
            }
            
            )
            const res = response.data;
            console.log(res)
            return res;
        }
        try{
            const result = await cartData()
            console.log("--->",result)
            dispatch(cartAction.decreaseQuantity(data))
        

        }catch(error){
            console.log(error.message)
    }

}
}


export const deleteCartData = (id) => {
    //console.log("====",id)
    return async(dispatch) => {

        const deleteData = async() =>{
            const response = await axios.delete(`${API}/recipe/cart/${user}/${id}.json`
            
            
            )
            const res = response.data;
            console.log(res)
            return res;
        }
        try{
            const result = await deleteData()
            console.log(result)
            dispatch(cartAction.deleteCart(id))
        

        }catch(error){
            console.log(error.message)
    }

}
}



export const getCartData = () => {
    
    return async(dispatch) => {

        const cartData = async() =>{
            const response = await axios.get(`${API}/recipe/cart/${user}.json`)
            const res = response.data;
            console.log(res)
            return res;
        }
        try{
            const data = await cartData()
            console.log("--->",data)
            dispatch(cartAction.getCart(data))
        

        }catch(error){
            console.log(error.message)
    }

    }
}

export const placeOrderData = (data) => {
console.log(data)
    return async(dispatch) => {
        const placeOrder = async() =>{
            const response = await axios.post(`${API}/recipe/order/${user}.json`,
            {...data}
            )
            const res = response.data;
            //console.log(res)
            return res;
        }
        try{
            const data = await placeOrder()
            console.log(data)
            
        }catch(error){
            console.log(error.message)
}

    }
}











export const getOrderData = () => {
    return async(dispatch) => {

        const getOrder = async() =>{
            const response = await axios.get(`${API}/recipe/order/${user}.json`
                
            )
            const res = response.data;
            console.log(res)
            return res;
        }
        try{
            const data = await getOrder()
            console.log(data)
            dispatch(cartAction.getUserOrder(data))
        }catch(error){
            console.log(error.message)

        }

    }
}




export const emptyCartData = () => {

    return async(dispatch) => {
        const emptyCart = async() =>{
            const response = await axios.delete(`${API}/recipe/cart/${user}.json`)
            const res = response.data;
            //console.log(res)
            return res;
        }
        try{
            const data = await emptyCart()
            console.log(data)
            
            

        }catch(error){
            console.log(error.message)
}

    }
}










