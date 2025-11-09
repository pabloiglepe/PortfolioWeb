import React from 'react'
import { useState } from 'react'
import './App.css'
import TrayectoriaProfesional from './components/TrayectoriaProfesional'
import Icons from './components/Icons'
import SobreMi from './components/SobreMi'


// Array con la visibilidad laboral
const experienciaData = [
  {
    id: 1,
    puesto: "Cocinero y Cajero",
    empresa: "Popeyes",
    duracion: "20/06/2025 - Actualidad",
    descripcion: "sfkjhbvdfhilbghik",
    icono: "popeye",
    color: "bg-warning"
  },
  {
    id: 2,
    puesto: "Becario en Formación",
    empresa: "Konecta",
    duracion: "02/12/2025 - Actualidad",
    descripcion: "sfkjhbvdfhilbghik",
    icono: "konecta",
    color: "bg-primary"
  },
  {
    id: 3,
    puesto: "Becario en Formación",
    empresa: "Konecta",
    duracion: "19/03/2025 - 30/05/2025",
    descripcion: "sfkjhbvdfhilbghik",
    icono: "konecta",
    color: "bg-primary"
  },
]

const proyectosData = [
  {
    id: 1,
    nombre: "Portfolio Web",
    tecnologias: "React, Bootstrap, JavaScript",
    descripcion: "Sitio web personal desarrollado para mostrar mi experiencia laboral, proyectos y habilidades técnicas de manera interactiva y responsive.",
    imageUrl: "https://placehold.co/400x200/007bff/ffffff?text=Portfolio+Web",
    githubUrl: "#",
    icono: "github",
    color: "bg-success"
  },

]


function App() {
  // 1. Estado para controlar la visibilidad de la experiencia
  const [verVisibilidad, setVerVisibilidad] = React.useState(false);

  // CREAR FUNCIONAMIENTO PARA CAMBIAR PROYECTOS    



  // 2. Función para alternar el estado
  const cambiarEstadoVisibilidad = () => {
    setVerVisibilidad(!verVisibilidad);
  };

  // Determina si solo se muestra el componente SobreMi, si es así, lo centramos.
  const estaCentrado = !verVisibilidad;

  // Clases para los contenedores (con condicionales de centrado)
  const claseContainerApp = `app-container ${estaCentrado ? 'app-container-center' : ''}`;
  const claseContainer = `container py-5 ${estaCentrado ? 'd-flex flex-column align-items-center justify-content-center' : ''}`;


  // Ícono de flecha que cambia según el estado
  const IconoFlecha = (verVisibilidad) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-short ms-2" viewBox="0 0 16 16">
      <path fillRule="evenodd" d={
        verVisibilidad
          ? 'M8 12a.5.5 0 0 0 .5-.5V5.793l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.793V11.5a.5.5 0 0 0 .5.5z' // Flecha hacia arriba (para ocultar)
          : 'M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z' // Flecha hacia abajo (para ver)
      } />
    </svg>
  );

  return (
    <>
      <div className={claseContainerApp}>
        {/* Contenedor principal centrado y responsivo */}
        <div className={claseContainer} style={{ flexGrow: estaCentrado ? 1 : 'unset', width: '80%' }}>

          <SobreMi estaCentrado={estaCentrado} />

          <div className="d-flex justify-content-center gap-3 mt-4 mb-5 w-100">

            {/* BOTÓN PARA MOSTRAR/OCULTAR TRAYECTORIA PROFESIONAL */}
            <button onClick={cambiarEstadoVisibilidad} className="btn btn-outline-primary mt-3 d-flex align-items-center mx-auto mx-md-0">
              {verVisibilidad ? 'Trayectoria Profesional' : 'Trayectoria Profesional'} {IconoFlecha(verVisibilidad)}
            </button>

            {/* BOTÓN PARA MOSTRAR/OCULTAR PROYECTOS PERSONALES */}
            <button className="btn btn-outline-primary mt-3 d-flex align-items-center mx-auto mx-md-0">
              {verVisibilidad ? 'Proyectos Personales' : 'Proyectos Personales'} {IconoFlecha(verVisibilidad)}
            </button>

          </div>


          {verVisibilidad && (
            <div className='fade-in'>
              {/* Título de la Sección */}
              <div id='visibilidad' className="text-center mb-5">
                <h1 className="display-4 fw-bold mb-2">
                  <span className="text-primary">
                    Trayectoria Profesional
                  </span>
                </h1>
                <p className="lead text-light text-secondary">
                  Recorrido a través de mi ámbito laboral
                </p>


                {/* Línea de decoración */}
                <hr className="w-25 mx-auto border-primary" style={{ height: '3px', opacity: 1 }} />
              </div>

              {/* Recorrido array visibilidad */}
              <div className="d-flex flex-column align-items-start w-100 position-relative">
                {experienciaData.map((exp, index) => (
                  <TrayectoriaProfesional
                    key={exp.id}
                    experiencia={exp}
                    isLast={index === experienciaData.length - 1}
                  />
                ))}

              </div>
            </div>
          )}

        </div>

        {/* BOTÓN DE DESCARGA DE CV (siempre visible) */}
        <div>
          <p className="lead text-light text-secondary">
            CV en formato PDF
          </p>
          <div className="d-flex justify-content-center mt-4 w-100">
            <a href='/CV_Pablo_Iglesias_Peral_06_10_25.pdf' download="CV_Pablo_Iglesias_Peral_06_10_25.pdf"
              className="p-2 rounded-circle bg-secondary text-white shadow-lg"
              style={{ width: '40px', height: '40px' }}>

              <Icons name="download" style={{ width: '18px', height: '18px' }} />
            </a>
          </div>
        </div>
      </div >
    </>
  )
}

export default App;