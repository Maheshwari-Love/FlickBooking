import React,{useContext} from 'react'
import myContext from '../../context/myContext'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const {users, movies,admins} = useContext(myContext)
  console.log(users)

  const handleDelete = (id) => {
    axios.delete('http://localhost:3005/movie/deletemovie/'+id)
    .then(res => {console.log(res)
            window.location.reload()
    })
    .catch(err => console.log(err))
}

  return (
    <div>
      <h1>Dashboard</h1>
      <h1>Users</h1>
      {users.map((user)=> {
        return(
          <div>
            <h1>{user.name}</h1><h2>{user.email}</h2>
          </div>
        )
      })}
      <h1>Movie</h1>
      {movies.map((movie)=> {
        return(
          <div>
            <h1>{movie.title}</h1><h2>{movie.rating}</h2>
            <Link to={`/updatemovie/${movie._id}`}>Update</Link>
            <button onClick={(e) => handleDelete(movie._id)}>Delete</button>
          </div>
        )
      })}
      <h1>Admmin</h1>
      {admins.map((user)=> {
        return(
          <div>
            <h1>{user.name}</h1><h2>{user.email}</h2>
          </div>
        )
      })}
      <Link to={'/addmovie'}>Add movie</Link>
    </div>
  )
}

export default Dashboard
