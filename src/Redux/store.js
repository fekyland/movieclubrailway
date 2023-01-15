import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counterSlice"
import  loginReducer  from "./reducer/User";
import peliculasReducer from "./reducer/peliculasReducer";

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        authReducer: loginReducer,
        peliculas: peliculasReducer 
    },
})