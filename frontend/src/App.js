import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import { css } from "styled-components/macro"; //eslint-disable-line

import LoginPage from "pages/Login.js";
import SignupPage from "pages/Signup.js";
import LogOut from "components/LogOut.js";


import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "pages/MainLandingPage.js";

import ComponentStudents from "ComponentStudents.js";
import ComponentTeachers from "ComponentTeachers.js";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Protected from "helpers/Protected";
import { components } from "react-select";

export default function App() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setUser(localStorage.getItem("user"));
        }
        else {
            navigate('/');
        }
    }, []);

    function onLogin(user, token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        const tipo = user.tipo;
        navigate("/" + tipo);
    } 

    const isLoggedIn = localStorage.getItem("token");
    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route
                    path="/:type/:subtype/:name"
                    element={<ComponentRenderer />}
                />
                <Route path="/:type/:name" element={<ComponentRenderer />} />
                <Route
                    path="/alumno"
                    element={
                        <Protected isLoggedIn={isLoggedIn}>
                            <ComponentStudents />
                        </Protected>
                    }
                />
                <Route
                    path="/alumno/:type"
                    element={
                        <Protected isLoggedIn={isLoggedIn}>
                            <ComponentStudents />
                        </Protected>
                    }
                />
                <Route
                    path="/alumno/:type/:name"
                    element={
                        <Protected isLoggedIn={isLoggedIn}>
                            <ComponentStudents />
                        </Protected>
                    }
                />
                <Route
                    path="/profesor/:type/:name"
                    element={
                        <Protected isLoggedIn={isLoggedIn}>
                            <ComponentTeachers />
                        </Protected>
                    }
                />
                <Route
                    path="/login"
                    element={<LoginPage onLogin={onLogin} />}
                />
                <Route
                    path="/register"
                    element={<SignupPage onLogin={onLogin} />}
                />
                <Route path="/" element={<MainLandingPage />} />
                <Route path="/logout" element={<LogOut />} />
            </Routes>
        </>
    );
}

