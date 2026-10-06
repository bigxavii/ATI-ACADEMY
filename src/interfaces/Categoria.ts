import { foto } from '../utils/enlaces'
export type IdCategoria = 'programacion' | 'redes' | 'datos' | 'seguridad' | 'gestion'


export interface Categoria {
  id: IdCategoria
  nombre: string
  descripcion: string
  imagen: string
}

export const categorias: Categoria[] = [
  {
    id: 'programacion',
    nombre: 'Programación',
    descripcion: 'Sitios y aplicaciones web.',
    imagen: foto('photo-1461749280684-dccba630e2f6'),
  },
  {
    id: 'redes',
    nombre: 'Redes y sistemas',
    descripcion: 'Servidores, Linux y conectividad.',
    imagen: foto('photo-1544197150-b99a580bb7a8'),
  },
  {
    id: 'datos',
    nombre: 'Bases de datos',
    descripcion: 'Diseño y consulta de información.',
    imagen: foto('photo-1558494949-ef010cbdcc31'),
  },
  {
    id: 'seguridad',
    nombre: 'Seguridad',
    descripcion: 'Protección de datos e infraestructura.',
    imagen: foto('photo-1550751827-4bd374c3f58b'),
  },
  {
    id: 'gestion',
    nombre: 'Gestión de TI',
    descripcion: 'Proyectos, calidad y servicios.',
    imagen: foto('photo-1552664730-d307ca884978'),
  },
]
