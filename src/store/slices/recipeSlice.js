import { createSlice } from "@reduxjs/toolkit";
import { addtoCartItem } from "../actions/cart-action";



const recipeSlice = createSlice({
    name:"recipe",
    initialState:{

  
    recipeData:[],
    categoryData:[],
    singleData:{},
    
    orderStatus:[],
    total:0,
    orderData:[],
    
    },
    reducers:{

     
        
   
        
   
     



    


        geCateRecipe(state, action){
        state.recipeData=[]
        const data = action.payload
        for(let key in data){
            state.recipeData.push({
            id:key,
            category:data[key].category,
            images:data[key]?.images,
            
            })

            
        }
        },
        

        getRecipeData(state, action){
        state.categoryData=[]
        const data = action.payload.data
        const cate = action.payload.id
        console.log(data,cate)
        for(let key in data){
        if(cate === data[key].category){
            state.categoryData.push({
                id:key,
                category:data[key].category,
                images:data[key].images,
                title:data[key].title,
                price:data[key].price,
                ingredient:data[key].ingredient,
    
                })
            }
        }
        },


        getSingleData(state, action){
            
            const data = action.payload.data
            const id = action.payload.id

            console.log(data,id)
            
            for(let key in data){
            
                state.singleData = {
                    id:id,
                    category:data.category,
                    images:data.images,
                    title:data.title,
                    price:data.price,
                    ingredient:data.ingredient,
        
                    }
                
            }
            }
        
    }
})


export const recipeAction = recipeSlice.actions;


export default recipeSlice;