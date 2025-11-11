import React from 'react'
import { useState } from 'react'
import Icons from './Icons';

function ProyectosPersonales({ proyectos = {} }) {
    const { id, nombre, tecnologias, descripcion, icono, color, imageUrl, githubUrl } = proyectos;

    // Manejador de error en la imagen
    const manejadorErrorImagen = (e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/400x200/6c757d/ffffff?text=Imagen+No+Disp"; // Placeholder gris
    };

    return (
        <div className="d-flex position-relative mb-5 w-100">

            <div className="d-flex flex-column align-items-center me-3 me-md-4">
                {/* Icono Redondo */}
                <div className={`p-2 rounded-circle shadow-lg text-white z-1 ${color} border border-2 border-secondary`}>
                    <Icons name={icono} />
                </div>

            </div>

            <div className=" text-start flex-grow-1 card bg-secondary-subtle border-0 shadow-lg mb-4 text-decoration-none" >

                <div className="card-body-azul p-4 border border-dark rounded-3">
                    {/* IMAGEN DE PREVIEW DEL PROYECTO */}
                    {imageUrl && (
                        <div className="mb-3 text-center">
                            <img src={imageUrl} alt={`Preview de ${nombre}`} className="img-fluid rounded-3 shadow"
                                onError={manejadorErrorImagen} style={{ maxHeight: '200px', width: '100%', objectFit: 'cover' }} />
                        </div>
                    )}

                    <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                        {/* TÍTULO Y TECNOLOGÍAS */}
                        <div>
                            <h5 className="card-title fw-bold text-azul mb-0 ">{nombre}</h5>
                            <p className="card-subtitle text-light small mt-1">Tecnologías: {tecnologias}</p>
                        </div>

                        {/* ICONO Y BOTÓN DE GITHUB */}
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                            className="badge bg-dark text-light fw-semibold p-2 mt-1 mt-md-0 d-flex align-items-center text-decoration-none"
                            onClick={(e) => e.stopPropagation()}>

                            <Icons name="github" style={{ width: '16px', height: '16px' }} />
                            <span className="ms-1">Ver Código</span>
                        </a>
                    </div>

                    {/* Descripción */}
                    <p className="card-text text-light mt-3" style={{ fontSize: '0.9rem' }}>
                        {descripcion}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProyectosPersonales;