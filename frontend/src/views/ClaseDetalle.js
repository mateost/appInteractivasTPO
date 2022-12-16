import React, { useEffect } from "react";
import { useState } from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import * as ClasesServices from "services/clases.service.js";

import teamImage from "assets/img/team-2-800x800.jpg";
import ClaseImg from "assets/img/clase.jpg";

import { useParams } from "react-router-dom";
import { findOne } from "services/clases.service";

//Then inside your component

export default function Profile({
    clase1 = {
        _id: {
            $oid: "63796a7bcb540fadfe8a93a7",
        },
        nombre: "Escribi bien!",
        materia: "gramatica",
        profesorId: {
            $oid: "63793655cb540fadfe8a9358",
        },
        descripcion:
            "esta es una clase para que todos puedan aprender de las maravillas que la materia tiene para ofrecernos!",
        duracionHoras: 2,
        frecuencia: "diaria",
        tipo: "particular",
        costo: 5555,
        comentarios: [
            {
                alumno: "Pedro",
                comentario: "La clase es muy copada ",
            },
            {
                alumno: "Juan",
                comentario: "Es medio medio el profesor",
            },
        ],
        calificaciones: [
            {
                alumno: "Juan",
                calificacion: 4,
            },
        ],
    },
    profesor = {
        _id: {
            $oid: "63793655cb540fadfe8a9358",
        },
        name: "Connie Phelps",
        email: "conniephelps@ecstasia.com",
        telefono: "+1 (959) 460-2425",
        fechaNacimiento: "1990-09-23",
        titulo: "licenciado en alquimia",
        experiencia:
            "7 años de experiencia en la empresa Rhodes. La pasion por la docencia es lo que impulsa mi dia a dia",
        notificaciones: [],
    },
    alumnos = [
        {
            _id: {
                $oid: "637902c1cb540fadfe8a9321",
            },
            name: "Maricela Travis",
            email: "maricelatravis@ecstasia.com",
            telefono: "+1 (897) 425-2833",
            fechaNacimiento: "1990-02-26",
            estudios: {
                nombre: "secundario",
                terminado: true,
            },
            notificaciones: [],
        },
        {
            _id: {
                $oid: "637902c1cb540fadfe8a9324",
            },
            name: "Gates King",
            email: "gatesking@ecstasia.com",
            telefono: "+1 (934) 440-3457",
            fechaNacimiento: "1977-07-18",
            estudios: {
                nombre: "primario",
                terminado: false,
            },
            notificaciones: [],
        },
    ],
}) {
    const [clase, setClase] = useState(false);
    const { id } = useParams();
    const test = async () => await ClasesServices.findOne(id);
    useEffect(() => {
        test().then((res) => setClase(res));
        console.log(clase);
    }, []);

    console.log(clase);

    const nroOfAlumnos = alumnos.length;
    const [showMore, setShowMore] = useState(false);
    return (
        <>
            <Navbar transparent />
            <main className="profile-page">
                <section className="relative block h-500-px">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-50 bg-black"
                        ></span>
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
                </section>
                {clase ? (
                    <section className="relative py-16 bg-blueGray-200">
                        <div className="container mx-auto px-4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                                <div className="px-6">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                            <div className="relative">
                                                <img
                                                    alt="..."
                                                    src={ClaseImg}
                                                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                            <div className="py-6 px-3 mt-32 sm:mt-0">
                                                <button
                                                    className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                >
                                                    Inscribirse
                                                </button>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                                <div className="mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                        {clase.duracionHoras}
                                                    </span>
                                                    <span className="text-sm text-blueGray-400">
                                                        Horas
                                                    </span>
                                                </div>
                                                <div className="mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                        {nroOfAlumnos}
                                                    </span>
                                                    <span className="text-sm text-blueGray-400">
                                                        Alumnos
                                                    </span>
                                                </div>
                                                <div className="lg:mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                        {
                                                            clase.comentarios
                                                                .length
                                                        }
                                                    </span>
                                                    <span className="text-sm text-blueGray-400">
                                                        Comentarios
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-12">
                                        <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                            {clase.nombre.toUpperCase()}
                                        </h3>
                                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                            <i className="fas fa-user mr-2 text-lg text-blueGray-400"></i>{" "}
                                            Prof.: {profesor.name}
                                        </div>
                                        <div className="mb-2 text-blueGray-600 mt-10">
                                            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                            {profesor.titulo}
                                        </div>
                                        <div className="mb-2 text-blueGray-600 ">
                                            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                            {clase.materia}
                                        </div>

                                        <div className="mb-2 text-blueGray-600">
                                            <i className="fas fa-users mr-2 text-lg text-blueGray-400"></i>
                                            {clase.tipo}
                                        </div>
                                        <div className="mb-2 text-blueGray-600">
                                            <i className="fas fa-clock mr-2 text-lg text-blueGray-400"></i>
                                            {clase.frecuencia}
                                        </div>
                                        <div className="text-4xl mb-2 text-blueGray-600 mt-10">
                                            <i className="fa-solid fa-dollar mr-2 text-lg text-blueGray-400"></i>
                                            $ {clase.costo}
                                        </div>
                                    </div>
                                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full lg:w-9/12 px-4">
                                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                    Quien es el profesor? <br />
                                                    {profesor.experiencia}
                                                </p>

                                                <a
                                                    href="#pablo"
                                                    className="font-normal text-lightBlue-500"
                                                    onClick={() =>
                                                        setShowMore(!showMore)
                                                    }
                                                >
                                                    {showMore
                                                        ? "Ocultar Comentarios"
                                                        : "Mostrar Comentarios"}
                                                </a>
                                                {showMore
                                                    ? clase.comentarios.map(
                                                          (comentario) => (
                                                              <div className="bg-blueGray-200 mt-8 rounded-lg text-left p-4 flex items-start">
                                                                  <div className="flex-1">
                                                                      <h6 className=" font-semibold leading-normal text-blueGray-700">
                                                                          {
                                                                              comentario.alumno
                                                                          }
                                                                      </h6>
                                                                      <p className="mt-2 text-blueGray-700">
                                                                          {
                                                                              comentario.comentario
                                                                          }
                                                                      </p>
                                                                  </div>
                                                              </div>
                                                          )
                                                      )
                                                    : " "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    false
                )}
            </main>
            <FooterAdmin />
        </>
    );
}
