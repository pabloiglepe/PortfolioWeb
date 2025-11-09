import React from 'react'
import { useState } from 'react'

function CompetenciasIdiomas({ competenciasIdiomasData = {} }) {

    return (
        <div className="mt-4">
            <h6 className="text-light fw-bold mb-3">Competencias de Idiomas:</h6>
            <div className="d-flex flex-wrap gap-2">
                {competenciasIdiomasData.map((competencia) => (
                    <span key={competencia.id} className={`badge ${competencia.color} ${competencia.texto} p-2 rounded-pill fw-semibold`} style={{ fontSize: '0.85rem' }} >
                        {competencia.nombre} ({competencia.nivel})
                    </span>
                ))}
            </div>
        </div>
    );
}

export default CompetenciasIdiomas;