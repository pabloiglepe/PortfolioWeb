import React from 'react'
import { useState } from 'react'
import './App.css'
import TrayectoriaProfesional from './components/TrayectoriaProfesional'
import Icons from './components/Icons'
import SobreMi from './components/SobreMi'
import ProyectosPersonales from './components/ProyectosPersonales'
import Contacto from './components/Contacto'

// ARRAYS 
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Array experiencia laboral
const experienciaData = [
  {
    id: 1,
    puesto: "Cocinero y Cajero",
    empresa: "Popeyes Louisiana Kitchen",
    duracion: "20/06/2025 - Actualidad",
    descripcion: "Miembro de equipo versátil y eficiente con experiencia dual en cocina y atención al cliente. Responsable de la preparación y cocción precisa de productos icónicos de Popeyes y de gestionar transacciones rápidas y amables en caja, asegurando la calidad del producto y la satisfacción del cliente",
    icono: "popeyes",
    color: "bg-warning"
  },
  {
    id: 2,
    puesto: "Becario en Formación",
    empresa: "Konecta BTO SL",
    duracion: "02/12/2025 - Actualidad",
    descripcion: "Desarrollador Full-stack en prácticas con una base de conocimiento que abarca el Front-end y Back-end. Colaboro activamente en el ciclo completo de desarrollo, desde la maquetación de interfaces responsive hasta la implementación de lógica del servidor y bases de datos",
    icono: "konecta",
    color: "bg-purple"
  },
  {
    id: 3,
    puesto: "Becario en Formación",
    empresa: "Konecta BTO SL",
    duracion: "19/03/2025 - 30/05/2025",
    descripcion: "Desarrollador Full-stack en prácticas con una base de conocimiento que abarca el Front-end y Back-end. Colaboro activamente en el ciclo completo de desarrollo, desde la maquetación de interfaces responsive hasta la implementación de lógica del servidor y bases de datos",
    icono: "konecta",
    color: "bg-purple"
  },
]

// Array proyectos personales
const proyectosData = [
  {
    id: 1,
    nombre: "Plantilla Web",
    tecnologias: "HTML, Bootstrap, JavaScript, PHP",
    descripcion: "Plantilla web de propósito general desarrollada con una estructura modular y escalable. Está diseñada para ser la base de cualquier tipo de sitio web, ofreciendo una presentación limpia, adaptable y fácil de personalizar.",
    imageUrl: "/plantilla_web.png",
    githubUrl: "https://github.com/pabloiglepe/Proyecto_Plantilla_Web",
    icono: "plantilla",
    color: "bg-secondary"
  },
  {
    id: 2,
    nombre: "Portfolio Web",
    tecnologias: "React, Bootstrap, JavaScript",
    descripcion: "Sitio web personal desarrollado para mostrar mi experiencia laboral, proyectos y habilidades técnicas de manera interactiva y responsive.",
    imageUrl: "/portfolio_web.png",
    githubUrl: "https://github.com/pabloiglepe/PortfolioWeb",
    icono: "web",
    color: "bg-azul"
  }
]

// Array competencias profesionales
const competenciasProfesionalesData = [
  {
    id: 1,
    icono: "java",
  },
  {
    id: 2,
    icono: "php",
  },
  {
    id: 3,
    icono: "javascript",
  },
  {
    id: 4,
    icono: "react",
  },
  {
    id: 5,
    icono: "sql",
  },
  {
    id: 6,
    icono: "github",
  },
  {
    id: 7,
    icono: "html",
  },
  {
    id: 8,
    icono: "css",
  },
  {
    id: 9,
    icono: "bootstrap",
  },

]

const competenciasIdiomasData = [
  {
    id: 1,
    nombre: "Español",
    nivel: "Nativo",
    color: "bg-danger",
    texto: "text-ligth",
    icono: "spain"
  },
  {
    id: 2,
    nombre: "Inglés",
    nivel: "B2 - Titulación Cambridge English: First (CFE)",
    color: "bg-success",
    texto: "text-dark",
    icono: "britain"
  },
]

// Array contactos
const contactosData = [
  {
    id: 1,
    nombre: "Email",
    icono: "email",
    href: "mailto:pablo.iglesias.peral@gmail.com",
    color: "btn-outline-purple"
  },
  {
    id: 2,
    nombre: "LinkedIn",
    icono: "linkedin",
    href: "https://www.linkedin.com/in/tu_perfil",
    color: "btn-outline-azul"
  },
  {
    id: 3,
    nombre: "GitHub",
    icono: "github",
    href: "https://github.com/pabloiglepe",
    color: "btn-outline-secondary"
  },
]
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




function App() {
  // 1. Estado para controlar la visibilidad de la experiencia
  const [verVisibilidad, setVerVisibilidad] = useState(false);

  // CREAR FUNCIONAMIENTO PARA CAMBIAR PROYECTOS  
  const [verProyectos, setVerProyectos] = useState(false);


  // 2. Función para alternar el estado
  const cambiarEstadoVisibilidad = () => {
    setVerVisibilidad(!verVisibilidad);
    if (!verVisibilidad && verProyectos) {
      setShowProjects(false);
    }
  };

  const cambiarProyectos = () => {
    setVerProyectos(!verProyectos);
    // Si se muestra/oculta los proyectos, ocultamos la experiencia
    if (!verProyectos && verVisibilidad) {
      setVerProyectos(false);
    }
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

          <SobreMi estaCentrado={estaCentrado} competenciasProfesionalesData={competenciasProfesionalesData} competenciasIdiomasData={competenciasIdiomasData} />

          <div className="d-flex justify-content-center gap-3 mt-4 mb-5 w-100">

            {/* BOTÓN PARA MOSTRAR/OCULTAR TRAYECTORIA PROFESIONAL */}
            <button onClick={cambiarEstadoVisibilidad} className="btn btn-outline-purple mt-3 d-flex align-items-center mx-auto mx-md-0">
              {verVisibilidad ? 'Trayectoria Profesional' : 'Trayectoria Profesional'} {IconoFlecha(verVisibilidad)}
            </button>

            {/* BOTÓN PARA MOSTRAR/OCULTAR PROYECTOS PERSONALES */}
            <button onClick={cambiarProyectos} className="btn btn-outline-azul mt-3 d-flex align-items-center mx-auto mx-md-0">
              {verProyectos ? 'Proyectos Personales' : 'Proyectos Personales'} {IconoFlecha(verProyectos)}
            </button>

          </div>

          {verVisibilidad && (
            <div className='fade-in'>
              {/* Título de la Sección */}
              <div id='visibilidad' className="text-center mb-5">
                <h1 className="display-4 fw-bold mb-2">
                  <span className="text-purple">
                    Trayectoria Profesional
                  </span>
                </h1>
                <p className="lead text-light text-secondary">
                  Recorrido a través del mundo laboral
                </p>


                {/* Línea de decoración */}
                <hr className="w-25 mx-auto border-purple" style={{ height: '3px', opacity: 1 }} />
              </div>

              {/* Recorrido array visibilidad */}
              <div className="d-flex flex-column align-items-start w-100 position-relative">
                {experienciaData.map((exp) => (
                  <TrayectoriaProfesional key={exp.id} experiencia={exp} />
                ))}

              </div>
            </div>
          )}

          {verProyectos && (
            <div className="fade-in">

              {/* Título de la Sección de Proyectos */}
              <div id="proyectos" className="text-center mb-5">
                <h1 className="display-4 fw-bold mb-2">
                  <span className="text-azul">
                    Proyectos Personales
                  </span>
                </h1>
                <p className="lead text-light text-secondary">
                  Iniciativas y desarrollos propios
                </p>

                {/* Línea de decoración */}
                <hr className="w-25 mx-auto border-azul" style={{ height: '3px', opacity: 1 }} />
              </div>

              {/* Timeline Layout */}
              <div className="d-flex flex-column align-items-start w-100 position-relative">

                {proyectosData.map((proyecto) => (
                  <ProyectosPersonales key={proyecto.id} proyectos={proyecto} />
                ))}

              </div>
            </div>
          )}

        </div>

        <Contacto contactosData={contactosData} />

      </div >
    </>
  )
}

export default App;