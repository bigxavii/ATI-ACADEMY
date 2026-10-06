<script setup lang="ts">
import Hero from './Hero.vue'
import Destacados from './Destacados.vue'
import Categorias from './Categorias.vue'
import Videos from './Videos.vue'
import Afiliadas from './Afiliadas.vue'
import Testimonios from './Testimonios.vue'
import { certificaciones } from '../interfaces/Certificacion'

const destacada = certificaciones[0]
</script>

<template>
  <div>
    <Hero />
    <Destacados />
    <Categorias />
    <Videos />

    <!-- v-if evita un error si el arreglo estuviera vacío -->
    <section v-if="destacada" class="franja">
      <div class="container dos">
        <img :src="destacada.imagen" :alt="'Certificación ' + destacada.nombre" loading="lazy" />
        <div>
          <span class="eyebrow">Certificaciones</span>
          <h2>Valida lo que sabes</h2>
          <p>Obtén la certificación <strong>{{ destacada.nombre }}</strong> y presenta una constancia digital de {{ destacada.horas }} horas a tus futuros empleadores.</p>
          <RouterLink to="/certificaciones" class="btn">Ver certificaciones</RouterLink>
        </div>
      </div>
    </section>

    <Afiliadas />
    <Testimonios />
  </div>
</template>

<style scoped>
.franja { background: var(--ink); color: #fff; padding: 5.5rem 0; }
.franja .eyebrow { color: var(--highlight); }
.franja p { color: #c9c8da; margin: 1rem 0 2rem; max-width: 460px; }
.franja strong { color: #fff; }
.dos { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
.dos img { width: 100%; aspect-ratio: 16 / 10; object-fit: cover; border-radius: var(--radius); background: #23294a; }
.franja .btn { background: #fff; color: var(--ink); border-color: #fff; }
.franja .btn:hover { background: var(--highlight); border-color: var(--highlight); }
@media (max-width: 800px) { .dos { grid-template-columns: 1fr; gap: 2rem; } }
</style>
