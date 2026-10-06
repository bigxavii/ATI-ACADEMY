import { foto } from '../utils/enlaces'

// Una certificación agrupa varios cursos. Al aprobarlos todos se obtiene la constancia.
export interface Certificacion {
  id: number
  nombre: string
  horas: number
  descripcion: string
  requisitos: string[]   //cursos que hay que aprobar
  imagen: string
}

export const certificaciones: Certificacion[] = [
  {
    id: 1,
    nombre: 'Frontend con Vue.js',
    horas: 62,
    descripcion: 'Acredita que puedes construir y publicar aplicaciones web con Vue 3.',
    requisitos: ['HTML y CSS desde cero', 'Vue 3 y TypeScript', 'Git y GitHub para equipos'],
    imagen: foto('photo-1498050108023-c5249f4df085'),
  },
  {
    id: 2,
    nombre: 'Linux Server',
    horas: 65,
    descripcion: 'Acredita que puedes instalar, configurar y mantener servidores Linux.',
    requisitos: ['Administración de Linux', 'Redes y conectividad'],
    imagen: foto('photo-1518770660439-4636190af475'),
  },
  {
    id: 3,
    nombre: 'Seguridad de la información',
    horas: 83,
    descripcion: 'Acredita que sabes proteger datos, cuentas y servicios de una organización.',
    requisitos: ['Fundamentos de ciberseguridad', 'Redes y conectividad', 'PostgreSQL y SQL'],
    imagen: foto('photo-1550751827-4bd374c3f58b'),
  },
]
