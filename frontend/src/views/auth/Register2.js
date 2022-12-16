import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// components
import Select from "react-select";
import * as AuthService from "services/auth.service.js";

export default function Register2() {
    const optionsTipoUsuario = [
        {
            value: "profesor",
            label: "Profesor",
        },
        {
            value: "alumno",
            label: "Alumno",
        },
    ];
    const navigate = useNavigate();
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
    const [error, setError] = useState(true);
    
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
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



    console.log(watch("example"));

    const onSubmit = (e) => {

        console.log(JSON.stringify({
            userName,
          password,
          preguntaSecreta,
          respuestaSecreta,
          nombre,
          tipo,
          telefono,
          titulo,
          experiencia,
          fechaNacimiento,
          estudios,
          completado}
        ));
        AuthService.create(
          userName,
          password,
          preguntaSecreta,
          respuestaSecreta,
          nombre,
          tipo,
          telefono,
          titulo,
          experiencia,
          fechaNacimiento,
          estudios,
          completado
        )
          .then((user) => {
            console.log(user);
            
          })
          .catch((errorMsg) => {
            setError("Algo anda mal  " + errorMsg);
            console.log(errorMsg);
          });
      };

    
    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-10/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                            <div className="rounded-t bg-white mb-0 px-6 py-6">
                                <div className="text-center flex justify-between">
                                    <h6 className="text-blueGray-700 text-xl font-bold">
                                        Nueva Cuenta
                                    </h6>
                                </div>
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <form method="post" onSubmit={handleSubmit(onSubmit)}>
                                    
                                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Información Personal
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-6/12 px-4">
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
                                                    placeholder="Juan Gomez"
                                                    {...register("nombreyapellido", { required: true })}
                                                    onChange={(e) =>
                                                        setNombre(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                 {errors.nombreyapellido && <span className="text-red-600 text-sm">Ingrese su nombre</span>}
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Teléfono
                                                </label>
                                                <input
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="+54 11 2222 3333"
                                                    onChange={(e) =>
                                                        setTelefono(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Teléfono
                                                </label>
                                                <input
                                                    type="date"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="lucky.jesse"
                                                    onChange={(e) =>
                                                        setFechaNacimiento(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Seleccione su Perfil
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-12/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Perfil de Usuario
                                                </label>
                                                <Select
                                                    options={optionsTipoUsuario}
                                                    isSearchable={false}
                                                    placeholder="Perfil"
                                                    onChange={(event) =>
                                                        setTipoUsuario(
                                                            event.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>

                                        {tipo === "profesor" ? (
                                            <>
                                                <div className="w-full lg:w-6/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                            Título
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                            placeholder="lucky.jesse"
                                                            onChange={(e) =>
                                                                setTitulo(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="w-full lg:w-6/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                            Experiencia
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                            placeholder="lucky.jesse"
                                                            onChange={(e) =>
                                                                setExperiencia(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        ) : tipo === "alumno" ? (
                                            <>
                                                <div className="w-full lg:w-6/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                            Perfil de Usuario
                                                        </label>
                                                        <Select
                                                            options={
                                                                optionsEstudios
                                                            }
                                                            isSearchable={false}
                                                            placeholder="Perfil"
                                                            onChange={(event) =>
                                                                setEstudios(
                                                                    event.value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="w-full lg:w-6/12 px-4">
                                                    <div className="relative w-full mb-3 mt-6">
                                                        <input
                                                            id="customCheckLogin"
                                                            type="checkbox"
                                                            label="Completo"
                                                            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                                            onChange={(e) =>
                                                                setCompletado(
                                                                    e.target
                                                                        .checked
                                                                )
                                                            }
                                                        />
                                                        <span className="ml-2 text-sm font-semibold text-blueGray-600">
                                                            Completo{" "}
                                                        </span>
                                                    </div>
                                                </div>
                                            </>
                                        ) : null}
                                    </div>
                                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Información de Usuario
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-12/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Correo Electrónico{" "}
                                                    <small>
                                                        (será su usuario)
                                                    </small>
                                                </label>
                                                <input
                                                    type="email"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="jesse@example.com"
                                                    onChange={(e) =>
                                                        setuserName(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
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
                                                    name="password"
                                                    {...register("password", { required: true })}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    />
                                                     {errors.password && <span className="text-red-600 text-sm">La contraseña es obligatoria</span>}
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Repita Contraseña
                                                </label>
                                                <input
                                                    type="password"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    {...register("confirm_password", {
                                                        required: true,
                                                        validate: (val) => {
                                                          if (watch('password') !== val) {
                                                            return "Your passwords do no match";
                                                          }
                                                        },
                                                       })}
                                                />
                                                 {errors.confirm_password && <span className="text-red-600 text-sm">La Contraseña no coincide</span>}
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="mt-6 border-b-1 border-blueGray-300" />

                                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Información de Seguridad
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-12/12 px-4">
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
                                                    placeholder="Cual es el nombre de tu primera mascota?"
                                                    onChange={(e) =>
                                                        setPreguntaSecreta(
                                                            e.target.value
                                                        )
                                                    }
                                                    {...register("pregunta_secreta", { required: true })}
                                                />
                                                {errors.pregunta_secreta && <span className="text-red-600 text-sm">Este campo es obligatorio</span>}
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Respuesta
                                                </label>
                                                <input
                                                    type="password"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    name="RespuestaSecreta"
                                                    {...register("respuesta_secreta", { required: true })}
                                                    onChange={(e) =>
                                                        setRespuestaSecreta(
                                                            e.target.value
                                                        )
                                                    }

                                                    
                                                    />  
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Repita Respuesta
                                                </label>
                                                <input
                                                    type="password"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    {...register("respuesta_confirm", {
                                                        required: true,
                                                        validate: (val) => {
                                                          if (watch('respuesta_secreta') !== val) {
                                                            return "Your passwords do no match";
                                                          }
                                                        },
                                                       })}
                                                />
                                                {errors.respuesta_confirm && <span className="text-red-600 text-sm">La Respuesta no coincide</span>}
                                               
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="mt-6 border-b-1 border-blueGray-300" />

                                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Sobre mi
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-12/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Notas
                                                </label>
                                                <textarea
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Soy un tipo muy copado que no puede aprender las materias porque me la paso tirando borradores al techo"
                                                    rows="4"
                                                ></textarea>
                                            </div>
                                        </div>
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
