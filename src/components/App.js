import React, {Component, useContext, useState} from "react";
import '../styles/App.css';
import { AppContext } from "./context/AppContext";
import "regenerator-runtime/runtime";

const App = () => {
  const {input, handleChange,data,fetchData}=useContext(AppContext);
  
  console.log(data);

  return (
    <div id="main">
     <form>
       <label htmlFor="search">Search Movie</label><br></br>
      <input type="text" id="search" value={input} onChange={handleChange}></input>
      <button onClick={()=>{fetchData()}}>Search</button>
     </form>
    <ul>

    {data.length==0 ? (<li className="error">Invalid movie name. Please try again.</li>):(
        data.map((el,idx)=>{
      return (
        <li key={idx}>
          <h2>{el.Title} ({el.Year})</h2>
          <img src={el.Poster}/>
        </li>
      )
    })
    )}
      
    </ul>
      
    </div>
  )
}


export default App;
