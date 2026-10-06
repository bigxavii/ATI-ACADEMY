import type { IdCategoria } from './Categoria'
import type { Material } from './Material'
import { foto, avatar, videoEnYoutube } from '../utils/enlaces'


export interface Modulo {
  titulo: string
  temas: string[]
}


export interface Instructor {
  nombre: string
  cargo: string
  bio: string
  foto: string
}


export interface Curso {
  id: number
  titulo: string
  categoria: IdCategoria                          
  nivel: 'Básico' | 'Intermedio' | 'Avanzado'    
  horas: number
  semanas: number
  precio: number                                 
  fechaInicio: string
  alumnos: number
  calificacion: number                            
  popular: boolean                                
  imagen: string
  resumen: string                                 
  descripcion: string                            
  dirigidoA: string
  aprenderas: string[]
  requisitos: string[]
  modulos: Modulo[]
  instructor: Instructor
  video?: string                                  
  materiales: Material[]
}


export const cursos: Curso[] = [
  {
    id: 1,
    titulo: 'Vue 3 y TypeScript',
    categoria: 'programacion',
    nivel: 'Intermedio',
    horas: 30,
    semanas: 6,
    precio: 1490,
    fechaInicio: '9 de noviembre de 2026',
    alumnos: 1840,
    calificacion: 4.9,
    popular: true,
    imagen: foto('photo-1461749280684-dccba630e2f6'),
    resumen: 'Construye interfaces reactivas con componentes, rutas y tipado.',
    descripcion:
      'Aprenderás a crear aplicaciones web modulares: cada parte de la página es un componente reutilizable que recibe datos (props), avisa lo que pasa (emits) y se muestra en su propia ruta. Al terminar tendrás un proyecto publicado en GitHub.',
    dirigidoA: 'Personas que ya conocen HTML, CSS y algo de JavaScript y quieren dar el salto a un framework.',
    aprenderas: [
      'Crear un proyecto con Vite y organizarlo en componentes',
      'Usar ref y reactive para que la pantalla se actualice sola',
      'Comunicar componentes con props y emits',
      'Definir rutas con parámetros usando Vue Router',
      'Tipar tus datos con interfaces de TypeScript',
    ],
    requisitos: ['HTML y CSS básicos', 'Nociones de JavaScript', 'Computadora con Node.js instalado'],
    modulos: [
      { titulo: 'Fundamentos', temas: ['Qué es un framework', 'Proyecto con Vite', 'Estructura de un componente .vue'] },
      { titulo: 'Reactividad', temas: ['ref y reactive', 'v-if, v-for y v-model', 'Clases dinámicas'] },
      { titulo: 'Componentes', temas: ['Props', 'Emits', 'Estilos por componente'] },
      { titulo: 'Navegación y proyecto final', temas: ['Vue Router', 'Rutas con parámetros', 'Publicación en GitHub'] },
    ],
    instructor: {
      nombre: 'Mtra. Daniela Pool',
      cargo: 'Desarrolladora frontend',
      bio: 'Ocho años creando aplicaciones web para startups de la península.',
      foto: avatar(5),
    },
    video: 'nhBVL41-_Cw',
    materiales: [
      { titulo: 'Guía oficial de Vue 3', tipo: 'documento', url: 'https://vuejs.org/guide/introduction.html' },
      { titulo: 'Manual de TypeScript', tipo: 'documento', url: 'https://www.typescriptlang.org/docs/' },
      { titulo: 'TypeScript en 100 segundos', tipo: 'video', url: videoEnYoutube('zQnBQ4tB3ZA') },
    ],
  },
  {
    id: 2,
    titulo: 'HTML y CSS desde cero',
    categoria: 'programacion',
    nivel: 'Básico',
    horas: 20,
    semanas: 4,
    precio: 0,
    fechaInicio: '2 de noviembre de 2026',
    alumnos: 3210,
    calificacion: 4.8,
    popular: false,
    imagen: foto('photo-1507721999472-8ed4421c4af2'),
    resumen: 'Estructura y estiliza páginas responsivas con Flexbox y Grid.',
    descripcion:
      'Dominarás las etiquetas esenciales de HTML5 y las bases de CSS para que tus páginas se vean bien en cualquier pantalla. Es el punto de partida ideal si nunca has programado.',
    dirigidoA: 'Cualquier persona que quiera crear su primera página web.',
    aprenderas: [
      'Estructurar un documento con encabezados, párrafos y listas',
      'Insertar imágenes, enlaces y divisores',
      'Aplicar estilos con clases',
      'Acomodar elementos con Flexbox y Grid',
      'Hacer que una página se adapte al celular',
    ],
    requisitos: ['Ninguno', 'Un editor de código como VS Code'],
    modulos: [
      { titulo: 'HTML', temas: ['Estructura de un documento', 'Encabezados h1 a h6', 'Listas, enlaces e imágenes'] },
      { titulo: 'CSS', temas: ['Selectores y clases', 'Modelo de caja', 'Colores y tipografía'] },
      { titulo: 'Diseño responsivo', temas: ['Flexbox', 'Grid', 'Media queries'] },
    ],
    instructor: {
      nombre: 'Ing. Carlos Euán',
      cargo: 'Diseñador web',
      bio: 'Ha enseñado a más de tres mil personas a crear su primer sitio.',
      foto: avatar(12),
    },
    video: 'ok-plXXHlWw',
    materiales: [
      { titulo: 'Aprende desarrollo web (MDN)', tipo: 'documento', url: 'https://developer.mozilla.org/es/docs/Learn' },
      { titulo: 'CSS en 100 segundos', tipo: 'video', url: videoEnYoutube('OEV8gMkCHXQ') },
    ],
  },
  {
    id: 3,
    titulo: 'Administración de Linux',
    categoria: 'redes',
    nivel: 'Intermedio',
    horas: 35,
    semanas: 7,
    precio: 1690,
    fechaInicio: '16 de noviembre de 2026',
    alumnos: 1525,
    calificacion: 4.8,
    popular: true,
    imagen: foto('photo-1518770660439-4636190af475'),
    resumen: 'Gestiona servidores: usuarios, permisos, servicios y automatización.',
    descripcion:
      'Trabajarás desde la terminal para instalar, configurar y mantener un servidor Linux como los que se usan en empresas reales. Cada módulo termina con una práctica en una máquina virtual.',
    dirigidoA: 'Estudiantes y técnicos que quieren administrar servidores.',
    aprenderas: [
      'Moverte con soltura en la terminal',
      'Crear usuarios y asignar permisos',
      'Instalar y supervisar servicios',
      'Programar respaldos automáticos',
    ],
    requisitos: ['Uso básico de computadora', 'Ganas de usar la terminal'],
    modulos: [
      { titulo: 'La terminal', temas: ['Comandos básicos', 'Sistema de archivos', 'Editores de texto'] },
      { titulo: 'Usuarios y permisos', temas: ['Usuarios y grupos', 'chmod y chown', 'sudo'] },
      { titulo: 'Servicios', temas: ['Procesos', 'systemd', 'Registros del sistema'] },
      { titulo: 'Automatización', temas: ['Scripts en Bash', 'cron', 'Respaldos'] },
    ],
    instructor: {
      nombre: 'Mtro. Iván Chan',
      cargo: 'Administrador de infraestructura',
      bio: 'Mantiene servidores de producción desde hace más de diez años.',
      foto: avatar(33),
    },
    video: 'rrB13utjYV4',
    materiales: [
      { titulo: 'Linux Journey', tipo: 'documento', url: 'https://linuxjourney.com/' },
      { titulo: 'Docker en 100 segundos', tipo: 'video', url: videoEnYoutube('Gjnup-PuquQ') },
    ],
  },
  {
    id: 4,
    titulo: 'PostgreSQL y SQL',
    categoria: 'datos',
    nivel: 'Básico',
    horas: 28,
    semanas: 6,
    precio: 1290,
    fechaInicio: '9 de noviembre de 2026',
    alumnos: 2030,
    calificacion: 4.7,
    popular: true,
    imagen: foto('photo-1558494949-ef010cbdcc31'),
    resumen: 'Diseña bases de datos y consúltalas con SQL de forma eficiente.',
    descripcion:
      'Del modelo relacional a las consultas con JOIN: aprenderás a guardar información de forma ordenada y a obtener respuestas de ella. Trabajarás con una base de datos de una tienda real.',
    dirigidoA: 'Personas que trabajan con información y quieren consultarla sin depender de nadie.',
    aprenderas: [
      'Diseñar tablas y relaciones',
      'Consultar con SELECT, WHERE y JOIN',
      'Insertar, actualizar y borrar registros',
      'Respaldar y restaurar una base de datos',
    ],
    requisitos: ['Uso básico de computadora', 'Lógica básica (no se necesita programar)'],
    modulos: [
      { titulo: 'Modelo relacional', temas: ['Tablas y columnas', 'Llaves primarias y foráneas', 'Diagramas'] },
      { titulo: 'Consultas', temas: ['SELECT y WHERE', 'ORDER BY y GROUP BY', 'JOIN'] },
      { titulo: 'Administración', temas: ['Usuarios y permisos', 'Respaldos', 'Restauración'] },
    ],
    instructor: {
      nombre: 'Dra. Sofía Cauich',
      cargo: 'Ingeniera de datos',
      bio: 'Diseña bases de datos para el sector salud y gobierno.',
      foto: avatar(47),
    },
    video: 'n2Fluyr3lbc',
    materiales: [
      { titulo: 'Documentación de PostgreSQL', tipo: 'documento', url: 'https://www.postgresql.org/docs/' },
      { titulo: 'SQL en 100 segundos', tipo: 'video', url: videoEnYoutube('zsjvFFKOm3c') },
    ],
  },
  {
    id: 5,
    titulo: 'Fundamentos de ciberseguridad',
    categoria: 'seguridad',
    nivel: 'Básico',
    horas: 25,
    semanas: 5,
    precio: 1390,
    fechaInicio: '23 de noviembre de 2026',
    alumnos: 1760,
    calificacion: 4.8,
    popular: true,
    imagen: foto('photo-1563986768609-322da13575f3'),
    resumen: 'Identifica riesgos y protege datos, cuentas e infraestructura.',
    descripcion:
      'Conocerás las amenazas más comunes y las prácticas para prevenirlas, detectarlas y responder a un incidente. Ideal para cualquier persona que maneje información sensible.',
    dirigidoA: 'Profesionistas de cualquier área y estudiantes de TI.',
    aprenderas: [
      'Explicar confidencialidad, integridad y disponibilidad',
      'Crear políticas de contraseñas y accesos',
      'Reconocer ataques de phishing',
      'Actuar ante un incidente de seguridad',
    ],
    requisitos: ['Uso básico de computadora e Internet'],
    modulos: [
      { titulo: 'Conceptos', temas: ['Tríada CID', 'Amenazas y vulnerabilidades', 'Riesgo'] },
      { titulo: 'Protección', temas: ['Contraseñas y doble factor', 'Control de accesos', 'Cifrado'] },
      { titulo: 'Respuesta', temas: ['Detección', 'Plan de respuesta', 'Recuperación'] },
    ],
    instructor: {
      nombre: 'Ing. Renata May',
      cargo: 'Analista de seguridad',
      bio: 'Coordina auditorías de seguridad para empresas de servicios financieros.',
      foto: avatar(32),
    },
    video: 'inWWhr5tnEA',
    materiales: [
      { titulo: 'OWASP Top 10', tipo: 'documento', url: 'https://owasp.org/www-project-top-ten/' },
      { titulo: 'Consejos de seguridad (INCIBE)', tipo: 'documento', url: 'https://www.incibe.es/ciudadania' },
    ],
  },
  {
    id: 6,
    titulo: 'Gestión ágil de proyectos de TI',
    categoria: 'gestion',
    nivel: 'Intermedio',
    horas: 24,
    semanas: 5,
    precio: 1590,
    fechaInicio: '16 de noviembre de 2026',
    alumnos: 1380,
    calificacion: 4.7,
    popular: true,
    imagen: foto('photo-1552664730-d307ca884978'),
    resumen: 'Planea, prioriza y entrega proyectos de tecnología con Scrum.',
    descripcion:
      'Aprenderás a organizar un equipo, priorizar el trabajo y entregar valor en ciclos cortos. Simularás un proyecto completo desde la primera reunión hasta la entrega.',
    dirigidoA: 'Líderes de equipo, desarrolladores y estudiantes que coordinan proyectos.',
    aprenderas: [
      'Aplicar los principios ágiles',
      'Organizar un equipo con Scrum',
      'Construir y priorizar un backlog',
      'Medir el avance del equipo',
    ],
    requisitos: ['Haber participado en algún proyecto (escolar o laboral)'],
    modulos: [
      { titulo: 'Agilidad', temas: ['Manifiesto ágil', 'Ágil vs. tradicional'] },
      { titulo: 'Scrum', temas: ['Roles', 'Eventos', 'Artefactos'] },
      { titulo: 'En la práctica', temas: ['Historias de usuario', 'Estimación', 'Métricas'] },
    ],
    instructor: {
      nombre: 'Mtro. Tomás Dzul',
      cargo: 'Scrum Master',
      bio: 'Ha guiado más de cuarenta equipos de desarrollo.',
      foto: avatar(15),
    },
    video: '502ILHjX9EE',
    materiales: [
      { titulo: 'La Guía de Scrum', tipo: 'documento', url: 'https://scrumguides.org/scrum-guide.html' },
      { titulo: 'Manifiesto ágil', tipo: 'documento', url: 'https://agilemanifesto.org/iso/es/manifesto.html' },
    ],
  },
  {
    id: 7,
    titulo: 'Pruebas de software',
    categoria: 'gestion',
    nivel: 'Intermedio',
    horas: 22,
    semanas: 4,
    precio: 1190,
    fechaInicio: '30 de noviembre de 2026',
    alumnos: 860,
    calificacion: 4.6,
    popular: false,
    imagen: foto('photo-1555949963-ff9fe0c870eb'),
    resumen: 'Diseña casos de prueba y asegura la calidad antes de liberar.',
    descripcion:
      'Verás cómo planear pruebas, documentar defectos y comprobar que el software cumple lo que se prometió, antes de que llegue a las manos del usuario.',
    dirigidoA: 'Desarrolladores y personas interesadas en el área de calidad (QA).',
    aprenderas: ['Distinguir los tipos de prueba', 'Escribir casos de prueba', 'Reportar defectos con claridad'],
    requisitos: ['Conocer el ciclo de vida del software'],
    modulos: [
      { titulo: 'Bases de la calidad', temas: ['Tipos y niveles de prueba', 'La pirámide de pruebas'] },
      { titulo: 'Diseño de pruebas', temas: ['Casos de prueba', 'Datos de prueba', 'Reporte de defectos'] },
    ],
    instructor: {
      nombre: 'Ing. Paola Ek',
      cargo: 'Líder de calidad',
      bio: 'Responsable de calidad en una empresa de software educativo.',
      foto: avatar(44),
    },
    // Este  no tiene video.
    materiales: [
      { titulo: 'La pirámide de pruebas', tipo: 'documento', url: 'https://martinfowler.com/articles/practical-test-pyramid.html' },
    ],
  },
  {
    id: 8,
    titulo: 'Gestión de servicios de TI',
    categoria: 'gestion',
    nivel: 'Avanzado',
    horas: 26,
    semanas: 5,
    precio: 1790,
    fechaInicio: '30 de noviembre de 2026',
    alumnos: 640,
    calificacion: 4.6,
    popular: false,
    imagen: foto('photo-1551434678-e076c223a692'),
    resumen: 'Administra el catálogo, la mesa de ayuda y la mejora continua.',
    descripcion:
      'Entenderás cómo una organización ofrece, mide y mejora sus servicios de tecnología, desde la mesa de ayuda hasta los acuerdos de nivel de servicio.',
    dirigidoA: 'Personal de soporte, coordinadores de TI y estudiantes avanzados.',
    aprenderas: ['Diseñar un catálogo de servicios', 'Gestionar incidentes y cambios', 'Definir niveles de servicio'],
    requisitos: ['Experiencia básica en soporte técnico'],
    modulos: [
      { titulo: 'Servicios', temas: ['Catálogo de servicios', 'Mesa de ayuda'] },
      { titulo: 'Operación', temas: ['Incidentes', 'Problemas', 'Cambios'] },
      { titulo: 'Mejora', temas: ['Niveles de servicio', 'Mejora continua'] },
    ],
    instructor: {
      nombre: 'Mtro. Hugo Balam',
      cargo: 'Consultor de servicios de TI',
      bio: 'Implementa mesas de ayuda en universidades y hospitales.',
      foto: avatar(8),
    },
    materiales: [
      { titulo: 'Qué es ITSM (Atlassian)', tipo: 'documento', url: 'https://www.atlassian.com/es/itsm' },
    ],
  },
  {
    id: 9,
    titulo: 'Git y GitHub para equipos',
    categoria: 'programacion',
    nivel: 'Básico',
    horas: 12,
    semanas: 2,
    precio: 0,
    fechaInicio: '2 de noviembre de 2026',
    alumnos: 2890,
    calificacion: 4.9,
    popular: false,
    imagen: foto('photo-1515879218367-8466d910aaa4'),
    resumen: 'Versiona tu código y colabora con ramas y repositorios remotos.',
    descripcion:
      'Aprenderás el flujo de trabajo que usan los equipos de desarrollo para no perder ni pisar el trabajo de nadie. Al final subirás tu primer proyecto a GitHub.',
    dirigidoA: 'Cualquier persona que escriba código, sola o en equipo.',
    aprenderas: ['Guardar versiones con commits', 'Trabajar con ramas', 'Colaborar en GitHub'],
    requisitos: ['Ninguno'],
    modulos: [
      { titulo: 'Git local', temas: ['Repositorios', 'Commits', 'Historial'] },
      { titulo: 'Trabajo en equipo', temas: ['Ramas', 'Fusiones', 'GitHub y .gitignore'] },
    ],
    instructor: {
      nombre: 'Ing. Valeria Chi',
      cargo: 'Ingeniera de software',
      bio: 'Contribuye a proyectos de código abierto desde la universidad.',
      foto: avatar(23),
    },
    video: 'hwP7WQkmECE',
    materiales: [
      { titulo: 'Libro Pro Git (español)', tipo: 'documento', url: 'https://git-scm.com/book/es/v2' },
      { titulo: 'Documentación de GitHub', tipo: 'documento', url: 'https://docs.github.com/es' },
    ],
  },
  {
    id: 10,
    titulo: 'Redes y conectividad',
    categoria: 'redes',
    nivel: 'Intermedio',
    horas: 30,
    semanas: 6,
    precio: 1490,
    fechaInicio: '23 de noviembre de 2026',
    alumnos: 1120,
    calificacion: 4.7,
    popular: false,
    imagen: foto('photo-1544197150-b99a580bb7a8'),
    resumen: 'Comprende redes locales, direccionamiento y servicios de Internet.',
    descripcion:
      'Verás cómo viajan los datos entre equipos, cómo se asignan las direcciones IP y en qué se diferencian Internet, intranet y extranet.',
    dirigidoA: 'Estudiantes de TI y técnicos de soporte.',
    aprenderas: ['Explicar el modelo de capas', 'Calcular direcciones IP', 'Configurar una red local'],
    requisitos: ['Uso básico de computadora'],
    modulos: [
      { titulo: 'Conceptos', temas: ['Internet, intranet y extranet', 'Modelo OSI y TCP/IP'] },
      { titulo: 'Direccionamiento', temas: ['IPv4', 'Subredes', 'DHCP y DNS'] },
      { titulo: 'Redes locales', temas: ['Switches y routers', 'Wi-Fi', 'Seguridad básica'] },
    ],
    instructor: {
      nombre: 'Mtro. Emilio Uc',
      cargo: 'Ingeniero de redes',
      bio: 'Diseña redes para escuelas y oficinas de gobierno en Yucatán.',
      foto: avatar(60),
    },
    video: '3QhU9jd03a0',
    materiales: [
      {
        titulo: '¿Cómo funciona Internet? (MDN)',
        tipo: 'documento',
        url: 'https://developer.mozilla.org/es/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work',
      },
    ],
  },
]
