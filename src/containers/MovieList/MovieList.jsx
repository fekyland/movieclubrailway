import React, { useEffect, useState } from 'react'
import MovieService from '../../_services/MovieService'
import './MovieList.scss'
import Movie from '../../components/Movie/Movie'


export default function MovieList() {
  // state
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getAllMovies()
  }, [])

  // functions definition
  const getAllMovies = async () => {
    try {
      const res = await MovieService.getAllMovies()
      setMovies(res.data.results)
      console.log(res.data.results)
    } catch (error) {
      console.log(error.message || error)
    }
  }

  return (
    <div className="movie-list">
      <div className="container pt-5 pb-5">
        <h1 className="h1  mb-5 "></h1>

        <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
          {movies.length > 0 &&
            movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  )
}
