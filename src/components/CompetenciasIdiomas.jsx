import React from 'react'
import { useState } from 'react'
import Icons from './Icons';
import { T } from '../i18n.js';


function CompetenciasIdiomas({ competenciasIdiomasData = {}, lang }) {

    return (
        <div className="mt-4">
            <h6 className="text-light fw-bold mb-3">{T('languages_title', lang)}</h6>
            {/* <div className="d-flex flex-wrap gap-2">
                {competenciasIdiomasData.map((competencia) => (
                    <span key={competencia.id} className={`badge ${competencia.color} ${competencia.texto} p-2 rounded-pill fw-semibold`} style={{ fontSize: '0.85rem' }} >
                        {competencia.nombre} ({competencia.nivel})
                    </span>
                ))}
            </div> */}
            <div className="d-flex justify-content-center flex-wrap gap-4">
                {competenciasIdiomasData.map((idiomas) => (
                    <div key={idiomas.id} style={{ width: '40px', height: '40px' }}>
                        <Icons name={idiomas.icono} style={{ width: '18px', height: '18px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CompetenciasIdiomas;