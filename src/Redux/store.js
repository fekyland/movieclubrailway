import { configureStore } from "@reduxjs/toolkit";

import  loginReducer  from "./reducer/User";
import peliculasReducer from "./reducer/peliculasReducer";

export const store = configureStore({
    reducer:{
        authReducer: loginReducer,
        peliculas: peliculasReducer 
    },
})