import React, { useEffect, useState } from 'react'
import MovieService from '../../_services/MovieService'
import './User.scss'
import { useSelector } from 'react-redux'
import Movie from '../../components/Movie/Movie'

export default function User() {
  // state
  const alquiladas = useSelector((state) => state.peliculas) //aloja el redux el state de peliculas
  console.log(alquiladas)
  const [movies, setMovies] = useState([])
  const [pelisAlq, setPelisAlq] = useState([])

  useEffect(() => {
    getAllMovies()
  }, [])

  const getAllMovies = async () => {
    try {
      const res = await MovieService.getAllMovies()
      setMovies(res.data.results)
    } catch (error) {
      console.log(error.message || error)
    }
  }

  useEffect(() => {
    //if(alquiladas.peliculas.lenght > 0){
    let newArrayPelis = []
    const nuevasPelis = alquiladas.peliculas.map((item) => {
      movies.map((pelis) => {
        if (Number(item) === pelis.id) {
          newArrayPelis.push(pelis)
          setPelisAlq(newArrayPelis)
        }
      })
    })
    console.log(newArrayPelis)
    // }
  }, [movies, alquiladas])
  console.log(pelisAlq)

  console.log(typeof alquiladas.peliculas)

  return (
    <div className="movie-list">
      <div className="container pt-5 pb-5">
        <h1 className="h1  mb-5 ">User panel</h1>
        <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
          {pelisAlq.length > 0 &&
            pelisAlq.map((item, index) => (
              <Movie key={`${item.id}${index}`} movie={item} />
            ))}
        </div>
      </div>
    </div>
  )
}
