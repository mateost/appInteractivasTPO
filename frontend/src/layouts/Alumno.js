import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components

import AlumnoNavbar from "components/Navbars/AlumnoNavbar.js";
import AlumnoSidebar from "components/Sidebar/AlumnoSidebar.js";
import HeaderAlumno from "components/Headers/HeaderAlumno.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/alumno/Dashboard.js";
import MisClases from "views/alumno/MisClases.js";
import Tables from "views/alumno/Tables.js";

export default function Alumno() {
  return (
    <>
      <AlumnoSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AlumnoNavbar />
        {/* Header */}
        <HeaderAlumno />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route path="dashboard" exact element={<Dashboard/>} />
            <Route path="misclases" exact element={<MisClases />} />
            <Route path="tables" exact element={<Tables/>} />
            <Route path="*" element={<Navigate to="dashboard" />} />
          </Routes>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}