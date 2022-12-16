import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components

import ProfesorNavbar from "components/Navbars/ProfesorNavbar.js";
import ProfesorSidebar from "components/Sidebar/ProfesorSidebar.js";
import HeaderProfesor from "components/Headers/HeaderProfesor.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Maps from "views/profesor/Maps.js";
import MisClases from "views/profesor/MisClases.js";
import Tables from "views/profesor/Tables.js";

export default function Profesor() {
  return (
    <>
      <ProfesorSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <ProfesorNavbar />
        {/* Header */}
        <HeaderProfesor />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route path="maps" exact element={<Maps/>} />
            <Route path="misclases" exact element={<MisClases/>} />
            <Route path="tables" exact element={<Tables/>} />
            <Route path="*" element={<Navigate to="misclases" />} />
          </Routes>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}