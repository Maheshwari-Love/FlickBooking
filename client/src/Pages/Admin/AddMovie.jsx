import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function AddMovie() {
    
    const [title,setTitle] = useState();
    const [description,setDescription] = useState();
    const [portraitImgUrl,setPortraitImgUrl] = useState();
    const [landscapeImgUrl,setLandscapeImgUrl] = useState();
    const [rating,setRating] = useState();
    const [genre,seTGenre] = useState();
    const [duration,setDuration] = useState();

    const navigate = useNavigate()

    const submit=(e) => {
        e.preventDefault();
        axios.post("http://localhost:3005/movie/createmovie",{title,description,portraitImgUrl,landscapeImgUrl,rating,genre,duration})
        .then(result => {
            console.log(result)
            navigate('/dashboard')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='flex h-[100vh] justify-center items-center'>
        <div >
            <h2>Add Movie</h2>
            <div>
                <form className='flex flex-col' onSubmit={submit}>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' placeholder='Enter titlle' onChange={(e) => setTitle(e.target.value) } className='mt-1  text-black border'></input>
                    
                    <label htmlFor='desc'>DEsc</label>
                    <input type='text' name='desc' placeholder='Enter desc' onChange={(e) => setDescription(e.target.value)} className='  text-black border'></input>
                    
                    <label htmlFor='pimg'>Pimg</label>
                    <input type='text' name='pimg' placeholder='Enter desc' onChange={(e) => setPortraitImgUrl(e.target.value)} className='  text-black border'></input>
                    
                    <label htmlFor='Landimg'>Landimg</label>
                    <input type='text' name='Landimg' placeholder='Enter desc' onChange={(e) => setLandscapeImgUrl(e.target.value)} className='  text-black border'></input>
                    
                    <label htmlFor='rating'>rating</label>
                    <input type='text' name='rating' placeholder='Enter rating' onChange={(e) => setRating(e.target.value)} className='  text-black border'></input>
                    
                    <label htmlFor='genre'>genre</label>
                    <input type='text' name='genre' placeholder='Enter genre' onChange={(e) => seTGenre(e.target.value)} className='  text-black border'></input>
                    
                    <label htmlFor='duration'>duration</label>
                    <input type='text' name='duration' placeholder='Enter duration' onChange={(e) => setDuration(e.target.value)} className='  text-black border'></input>
                    
                    <button >Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddMovie
