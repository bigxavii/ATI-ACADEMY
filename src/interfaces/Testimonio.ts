import { foto } from '../utils/enlaces'


export interface Testimonio {
  id: number
  nombre: string
  puesto: string
  empresa: string
  curso: string         
  texto: string
  logro: string          
  foto: string
}

export const testimonios: Testimonio[] = [
  {
    id: 1,
    nombre: 'Mariana Pech',
    puesto: 'Desarrolladora frontend',
    empresa: 'Nodo Maya Software',
    curso: 'Certificación Frontend con Vue.js',
    texto: 'Lo que más me sirvió fue construir un proyecto real desde el primer módulo. Llegué a la entrevista con algo que enseñar.',
    logro: 'Primer empleo en TI a los tres meses',
    foto: foto('photo-1573496359142-b8d87734a5a2', 500),
  },
  {
    id: 2,
    nombre: 'Luis Canul',
    puesto: 'Administrador de sistemas',
    empresa: 'Cenote Cloud',
    curso: 'Administración de Linux',
    texto: 'Migré los servidores de mi trabajo a Linux aplicando las prácticas del curso, paso por paso.',
    logro: 'Ascenso a administrador de sistemas',
    foto: foto('photo-1500648767791-00dcc994a43e', 500),
  },
  {
    id: 3,
    nombre: 'Andrea Tun',
    puesto: 'Líder de proyecto',
    empresa: 'Uay Labs',
    curso: 'Gestión ágil de proyectos de TI',
    texto: 'Ordenamos el backlog y empezamos a medir el avance. Por fin las entregas dejaron de ser una sorpresa.',
    logro: 'Tres proyectos entregados a tiempo',
    foto: foto('photo-1494790108377-be9c29b29330', 500),
  },
  {
    id: 4,
    nombre: 'Jorge Ku',
    puesto: 'Analista de datos',
    empresa: 'Chaac Data',
    curso: 'PostgreSQL y SQL',
    texto: 'Antes dependía de otros para cada reporte. Ahora escribo mis propias consultas en minutos.',
    logro: 'Reportes semanales automatizados',
    foto: foto('photo-1507003211169-0a1dd7228f2d', 500),
  },
  {
    id: 5,
    nombre: 'Fernanda Cetina',
    puesto: 'Analista de seguridad',
    empresa: 'Xibalbá Security',
    curso: 'Fundamentos de ciberseguridad',
    texto: 'El curso me dio el lenguaje y las bases para cambiarme de soporte técnico a seguridad.',
    logro: 'Cambio de área en seis meses',
    foto: foto('photo-1580489944761-15a19d654956', 500),
  },
]
