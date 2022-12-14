import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Login from "views/auth/Login.js";
import Register2 from "views/auth/Register2.js";
import registerBg2 from "assets/img/register_bg_2.png";


export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + registerBg2 + ")",
            }}
          ></div>
          <Routes>
            <Route path="login" exact element={<Login />} />
            <Route path="register" exact element={<Register2 />} />
            {/* <Navigate from="/auth" to="/auth/login" /> */}
          </Routes>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
