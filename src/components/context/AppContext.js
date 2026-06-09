import React from "react";
import { createContext, useState } from "react";

export const AppContext=createContext();

export default function AppContextProvider({children}){

    const [input,setInput]=useState('');
    const [data,setData]=useState([]);
    const [error,setError]=useState(false);
    function handleChange(e){
        setInput(e.target.value);
    }

    const url=`https://www.omdbapi.com/?apikey=99eb9fd1&`;

    async function fetchData() {
        
        try {
    const res = await fetch(`${url}s=${input}`);
    const datas = await res.json();

    if (datas.Response === "True") {
      setData(datas.Search);
      setError(false);
    } else {
      setData([]);
      setError(true);
    }
  } catch (error) {
    setData([]);
    setError(true);
  }
    }

    const value={
        input,
        setInput,
        data,
        setData,
        handleChange,
        fetchData,
        error
    }
    
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}