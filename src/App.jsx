import React from 'react'
import { useState } from 'react'
import './App.css'
import TrayectoriaProfesional from './components/TrayectoriaProfesional'
import Icons from './components/Icons'
import SobreMi from './components/SobreMi'
import ProyectosPersonales from './components/ProyectosPersonales'
import Contacto from './components/Contacto'
import { T } from './i18n.js';

// ARRAYS 
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Array experiencia laboral
const experienciaData = [
  {
    id: 1,
    puesto: { es: "Cocinero y Cajero", en: "Cook and Cashier" },
    empresa: "Popeyes Louisiana Kitchen",
    duracion: "20/06/2025 - Actualidad",
    descripcion: { es: "Responsable de la preparación de alimentos, garantizando los estándares de calidad, y gestión de transacciones en caja.", en: "Responsible for food preparation, guaranteeing quality standards, and managing cash transactions." },
    icono: "popeyes",
    color: "bg-warning"
  },
  {
    id: 2,
    puesto: { es: "Becario en Formación", en: "Trainee Intern" },
    empresa: "Konecta BTO SL",
    duracion: "02/12/2025 - Actualidad",
    descripcion: { es: "Desarrollador Full-stack en prácticas con una base de conocimiento que abarca el Front-end y Back-end. Colaboro activamente en el ciclo completo de desarrollo, desde la maquetación de interfaces responsive hasta la implementación de lógica del servidor y bases de datos", en: "" },
    icono: "konecta",
    color: "bg-purple"
  },
  {
    id: 3,
    puesto: { es: "Becario en Formación", en: "Trainee Intern" },
    empresa: "Konecta BTO SL",
    duracion: "19/03/2025 - 30/05/2025",
    descripcion: { es: "Desarrollador Full-stack en prácticas con una base de conocimiento que abarca el Front-end y Back-end. Colaboro activamente en el ciclo completo de desarrollo, desde la maquetación de interfaces responsive hasta la implementación de lógica del servidor y bases de datos", en: "" },
    icono: "konecta",
    color: "bg-purple"
  },
]

// Array proyectos personales
const proyectosData = [
  {
    id: 1,
    nombre: { es: "Plantilla Web", en: "" },
    tecnologias: "HTML, Bootstrap, JavaScript, PHP",
    descripcion: { es: "Plantilla web de propósito general desarrollada con una estructura modular y escalable. Está diseñada para ser la base de cualquier tipo de sitio web, ofreciendo una presentación limpia, adaptable y fácil de personalizar.", en: "" },
    imageUrl: "/plantilla_web.png",
    githubUrl: "https://github.com/pabloiglepe/Proyecto_Plantilla_Web",
    icono: "plantilla",
    color: "bg-secondary"
  },
  {
    id: 2,
    nombre: "Portfolio Web",
    tecnologias: "React, Bootstrap, JavaScript",
    descripcion: { es: "Sitio web personal desarrollado para mostrar mi experiencia laboral, proyectos y habilidades técnicas de manera interactiva y responsive.", en: "" },
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
    icono: "spain"
  },
  {
    id: 2,
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
  // CONTROLAR VISIBILIDAD
  const [verVisibilidad, setVerVisibilidad] = useState(false);

  // CREAR FUNCIONAMIENTO PARA CAMBIAR PROYECTOS  
  const [verProyectos, setVerProyectos] = useState(false);

  // FUNCIONAMIENTO PARA CAMBIAR IDIOMAS
  const [lang, setLang] = useState('es');


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

  const cambiarIdiomas = () => {
    setLang(idiomaActual => (idiomaActual === 'es' ? 'en' : 'es'));
  }

  const controlButtons = [
    {
      key: 'experience',
      label: verVisibilidad ? 'hide_experience' : 'view_experience',
      icon: verVisibilidad ? 'briefcase' : 'briefcase',
      onClick: cambiarEstadoVisibilidad,
      color: 'btn-primary'
    },
    {
      key: 'projects',
      label: verProyectos ? 'hide_projects' : 'view_projects',
      icon: verProyectos ? 'rocket' : 'rocket',
      onClick: cambiarProyectos,
      color: 'btn-info'
    },
  ];

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

          <SobreMi estaCentrado={estaCentrado} competenciasProfesionalesData={competenciasProfesionalesData} competenciasIdiomasData={competenciasIdiomasData}
            lang={cambiarIdiomas} />

          <div className="d-flex justify-content-center gap-3 mt-4 mb-5 w-100">

            {/* BOTÓN PARA MOSTRAR/OCULTAR TRAYECTORIA PROFESIONAL */}
            {controlButtons.map(boton => (
              <button key={boton.key} className={`btn ${boton.color} shadow-lg fw-semibold d-flex align-items-center`} onClick={boton.onClick}>
                <Icons name={boton.icon} className="me-2" style={{ width: '1.25rem', height: '1.25rem' }} />
                {T(boton.label, lang)}
              </button>
            ))}


            {/* <button onClick={cambiarEstadoVisibilidad} className="btn btn-outline-purple mt-3 d-flex align-items-center mx-auto mx-md-0">
              {verVisibilidad ? 'Trayectoria Profesional' : 'Trayectoria Profesional'} {IconoFlecha(verVisibilidad)}
            </button> */}

            {/* BOTÓN PARA MOSTRAR/OCULTAR PROYECTOS PERSONALES */}
            {/* <button onClick={cambiarProyectos} className="btn btn-outline-azul mt-3 d-flex align-items-center mx-auto mx-md-0">
              {verProyectos ? 'Proyectos Personales' : 'Proyectos Personales'} {IconoFlecha(verProyectos)}
            </button> */}

          </div>

          {verVisibilidad && (
            <div className='fade-in'>
              {/* Título de la Sección */}
              <div id='visibilidad' className="text-center mb-5">
                <h1 className="display-4 fw-bold mb-2">
                  <span className="text-purple">
                    {T("view_experience", lang)}
                  </span>
                </h1>
                <p className="lead text-light text-secondary">
                  {T("experience_subtitle", lang)}
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
                    {T("projects_title", lang)}
                  </span>
                </h1>
                <p className="lead text-light text-secondary">
                  {T("projects_subtitle", lang)}
                </p>

                {/* Línea de decoración */}
                <hr className="w-25 mx-auto border-azul" style={{ height: '3px', opacity: 1 }} />
              </div>

              {/* Timeline Layout */}
              <div className="d-flex flex-column align-items-start w-100 position-relative">

                {proyectosData.map((proyecto) => (
                  <ProyectosPersonales key={proyecto.id} proyectos={proyecto} lang={lang} />
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