import React,{useContext} from 'react'
import BookMovie from './BookMovie'
import MovieLandCard from '../component/MovieLandCard'
import { useParams } from 'react-router-dom';
import myContext from '../context/myContext';
import Navbar from "../component/Navbar"

const MovieInfo = () => {
    const {id} = useParams();
    const {movies} = useContext(myContext);
    let movie = movies.filter(movie => movie._id === id);
    console.log(movie)
  return (
    <div>
      <Navbar/>
      <MovieLandCard movie={movie}/>
      <BookMovie/>
    </div>
  )
}

export default MovieInfo
