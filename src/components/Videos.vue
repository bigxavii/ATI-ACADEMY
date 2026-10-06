<script setup lang="ts">
import { ref } from 'vue'
import { cursos } from '../interfaces/Curso'
import { miniatura, videoEmbebido } from '../utils/enlaces'

// tomamos los populares con video nos quedamos con los 3 primeros.
const conVideo = cursos.filter((c) => c.popular && c.video !== undefined).slice(0, 3)

// Para que la página cargue rápido NO se cargan los reproductores de YouTube al inicio.
const reproduciendo = ref<number | null>(null)
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Videos</span>
        <h2>Mira antes de elegir</h2>
        <p>Videos cortos para conocer las tecnologías que enseñamos.</p>
      </div>

      <div class="grid">
        <figure v-for="c in conVideo" :key="c.id">
          <!-- Filtro para reporduccion -->
          <iframe v-if="reproduciendo === c.id" :src="videoEmbebido(c.video!)" :title="'Video de ' + c.titulo"
            allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <button v-else type="button" class="miniatura" @click="reproduciendo = c.id">
            <img :src="miniatura(c.video!)" :alt="'Miniatura del video de ' + c.titulo" loading="lazy" />
            <span class="play">▶</span>
          </button>
          <figcaption>
            <RouterLink :to="{ name: 'curso', params: { id: c.id } }">{{ c.titulo }} →</RouterLink>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
/* aspect-ratio mantiene sin importar el ancho */
iframe, .miniatura { width: 100%; aspect-ratio: 16 / 9; border: 0; border-radius: var(--radius); background: var(--ink); }
.miniatura { position: relative; overflow: hidden; cursor: pointer; padding: 0; }
.miniatura img { width: 100%; height: 100%; object-fit: cover; opacity: .85; transition: transform .5s ease, opacity .3s ease; }
.miniatura:hover img { transform: scale(1.04); opacity: 1; }
.play { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px;
  border-radius: 50%; background: #fff; color: var(--ink); display: grid; place-items: center; font-size: 1.1rem;
  padding-left: 4px; transition: transform .3s ease; }
.miniatura:hover .play { transform: translate(-50%, -50%) scale(1.08); }
figcaption { margin-top: .8rem; font-weight: 600; }
figcaption a:hover { color: var(--accent); }
</style>
