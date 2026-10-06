<script setup lang="ts">
import { ref } from 'vue'
import { empresas } from '../interfaces/Empresa'


//carrusel de elementos
const pista = ref<HTMLElement | null>(null)
const mover = (direccion: number) => {
  pista.value?.scrollBy({ left: direccion * 360 })
}
</script>

<template>
  <section class="section section-alt">
    <div class="container">
      <div class="cabecera">
        <div class="section-head">
          <span class="eyebrow">Empresas afiliadas</span>
          <h2>Dónde trabajan nuestros egresados</h2>
          <p>Organizaciones que reconocen nuestras certificaciones y abren sus puertas a quienes las obtienen.</p>
        </div>
        <div class="flechas">
          <button type="button" aria-label="Anterior" @click="mover(-1)">‹</button>
          <button type="button" aria-label="Siguiente" @click="mover(1)">›</button>
        </div>
      </div>

      <div ref="pista" class="pista">
        <!--una tarjeta por cada empresa-->
        <article v-for="e in empresas" :key="e.id" class="empresa">
          <img :src="e.imagen" :alt="'Oficinas de ' + e.nombre" loading="lazy" />
          <div class="cuerpo">
            <span class="sector">{{ e.sector }}</span>
            <h3>{{ e.nombre }}</h3>
            <p>{{ e.resumen }}</p>
            <!-- Lista de datos -->
            <dl>
              <div><dt>Ciudad</dt><dd>{{ e.ciudad }}</dd></div>
              <div><dt>Equipo</dt><dd>{{ e.empleados }}</dd></div>
              <div><dt>Afiliada desde</dt><dd>{{ e.desde }}</dd></div>
            </dl>
            <p class="beneficio">{{ e.beneficio }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.empresa { width: 340px; background: #fff; border: 1px solid var(--line); border-radius: var(--radius);
  overflow: hidden; display: flex; flex-direction: column; transition: transform .35s ease, box-shadow .35s ease; }
.empresa:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(21, 26, 45, .08); }
.empresa img { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; background: var(--line); }
.cuerpo { padding: 1.4rem 1.5rem 1.6rem; display: grid; gap: .6rem; flex: 1; align-content: start; }
.sector { font-size: .75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--accent); }
.cuerpo > p { font-size: .92rem; }
dl { display: grid; gap: .35rem; font-size: .85rem; padding: .8rem 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
dl div { display: flex; justify-content: space-between; gap: 1rem; }
dt { color: var(--muted); }
dd { font-weight: 600; }
.beneficio { font-size: .85rem; color: var(--ink); background: var(--accent-soft); padding: .55rem .8rem; border-radius: 10px; }
@media (max-width: 500px) { .empresa { width: 84vw; } }
</style>
