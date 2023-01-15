import { createSlice } from '@reduxjs/toolkit'   //esto es un reduer

const initialState = {
    peliculas:[]
}

console.log(initialState.value)
export const peliculasReducer = createSlice({
  name: 'peliculas',
  initialState,
  reducers: {
    alquilarPeliculas: (state,action) => {                //accion + login  
      state.peliculas = [...state.peliculas, action.payload]          //state 
       }
     },
})

// Action creators are generated for each case reducer function
export const { alquilarPeliculas } = peliculasReducer.actions

export default peliculasReducer.reducer 