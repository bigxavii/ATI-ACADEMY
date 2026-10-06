const carpeta = '/img/oficinas/'
 
export interface Empresa {
  id: number
  nombre: string
  sector: string
  ciudad: string
  empleados: string      
  desde: number        
  resumen: string        
  beneficio: string      
  imagen: string         
}
 
export const empresas: Empresa[] = [
  {
    id: 1,
    nombre: 'Nodo Maya Software',
    sector: 'Desarrollo de software',
    ciudad: 'Mérida, Yuc.',
    empleados: '120 personas',
    desde: 2022,
    resumen: 'Crea aplicaciones web y móviles para comercios de todo el sureste.',
    beneficio: 'Prácticas profesionales para egresados de Vue.js',
    imagen: carpeta + 'ofi1jpeg.jpg',
  },
  {
    id: 2,
    nombre: 'Cenote Cloud',
    sector: 'Infraestructura en la nube',
    ciudad: 'Cancún, Q. Roo',
    empleados: '75 personas',
    desde: 2023,
    resumen: 'Administra servidores y respaldos para hoteles de la Riviera Maya.',
    beneficio: 'Vacantes prioritarias para certificados en Linux Server',
    imagen: carpeta + 'ofi2jpeg.jpg',
  },
  {
    id: 3,
    nombre: 'Chaac Data',
    sector: 'Análisis de datos',
    ciudad: 'Mérida, Yuc.',
    empleados: '40 personas',
    desde: 2023,
    resumen: 'Convierte datos de agricultura y clima en reportes para tomar decisiones.',
    beneficio: 'Proyectos reales para alumnos de bases de datos',
    imagen: carpeta + 'ofi4jpeg.jpg',
  },
  {
    id: 4,
    nombre: 'Uay Labs',
    sector: 'Innovación y producto',
    ciudad: 'Campeche, Camp.',
    empleados: '30 personas',
    desde: 2024,
    resumen: 'Laboratorio que diseña y prueba productos digitales con usuarios reales.',
    beneficio: 'Mentorías mensuales con su equipo de producto',
    imagen: carpeta + 'ofi5jpeg.jpg',
  },
  {
    id: 5,
    nombre: 'Xibalbá Security',
    sector: 'Ciberseguridad',
    ciudad: 'Ciudad de México',
    empleados: '210 personas',
    desde: 2022,
    resumen: 'Audita y protege la infraestructura de bancos y aseguradoras.',
    beneficio: 'Becas del 50 % en la certificación de Seguridad',
    imagen: carpeta + 'ofi3jpeg.jpg',
  },
  {
    id: 6,
    nombre: 'Henequén Digital',
    sector: 'Servicios de TI',
    ciudad: 'Mérida, Yuc.',
    empleados: '90 personas',
    desde: 2025,
    resumen: 'Opera mesas de ayuda y soporte técnico para universidades y hospitales.',
    beneficio: 'Contratación directa de egresados de Gestión de servicios',
    imagen: carpeta + 'ofi6.jpg',
  },
]