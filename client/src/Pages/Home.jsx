import React,{useState, useEffect} from 'react'
import Navbar from '../component/Navbar'
import HomeSlider from '../component/HomeSlider'
import Layout from '../component/Layout'
import MovieCard from '../component/MovieCard'


const Home = () => {
  return (
    <div className='bg-[#FFF4EF]'>
    <Layout>
      <HomeSlider/>
      <MovieCard />
    </Layout>
    </div>
  )
}

export default Home
