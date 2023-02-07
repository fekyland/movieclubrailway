import "./App.scss";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

// components
import { Header } from "./components/Header/Header";

// containers
import MovieList from "./containers/MovieList/MovieList";
import MovieDetail from "./containers/MovieDetail/MovieDetail";
import Login from "./containers/Login/Login";
import Admin from "./containers/Admin/Admin";
import Register from "./containers/Register/Register";
import User from "./components/User/User";
import RentedMovie from "./RentedMovie/RentedMovie";
import AdminPanel from "./AdminPanel/AdminPanel";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<Navigate to="/movies" />} />
               <Route path="/movies" element={<MovieList />} />
               <Route path="/rented_movies" element={<RentedMovie />} />
               <Route path="/movies/id/:id" element={<MovieDetail />} />
               <Route path="/adminpanel" element={<AdminPanel />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
               <Route path="/admin" element={<Admin />} />
               <Route path="/user"  element={<User />} />
 
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
