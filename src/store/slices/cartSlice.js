import { createSlice } from "@reduxjs/toolkit";
import { addtoCartItem } from "../actions/cart-action";



const cartSlice = createSlice({
    name:"cart",
    initialState:{
    
    cartItems:[],
    
    totalQuantity:0,
    orderStatus:[],
    total:0,
    orderData:[],
    addCartData:[],
    },
    reducers:{
      

        addCart(state, action){
            const {res,data} = action.payload;
            
            console.log( data)
                
            const existingItem = state.addCartData.find((item)=>item.id === res.name)
                
            if(!existingItem){
                state.addCartData.push({
                    id:res.name,
                    itemId:data.id,
                    title:data.title,
                    category:data.category,
                    images:data.images,
                    quantity:1,
                    price:data.price,
                    totalPrice:data.price,
                    
                })
                //state.total += +data.price;
            }else{
                
                existingItem.quantity += 1;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
                
            }

        
        state.total += Number(data.price)


        
        },

        
        getCart(state, action){
            const data = action.payload;
            state.cartItems=[];

            for(let key in data){
                    
                    state.cartItems.push({
                        id:key,
                        itemId:data[key].itemId,
                        title:data[key].title,
                        images:data[key].images,
                        quantity:data[key].quantity,
                        price:data[key].price,
                        totalPrice: data[key].price * data[key].quantity,
                    })
                    
                    state.totalQuantity = state.cartItems?.length;
                    
                state.total +=  data[key].price * data[key].quantity;
            
            } 


            state.addCartData = state.cartItems
        },


        deleteCart(state, action){
            const id = action.payload;   
            const filterData = state.cartItems?.filter((item)=>item.id !== id)
            state.cartItems = filterData;
            state.addCartData = filterData;

            
            
        },


        increaseQuantity(state,action){
            const data = action.payload;
            
            const update = state.cartItems.map((item)=> item.id === data.id ? {...item,quantity:item.quantity + 1 , totalPrice: +item.totalPrice + +item.price} : item)
            state.addCartData = update;
            state.total += Number(data.price);
        },

        decreaseQuantity(state,action){
            
            const data = action.payload;

            const removeData = state.cartItems.find((item)=> item.id === data.id)

            if(removeData && removeData.quantity > 1){
                const update = state.cartItems.map((item)=> item.id === data.id ? {...item,quantity:item.quantity - 1, totalPrice: +item.totalPrice - +item.price} : item)
                state.addCartData = update;
                state.total -= Number(removeData.price);
            }else{
                const filterData = state.cartItems.filter((item)=> item.id !== data.id)
                state.addCartData = filterData;
            }
            

        },















        getUserOrder(state, action){

            console.log(action.payload)
            state.orderData=[]
        const data = action.payload
        for(let key in data){
            
            state.orderData.push({
            id:key,
            cart:data[key].cartData,
            userData:data[key].userData,
            totalAmount:data[key].totalAmount,
            status:data[key].status,
            

            })
        }
        },
         
        updateStatusData(state,action){
            let res = action.payload
            console.log(action.payload)
            for(let key in res){
            
                
                const existingItem = state.orderStatus.find((item)=>item.id === key)
                if(!existingItem){
                
    
                state.orderStatus.push({
                    id:key,
                    status:res[key].status,
                })
                }else{
                existingItem.status = res[key].status
                
                }
                
            }
    
        
        },
    }
})


export const cartAction = cartSlice.actions;


export default cartSlice;