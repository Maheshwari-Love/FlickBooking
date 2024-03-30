import React, { useState,useEffect } from 'react'
import myContext from "./myContext";
import axios from 'axios';

const myState = (props) => {
  const [movies,setMovies] = useState([]);
  const [users,setUsers] = useState([]);
  const [admins,setAdmins] = useState([]);
  const api = "http://localhost:3005/"
  useEffect(()=>{
    axios.get(`${api}movie/movies`)
  .then(result => setMovies(result.data.data))
  .catch(err => console.log(err))

  axios.get(`${api}admin/admins`)
  .then(result => setAdmins(result.data.data))
  .catch(err => console.log(err))

  axios.get(api+'auth/users')
  .then(result => setUsers(result.data.data))
  .catch(err => console.log(err))
  },[])

  return (
    <myContext.Provider value={{movies,setMovies, users,setAdmins,setUsers,admins}}>{props.children}</myContext.Provider>
  )
}

export default myState
