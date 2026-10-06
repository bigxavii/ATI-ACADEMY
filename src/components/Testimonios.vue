<script setup lang="ts">
import { ref } from 'vue'
import { testimonios } from '../interfaces/Testimonio'

// Carrusel de casos de éxito
const pista = ref<HTMLElement | null>(null)
const mover = (direccion: number) => {
  pista.value?.scrollBy({ left: direccion * 420 })
}
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="cabecera">
        <div class="section-head">
          <span class="eyebrow">Casos de éxito</span>
          <h2>Historias de quienes ya dieron el paso</h2>
          <p>Personas que cambiaron su trayectoria profesional con ATI Academy.</p>
        </div>
        <div class="flechas">
          <button type="button" aria-label="Anterior" @click="mover(-1)">‹</button>
          <button type="button" aria-label="Siguiente" @click="mover(1)">›</button>
        </div>
      </div>

      <div ref="pista" class="pista">
        <article v-for="t in testimonios" :key="t.id" class="caso">
          <img :src="t.foto" :alt="'Fotografía de ' + t.nombre" loading="lazy" />
          <div class="texto">
            <span class="logro">{{ t.logro }}</span>
            <!-- <blockquote> es la etiqueta CITA -->
            <blockquote>“{{ t.texto }}”</blockquote>
            <div class="autor">
              <strong>{{ t.nombre }}</strong>
              <span>{{ t.puesto }} en {{ t.empresa }}</span>
              <span class="curso">Cursó: {{ t.curso }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tarjeta de foto y texto */
.caso { width: 560px; display: grid; grid-template-columns: 200px 1fr; background: var(--surface);
  border-radius: var(--radius); overflow: hidden; }
.caso img { width: 100%; height: 100%; min-height: 280px; object-fit: cover; background: var(--line); }
.texto { padding: 1.8rem; display: grid; gap: 1rem; align-content: space-between; }
.logro { justify-self: start; font-size: .75rem; font-weight: 700; background: var(--highlight); color: var(--ink);
  padding: .25rem .75rem; border-radius: 999px; }
blockquote { font-size: 1.08rem; line-height: 1.55; color: var(--ink); }
.autor { display: grid; gap: .1rem; font-size: .88rem; color: var(--muted); }
.autor strong { color: var(--ink); font-size: 1rem; }
.curso { color: var(--accent); font-weight: 600; }

/* Ajustes de orden para telefono */
@media (max-width: 640px) {
  .caso { width: 84vw; grid-template-columns: 1fr; }
  .caso img { min-height: 0; aspect-ratio: 4 / 3; }
}
</style>
