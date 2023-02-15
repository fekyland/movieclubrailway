import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import logo from '../../assets/cinema.svg'
import TokenStorageService from '../../_services/TokenStorageService'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { logout } from '../../Redux/reducer/User.js'
import { limpiarPeliculas } from '../../Redux/reducer/peliculasReducer.js'

export default function Navbar() {
  const { username, status, type } = useSelector((state) => state.authReducer) //trae info de auth reducer
  const dispatch = useDispatch()
  console.log(type)
  let activeClassName = 'activeNav'
  const navigate = useNavigate()

  const setNavLinkClassName = ({ isActive }) => {
    const className = 'active-link'

    return className
  }
  const handleLogout = () => {
    TokenStorageService.logOut()
    dispatch(logout())
    dispatch(limpiarPeliculas())
    navigate('/movies')
  }
  useEffect(() => {}, [status])

  console.log(status)
  return (
    <div className="container-fluid bg-dark ">
      <nav className="navbar navbar-expand-lg  ">
        <a className="navbar-brand" href="/movies">
          <img
            src={logo}
            alt=""
            width="70"
            height="70"
            className="d-inline-block align-text-top"
          />
        </a>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <NavLink to="/movies" className={setNavLinkClassName} end>
              <h1>MovieClub</h1>
            </NavLink>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <NavLink to="/movies" className={setNavLinkClassName}>
                    <h1>Popular Movies</h1>
                  </NavLink>
                </a>
              </li>
              {!status ? ( <li className="nav-item">
                  <a className="nav-link" href="#">
                    {' '}
                    <NavLink to="/login" className={setNavLinkClassName}>
                      <h1>Login</h1>
                    </NavLink>
                  </a>
                </li>
               
              ) : (
                <li className="nav-item">
                <a className="nav-link" href="#">
                  {' '}
                  <NavLink
                    to="/login"
                    className={setNavLinkClassName}
                    onClick={() => handleLogout()}
                  >
                    <h1>Logout</h1>
                  </NavLink>
                </a>
              </li>

               
              )}
              {!status ? (
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink to="/Register" className={setNavLinkClassName}>
                    <h1>Register</h1>
                  </NavLink>
                </a>
              </li>):("")}
              <ul className="navbar-nav navbar-right  me-auto mb-2 mb-lg-0">
                {type === 'User Logged as SUPER_ADMIN' ? ( <li className="nav-item">
                    <a className="nav-link" href="#">
                      <NavLink to="/admin" className={setNavLinkClassName}>
                        <h1>Admin panel</h1>
                      </NavLink>
                    </a>
                  </li>
                  
                ) : (""
                 
                )}
              </ul>
              <ul className="navbar-nav navbar-right  me-auto mb-2 mb-lg-0">
                {type === 'User Logged as USER' ? ( <li className="nav-item">
                    <a className="nav-link" href="#">
                      <NavLink to="/user" className={setNavLinkClassName}>
                        <h1>User Panel</h1>
                      </NavLink>
                    </a>
                  </li>
                  
                ) : (""
                 
                )}
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

{
  /*<div>
<nav className="navbar navbar-expand-lg navbar-primary bg-primary fs-6 text-white">
  <div className="container">
    <a className="navbar-brand" href="/movies">
      <img
        src={logo}
        alt=""
        width="40"
        height="40"
        className="d-inline-block align-text-top"
      />
    </a>
    <NavLink  to="/movies" className={setNavLinkClassName}  end>
    PochocloFilms
    </NavLink> 
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
        <li className="nav-item ">
          <NavLink to="/about" className={setNavLinkClassName}></NavLink>
        </li>
      </ul>
      <form className="d-flex">
       
      </form>
      <ul className="navbar-nav navbar-right  me-auto mb-2 mb-lg-0"></ul>
      <ul className="navbar-nav navbar-right  me-auto mb-2 mb-lg-0"></ul>
      <ul className="navbar-nav navbar-right  me-auto mb-2 mb-lg-0"></ul>
      <ul className="navbar-nav navbar-right  me-auto mb-2 mb-lg-0"></ul>
      <ul className="navbar-nav navbar-right  me-auto mb-2 mb-lg-0"></ul>
      <ul className="navbar-nav navbar-right  me-auto mb-2 mb-lg-0"></ul>
      <ul className="navbar-nav navbar-right  me-auto mb-2 mb-lg-0">
        
        
        <li className="nav-item">
        <NavLink to="/Register" className={setNavLinkClassName}>
            Register
          </NavLink>
        </li>
        
        <ul className="navbar-nav navbar-right  me-auto mb-2 mb-lg-0">
        {(type === "User Logged as SUPER_ADMIN" ? 
         
         ( <li className="nav-item">
            <NavLink to="/admin" className={setNavLinkClassName}>
              Admin Panel
            </NavLink>
          </li>)
          
        :
        (<li className="nav-item">
        <NavLink to="/user" className={setNavLinkClassName}>
          User panel
        </NavLink>
      </li>)
        )}
      </ul>
      </ul>
      <ul className="navbar-nav navbar-right  me-auto mb-2 mb-lg-0">
        {!status ? (
          <li className="nav-item ">
            <NavLink to="/login" className={setNavLinkClassName}>
              Login
            </NavLink>
          </li>
        ) : ("")
          
          <ul>
          <li className="nav-item">
            <button
              className="btn btn-link text-white"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          </li>
          
          </ul>
        )}
      </ul>
    </div>
  </div>
</nav>
</div>*/
}
