import React, { useState, useEffect } from "react";
import MovieService from "../../_services/MovieService";
import { environment } from "../../_environmets/environment";
import { format } from "date-fns";
import "./MovieDetail.scss";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { alquilarPeliculas } from "../../Redux/reducer/peliculasReducer";
import RentedMovie from "../../RentedMovie/RentedMovie";

export default function MovieDetail() {
   const dispatch = useDispatch();
   const alquiladas = useSelector((state)=>state.peliculas);
   const [rentStatus,setRentStatus] = useState(false)
   const [movie, setMovie] = useState({});
   const [showMoviesStatus,setShowMoviesStatus] = useState(false);
   const { id } = useParams();
   console.log(alquiladas)
   useEffect(() => {
      getSingleMovie();
   }, []);
  
   const getSingleMovie = async () => {
      try {
         const res = await MovieService.getSingleMovie(id);
         setMovie(res.data.results);
         console.log("res.data.results", res.data.results);
         
      } catch (error) {
         console.log(error.message || error);
      }
   };


   const getYear = (date) => format(Date.parse(date), "yyyy");
   
   const handleAlquilar = () => {
      console.log("estoy alquilando")
      console.log(movie)
      dispatch(alquilarPeliculas(movie))

   }
   return (
      <>
      {showMoviesStatus ? 
      <RentedMovie alquiladas = {alquiladas} backstatus = {setShowMoviesStatus}/>
      :
      <>
            {movie.id && (
               <div className="backdrop-container">
                  <div
                     className="backdrop-background"
                     style={{
                        backgroundImage: `url(${environment.IMAGES_URL}/w1280${movie.backdrop_path})`,
                     }}
                  ></div>
                  <div className="container pt-5 pb-5">
                     <div className="row">
                        <div className="col-md-4">
                           <img
                              src={
                                 movie.poster_path
                                    ? `${environment.IMAGES_URL}/w342${movie.poster_path}`
                                    : ""
                              }
                              className="img-fluid mb-4 mb-md-0"
                              alt="..."
                           />
                        </div>
                        <div className="col-md-8 text-start">
                           <h1 className="h1 fw-bold  mb-3">
                              {movie.title}{" "}
                              <span className="fw-lighter">
                                 ({getYear(movie.release_date)})
                              </span>
                           </h1>
                           <div className="mb-4">{`(${movie.original_language.toUpperCase()}) ${
                              movie.release_date
                           }`}</div>
                           <div className="mb-4 vote-average">
                              {movie.vote_average}
                           </div>
                           <h5 className="fw-bold">Overview</h5>
                           <p className="fs-5">{movie.overview}</p>
                           <button type="button" class="btn btn-primary" onClick={handleAlquilar}>{rentStatus ? "alquilada":"alquilar"}</button>
                           <button type="button" class="btn btn-primary" onClick={() => setShowMoviesStatus(true)}>"ver peliculas alquiladas"</button> 
                                               </div>
                     </div>
                  </div>
               </div>
            )}
         </>
      }
      
      
         
      </>
   );
}
