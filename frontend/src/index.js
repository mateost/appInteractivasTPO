import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import ClaseDetalle from "views/ClaseDetalle.js";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Alumno from "layouts/Alumno.js";
import Profesor from "layouts/Profesor.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Protected from "services/Protected";
const isLoggedIn = localStorage.getItem("token");
console.log(isLoggedIn)
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            {/* add routes with layouts */}
            <Route
                path="/admin/*"
                element={
                    <Protected tipo={"admin"}>
                        <Admin />
                    </Protected>
                }
            />
            <Route path="/auth/*" element={<Auth />} />
            <Route
                path="/alumno/*"
                element={
                    <Protected tipo={"alumno"}>
                        <Alumno />
                    </Protected>
                }
            />
            <Route
                path="/profesor/*"
                element={
                    <Protected tipo={"profesor"}>
                        <Profesor />
                    </Protected>
                }
            />
            <Route path="/clase/:id" element={<ClaseDetalle />} />
            {/* add routes without layouts */}
            <Route path="/landing" exact element={<Landing />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/" exact element={<Landing />} />
            <Route path="*" element={<Navigate to="/" />} />
            {/* add Navigate for first page */}
            {/* <Navigate from="*" to="/" /> */}
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
