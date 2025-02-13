
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router'
import { getSingleCategoryData } from '../store/actions/recipe-action'


const SingleCategoryItems = () => {
    const {id} = useParams()
    //console.log(id)
    const dispatch = useDispatch()

const dataa = useSelector((state)=>state.recipe.categoryData)

    //console.log(dataa)
    useEffect(()=>{
    dispatch(getSingleCategoryData(id))
    },[])


return (
    <div className='h-screen p-8 flex flex-wrap justify-evenly bg-slate-950 text-white'>
        {dataa.map((item,index)=>(
        <Link to={`/same-category-items/${item.id}`}>
        <div  className='h-60 w-60 p-4 rounded-md  mb-8  shadow-md shadow-slate-600'>
            <img src={item.images} className='h-40 w-60  rounded-md'/>
            <p className='text-xl mt-2'>{item.title}</p>
            </div>
            </Link>
        ))}
    </div>
  )
}

export default SingleCategoryItems