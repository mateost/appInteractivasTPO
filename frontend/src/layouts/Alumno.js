import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components

import AlumnoNavbar from "components/Navbars/AlumnoNavbar.js";
import AlumnoSidebar from "components/Sidebar/AlumnoSidebar.js";
import HeaderAlumno from "components/Headers/HeaderAlumno.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/alumno/Dashboard.js";
import Maps from "views/alumno/Maps.js";
import Settings from "views/alumno/Settings.js";
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
            <Route path="maps" exact element={<Maps/>} />
            <Route path="settings" exact element={<Settings/>} />
            <Route path="tables" exact element={<Tables/>} />
            <Route path="*" element={<Navigate to="dashboard" />} />
          </Routes>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}