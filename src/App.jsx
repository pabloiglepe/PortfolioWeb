import React from 'react'
import { useState } from 'react'
import './App.css'
import ExperienciaProfesional from './components/ExperienciaProfesional'
import Icons from './components/Icons'


const experienciaData = [
  {
    id: 1,
    puesto: "Cocinero y Cajero",
    empresa: "Popeyes",
    duracion: "20/06/2025 - actualidad",
    descripcion: "sfkjhbvdfhilbghik",
    icono: "popeye",
    color: "bg-warning"
  },
  {
    id: 2,
    puesto: "Becario en Formación",
    empresa: "Konecta",
    duracion: "19/03/2025 - 30/05/2025",
    descripcion: "sfkjhbvdfhilbghik",
    icono: "konecta",
    color: "bg-primary"
  },
]


function App() {

  return (
    <>
      
      <div className="app-container">
        {/* Contenedor principal centrado y responsivo */}
        <div className="container py-5">

          {/* Título de la Sección */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-2">
              <span className="text-primary">
                Experiencia Profesional
              </span>
            </h1>
            <p className="lead text-light-emphasis text-secondary">
              Recorrido a través de mi ámbito laboral
            </p>


            {/* Línea de decoración */}
            <hr className="w-25 mx-auto border-primary" style={{ height: '3px', opacity: 1 }} />
          </div>

          {/* Recorrido array experiencia */}
          <div className="d-flex flex-column align-items-start w-100 position-relative">
            {experienciaData.map((exp, index) => (
              <ExperienciaProfesional
                key={exp.id}
                experiencia={exp}
                isLast={index === experienciaData.length - 1}
              />
            ))}

          </div>

          {/* Final de la linea del tiempo */}
          <div className="d-flex justify-content-center mt-4 w-100">
            <div className="p-2 rounded-circle bg-secondary text-white shadow-lg">
              <Icons name="briefcase" className="w-5 h-5" />
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
