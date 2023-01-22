import React, { useEffect, useState } from 'react'
import MovieService from '../../_services/MovieService'
import './User.scss'; 
import { useSelector } from 'react-redux';
import Movie from '../../components/Movie/Movie';



export default function User() {
  // state
  const alquiladas = useSelector((state) => state.peliculas)
  const [movies, setMovies] = useState([])
  //const [page, setPage] = useState(1);
  //const [pages, setPages] = useState(1);

  useEffect(() => {
    getAllMovies()
  }, [])

  const rented = sessionStorage.getItem("moviesRented");
  console.log(typeof(rented))
  console.log(rented)
  const rentedjson = JSON.stringify(rented)
  console.log(rentedjson)
  
  const getAllMovies = async () => {
    try {
      const res = await MovieService.getAllMovies()
      //setPages(res.data.info.pages);
      setMovies(res.data.results)
      console.log(res.data.results)
    } catch (error) {
      console.log(error.message || error)
    }
  }
 
useEffect(() => {
  //if(alquiladas.peliculas.lenght > 0){
    let newArrayPelis = []
    console.log(alquiladas.peliculas)
    console.log(movies)
    const nuevasPelis = alquiladas.peliculas.map(item => {
     movies.map(pelis=>{
     if(Number(item) === pelis.id){
       newArrayPelis.push(pelis)
     }
   })
 });
console.log(newArrayPelis)
// }
}, [movies,alquiladas])

   
  
  console.log(typeof(alquiladas.peliculas))
 
  return (
    <div className="movie-list">
      <div className="container pt-5 pb-5">
        <h1 className="h1  mb-5 ">Movies</h1>
              
        <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
      {/*  {newArrayPelis.length > 0 && 
          newArrayPelis.map(item => 
            <Movie key={item.id} movie={item}/>
          )
        }*/}
        </div>
      </div>
    </div>
  )
}


