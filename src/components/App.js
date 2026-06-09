import React, { Component, useContext, useState } from "react";
import "../styles/App.css";
import { AppContext } from "./context/AppContext";
import "regenerator-runtime/runtime";

const App = () => {
  const { input, handleChange, data, fetchData, error } =
    useContext(AppContext);

  console.log(data);

  return (
    <div id="main">
     <form
  onSubmit={(e) => {
    e.preventDefault();
    fetchData();
  }}
>
        <label htmlFor="search">Search Movie</label>
        <br></br>
        <input
          type="text"
          id="search"
          value={input}
          onChange={handleChange}
        ></input>
        <button
          type="submit"
        >
          Search
        </button>
      </form>
      <ul>
        {error && (
          <li className="error">Invalid movie name. Please try again.</li>
        )}

        {!error &&
          data.map((el, idx) => (
            <li key={idx}>
              <h2>
                {el.Title} ({el.Year})
              </h2>
              <img src={el.Poster} alt={el.Title} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
