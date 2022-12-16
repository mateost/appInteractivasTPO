import React from "react";

// components

export default function CardPageVisits({
  suscripciones = [
    {
        nombreClase: "Escribi bien!",
        materia: "Matematica",
        nombreProfesor: "Sharp Roach",
        progresoClase: 60,
        duracionClase: 5,
    },
    {
      nombreClase: "Escribi bien!",
      materia: "Matematica",
      nombreProfesor: "Lambert Justice",
      progresoClase: 20,
      duracionClase: 19,
    },
    {
      nombreClase: "Escribi bien!",
      materia: "Matematica",
      nombreProfesor: "Lambert Justice",
      progresoClase: 20,
      duracionClase: 19,
    },
    {
      nombreClase: "Escribi bien!",
      materia: "Matematica",
      nombreProfesor: "Lambert Justice",
      progresoClase: 20,
      duracionClase: 19,
    },
    {
      nombreClase: "Escribi bien!",
      materia: "Matematica",
      nombreProfesor: "Lambert Justice",
      progresoClase: 20,
      duracionClase: 19,
    },
    {
      nombreClase: "Escribi bien!",
      materia: "Matematica",
      nombreProfesor: "Sharp Roach",
      progresoClase: 60,
      duracionClase: 5,
  },
  ]
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Mis Clases
              </h3>
            </div>
          
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Clase
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Materia
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  profesor
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  duración
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  progreso
                </th>
              </tr>
            </thead>
            <tbody>
              {suscripciones.map((suscripcion) => (

                <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  {suscripcion.nombreClase}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {suscripcion.materia}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {suscripcion.nombreProfesor}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  
                  {suscripcion.duracionClase} Hs.
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">{suscripcion.progresoClase}%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                        <div
                          style={{ width: suscripcion.progresoClase + '%' }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
                ))}
             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
