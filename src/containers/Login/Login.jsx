import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../../_services/AuthService'
import TokenStorageService from '../../_services/TokenStorageService'
import { validateLoginFormValues } from '../../_helpers/form-utilities'
import './Login.scss'
import { useSelector, useDispatch } from 'react-redux'
import { login as loginuser } from '../../Redux/reducer/User.js'

export default function Login() {
  
 
  
  //array vacio
  const initialValues = {
    email: '',
    password: '',
  }

  // hooks
  const userState = useSelector((state) => state.authReducer) //trae el state para el login
  console.log(userState)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    const credentials = {
      // email: "super@super.com",              //objeto con email y password
      // password: "123456",
      email: formValues.email,
      password: formValues.password,
    }
    // verificar que no hay error
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      //verifica el objeto con if
      console.log('LOGIN...')
      login(credentials) //hago la consulta de
    }
    console.log('useEffect', formErrors)
  }, [formErrors])

  const login = async (credentials) => {
    //funcion  async login
    try {
      const res = await AuthService.login(credentials) //res
      console.log(res.data)
      TokenStorageService.saveToken(res.data.token)
      console.log(res.data.token)
      sessionStorage.setItem("userId",res.data.id);
      res.data.username = credentials.email
      dispatch(loginuser(res.data))
      if (res.data.message === 'User Logged as SUPER_ADMIN') {
        navigate('/admin')
      } else {
        navigate('/user')
      }
    } catch (error) {
      console.log(error)
    }
  }

  // handlers
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,

      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    setFormErrors(validateLoginFormValues(formValues))
    console.log('handle', formErrors)
    setIsSubmit(true)
  }

  return (
    <div>
      <div className="container pt-5 col-lg-3">
        <h2>Login</h2>

        <pre className="text-start">
          {JSON.stringify(formValues, undefined, 2)}
        </pre>

        <form className="text-start" noValidate onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formValues.email}
              onChange={handleChange}
            />
            <div className="form-text form-text-error">{formErrors.email}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formValues.password}
              onChange={handleChange}
            />
            <div className="form-text form-text-error">
              {formErrors.password}
            </div>
          </div>
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-primary text-white fw-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* <button onClick={() => login(credentials)}>Enviar login</button> */}
    </div>
  )
}
