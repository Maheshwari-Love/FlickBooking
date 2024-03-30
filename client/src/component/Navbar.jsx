import React from 'react'
import {BiUserCircle, BiSearch} from "react-icons/bi"
import {RiArrowDropDownFill} from "react-icons/ri"
import { Link } from "react-router-dom"


const Navbar = () => {
 let user = JSON.parse(localStorage.getItem('user'))
  const logout = () => {
    
  }
  let admin = "admin@gmail.com";
  return (
    <nav className='flex justify-between p-3 items-center text-white bg-[#13113c]'>
        <div className='left flex items-center'>
            <h2 className='h-8 mr-3'>logo</h2>
        </div>
          {user.email === 'admin@gmail.com' ? <div className='flex justify-center items-center gap-10'>
            <Link to={'/'}>Home</Link>
            <Link to={'/dashboard'}>Dashboard</Link>
            <Link onClick={() => logout()}>Logout</Link>
            <Link to={'/'}><BiUserCircle/></Link> 
          </div> :
           <div className='flex justify-center items-center  gap-10'>
            <Link to={'/'}>Home</Link>
            <Link to={'/bookmovie'}>Booked Movies</Link>
            <Link onClick={() => logout()}>Logout</Link>
            <Link to={'/'}><BiUserCircle/></Link>
            </div>
          }
    </nav>
  )
}

export default Navbar
