import React from 'react'
import { useState } from 'react'
import Icons from './Icons';

function Contacto({ contactosData = {} }) {

    return (
        <div className="text-center mb-5">
            <h2 className="fw-bold mb-4 text-light">Contacto</h2>
            <div className="d-flex justify-content-center gap-4">
                {contactosData.map((contacto) => (
                    <a key={contacto.id} href={contacto.href} target="_blank" rel="noopener noreferrer"
                        className={`btn ${contacto.color} d-flex flex-column align-items-center p-3 rounded-3 shadow-sm`}
                        style={{ width: '100px', height: '80px' }}>
                            
                        <Icons name={contacto.icono} style={{ width: '28px', height: '28px' }} />
                        <span className="mt-2 small fw-semibold">{contacto.nombre}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Contacto;