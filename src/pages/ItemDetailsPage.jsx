import React from 'react'
import { useParams } from 'react-router'

const ItemDetailsPage = () => {
    const {id} = useParams()
    //console.log(id)
    const item= {
        
        title:"Fast Food",
        image:"https://th.bing.com/th/id/OIP.6kGq884LNcszPlPSz_MMEQHaEK?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description:"hjgfhjgfhjgf"
    
    }
  return (

     <div className='w-[100%] h-[100%] flex justify-center mt-10'>
          <div  className='h-96 w-[60%] rounded-md flex justify-between  shadow-lg shadow-slate-400'>
        <img src={item.image} className='h-[100%] w-[50%] p-4  rounded-md'/>
        <div className='w-[50%] p-4 '>
        <p className='p-2'>{item.title}</p>
        <p className='p-2'>{item.description}</p>
        <button>Add To Cart</button>
        </div>
       </div>
     </div>
   
  )
}

export default ItemDetailsPage