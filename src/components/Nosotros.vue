<script setup lang="ts">
import { cursos } from '../interfaces/Curso'
import { empresas } from '../interfaces/Empresa'
import { foto } from '../utils/enlaces'

//suma de los alumnos
const totalAlumnos = cursos.reduce((suma, c) => suma + c.alumnos, 0)

// Arreglos para pintar con v-for
const valores = [
  { titulo: 'Aprender haciendo', texto: 'Cada módulo termina con una práctica, no con un examen de memoria.' },
  { titulo: 'Claridad', texto: 'Explicamos con ejemplos cotidianos y sin tecnicismos innecesarios.' },
  { titulo: 'Privacidad', texto: 'Tus datos se usan solo para tu formación. Nunca los vendemos.' },
  { titulo: 'Comunidad', texto: 'Instructores y egresados que siguen ayudándose después del curso.' },
]
const pasos = ['Elige un curso del catálogo', 'Inscríbete en línea', 'Estudia con videos, lecturas y prácticas', 'Obtén tu constancia o certificación']

// tomamos los primeros 4 instructores de los cursos
const equipo = cursos.map((c) => c.instructor).slice(0, 4)

const imagen = foto('photo-1522071820081-009f0129c71c', 1000)
</script>

<template>
  <div>
    <!--PRESENTACIÓN-->
    <section class="section">
      <div class="container dos">
        <div>
          <span class="eyebrow">Quiénes somos</span>
          <h1>Tecnología explicada por gente que la usa todos los días</h1>
          <p class="intro">ATI Academy nació en 2022 dentro de la Licenciatura en Administración de Tecnologías de Información, como un proyecto para acercar la tecnología a cualquier persona con cursos prácticos, accesibles y en español.</p>
          <p>Hoy reunimos a instructores de la industria y a empresas del sureste que buscan talento, para que lo que aprendes en línea se convierta en una oportunidad real de trabajo.</p>
        </div>
        <img :src="imagen" alt="Equipo de ATI Academy trabajando" />
      </div>
    </section>

    <!-- CIFRAS -->
    <section class="cifras">
      <div class="container fila">
        <div><strong>{{ totalAlumnos.toLocaleString('es-MX') }}</strong><span>alumnos inscritos</span></div>
        <div><strong>{{ cursos.length }}</strong><span>cursos en línea</span></div>
        <div><strong>{{ empresas.length }}</strong><span>empresas afiliadas</span></div>
        <div><strong>2022</strong><span>año de fundación</span></div>
      </div>
    </section>

    <!--MISION Y VISION-->
    <section class="section">
      <div class="container dos-iguales">
        <div>
          <h2>Misión</h2>
          <p>Formar personas capaces de usar y administrar la tecnología de forma ética y profesional, con cursos en línea prácticos y de calidad.</p>
        </div>
        <div>
          <h2>Visión</h2>
          <p>Ser la plataforma de referencia en el sureste de México para aprender tecnologías de la información y conectar ese aprendizaje con el empleo.</p>
        </div>
      </div>

      <div class="container"><hr /></div>

      <div class="container">
        <h2>Lo que nos guía</h2>
        <div class="valores">
          <div v-for="v in valores" :key="v.titulo">
            <h3>{{ v.titulo }}</h3>
            <p>{{ v.texto }}</p>
          </div>
        </div>
      </div>
    </section>

    <!--CÓMO FUNCIONA -->
    <section class="section section-alt">
      <div class="container">
        <h2>Cómo funciona</h2>
        <ol class="pasos">
          <li v-for="p in pasos" :key="p">{{ p }}</li>
        </ol>
      </div>
    </section>

    <!-- EQUIPO -->
    <section class="section">
      <div class="container">
        <h2>Parte de nuestro equipo</h2>
        <div class="equipo">
          <div v-for="persona in equipo" :key="persona.nombre" class="persona">
            <img :src="persona.foto" :alt="'Foto de ' + persona.nombre" loading="lazy" />
            <h3>{{ persona.nombre }}</h3>
            <span>{{ persona.cargo }}</span>
          </div>
        </div>
        <RouterLink to="/contacto" class="btn">Habla con nosotros</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.dos { display: grid; grid-template-columns: 1.15fr 1fr; gap: 4rem; align-items: center; }
.intro { margin: 1.2rem 0 1rem; font-size: 1.12rem; color: var(--ink); }
.dos img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: var(--radius); background: var(--surface); }

.cifras { background: var(--ink); color: #fff; padding: 3.5rem 0; }
.fila { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
.fila strong { display: block; font-size: 2.3rem; line-height: 1.1; }
.fila span { color: #b9b8cc; font-size: .9rem; }

.dos-iguales { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
.dos-iguales h2, .section h2 { margin-bottom: .8rem; }
.valores { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2rem; margin-top: 1.5rem; }
.valores h3 { margin-bottom: .4rem; }

/* counter: números grandes hechos con CSS para la lista */
.pasos { list-style: none; padding: 0; counter-reset: paso; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 1.5rem; }
.pasos li { counter-increment: paso; background: #fff; border-radius: var(--radius); padding: 1.5rem; font-weight: 600; }
.pasos li::before { content: '0' counter(paso); display: block; font-size: 1.8rem; font-weight: 800; color: var(--accent); margin-bottom: .5rem; }

.equipo { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 2rem; margin: 1.5rem 0 2.5rem; }
.persona img { width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: var(--radius); background: var(--surface); margin-bottom: .8rem; }
.persona span { font-size: .88rem; color: var(--muted); }

@media (max-width: 800px) {
  .dos, .dos-iguales { grid-template-columns: 1fr; gap: 2rem; }
  .fila { grid-template-columns: 1fr 1fr; }
}
</style>
