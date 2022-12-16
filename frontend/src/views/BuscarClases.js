import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Select from "react-select";

import * as ClasesServices from "services/clases.service.js";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import CardClase from "components/Cards/CardClase.js";

import team1 from "assets/img/team-1-800x800.jpg";
import Register2 from "./auth/Register2";

export default function Landing() {
    const optionsFrecuencia = [
        {
            value: "unica",
            label: "Unica",
        },
        {
            value: "diaria",
            label: "Diaria",
        },
        {
            value: "semanal",
            label: "Semanal",
        },
        {
            value: "mensual",
            label: "Mensual",
        },
    ];
    const optionsTipo = [
        {
            value: "individual",
            label: "Individual",
        },
        {
            value: "grupal",
            label: "Grupal",
        },
    ];
    const [clases, setClases] = useState();
    const [searchInput, setSearchInput] = useState("");

    function findClases() {
        ClasesServices.find().then((clases) => {
            setClases(clases);
            return clases;
        });
    }

    findClases();

    console.log(clases);
    const searchItems = (itemToSearch) => {};

    return (
        <>
            <Navbar transparent />
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-75 bg-black"
                        ></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        Busca tus materias.
                                    </h1>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-blueGray-200 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </div>

                <section className="pb-20 bg-blueGray-200 -mt-24">
                    <div className="container mx-auto px-4 mb-16 ">
                        <br />
                        <br />
                        <br />
                    </div>

                    <div className="container mx-auto px-4 ">
                        <div className="flex flex-wrap z-50">
                            <div className="w-full md:w-3/12 p-4 bf-blueGray-200">
                                <label
                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Clase
                                </label>
                                <input
                                    icon="search"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Search..."
                                    onChange={(e) =>
                                        searchItems(e.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full md:w-3/12 p-4 bf-blueGray-200">
                                <label
                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Materia
                                </label>
                                <input
                                    icon="search"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Search..."
                                    onChange={(e) =>
                                        searchItems(e.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full md:w-3/12 p-4 bf-blueGray-200">
                                <label
                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    tipo
                                </label>
                                <Select
                                    options={optionsTipo}
                                    isSearchable={false}
                                    placeholder="Tipo"
                                    onChange={(event) =>
                                        searchItems(event.value)
                                    }
                                />
                            </div>
                            <div className="w-full md:w-3/12 p-4 bf-blueGray-200">
                                <label
                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Frecuencia
                                </label>
                                <Select
                                    options={optionsFrecuencia}
                                    isSearchable={false}
                                    placeholder="Tipo"
                                    onChange={(event) =>
                                        searchItems(event.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <CardClase clases={clases} />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
