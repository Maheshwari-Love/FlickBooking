import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Toaster, toast } from "react-hot-toast";
import InputBox from "../component/InputBox";
import axios from "axios";
import myContext from "../context/myContext";
const UserAuthForm = ({ type }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const {
    admins,
    setIsUserLoggedIn,
    setIsAdminLoggedIn,
    isUserLoggedIn,
    isAdminLoggedIn,
  } = useContext(myContext);
  console.log(admins);
  let flag = 0;

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(type);

  useEffect(() => {
    setFormData({ email: "", password: "", confirmPassword: "" });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    let serverRoute = type === "login" ? "login" : "register";
    const { name, email, password } = formData;
    localStorage.setItem("user", JSON.stringify({ email, password }));
    for (let index = 0; index < admins.length; index++) {
      if (email === admins[index].email) {
        flag = 1;
      }
    }
    if (!email.length) {
      return toast.error("Email is required");
    }
    if (!emailRegex.test(email)) {
      return toast.error("Email is not valid");
    }
    if (!password.length) {
      return toast.error("Password is required");
    }
    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password must be between 6 to 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter"
      );
    }
    if (type === "register") {
      if (!formData.name.length) {
        return toast.error("Name is required");
      }

      if (!formData.confirmPassword.length) {
        return toast.error("Confirm Password is required");
      }
      if (formData.confirmPassword !== formData.password) {
        return toast.error("Password and Confirm Password must be same");
      }
    }
    if (password.length && email.length) {
      // userAuth(serverRoute, formData);

      if (type === "login") {
        if (flag) {
          axios
            .post("http://localhost:3005/admin/login", { email, password })
            .then((result) => {
              console.log(result);
              let adminToken = result.data.data.adminAuthToken;
              localStorage.setItem(
                  "admin",
                  JSON.stringify({ email, password, adminToken })
              );
              localStorage.setItem("isAdminLoggedIn", true);
              setIsAdminLoggedIn(true); // Update state immediately after setting localStorage
          })
          .catch((err) => console.log(err));          
        } else {
          axios
            .post("http://localhost:3005/auth/login", { email, password })
            .then((result) => {
              console.log(result.data.data);
              let authToken = result.data.data.authToken;
              let refreshToken = result.data.data.refreshToken;
              localStorage.setItem(
                  "user",
                  JSON.stringify({ email, password, authToken, refreshToken })
              );
              localStorage.setItem("isUserLoggedIn", true);
              setIsUserLoggedIn(true); // Update state immediately after setting localStorage
          })
          .catch((err) => console.log(err));
        }
        toast.success("Logged in successfully");
        navigate("/");
        setFormData({ email: "", password: "" });
        localStorage.setItem("user", JSON.stringify(formData));
      } else {
        if (flag) {
          axios
            .post("http://localhost:3005/admin/register", {
              name,
              email,
              password,
            })
            .then((result) => console.log(result))
            .catch((err) => console.log(err));
        } else {
          axios
            .post("http://localhost:3005/auth/register", {
              name,
              email,
              password,
            })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => console.log(err));
        }
        toast.success("Registered successfully");
        navigate("/login");
      }
    }
  };

  return (
    <div className="h-[calc(100vh)] w-full flex justify-center items-center bg-[#9b1a1a]">
      <div className="flex w-1/2 h-full justify-center items-center">
        <Toaster />
        <form className="w-full">
          <h1 className="text-3xl text-center font-bold">
            {type === "login" ? "LOGIN" : "REGISTER"}
          </h1>
          <div className="w-full h-full flex items-center flex-col rounded-lg">
            <div className="inputs flex flex-col gap-3 my-3">
              {type === "register" && (
                <InputBox
                  placeholder="Name"
                  value={formData.name}
                  name="name"
                  type="text"
                  handleChange={handleChange}
                />
              )}

              <InputBox
                placeholder="Email"
                name="email"
                value={formData.email}
                type="email"
                handleChange={handleChange}
              />

              <InputBox
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                handleChange={handleChange}
              />
              {type === "register" && (
                <InputBox
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  handleChange={handleChange}
                />
              )}
            </div>

            <div className="bottom mb-2">
              <Link
                className="text-[#3d1414] text-xs hover:underline underline-offset-2 rounded-lg ml-2"
                to={type === "login" ? "/register" : "/login"}
              >
                {type === "login" ? "Don't have account Register" : " already have account Login"}
              </Link>
            </div>

            <button
              className="bg-[#040101] text-white font-bold text-center rounded-lg w-48 md:w-60 h-10 pl-3"
              onClick={handleSubmit}
            >
              {type === "login" ? "Login" : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserAuthForm;
