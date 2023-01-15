import React, { useEffect, useState } from "react"
import "./RentedMovie.scss";

import { useSelector } from "react-redux";
import Movie from "../components/Movie/Movie";

export default function RentedMovie({backstatus}) {
    const { peliculas } = useSelector((state)=>state.peliculas)
    console.log(peliculas)
  

   return (
      <div className="movie-list">
        <button onClick={() => backstatus(false)}>volver</button>
         <div className="container pt-5 pb-5">
            <h1 className="h1  mb-5 ">Movies</h1>

            <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
               {peliculas.length > 0 &&
                  peliculas.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </div>
         </div>
      </div>
   );
}
