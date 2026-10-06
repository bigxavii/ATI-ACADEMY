const carpeta = '/img/cursos/'
 
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
    imagen: carpeta + 'prograJPG.jpg',
  },
  {
    id: 'redes',
    nombre: 'Redes y sistemas',
    descripcion: 'Servidores, Linux y conectividad.',
    imagen: carpeta + 'redesJPEG.jpg',
  },
  {
    id: 'datos',
    nombre: 'Bases de datos',
    descripcion: 'Diseño y consulta de información.',
    imagen: carpeta + 'basesdedatosjpeg.jpeg',
  },
  {
    id: 'seguridad',
    nombre: 'Seguridad',
    descripcion: 'Protección de datos e infraestructura.',
    imagen: carpeta + 'ciberseguridadjpeg.jpeg',
  },
  {
    id: 'gestion',
    nombre: 'Gestión de TI',
    descripcion: 'Proyectos, calidad y servicios.',
    imagen: carpeta + 'gestiontijpeg.jpg',
  },
]