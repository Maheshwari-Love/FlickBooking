import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import myContext from '../context/myContext';

const MovieCard = () => {
    const {movies} = useContext(myContext);

    return (
        <div>
            <section className="text-[#9b1a1a] body-font container px-5 py-8 md:py-16 mx-auto bg-[#ffffff]">
                <div className="flex flex-wrap -m-4">
                    {movies.length ? (
                        movies.map((item, index) => (
                            <div key={index} className="p-4 md:w-1/4 drop-shadow-lg hover:scale-110 transition-scale-110 duration-300 ease-in-out">
                                <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-2xl overflow-hidden">
                                    <div className="flex justify-center cursor-pointer">
                                        <img className="rounded-2xl w-full h-96 p-2" src={item.portraitImgUrl} alt="blog" />
                                    </div>
                                    <div className="p-5">
                                        <h1 className="title-font text-lg font-medium text-[#9b1a1a] mb-3">{item.title}</h1>
                                        <div className="flex justify-center">
                                            <Link to={'/toMovies'} className="focus:outline-none text-center text-white bg-[#9b1a1a] hover:bg-[#e46969] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2">Book</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                            <h1>NO data</h1>
                        )}
                </div>
            </section>
        </div>
    );
}

export default MovieCard;
