import React, { useContext } from "react";
import myContext from "../../context/myContext";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../component/Navbar";
import { FaUserTie } from "react-icons/fa";
import DashboardTab from "./DashboardTab";

const Dashboard = () => {
  const { users, movies, admins } = useContext(myContext);
  console.log(users);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3005/movie/deletemovie/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  let count = users.length || 0;
  let mcount = movies.length || 0;

  return (
    <div>
      <Navbar />
      <div className="container px-5 mx-auto mb-10 mt-4">
        <div className="flex flex-wrap -m-4 text-center justify-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className=" border-2 hover:shadow-[#9b1a1a] shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl">
              <div
                className="text-[#9b1a1a] w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <FaUserTie size={50} />
              </div>
              <h2 className="title-font font-medium text-3xl text-black fonts1">
                {mcount}
              </h2>
              <p className=" text-[#9b1a1a]  font-bold">Total Movies</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className=" border-2 hover:shadow-[#9b1a1a] shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl">
              <div
                className="text-[#9b1a1a] w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <FaUserTie size={50} />
              </div>
              <h2 className="title-font font-medium text-3xl text-black fonts1">
                {count}
              </h2>
              <p className=" text-[#9b1a1a]  font-bold">Total Users</p>
            </div>
          </div>
        </div>
      </div>
      <DashboardTab />
    </div>
  );
};

export default Dashboard;
