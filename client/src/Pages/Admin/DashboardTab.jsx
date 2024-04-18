import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { GrUpdate } from "react-icons/gr";
import { IoIosAddCircle } from "react-icons/io";
import axios from "axios";

const DashboardTab = () => {
  const { users, movies, admins, setMovies } = useContext(myContext);
  let navigate = useNavigate();
  console.log(users);
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this movie?"
    );

    if (confirmed) {
      axios
        .delete(`http://localhost:3005/movie/deletemovie/${id}`)
        .then((res) => {
          console.log(res);
          setMovies((prevMovies) =>
            prevMovies.filter((movie) => movie._id !== id)
          );
        })
        .catch((err) => console.log(err));
    }
  };

  const handleUpdate = (id) => {
    navigate(`/updatemovie/${id}`);
  };

  return (
    <div>
      <Tabs defaultIndex={0}>
        <TabList className="md:flex md:space-x-8 bg-  grid grid-cols-2 text-center gap-4   md:justify-center mb-6 ">
          <Tab>
            <button
              type="button"
              className="font-medium border-b-2 border-[#9b1a1a] bg-[#605d5d12] text-[#9b1a1a]  hover:shadow-[#9b1a1a]  rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]    px-5 py-1.5 text-center "
            >
              <div className="flex gap-2 items-center">Movies</div>
            </button>
          </Tab>
          <Tab>
            <button
              type="button"
              className="font-medium border-b-2 hover:shadow-[#9b1a1a] border-[#9b1a1a] text-[#9b1a1a] rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]  px-5 py-1.5 text-center bg-[#605d5d12] "
            >
              <div className="flex gap-2 items-center">Users</div>
            </button>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="  px-4 md:px-0 mb-10">
            <h1 className=" text-center mb-5 text-3xl font-semibold underline">
              Movie Details
            </h1>
            
          </div>
          <div className="relative overflow-x-auto flex justify-center items-center flex-col">
          <div className="w-[60%] flex justify-end mb-4 items-center">
              <Link
                to={"/addmovie"}
                className=" bg-[#9b1a1a] flex text-white font-bold rounded-md p-2"
              >
                 <IoIosAddCircle className="mr-1 items-center pt-1"  size={25}/>
                Add movie
              </Link>
            </div>
            <table className="w-[60%] text-sm text-left text-gray-500 dark:text-gray-400  ">
              <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    S.No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Rating
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Genre
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Duration
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              {movies.map((movie, index) => {
                const { title, rating,duration,genre } = movie;
                return (
                  <tbody className="">
                    <tr className="bg-gray-50 border-b  dark:border-gray-700">
                      <td className="px-6 py-4 text-black ">{index + 1}.</td>
                      <td className="px-6 py-4 text-black ">{title}</td>
                      <td className="px-6 py-4 text-black ">{rating}</td>
                      <td className="px-6 py-4 text-black ">{genre}</td>
                      <td className="px-6 py-4 text-black ">{duration}</td>
                      <td className="px-6 py-4">
                        <div className=" flex gap-2">
                          <div className=" flex gap-2 cursor-pointer text-black ">
                            <button onClick={(e) => handleDelete(movie._id)}>
                              <RiDeleteBin6Fill size={20} />
                            </button>
                            <button onClick={(e) => handleUpdate(movie._id)}>
                              <GrUpdate size={20} />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="  px-4 md:px-0 mb-10">
            <h1 className=" text-center mb-5 text-3xl font-semibold underline">
              User Details
            </h1>
          </div>
          <div className="relative overflow-x-auto flex justify-center ">
            <table className="w-[60%] text-sm text-left text-gray-500 dark:text-gray-400  ">
              <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    S.No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                </tr>
              </thead>
              {users.map((user, index) => {
                const { name, email } = user;
                return (
                  <tbody className="">
                    <tr className="bg-gray-50 border-b  dark:border-gray-700">
                      <td className="px-6 py-4 text-black ">{index + 1}.</td>
                      <td className="px-6 py-4 text-black ">{name}</td>
                      <td className="px-6 py-4 text-black ">{email}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DashboardTab;
