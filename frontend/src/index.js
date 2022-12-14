import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Alumno from "layouts/Alumno.js";
import Profesor from "layouts/Profesor.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* add routes with layouts */}
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/alumno/*" element={<Alumno />} />
      <Route path="/profesor/*" element={<Profesor />} />
      {/* add routes without layouts */}
      <Route path="/landing" exact element={<Landing/>} />
      <Route path="/profile" exact element={<Profile/>} />
      <Route path="/" exact element={<Index/>} />
      {/* add Navigate for first page */}
      {/* <Navigate from="*" to="/" /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
