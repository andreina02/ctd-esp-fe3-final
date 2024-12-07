import React, { createContext, useContext, useReducer, useEffect, useState} from "react";
import axios from 'axios'
import { reducer } from "../Reducers/reducer";

const DentistState=createContext()
const lsfavs = JSON.parse(localStorage.getItem("favs")) || []


const initialState = {
   dentist: [],
   favs: lsfavs,
   theme: ""
}

const Context=({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios(url)
      .then((response) => {
        console.log(response)
        dispatch({type: "GET_DENTIST", payload: response.data})
      })
      .catch((error) => {
        console.error("Error al obtener los dentistas:", error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.dentist])

  useEffect(() => {
    if (state.theme === "dark") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [state.theme]);

  

    return(
        <DentistState.Provider value={{state, dispatch}}>
            {children}
        </DentistState.Provider>
    )
}

export default Context
export const useDentistState = () => useContext(DentistState)