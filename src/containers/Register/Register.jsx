import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../../_services/AuthService'
import TokenStorageService from '../../_services/TokenStorageService'
import { validateLoginFormValues } from '../../_helpers/form-utilities'
import './Register.scss'

export default function Register() {
  const initialValues = {
    email: "",
    password: "",
  }
  // hooks
  const navigate = useNavigate()

  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    const credentials = {
      // email: "super@super.com",
      // password: "123456",
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
    }
    // verificar que no hay error
    verificacion(credentials)
    console.log('useEffect', formErrors)
  }, [formErrors])

  const verificacion = (credentials) => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      console.log('LOGIN...')
      register(credentials)
    }
  }

  const register = async (credentials) => {
    try {
      const res = await AuthService.register(credentials)
      console.log(res.data)
      TokenStorageService.getToken(res.data.token)
      navigate('/movies')
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
        <h2>Register</h2>
        <form className="text-start" noValidate onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="name"
              name="name"
              className="form-control"
              value={formValues.name}
              onChange={handleChange}
            />
            <div className="form-text form-text-error">{formErrors.name}</div>
          </div>
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
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
