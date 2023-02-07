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
    const className = ['nav-link', isActive ? activeClassName : undefined].join(
      ' ',
    )

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
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary bg-primary fs-6">
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
          <NavLink to="/movies" className={setNavLinkClassName} end>
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
              <li className="nav-item">
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
              ) : (
                
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
    </div>
  )
}
