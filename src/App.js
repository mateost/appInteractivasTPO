import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import './App.css';
import Barra from './components/Barra.js';

// Pages
import Home from "./pages/Home"

// Images
import bgImage from "./assets/images/books-working.jpg";
import Login from "./pages/Login";
import Search from "./pages/Search";

function App() {
  return (
    
    <div style={{
      backgroundImage: `url(${bgImage})`,
      height:'100vh',
      backgroundSize: 'cover',
      backgroundPosition: "center",
      }}>
      <CssBaseline />
      <Barra />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
