import React from "react";

import Select from "react-select";

import { useEffect, useState } from "react";
import { createImportSpecifier } from "typescript";

export default function Register() {
    const [userName, setuserName] = useState();
    const [password, setPassword] = useState();
    const [preguntaSecreta, setPreguntaSecreta] = useState();
    const [respuestaSecreta, setRespuestaSecreta] = useState();
    const [nombre, setNombre] = useState();
    const [tipo, setTipoUsuario] = useState();
    const [telefono, setTelefono] = useState();
    const [titulo, setTitulo] = useState();
    const [experiencia, setExperiencia] = useState();
    const [fechaNacimiento, setFechaNacimiento] = useState();
    const [estudios, setEstudios] = useState();
    const [completado, setCompletado] = useState(true);

    const optionsTipoUsuario = [
        {
            value: "profesor",
            label: "profesor",
        },
        {
            value: "alumno",
            label: "alumno",
        },
    ];

    const optionsEstudios = [
        {
            value: "primario",
            label: "Primario",
        },
        {
            value: "secundario",
            label: "Secundario",
        },
        {
            value: "terciario",
            label: "Terciario",
        },
        {
            value: "universitario",
            label: "Universitario",
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Se ejecuto el formulario");
        console.log(nombre);
        console.log(tipo);
        console.log(userName);
        console.log(password);
        console.log(preguntaSecreta);
        console.log(respuestaSecreta);
        console.log(nombre);
        console.log(tipo);
        console.log(telefono);
        console.log(titulo);
        console.log(experiencia);
        console.log(fechaNacimiento);
        console.log(estudios);
        console.log(completado);
    };
    // AuthService.create(
    // userName,
    // password,
    // preguntaSecreta,
    // respuestaSecreta,
    // nombre,
    // tipo,
    // telefono,
    // titulo,
    // experiencia,
    // fechaNacimiento,
    // estudios,
    // completado
    // )
    // .then((user) => {
    //     console.log(user);
    //     onLogin(user.user, user.token);
    // })
    // .catch((errorMsg) => {
    //     setError("Algo anda mal  " + errorMsg);
    //     console.log(errorMsg);
    // });

    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 className="text-blueGray-500 text-sm font-bold">
                                        Registro
                                    </h6>
                                </div>
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-blueGray-400 text-center mb-3 font-bold">
                                    <small>Ingrese sus datos</small>
                                </div>
                                <form method="post" onSubmit={handleSubmit}>
                                    <div className="relative w-full mb-3">
                                        <Select
                                            options={optionsTipoUsuario}
                                            isSearchable={false}
                                            onChange={(event) =>
                                                setTipoUsuario(event.value)
                                            }
                                        />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Nombre y Apellido
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Name"
                                            onChange={(e) =>
                                                setNombre(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Fecha de Nacimiento
                                        </label>
                                        <input
                                            type="date"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            
                                            onChange={(e) =>
                                                setFechaNacimiento(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Correo Electrónico
                                        </label>
                                        <input
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="john@example.com"
                                            onChange={(e) => setuserName(e.target.value)}
                                        />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Contraseña
                                        </label>
                                        <input
                                            type="password"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Contraseña"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Pregunta Secreta
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Cual es el nombre de mi primera mascota?"
                                            onChange={(e) => setPreguntaSecreta(e.target.value)}
                                        />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Respuesta Secreta
                                        </label>
                                        <input
                                            type="password"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Respuesta"
                                            onChange={(e) => setRespuestaSecreta(e.target.value)}
                                        />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Telefono: +54 11 2222 4444"
                                            onChange={(e) => setTelefono(e.target.value)}
                                        />
                                    </div>
                                    {tipo === "profesor" ? (
                                        <>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Titulo
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Titulo"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    onChange={(e) =>
                                                        setTitulo(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Titulo
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Titulo"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    onChange={(e) =>
                                                        setTitulo(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </>
                                    ) : tipo === "alumno" ? (
                                        <div>
                                            <div className="relative w-full mb-3">
                                                <label>Estudios</label>
                                                <Select
                                                    options={optionsEstudios}
                                                    isSearchable={false}
                                                    onChange={(event) =>
                                                        setEstudios(event.value)
                                                    }
                                                />
                                                <input
                                                    id="customCheckLogin"
                                                    type="checkbox"
                                                    label="Completo"
                                                    className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                                    onChange={(e) =>
                                                        setCompletado(
                                                            e.target.checked
                                                        )
                                                    }
                                                />
                                                <span className="ml-2 text-sm font-semibold text-blueGray-600">
                                                    Completo{" "}
                                                </span>
                                            </div>
                                        </div>
                                    ) : null}
                                    <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                id="customCheckLogin"
                                                type="checkbox"
                                                className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                            />
                                            <span className="ml-2 text-sm font-semibold text-blueGray-600">
                                                Estoy de Acuerdo con las{" "}
                                                <a
                                                    href="#pablo"
                                                    className="text-lightBlue-500"
                                                    onClick={(e) =>
                                                        e.preventDefault()
                                                    }
                                                >
                                                    Politicas de privacidad
                                                </a>
                                            </span>
                                        </label>
                                    </div>

                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Crear Cuenta
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
