import React,{useContext} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {} from "react-icons";
import {Link} from "react-router-dom"
import myContext from '../../context/myContext';
import { IoIosAddCircle } from "react-icons/io";

const DashboardTab = () => {
    const {users, movies,admins} = useContext(myContext)
  console.log(users)
  return (
    <div>
      <Tabs defaultIndex={0}>
        <TabList className="md:flex md:space-x-8 bg-  grid grid-cols-2 text-center gap-4   md:justify-center mb-6 ">
            <Tab>
                <button type="button" className="font-medium border-b-2 hover:shadow-[#9b1a1a] border-[#9b1a1a] text-[#9b1a1a] rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]  px-5 py-1.5 text-center bg-[#605d5d12] ">
                    <div className="flex gap-2 items-center">
                       Users
                    </div>
                </button>
            </Tab>
            <Tab>
                <button type="button" className="font-medium border-b-2 border-[#9b1a1a] bg-[#605d5d12] text-[#9b1a1a]  hover:shadow-[#9b1a1a]  rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]    px-5 py-1.5 text-center ">
                    <div className="flex gap-2 items-center">
                         Movies
                    </div>
                </button>
            </Tab>
        </TabList>
        <TabPanel>
            <div className='  px-4 md:px-0 mb-10'>
                <h1 className=' text-center mb-5 text-3xl font-semibold underline'>User Details</h1>
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
                                    <tbody className=''>
                                        <tr className="bg-gray-50 border-b  dark:border-gray-700">
                                            <td className="px-6 py-4 text-black ">
                                                {index + 1}.
                                            </td>
                                            <td className="px-6 py-4 text-black ">
                                                {name}
                                            </td>
                                            <td className="px-6 py-4 text-black ">
                                                {email}
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                    </table>
                </div>
        </TabPanel>
        <TabPanel>
            <div className='  px-4 md:px-0 mb-10'>
                <h1 className=' text-center mb-5 text-3xl font-semibold underline'>Movie Details</h1>
                <div className=" flex justify-end mr-3">
                    <Link to={'/addmovie'} className='w-24 bg-[#9b1a1a] text-white rounded-md'>Add movie <IoIosAddCircle/></Link>
                </div>
            </div>
            <div className="relative overflow-x-auto flex justify-center">
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
                                Action
                            </th>
                        </tr>
                    </thead>
                        {movies.map((movie, index) => {
                            const { title, rating } = movie;
                                return (
                                    <tbody className=''>
                                        <tr className="bg-gray-50 border-b  dark:border-gray-700">
                                            <td className="px-6 py-4 text-black ">
                                                {index + 1}.
                                            </td>
                                            <td className="px-6 py-4 text-black ">
                                                {title}
                                            </td>
                                            <td className="px-6 py-4 text-black ">
                                                {rating}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className=" flex gap-2">
                                                    <div className=" flex gap-2 cursor-pointer text-black ">
                                                        <button onClick={(e) => handleDelete(movie._id)}>Delete</button>
                                                         <Link to={`/updatemovie/${movie._id}`}>Update</Link>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                    </table>
                </div>
        </TabPanel>
        
      </Tabs>
    </div>
  )
}

export default DashboardTab
