import React from 'react'
import { useState } from 'react'
import './App.css'
import ExperienciaProfesional from './components/ExperienciaProfesional'
import Icons from './components/Icons'
import SobreMi from './components/SobreMi'

// Array con la experiencia laboral
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
    duracion: "19/03/2025 - 30/05/2025",
    descripcion: "sfkjhbvdfhilbghik",
    icono: "konecta",
    color: "bg-primary"
  },
]


function App() {
  // 1. Estado para controlar la visibilidad de la experiencia
  const [verExperiencia, setverExperiencia] = React.useState(false);

  // 2. Función para alternar el estado
  const cambiarEstadoExperiencia = () => {
    setverExperiencia(!verExperiencia);
  };

  // Determina si solo se muestra el componente SobreMi, si es así, lo centramos.
  const estaCentrado = !verExperiencia;

  // Clases para los contenedores (con condicionales de centrado)
  const claseContainerApp = `app-container ${estaCentrado ? 'app-container-center' : ''}`;
  const claseContainer = `container py-5 ${estaCentrado ? 'd-flex flex-column align-items-center justify-content-center' : ''}`;

  return (
    <>

      <div className={claseContainerApp}>
        {/* Contenedor principal centrado y responsivo */}
        <div className={claseContainer} style={{ flexGrow: estaCentrado ? 1 : 'unset', width:'80%' }}>

          <SobreMi verExperiencia={verExperiencia} cambiarExperiencia={cambiarEstadoExperiencia} estaCentrado={estaCentrado}/>

          {verExperiencia && (
            <div className='fade-in'>
              {/* Título de la Sección */}
              < div id='experiencia' className="text-center mb-5">
                <h1 className="display-4 fw-bold mb-2">
                  <span className="text-primary">
                    Experiencia Profesional
                  </span>
                </h1>
                <p className="lead text-light text-secondary">
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

              {/* Botón descargar CV */}
              <div>
                <p className="lead text-light text-secondary">
                  CV en formato PDF
                </p>
                <div className="d-flex justify-content-center mt-4 w-100">
                  <a href='/CV_Pablo_Iglesias_Peral_06_10_25.pdf' download="CV_Pablo_Iglesias_Peral_06_10_25.pdf" className="p-2 rounded-circle bg-secondary text-white shadow-lg">
                    <Icons name="download" className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          )}



        </div>
      </div >
    </>
  )
}

export default App;