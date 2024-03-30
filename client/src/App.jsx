import {Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import AddMovie from './Pages/Admin/AddMovie';
import UpdateMovie from "./Pages/Admin/UpdateMovie";
import MyState from "./context/myState";
import BookMovie from "./Pages/BookMovie";
import Dashboard from "./Pages/Admin/Dashboard";
import UserAuthForm from "./Pages/UserAuthFrom";
function App() {
  return (
  <MyState>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="login" element={<UserAuthForm type="login" />} />
      <Route path="register" element={<UserAuthForm type="register" />} />
      <Route path="/dashboard" element={<Dashboard/>}/> 
      <Route path="/addmovie" element={<AddMovie/>}/> 
      <Route path="/updatemovie/:id" element={<UpdateMovie/>}/> 
      <Route path="/bookmovie" element={<BookMovie/>}/> 
    </Routes>
  </MyState>
  )
}

export default App

