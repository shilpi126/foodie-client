
import React from 'react'
import { Link } from 'react-router'


const data = [
    {

    title:"Main Course",
    image:"https://th.bing.com/th/id/OIP.jYpja57yYBNPhrFxtNZdfQHaEE?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
},

{
        
    title:"Cakes",
    image:"https://th.bing.com/th/id/OIP.dRfSglXCPSi8dbC5OLjM4wHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
},
{
        
    title:"Sweets",
    image:"https://th.bing.com/th/id/OIP.iT3BgzCKu8duI1097r1OogHaE8?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
},
{
        
    title:"Icecreams",
    image:"https://th.bing.com/th/id/OIP.Z2rbbXU5A4uQHYJCzBRfoQHaF_?w=202&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
},
{
        
    title:"Fast Food",
    image:"https://th.bing.com/th/id/OIP.6kGq884LNcszPlPSz_MMEQHaEK?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"


},
{
        
    title:"Fast Food",
    image:"https://th.bing.com/th/id/OIP.6kGq884LNcszPlPSz_MMEQHaEK?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"


},
{
        
    title:"Fast Food",
    image:"https://th.bing.com/th/id/OIP.6kGq884LNcszPlPSz_MMEQHaEK?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"


},
{
        
    title:"Fast Food",
    image:"https://th.bing.com/th/id/OIP.6kGq884LNcszPlPSz_MMEQHaEK?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"


},


]

const SingleCategoryItems = () => {
  return (
    <div className='h-full p-8 flex flex-wrap justify-evenly'>
        {data.map((item,index)=>(
           <Link to={`/same-category-items/${index+1}`}>
           <div key={index+1} className='h-60 w-60 rounded-md  mb-4  shadow-lg shadow-slate-400'>
            <img src={item.image} className='h-[80%] w-[100%] rounded-md'/>
            <p className='p-2'>{item.title}</p>
           </div>
           </Link>
        ))}
    </div>
  )
}

export default SingleCategoryItems