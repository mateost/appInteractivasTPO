import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components

import ProfesorNavbar from "components/Navbars/ProfesorNavbar.js";
import ProfesorSidebar from "components/Sidebar/ProfesorSidebar.js";
import HeaderProfesor from "components/Headers/HeaderProfesor.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/profesor/Dashboard.js";
import Maps from "views/profesor/Maps.js";
import Settings from "views/profesor/Settings.js";
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