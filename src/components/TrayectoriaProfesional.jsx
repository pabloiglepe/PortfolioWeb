import React from 'react'
import { useState } from 'react'
import Icons from './Icons';


const TrayectoriaProfesional = ({ experiencia = {} }) => {
    const { puesto, empresa, duracion, descripcion, icono, color } = experiencia;

    return (
        <div className="d-flex position-relative mb-5 w-100">

            {/* Icono */}
            <div className="d-flex flex-column align-items-center me-3 me-md-4">
                {/* Icono Redondo */}
                <div className={`p-2 rounded-circle shadow-lg text-white z-1 ${color} border border-2 border-secondary`}>
                    <Icons name={icono} />
                </div>
            </div>

            <div className="flex-grow-1 card bg-secondary-subtle border-0 shadow-lg mb-4" style={{ backgroundColor: '#212529 !important', borderColor: '#495057 !important' }}>
                <div className="card-body p-4 border border-dark rounded-3">
                    {/* Puesto Y Empresa */}
                    <div>
                        <h3 className='card-title fw-bold text-primary mb-0'>{puesto}</h3>
                        <p className="card-subtitle text-light small mt-1">{empresa}</p>
                    </div>

                    {/* Duración */}
                    <div className="badge bg-dark text-light fw-semibold p-2 mt-1 mt-md-0">
                        {duracion}
                    </div>

                    {/* Descripción */}
                    <p className="card-text text-light mt-3 fs-6">
                        {descripcion}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TrayectoriaProfesional;