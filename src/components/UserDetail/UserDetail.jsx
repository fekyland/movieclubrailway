import React from 'react'
import { useSelector,useDispatch } from 'react-redux'





export default function UserDetail() {
  
const user = useSelector(state =>state.auth.user) ;
const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
const dispatch  = useDispatch();
const movies = useSelector((state) => state.auth.movies)

if(isLoggedIn)
  return (
    <div>UserDetail</div>
  )
}
