import { createSlice } from '@reduxjs/toolkit'   //esto es un reduer

const initialState = {  //estado inicial
  status: false,
  type : null,
  username: null
}
console.log(initialState.value)
export const loginReducer = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    login: (state,action) => {                //accion + login  
      state.status = action.payload.success,           //state 
      state.username = action.payload.username
      state.type = action.payload.message
    },
    logout: (state) => {
      state.status = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { login,logout } = loginReducer.actions

export default loginReducer.reducer 