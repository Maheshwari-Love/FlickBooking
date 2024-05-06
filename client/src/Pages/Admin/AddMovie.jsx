import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";

function AddMovie() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [portraitImgUrl, setPortraitImgUrl] = useState();
  const [landscapeImgUrl, setLandscapeImgUrl] = useState();
  const [rating, setRating] = useState();
  const [genre, seTGenre] = useState();
  const [duration, setDuration] = useState();
  const { users, movies, admins, setMovies } = useContext(myContext);

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3005/movie/createmovie", {
        title,
        description,
        portraitImgUrl,
        landscapeImgUrl,
        rating,
        genre,
        duration,
      })
      .then((result) => {
        console.log(result);
        axios
          .get(`http://localhost:3005/movie/movies`)
          .then((result) => setMovies(result.data.data))
          .catch((err) => console.log(err));
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };
  return (

    <div className="flex h-screen justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add Movie</h2>
        <form className="flex flex-col" onSubmit={submit}>
          <label htmlFor="title" className="mb-2">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 mb-4"
            required
          />
    
          <label htmlFor="desc" className="mb-2">Description</label>
          <input
            type="text"
            name="desc"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 mb-4"
            required
          />
    
          <label htmlFor="pimg" className="mb-2">Portrait Image</label>
          <input
            type="text"
            name="pimg"
            placeholder="Enter portrait image URL"
            onChange={(e) => setPortraitImgUrl(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 mb-4"
            required
          />
    
          <label htmlFor="Landimg" className="mb-2">Landscape Image</label>
          <input
            type="text"
            name="Landimg"
            placeholder="Enter landscape image URL"
            onChange={(e) => setLandscapeImgUrl(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 mb-4"
            required
          />
    
          <label htmlFor="rating" className="mb-2">Rating</label>
          <input
            type="text"
            name="rating"
            placeholder="Enter rating"
            onChange={(e) => setRating(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 mb-4"
            required
          />
    
          <label htmlFor="genre" className="mb-2">Genre</label>
          <input
            type="text"
            name="genre"
            placeholder="Enter genre"
            onChange={(e) => seTGenre(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 mb-4"
            required
          />
    
          <label htmlFor="duration" className="mb-2">Duration</label>
          <input
            type="text"
            name="duration"
            placeholder="Enter duration"
            onChange={(e) => setDuration(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 mb-4"
            required
          />
    
          <button
            type="submit"
            className="bg-[#9b1a1a] text-white px-4 py-2 rounded hover:bg-[#b04c4c] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    
    );
}

export default AddMovie;
