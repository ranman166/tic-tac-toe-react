import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import TicTac from "./Tic";

// import Tic from "./Tic"; 

// Mount React app into the root div in index.html

const root = document.getElementById("root")
ReactDOM.createRoot(root!).render((
    <StrictMode>
      <TicTac />
    </StrictMode>));