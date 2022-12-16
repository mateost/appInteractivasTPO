import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import * as authService from "services/auth.service.js";

export default function Login() {
    const navigate = useNavigate();
    const [userName, setuserName] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName, password);
        authService
            .login(userName, password)
            .then((auth) => {
                console.log("Estamos en el handleSubmit");
                console.log("onlogin....");
                //almacenamos el token
                localStorage.setItem("token", auth.token);
                //almacenamos el usuario
                localStorage.setItem("tipo", auth.user.tipo);
                localStorage.setItem("_id", auth.user._id);
                localStorage.setItem("name", auth.user.name);
                localStorage.setItem("email", auth.user.email);
                const tipo = auth.user.tipo;
                console.log("/"+tipo+"/")
                navigate("/" + tipo, { replace: true });
                // return <Navigate to={"/"+tipo+"/dashboard"} replace />;
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
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 className="text-blueGray-500 text-sm font-bold">
                                        Iniciar Sesión
                                    </h6>
                                </div>
                                <hr className="mt-6 border-b-1 border-blueGray-300" />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <form method="post" onSubmit={handleSubmit}>
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
                                            placeholder="Correo Electrónico"
                                            onChange={(e) =>
                                                setuserName(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                id="customCheckLogin"
                                                type="checkbox"
                                                className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                            />
                                            <span className="ml-2 text-sm font-semibold text-blueGray-600">
                                                Recordarme
                                            </span>
                                        </label>
                                    </div>

                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Ingresar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6 relative">
                            <div className="w-1/2">
                                <a
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    className="text-blueGray-200"
                                >
                                    <small>Olvidó su contraseña?</small>
                                </a>
                            </div>
                            <div className="w-1/2 text-right">
                                <Link
                                    to="/auth/register"
                                    className="text-blueGray-200"
                                >
                                    <small>Crear nueva cuenta</small>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
