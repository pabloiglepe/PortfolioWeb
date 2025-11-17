// --- i18n: Datos de Traducción Centralizados ---
export const i18n = {

    'experience_title': { es: 'Experiencia Profesional', en: 'Professional Experience' },
    'experience_subtitle': { es: 'Recorrido a través de mi ámbito laboral', en: 'Journey through my work history' },
    'projects_title': { es: 'Proyectos Personales', en: 'Personal Projects' },
    'projects_subtitle': { es: 'Iniciativas y desarrollos propios', en: 'Personal initiatives and developments' },
    'hide_experience': { es: 'Ocultar Experiencia', en: 'Hide Experience' },
    'view_experience': { es: 'Trayectoria Profesional', en: 'View Professional Experience' },
    'hide_projects': { es: 'Ocultar Proyectos', en: 'Hide Projects' },
    'view_projects': { es: 'Proyectos Personales', en: 'Personal Projects' },
    'contact_title': { es: 'Contacto', en: 'Contact' },

    'greeting': { es: 'Hola, soy ', en: 'Hello, I am ' },
    'role_tag': { es: 'Futuro Técnico Superior en DAW. Con experiencia en proyectos tanto académicos como profesionales utilizando tecnologías Full-Stack. Destaco por mi compromiso, mi habilidad para el trabajo en equipo y la resolución de problemas.', en: '' },
    'skills_title': { es: 'Competencias Profesionales:', en: 'Professional Skills' },
    'languages_title': { es: 'Competencias de Idiomas:', en: 'Language Skills:' },
    'download_cv_text': { es: 'CV en formato PDF:', en: '' },

    'tech_label': { es: 'Tecnologías: ', en: 'Technologies: ' },
    'view_code': { es: 'Ver Código', en: 'View Code' },
};

export const T = (key, lang) => {
    const text = i18n[key];
    if (text) {
        return text[lang] || text['es'];
    }
    return key;
};

export default T;