import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import AppContextProvider from "./components/context/AppContext";



ReactDOM.render(
    <AppContextProvider>
        <App />
    </AppContextProvider>, 
document.getElementById("root"));
