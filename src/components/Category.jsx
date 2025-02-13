import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { getRecipe } from '../store/actions/recipe-action'




const Category = () => {
    const data = useSelector((state) => state.recipe.recipeData)
    
const dispatch = useDispatch()
    
useEffect(()=>{
    dispatch(getRecipe())
},[])









  return (
    <div className='h-full p-8 flex flex-wrap justify-evenly'>
        {data.map((item,index)=>(
            <Link to={`/${item.category}`} key={item.id}>
            <div className='h-60 w-60 rounded-md p-4 mb-8  shadow-md shadow-slate-500'>
            <img src={item.images} className='h-40 w-[100%] rounded-md'/>
          

            <p className='p-2 text-white text-lg'>{item.category}</p>
            </div>
            </Link>
        ))}

    </div>
  )
}

export default Category





