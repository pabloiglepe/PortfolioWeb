import React from 'react'
import { useState } from 'react'
import Icons from './Icons';
import CompetenciasProfesionales from './CompetenciasProfesionales';
import CompetenciasIdiomas from './CompetenciasIdiomas';

function SobreMi({ estaCentrado, competenciasProfesionalesData = {}, competenciasIdiomasData = {} }) {

    const imagen = '/sobremi.svg';

    const claseCentrada = `card bg-dark text-white shadow-lg border-primary rounded-3 ${estaCentrado ? 'mb-0' : 'mb-5'}`;


    return (

        <div className={claseCentrada}>
            <div className="card-body p-5">
                <div className="row align-items-center">

                    {/* Columna de la Foto */}
                    <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
                        <div style={{ width: '150px', height: '150px', margin: '0 auto', border: '4px solid #007bff', borderRadius: '50%', overflow: 'hidden' }}>
                            <img src={imagen} alt="Foto de perfil" className="img-fluid"
                                onError={(e) => { e.target.onerror = null; e.target.src = "/sobremierror.svg" }}
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        </div>

                        {/* BOTÓN DE DESCARGA DE CV (siempre visible) */}

                        <p className="small text-light mt-5 mb-1">
                            CV en formato PDF:
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
                            Hola, soy <span className="text-primary">Pablo Iglesias Peral</span>
                        </h2>
                        <p className="lead text-secondary">
                            Futuro Técnico Superior en DAW, motivado y organizado. Con experiencia en proyectos tanto académicos como profesionales utilizando tecnologías Full-Stack. Destaco por mi compromiso, mi habilidad para el trabajo en equipo y la resolución de problemas.
                        </p>

                        <CompetenciasProfesionales competenciasProfesionalesData={competenciasProfesionalesData} />
                        <CompetenciasIdiomas competenciasIdiomasData={competenciasIdiomasData} />
                    </div>
                </div>
            </div>

        </div>

    );
}

export default SobreMi;
