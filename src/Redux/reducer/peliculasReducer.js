import { createSlice } from '@reduxjs/toolkit' //esto es un reduer
import { useState } from 'react';
//const pelisStorage = sessionStorage.getItem("moviesRented");
//const movies = JSON.stringify(pelisStorage.peliculas)
//console.log(pelisStorage)



const initialState = {
  peliculas: [],
}

console.log(initialState.value)
export const peliculasReducer = createSlice({
  name: 'peliculas',
  initialState,
  reducers: {
    alquilarPeliculas: (state, action) => {
      //accion + login
      state.peliculas = action.payload //state
    },
    limpiarPeliculas: (state) => {
      //accion + login
      state.peliculas = [] //state
    },
  },
})

// Action creators are generated for each case reducer function
export const { alquilarPeliculas, limpiarPeliculas } = peliculasReducer.actions

export default peliculasReducer.reducer
