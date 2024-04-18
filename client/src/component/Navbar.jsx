import React,{useContext, useEffect}from 'react'
import {BiUserCircle, BiSearch} from "react-icons/bi"
import {RiArrowDropDownFill} from "react-icons/ri"
import { Link } from "react-router-dom"
import { BiSolidCameraMovie } from "react-icons/bi";
import myContext from '../context/myContext';
import axios from 'axios';


const Navbar = () => {
  let { setIsUserLoggedIn, setIsAdminLoggedIn} = useContext(myContext);
  let user = JSON.parse(localStorage.getItem('user'));
  let isUserLoggedIn = localStorage.getItem('isUserLoggedIn')
  let isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn');
  let notAuth = isAdminLoggedIn == null ||  isUserLoggedIn == null;
  
  const logout = async () => {
      // Implement logout functionality here
      if(isAdminLoggedIn){
        let res = await axios.get('http://localhost:3005/admin/logout');
        console.log(res);
        localStorage.removeItem('isAdminLoggedIn');
        localStorage.removeItem('admin');
        setIsAdminLoggedIn(false);
      }else{
        let res = await axios.get('http://localhost:3005/auth/logout');
        console.log(res);
        localStorage.removeItem('isUserLoggedIn');
        localStorage.removeItem('user');
        setIsUserLoggedIn(false);
      }
  }
  console.log(user);
  console.log("  isUserLoggedIn: "+isUserLoggedIn+"    isAdminLoggedIn: "+isAdminLoggedIn);
  
  return (
    <nav className='flex justify-between p-3 items-center text-white font-bold bg-[#9b1a1a]'>
      <div className='left flex items-center'>
        <BiSolidCameraMovie size={30} />
      </div>
      {!isAdminLoggedIn && !isUserLoggedIn ? (
        <div className='flex justify-center items-center gap-10'>
          <Link to={'/'}>Home</Link>
          <Link to={'/bookmovie'}>Booked Movies</Link>
          <Link to={'/login'}>Login</Link>
          <Link to={'/'}>
            <BiUserCircle size={30} />
          </Link>
        </div>
      ) : (
        <div className='flex justify-center items-center gap-10'>
          <Link to={'/'}>Home</Link>
          {isAdminLoggedIn ? (
            <Link to={'/dashboard'}>Dashboard</Link>
          ) : (
            <Link to={'/bookmovie'}>Booked Movies</Link>
          )}
          <Link onClick={logout}>Logout</Link>
          <Link to={'/'}>
            <BiUserCircle size={30} />
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
