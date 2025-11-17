import React from 'react'
import { useState } from 'react'
import Icons from './Icons';
import CompetenciasProfesionales from './CompetenciasProfesionales';
import CompetenciasIdiomas from './CompetenciasIdiomas';
import { T } from '../i18n.js';


function SobreMi({ estaCentrado, competenciasProfesionalesData = {}, competenciasIdiomasData = {}, lang, cambiarIdiomas }) {

    const imagen = '/sobremi.svg';
    const imagenError = '/sobremierror.svg';

    const claseCentrada = `card bg-dark text-white shadow-lg border-purple rounded-3 ${estaCentrado ? 'mb-0' : 'mb-5'}`;


    return (
        <div className={claseCentrada}>
            <div className="card-body p-5">
                <div className="row align-items-center">

                    {/* Columna de la Foto */}
                    <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
                        <div style={{ width: '150px', height: '150px', margin: '0 auto', borderRadius: '50%', overflow: 'hidden' }}>
                            <img src={imagen} alt="Foto de perfil" className="img-fluid"
                                onError={(e) => { e.target.onerror = null; e.target.src = {imagenError}}}
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        </div>

                        {/* BOTÓN DE DESCARGA DE CV (siempre visible) */}

                        <p className="small text-light mt-5 mb-1">
                            {T('download_cv_text', lang)}
                        </p>
                        <div className="d-flex justify-content-center mt-2 w-100">
                            <a href='/CV_Pablo.pdf' download="CV_Pablo.pdf" target='_blank' rel="noopener noreferrer"
                                className="p-2 rounded-circle bg-secondary text-white shadow-lg"
                                style={{ width: '40px', height: '40px' }}>

                                <Icons name="download" style={{ width: '18px', height: '18px' }} />
                            </a>
                        </div>

                    </div>

                    {/* Columna de Texto */}
                    <div className="col-12 col-md-8">
                        <h2 className="display-6 fw-bolder text-light mb-2">
                            {T('greeting', lang)} <span className="text-purple">Pablo Iglesias Peral</span>
                        </h2>
                        <p className="lead text-secondary">
                            {T('role_tag', lang)}
                        </p>

                        <CompetenciasProfesionales competenciasProfesionalesData={competenciasProfesionalesData} lang={lang} />
                        <CompetenciasIdiomas competenciasIdiomasData={competenciasIdiomasData} lang={lang} cambiarIdiomas={cambiarIdiomas} />
                    </div>
                </div>
            </div>

        </div>

    );
}

export default SobreMi;
