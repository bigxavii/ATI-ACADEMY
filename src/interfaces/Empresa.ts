import { foto } from '../utils/enlaces'

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
    imagen: foto('photo-1497366216548-37526070297c', 600),
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
    imagen: foto('photo-1486406146926-c627a92ad1ab', 600),
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
    imagen: foto('photo-1497215728101-856f4ea42174', 600),
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
    imagen: foto('photo-1522071820081-009f0129c71c', 600),
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
    imagen: foto('photo-1556761175-5973dc0f32e7', 600),
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
    imagen: foto('photo-1504384308090-c894fdcc538d', 600),
  },
]
