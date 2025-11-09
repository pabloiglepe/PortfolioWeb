import React from 'react'
import { useState } from 'react'

function CompetenciasProfesionales({ competenciasProfesionalesData = {} }) {

    return (
        <div className="mt-4">
            <h6 className="text-light fw-bold mb-3">Competencias Profesionales:</h6>
            <div className="d-flex flex-wrap gap-2">
                {competenciasProfesionalesData.map((competencia) => (
                    <span key={competencia.id} className={`badge ${competencia.color} ${competencia.texto} p-2 rounded-pill fw-semibold`} style={{ fontSize: '0.85rem' }} >
                        {competencia.nombre}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default CompetenciasProfesionales;