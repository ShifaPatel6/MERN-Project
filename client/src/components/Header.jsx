import React from 'react';
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
   <header className='bg-purple-200 shadow-md'>
       <div className='flex justify-between max-w-6xl mx-auto items-center p-3 '>
              <Link to='/'>
       <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
              <span className='text-purple-950'>Supreme</span>
              <span className='text-purple-400'>Estate</span>
       </h1>
       </Link>
       <form className='bg-purple-100 p-3 rounded-lg flex items-center'>
              <input type="text" placeholder='Search' className='bg-transparent focus:outline-none w-24 sm:24'/>
              <FaSearch className='text-black' />
       </form>
       <ul className='flex gap-4 font-bold'>
       <Link to='Home'>
              <li className='hidden sm:inline'>Home</li>
              </Link>
              <Link to='Signin'>
              <li className='hidden sm:inline'>Sign in</li>
              </Link>
              <Link to='Signup'>   
              <li >Sign up</li>
              </Link>
       </ul>
       </div>
   </header>
  )
}
