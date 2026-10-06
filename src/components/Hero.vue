<script setup lang="ts">
import { cursos } from '../interfaces/Curso'
import { certificaciones } from '../interfaces/Certificacion'
import { empresas } from '../interfaces/Empresa'
import { foto } from '../utils/enlaces'


// Si se agrega un curso o una empresa, el número cambiara solo.
const cifras = [
  { valor: cursos.length, texto: 'cursos en línea' },
  { valor: certificaciones.length, texto: 'certificaciones' },
  { valor: empresas.length, texto: 'empresas afiliadas' },
]
const imagenBanner = foto('photo-1522202176988-66273c2fd55f', 1400)
</script>

<template>
  <section class="hero">
    <!-- BANNER -->
    <img class="fondo" :src="imagenBanner" alt="Estudiantes aprendiendo con laptops" />
    <div class="capa"></div>

    <div class="container contenido">
      <span class="eyebrow">Licenciatura en Administración de Tecnologías de Información</span>
      <h1>Aprende tecnología a tu ritmo, con rumbo profesional.</h1>
      <p class="lead">Cursos en línea de programación, redes, bases de datos, seguridad y gestión de TI, con certificación al terminar.</p>
      <div class="botones">
        <RouterLink to="/cursos" class="btn">Explorar cursos</RouterLink>
        <RouterLink to="/inscripcion" class="btn btn-claro">Inscribirme</RouterLink>
      </div>

      <ul class="cifras">
        <li v-for="c in cifras" :key="c.texto">
          <strong>{{ c.valor }}</strong>
          <span>{{ c.texto }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
/* position: relative en el padre permite poner la foto y la capa encima con position: absolute */
.hero { position: relative; background: var(--ink); color: #fff; overflow: hidden; }
/* object-fit: cover → la foto llena todo el espacio sin deformarse */
.fondo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.capa { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(21, 26, 45, .94) 30%, rgba(21, 26, 45, .45)); }
.contenido { position: relative; padding: 8rem 0 5.5rem; }
.eyebrow { color: var(--highlight); }
h1 { max-width: 720px; }
.lead { color: #d6d5e6; margin: 1.4rem 0 2.2rem; font-size: 1.12rem; max-width: 540px; }
.botones { display: flex; gap: .8rem; flex-wrap: wrap; }
.btn-claro { background: transparent; color: #fff; border-color: rgba(255, 255, 255, .5); }
.btn-claro:hover { background: #fff; color: var(--ink); }
.cifras { list-style: none; padding: 0; display: flex; gap: 3rem; flex-wrap: wrap; margin-top: 4.5rem; }
.cifras strong { display: block; font-size: 2.2rem; line-height: 1; }
.cifras span { color: #b9b8cc; font-size: .88rem; }

@media (max-width: 700px) { .contenido { padding: 5rem 0 4rem; } .cifras { gap: 1.8rem; } }
</style>
