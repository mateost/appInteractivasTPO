import React from "react";

export default function CardClase({
    heading = "Checkout the Menu",
    clases = {
      Individual: [
        {
          profesor:
            "gene.png",
          materia: "Matematicas I",
          tipo: "Nivel inicial",
          costo: "$5.99",
          frecuencia: "5.0",
          reviews: "87",
          url: "#"
        },
        {
          profesor:
            "gene.png",
          materia: "Matematicas II",
          tipo: "Nivel Inicial",
          costo: "$2.99",
          frecuencia: "4.8",
          reviews: "32",
          url: "#"
        },
        {
          profesor:
            "gene.png",
          materia: "Analisis Matematico",
          tipo: "Nivel Intermedio",
          costo: "$7.99",
          frecuencia: "4.9",
          reviews: "89",
          url: "#"
        },
        {
          profesor:
            "gene.png",
          materia: "Fisica I",
          tipo: "Crispy Soyabeans",
          costo: "$8.99",
          frecuencia: "4.6",
          reviews: "12",
          url: "#"
        },
        {
          profesor:
            "gene.png",
          materia: "Analisis Matematico II",
          tipo: "Roasted Chicken & Egg",
          costo: "$7.99",
          frecuencia: "4.2",
          reviews: "19",
          url: "#"
        },
        {
          profesor:
            "gene.png",
          materia: "Matematica Discreta",
          tipo: "Deepfried Chicken",
          costo: "$2.99",
          frecuencia: "5.0",
          reviews: "61",
          url: "#"
        },
        {
          profesor:
            "gene.png",
          materia: "Algebra I",
          tipo: "Mexican Chilli",
          costo: "$3.99",
          frecuencia: "4.2",
          reviews: "95",
          url: "#"
        },
        {
          profesor:
            "gene.png",
          materia: "Estadisticas",
          tipo: "Chilli Crispy Nachos",
          costo: "$3.99",
          frecuencia: "3.9",
          reviews: "26",
          url: "#"
        }
      ],
      Grupal: [
        {
          profesor:
            "gene.png",
          materia: "Matematicas I",
          tipo: "Nivel inicial",
          costo: "$5.99",
          frecuencia: "5.0",
          reviews: "87",
          url: "#"
        },
        {
          profesor:
            "gene.png",
          materia: "Matematicas II",
          tipo: "Nivel Inicial",
          costo: "$2.99",
          frecuencia: "4.8",
          reviews: "32",
          url: "#"
        },
        {
          profesor:
            "gene.png",
          materia: "Analisis Matematico",
          tipo: "Nivel Intermedio",
          costo: "$7.99",
          frecuencia: "4.9",
          reviews: "89",
          url: "#"
        },
        {
          profesor:
            "gene.png",
          materia: "Fisica I",
          tipo: "Crispy Soyabeans",
          costo: "$8.99",
          frecuencia: "4.6",
          reviews: "12",
          url: "#"
        },
        {
          profesor:
            "gene.png",
          materia: "Analisis Matematico II",
          tipo: "Roasted Chicken & Egg",
          costo: "$7.99",
          frecuencia: "4.2",
          reviews: "19",
          url: "#"
        },
        {
          profesor:
            "gene.png",
          materia: "Matematica Discreta",
          tipo: "Deepfried Chicken",
          costo: "$2.99",
          frecuencia: "5.0",
          reviews: "61",
          url: "#"
        },
        {
          profesor:
            "gene.png",
          materia: "Algebra I",
          tipo: "Mexican Chilli",
          costo: "$3.99",
          frecuencia: "4.2",
          reviews: "95",
          url: "#"
        },
        {
          profesor:
            "gene.png",
          materia: "Estadisticas",
          tipo: "Chilli Crispy Nachos",
          costo: "$3.99",
          frecuencia: "3.9",
          reviews: "26",
          url: "#"
        }
      ],
    }
  })  {
    const clasesKeys = Object.keys(clases);
    console.log(clases["Individual"][0])
    
    return (
        <>
        {Object.keys(clases.Individual).map((claseKey, index) => (
            
            <div className="w-full md:w-4/12 p-4 bf-blueGray-200">
                
                 <div className="bg-white mb-6 text-center shadow-lg rounded-lg relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg">
                    <div className="bg-transparent first:rounded-t px-5 py-3 border-b border-blueGray-200">
                        <h6 className="font-bold my-2">
                        {clases["Individual"][claseKey].nombre}
                        </h6>
                    </div>
                    <div className="px-4 py-5 flex-auto">
                        <div className="text-5xl mt-0 mb-0 font-bold">
                            $ {clases["Individual"][claseKey].costo}
                        </div>
                        <span> {clases["Individual"][claseKey].frecuencia} </span>

                        
                  

                        <ul className="mt-6 mb-0 list-none">
                            <li className="py-1 text-blueGray-500">
                                Materia {" "}
                                <b className="text-lightBlue-500">
                                    {clases["Individual"][claseKey].materia}
                                </b>
                            </li>
                            <li className="py-1 text-blueGray-500">
                                Carga Horaria {" "}
                                <b className="text-lightBlue-500">
                                    {clases["Individual"][claseKey].duracionHoras} hs
                                </b>
                                
                            </li>
                            <li className="py-1 text-blueGray-500">
                                Modalidad {" "}
                                <b className="text-lightBlue-500">{clases["Individual"][claseKey].tipo}</b>
                                 
                            </li>
                            <li className="py-1 text-blueGray-500">
                                Profesor {" "} <b className="text-lightBlue-500"> {clases["Individual"][claseKey].profesor}</b>
                                
                            </li>
                        </ul>
                        <small className="p-8">{clases["Individual"][claseKey].descripcion}</small>
                    </div>
                    <div className="mt-4 py-6 bg-transparent bg-transparent rounded-b px-4 py-3 border-t border-blueGray-200">
                        <a href="#pablo" className="text-lightBlue-500">
                            Suscribirse
                        </a>
                    </div>
                </div>
            </div>
             ))}
             {Object.keys(clases.Grupal).map((claseKey, index) => (
            
            <div className="w-full md:w-4/12 p-4">
                
                 <div className="bg-white mb-6 text-center shadow-lg rounded-lg relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg">
                    <div className="bg-transparent first:rounded-t px-5 py-3 border-b border-blueGray-200">
                        <h6 className="font-bold my-2">
                        {clases["Grupal"][claseKey].nombre}
                        </h6>
                    </div>
                    <div className="px-4 py-5 flex-auto">
                        <div className="text-5xl mt-0 mb-0 font-bold">
                            $ {clases["Grupal"][claseKey].costo}
                        </div>
                        <span> {clases["Grupal"][claseKey].frecuencia} </span>

                        
                  

                        <ul className="mt-6 mb-0 list-none">
                            <li className="py-1 text-blueGray-500">
                                Materia {" "}
                                <b className="text-lightBlue-500">
                                    {clases["Grupal"][claseKey].materia}
                                </b>
                            </li>
                            <li className="py-1 text-blueGray-500">
                                Carga Horaria {" "}
                                <b className="text-lightBlue-500">
                                    {""} hs
                                </b>
                                
                            </li>
                            <li className="py-1 text-blueGray-500">
                                Modalidad {" "}
                                <b className="text-lightBlue-500">{clases["Grupal"][claseKey].tipo}</b>
                                 
                            </li>
                            <li className="py-1 text-blueGray-500">
                                Profesor {" "} <b className="text-lightBlue-500"> {clases["Grupal"][claseKey].profesor}</b>
                                
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4 py-6 bg-transparent bg-transparent rounded-b px-4 py-3 border-t border-blueGray-200">
                        <a href="#pablo" className="text-lightBlue-500">
                            Suscribirse
                        </a>
                    </div>
                </div>
            </div>
             ))}
        </>
    );
}
