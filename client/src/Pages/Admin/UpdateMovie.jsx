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
                // Navigate back to the dashboard
                navigate('/dashboard');
            })
            .catch(err => console.log(err));
    }
    
  return (
    <div className='flex h-[100vh]  justify-center items-center'>
     <div >
            <h2>Update Movie</h2>
            <div>
            <form className='flex flex-col' onSubmit={update}>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' value={title} placeholder='Enter titlle' onChange={(e) => setTitle(e.target.value) } className='mt-1  text-black border'></input>
                    
                    <label htmlFor='desc'>DEsc</label>
                    <input type='text' name='desc' value={description} placeholder='Enter desc' onChange={(e) => setDescription(e.target.value)} className='  text-black border'></input>
                    
                    <label htmlFor='pimg'>Pimg</label>
                    <input type='text' name='pimg' value={portraitImgUrl} placeholder='Enter desc' onChange={(e) => setPortraitImgUrl(e.target.value)} className='  text-black border'></input>
                    
                    <label htmlFor='Landimg'>Landimg</label>
                    <input type='text' name='Landimg' value={landscapeImgUrl} placeholder='Enter desc' onChange={(e) => setLandscapeImgUrl(e.target.value)} className='  text-black border'></input>
                    
                    <label htmlFor='rating'>rating</label>
                    <input type='text' name='rating' placeholder='Enter rating' value={rating} onChange={(e) => setRating(e.target.value)} className='  text-black border'></input>
                    
                    <label htmlFor='genre'>genre</label>
                    <input type='text' name='genre' placeholder='Enter genre' value={genre} onChange={(e) => seTGenre(e.target.value)} className='  text-black border'></input>
                    
                    <label htmlFor='duration'>duration</label>
                    <input type='text' name='duration' placeholder='Enter duration' value={duration} onChange={(e) => setDuration(e.target.value)} className='  text-black border'></input>
                    <button>Update</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UpdateMovie
