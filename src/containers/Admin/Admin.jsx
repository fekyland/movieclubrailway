import React, { useEffect, useState } from 'react'
import UserService from '../../_services/UserService'
import TokenStorageService from '../../_services/TokenStorageService'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Admin() {
  const navigate = useNavigate()
  const token = TokenStorageService.getToken()
  const [users, setUsers] = useState([])
  console.log(token)
  useEffect(() => {
    getAllUsers(token)
  }, [])

  // functions definition
  const getAllUsers = async () => {
    try {
      const res = await UserService.getAllUsers(token)
      setUsers(res.data.data)
      console.log(res.data)
      console.log(setUsers)
    } catch (error) {
      console.log(error.message || error)
    }
  }
  const handleDelete = async (userToDelete) => {
    const res = await UserService.deleteUser(userToDelete)
    console.log(res)
    await getAllUsers(token)
    console.log(users)
  }
  const handleLogout = () => {
    TokenStorageService.logOut()
    navigate('/')
  }

  return (
    <div>
      <h2>Panel adminstrador</h2>

      <div>
        {users?.map((user) => (
          <div className="container" key={user._id}>
          <div className="row">
            <div className="col">User: {user.name}</div>
            <div className="col">Mail: {user.email}</div>
            <div className="col">Role: {user.role}</div>
            <div className="col admin-buttons">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  handleDelete(user)
                }}
              >
                borrar
              </button>
            </div>
          </div>
        </div>
        ))}
      </div>

      <button type="button" class="btn btn-success" onClick={handleLogout}>
        Logout{' '}
      </button>
    </div>
  )
};

