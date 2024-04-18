import React, { useState, useEffect } from "react";
import myContext from "./myContext";
import axios from "axios";

const myState = (props) => {
  const [movies, setMovies] = useState([]);
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const api = "http://localhost:3005/";
  useEffect(() => {
    axios
      .get(`${api}movie/movies`)
      .then((result) => setMovies(result.data.data))
      .catch((err) => console.log(err));

    axios
      .get(`${api}admin/admins`)
      .then((result) => setAdmins(result.data.data))
      .catch((err) => console.log(err));

    axios
      .get(api + "auth/users")
      .then((result) => setUsers(result.data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(()=>{
    const storedIsUserLoggedIn = localStorage.getItem("isUserLoggedIn");
    setIsUserLoggedIn(storedIsUserLoggedIn === true);

    const storedIsAdminLoggedIn = localStorage.getItem('isAdminLoggedIn');
    setIsAdminLoggedIn(storedIsAdminLoggedIn === true);
  },[])

  return (
    <myContext.Provider
      value={{ movies, setMovies, users, setAdmins, setUsers, admins, isAdminLoggedIn, isUserLoggedIn, setIsAdminLoggedIn, setIsUserLoggedIn }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default myState;
