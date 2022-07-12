import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='flex justify-between p-3 bg-gray-200'>
   <h1 className='font-bold'> My Money</h1>
    <ul className='flex'>
        <li className='border-solid border-2 border-gray-400 rounded-lg px-1 '><Link to="/login">Login</Link></li>
        <li className='border-solid border-2 border-gray-400 rounded-lg px-1'><Link to="/signup">SignUp</Link></li>
    </ul>
   </nav>
  )
}

export default Navbar