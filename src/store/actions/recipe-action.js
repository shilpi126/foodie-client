import axios from "axios"

import { data } from "react-router";
import { recipeAction } from "../slices/recipeSlice";
const API = "https://recipe-bee4a-default-rtdb.firebaseio.com";
const user = localStorage.getItem("uid")
//console.log(user)

export const getRecipe = () => {
    return async(dispatch) => {

        const getData = async() =>{
            const response = await axios.get(`${API}/recipe/category.json`,
                
            )
            const res = response.data;
            console.log(res)
            return res;
        }
        try{
            const data = await getData()
            dispatch(recipeAction.geCateRecipe(data))
        }catch(error){
            console.log(error.message)

        }

    }
}



export const getSingleCategoryData = (id) => {
    return async(dispatch) => {

        const getData = async() =>{
            const response = await axios.get(`${API}/recipe/recipes.json`,
                
            )
            const res = response.data;
            //console.log(res)
            return res;
        }
        try{
            const data = await getData()
            //console.log(data)
            dispatch(recipeAction.getRecipeData({id,data}))
        }catch(error){
            console.log(error.message)

        }

    }
}




export const getSingleRecipeData = (id) => {
    console.log(id)
    return async(dispatch) => {

        const getData = async() =>{
            const response = await axios.get(`${API}/recipe/recipes/${id}.json`,
                
            )
            const res = response.data;
            //console.log(res)
            return res;
        }
        try{
            const data = await getData()
            //console.log(data)
            dispatch(recipeAction.getSingleData({id,data}))
        }catch(error){
            console.log(error.message)

        }

    }
}