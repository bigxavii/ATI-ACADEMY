<script setup lang="ts">
import { certificaciones } from '../interfaces/Certificacion'
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Certificaciones</span>
        <h1>Respalda lo que sabes</h1>
        <p>Aprueba los cursos requeridos y obtén una constancia digital que puedes compartir con empleadores.</p>
      </div>

      <!-- Filas alternadas: en las filas impares la foto cambia de lado-->
      <article v-for="c in certificaciones" :key="c.id" class="cert">
        <img :src="c.imagen" :alt="'Imagen de la certificación ' + c.nombre" loading="lazy" />
        <div class="texto">
          <span class="tag">{{ c.horas }} horas</span>
          <h2>{{ c.nombre }}</h2>
          <p>{{ c.descripcion }}</p>
          <h3>Cursos requeridos</h3>
          <!-- Lista numerada con los cursos -->
          <ol>
            <li v-for="r in c.requisitos" :key="r">{{ r }}</li>
          </ol>
          <RouterLink to="/inscripcion" class="btn">Comenzar</RouterLink>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.cert { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; padding: 3rem 0; border-top: 1px solid var(--line); }
.cert img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: var(--radius); background: var(--surface); }
/* :nth-child(odd) = elementos impares. order: -1 pasa el texto antes que la foto */
.cert:nth-child(odd) .texto { order: -1; }
.texto { display: grid; gap: .9rem; justify-items: start; }
.texto h3 { margin-top: .5rem; }
.texto li { color: var(--muted); margin-bottom: .25rem; }
@media (max-width: 800px) {
  .cert { grid-template-columns: 1fr; gap: 1.8rem; }
  .cert:nth-child(odd) .texto { order: 0; }
}
</style>
