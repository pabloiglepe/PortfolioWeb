import React from 'react'
import { useState } from 'react'
import Icons from './Icons';
import { T } from '../i18n.js';


function CompetenciasProfesionales({ competenciasProfesionalesData = {}, lang }) {

    return (
        <div className="mt-4">
            <h6 className="text-light fw-bold mb-3">{T('skills_title', lang)}</h6>
            {/* <div className="d-flex flex-wrap gap-2">
                {competenciasProfesionalesData.map((competencia) => (
                    <span key={competencia.id} className={`badge ${competencia.color} ${competencia.texto} p-2 rounded-pill fw-semibold`} style={{ fontSize: '0.85rem' }} >
                        {competencia.nombre}
                    </span>
                ))}
            </div> */}
            <div className="d-flex flex-wrap gap-4">
                {competenciasProfesionalesData.map((competencia) => (
                    <div key={competencia.id} className="p-2" style={{ backgroundColor: "#212529", width: '40px', height: '40px' }}>
                        <Icons name={competencia.icono} style={{ width: '18px', height: '18px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CompetenciasProfesionales;