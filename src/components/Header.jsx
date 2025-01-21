import React, { useState } from 'react'

const Header = () => {
    const [search, setSearch] = useState("")
  return (
    <React.Fragment>
        <div className='h-14 w-screen flex justify-between bg-slate-900  p-2'>
            <div className='text-white ml-4'>Logo</div>
            <div>
                <label htmlFor='search' className='text-white'>Search </label>
                <input
                type='search'
                id='search'
                placeholder='Search Hare...'
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                className='w-80 h-8 rounded-md p-2'
            /></div>
            <div className='flex text-white'>  <div className='mr-4'>cart icon</div>
            <div className='mr-4'><img src='https://th.bing.com/th/id/OIP.74A_PLItjcwCYrItb_P58AHaFR?w=228&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='user logo' width={50} height={50}/></div>
</div>
        </div>
    </React.Fragment>
  )
}

export default Header