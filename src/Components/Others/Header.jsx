import React, { useState } from 'react'

const Header = ({data}) => {
  // const [username,setUsername]  = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }
  // else{
  //   setUsername(data.firstName)
  // }

  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }

  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-2xl font-bold'>username😃</span></h1>
        <button onClick={logoutUser} className='bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log out</button>
    </div>
  )
}

export default Header