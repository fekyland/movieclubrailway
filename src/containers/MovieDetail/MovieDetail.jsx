import React, { useState, useEffect } from 'react'
import MovieService from '../../_services/MovieService'
import { environment } from '../../_environmets/environment'
import { format } from 'date-fns'
import './MovieDetail.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { alquilarPeliculas } from '../../Redux/reducer/peliculasReducer'
import UserService from '../../_services/UserService'
import RentedMovie from '../../RentedMovie/RentedMovie'
import { useNavigate } from 'react-router-dom'

// hacer una validacion para si esta logueado puede alquilar

export default function MovieDetail() {
  const dispatch = useDispatch()
  const alquiladas = useSelector((state) => state.peliculas)
  //const userState = useSelector( (state)=>state.initialState.token);
  const navigate  = useNavigate();
  const [rentStatus, setRentStatus] = useState(false)
  const [statusAlquilada, setStatusAlquilada] = useState(false)
  const [movie, setMovie] = useState({})
  const [showMoviesStatus, setShowMoviesStatus] = useState(false)
  const { id } = useParams()
  const UserId = sessionStorage.getItem("userId");
  const Rented = sessionStorage.getItem("moviesRented");
  
  console.log(UserId)
  console.log(alquiladas)

  useEffect(() => {
    getSingleMovie()
    
  }, [])
  
  const getSingleMovie = async () => {
    try {
      const res = await MovieService.getSingleMovie(id)
      setMovie(res.data.results)
      console.log('res.data.results', res.data.results)
      
    } catch (error) {
      console.log(error.message || error)
    }
  }
  const RentMovie = async (UserId,id) => {
    try {
     const res =  await UserService.rentMovie(UserId,id)
     console.log(res)
     console.log(typeof(res.movies))
     dispatch(alquilarPeliculas(res.movies))
     console.log(res.movies)  
    } catch (error) {
      console.log(error.message || error)
    }
  }
  



  console.log(statusAlquilada)

  const getYear = (date) => format(Date.parse(date), 'yyyy')

  const handleAlquilar = () => {
   RentMovie(UserId,id)
   console.log('estoy alquilando')
   console.log(movie)
   
  }

  const handleRegisterRental = async () => {            //boton para 
      navigate("/user")
  }
console.log(alquiladas)
  return (
    <>
      {showMoviesStatus ? (
        <RentedMovie alquiladas={alquiladas} backstatus={setShowMoviesStatus} />
      ) : (
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
                          : ''
                      }
                      className="img-fluid mb-4 mb-md-0"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 text-start">
                    <h1 className="h1 fw-bold  mb-3">
                      {movie.title}{' '}
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
                    <div>
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={handleAlquilar}
                      >
                        {rentStatus ? 'alquilada' : 'alquilar'}
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={() => navigate("/user")}
                      >
                        "ver peliculas alquiladas"
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}
