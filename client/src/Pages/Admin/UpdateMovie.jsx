import React,{useState,useEffect,useContext} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios';
import myContext from '../../context/myContext';

function UpdateMovie() {
    const {id} = useParams()
    const {movies,setMovies} = useContext(myContext);
    const [title,setTitle] = useState();
    const [description,setDescription] = useState();
    const [portraitImgUrl,setPortraitImgUrl] = useState();
    const [landscapeImgUrl,setLandscapeImgUrl] = useState();
    const [rating,setRating] = useState();
    const [genre,seTGenre] = useState();
    const [duration,setDuration] = useState();

    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3005/movie/movies/'+id)
        .then(result => {
            console.log(result.data.data)
            setTitle(result.data.data.title)
            setDescription(result.data.data.description)
            setPortraitImgUrl(result.data.data.portraitImgUrl)
            setLandscapeImgUrl(result.data.data.landscapeImgUrl)
            setRating(result.data.data.rating)
            seTGenre(result.data.data.genre)
            setDuration(result.data.data.duration)
        } )
        .catch(err => console.log(err))
    },[])
    const update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3005/movie/updatemovie/${id}`, {title, description, portraitImgUrl, landscapeImgUrl, rating, genre, duration})
            .then(result => {
                console.log(result);
                // Update the state by replacing the updated movie
                setMovies(prevMovies => prevMovies.map(movie => {
                    if (movie._id === id) {
                        return {...movie, title, description, portraitImgUrl, landscapeImgUrl, rating, genre, duration};
                    } else {
                        return movie;
                    }
                }));
                navigate('/dashboard');
            })
            .catch(err => console.log(err));
    }
    
    return (

        <div className="flex h-screen justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Update Movie</h2>
        <div>
          <form className="flex flex-col" onSubmit={update}>
            <label htmlFor="title" className="mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Enter title"
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mb-4"
            />
    
            <label htmlFor="desc" className="mb-2">Description</label>
            <input
              type="text"
              name="desc"
              value={description}
              placeholder="Enter description"
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mb-4"
            />
    
            <label htmlFor="pimg" className="mb-2">Portrait Image</label>
            <input
              type="text"
              name="pimg"
              value={portraitImgUrl}
              placeholder="Enter portrait image URL"
              onChange={(e) => setPortraitImgUrl(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mb-4"
            />
    
            <label htmlFor="Landimg" className="mb-2">Landscape Image</label>
            <input
              type="text"
              name="Landimg"
              value={landscapeImgUrl}
              placeholder="Enter landscape image URL"
              onChange={(e) => setLandscapeImgUrl(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mb-4"
            />
    
            <label htmlFor="rating" className="mb-2">Rating</label>
            <input
              type="text"
              name="rating"
              value={rating}
              placeholder="Enter rating"
              onChange={(e) => setRating(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mb-4"
            />
    
            <label htmlFor="genre" className="mb-2">Genre</label>
            <input
              type="text"
              name="genre"
              value={genre}
              placeholder="Enter genre"
              onChange={(e) => seTGenre(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mb-4"
            />
    
            <label htmlFor="duration" className="mb-2">Duration</label>
            <input
              type="text"
              name="duration"
              value={duration}
              placeholder="Enter duration"
              onChange={(e) => setDuration(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mb-4"
            />
    
            <button
              type="submit"
              className="bg-[#9b1a1a] text-white px-4 py-2 rounded hover:bg-[#b04c4c] transition-colors"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
    
      )
}

export default UpdateMovie
