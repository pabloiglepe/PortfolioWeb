<<<<<<< HEAD
import React from 'react'
import { useState } from 'react'
import Icons from './Icons';

function SobreMi({ estaCentrado }) {

    const imagen = '/sobremi.svg';

    const claseCentrada = `card bg-dark text-white shadow-lg border-primary rounded-3 ${estaCentrado ? 'mb-0' : 'mb-5'}`;

    return (

        <div className={claseCentrada}>
            <div className="card-body p-5">
                <div className="row align-items-center">

                    {/* Columna de la Foto */}
                    <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
                        <div style={{ width: '150px', height: '150px', margin: '0 auto', border: '4px solid #007bff', borderRadius: '50%', overflow: 'hidden'}}>
                            <img
                                src={imagen}
                                alt="Foto de perfil"
                                className="img-fluid"
                                onError={(e) => { e.target.onerror = null; e.target.src = "/sobremierror.svg" }}
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        </div>
                    </div>

                    {/* Columna de Texto */}
                    <div className="col-12 col-md-8">
                        <h2 className="display-6 fw-bolder text-light mb-2">
                            Hola, soy <span className="text-primary">Pablo Iglesias Peral</span>
                        </h2>
                        <p className="lead text-secondary">
                            Desarrollador Full Stack apasionado por construir soluciones web escalables y eficientes.
                            Tengo 8 años de experiencia trabajando con tecnologías modernas como React, Node.js y sistemas
                            de microservicios basados en la nube. Mi enfoque es siempre la usabilidad,
                            el rendimiento y la entrega de valor.
                        </p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default SobreMi;
||||||| 5b94bbe
=======
import React from 'react'
import { useState } from 'react'

function SobreMi({ verExperiencia, cambiarExperiencia, estaCentrado }) {

    const imagen = '/sobremi.svg';

    const claseCentrada = `card bg-dark text-white shadow-lg border-primary rounded-3 ${estaCentrado ? 'mb-0' : 'mb-5'}`;

    const ArrowIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-short ms-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d={
                verExperiencia
                    ? 'M8 12a.5.5 0 0 0 .5-.5V5.793l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.793V11.5a.5.5 0 0 0 .5.5z'
                    : 'M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z'
            } />
        </svg>
    );

    return (

        <div className={claseCentrada}>
            <div className="card-body p-5">
                <div className="row align-items-center">

                    {/* Columna de la Foto */}
                    <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
                        <div
                            style={{
                                width: '150px',
                                height: '150px',
                                margin: '0 auto',
                                border: '4px solid #007bff',
                                borderRadius: '50%',
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src={imagen}
                                alt="Foto de perfil"
                                className="img-fluid"
                                onError={(e) => { e.target.onerror = null; e.target.src = "/sobremierror.svg" }}
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                        </div>
                    </div>

                    {/* Columna de Texto */}
                    <div className="col-12 col-md-8">
                        <h2 className="display-6 fw-bolder text-light mb-2">
                            Hola, soy <span className="text-primary">Pablo Iglesias Peral</span>
                        </h2>
                        <p className="lead text-secondary">
                            Desarrollador Full Stack apasionado por construir soluciones web escalables y eficientes.
                            Tengo 8 años de experiencia trabajando con tecnologías modernas como React, Node.js y sistemas
                            de microservicios basados en la nube. Mi enfoque es siempre la usabilidad,
                            el rendimiento y la entrega de valor.
                        </p>

                            {/* Botón que muestra/oculta la experiencia */}
                        <button
                            onClick={cambiarExperiencia}
                            className="btn btn-outline-primary mt-3 d-flex align-items-center mx-auto mx-md-0" 
                        >
                            {verExperiencia ? 'Experiencia Profesional' : 'Experiencia Profesional'}
                            {ArrowIcon}
                        </button>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default SobreMi;
>>>>>>> 00229915362123ec7aca9045b58af1e8c0fdd70e
