import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// components
import Select from "react-select";
import * as ClaseService from "services/clases.service.js";

export default function Register2() {
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
    const navigate = useNavigate();
    const [nombre, setNombre] = useState();
    const [materia, setMateria] = useState();
    const profesorId = localStorage.getItem("_id");
    const [descripcion, setDescripcion] = useState();
    const [tipo, setTipo] = useState();
    const [frecuencia, setFrecuencia] = useState();
    const [costo, setCosto] = useState();
    const [duracionHoras, setDuracionHoras] = useState();
    const comentarios = [];
    const calificaciones = [];
    
    const [error, setError] = useState();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
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



    console.log(watch("example"));

    const onSubmit = (e) => {

        console.log(JSON.stringify({
            nombre,
            materia,
            profesorId,
            descripcion,
            tipo,
            frecuencia,
            costo,
            duracionHoras,
            calificaciones,
            comentarios
        }
        ));
        ClaseService.create(
            {
                nombre,
                materia,
                profesorId,
                descripcion,
                tipo,
                frecuencia,
                costo,
                duracionHoras,
                calificaciones,
                comentarios
            }
        )
          .then((clase) => {
            console.log(clase);
            
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
                                        Nueva Clase
                                    </h6>
                                </div>
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <form method="post" onSubmit={handleSubmit(onSubmit)}>
                                    
                                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Información
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Clase
                                                </label>
                                                <input
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Analisis de Funciones"
                                                    {...register("nombre", { required: true })} 
                                                    onChange={(e) =>
                                                        setNombre(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                 {errors.nombre && <span className="text-red-600 text-sm">Ingrese un nombre de la clase</span>}
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Materia
                                                </label>
                                                <input
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Matematica"
                                                    {...register("materia", { required: true })}
                                                    onChange={(e) =>
                                                        setMateria(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.materia && <span className="text-red-600 text-sm">Ingrese a que materia pertenece</span>}
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Duración Hs.
                                                </label>
                                                <input
                                                    type="number"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Hs"
                                                    onChange={(e) =>
                                                        setDuracionHoras(
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
                                                    Costo $
                                                </label>
                                                <input
                                                    type="number"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="$"
                                                    onChange={(e) =>
                                                        setCosto(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Modalidad
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-12/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Tipo
                                                </label>
                                                <Select
                                                    options={optionsTipo}
                                                    isSearchable={false}
                                                    placeholder="Tipo"
                                                    onChange={(event) =>
                                                        setTipo(
                                                            event.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-12/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Frecuencia
                                                </label>
                                                <Select
                                                    options={optionsFrecuencia}
                                                    isSearchable={false}
                                                    placeholder="Frecuencia"
                                                    onChange={(event) =>
                                                        setFrecuencia(
                                                            event.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <hr className="mt-6 border-b-1 border-blueGray-300" />

                                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Descripcion
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-12/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Descripcion
                                                </label>
                                                <textarea
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Soy un tipo muy copado que no puede aprender las materias porque me la paso tirando borradores al techo"
                                                    rows="4"
                                                    onChange={(event) =>
                                                        setDescripcion(
                                                            event.value
                                                        )
                                                    }
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Crear Clase
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
