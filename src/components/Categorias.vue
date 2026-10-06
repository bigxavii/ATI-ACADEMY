<script setup lang="ts">
import { categorias } from '../interfaces/Categoria'
import { cursos } from '../interfaces/Curso'


const contar = (id: string): number => cursos.filter((c) => c.categoria === id).length
</script>

<template>
  <section class="section section-alt">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Categorías</span>
        <h2>Explora por área</h2>
        <p>Elige el área que más te interesa y ve directo a sus cursos.</p>
      </div>

      <div class="grid">
        <!--una tarjeta por cada categoria-->
        <RouterLink v-for="c in categorias" :key="c.id" class="tile" :class="'cat-' + c.id"
          :to="{ name: 'cursos', query: { categoria: c.id } }">
          <img :src="c.imagen" :alt="c.nombre" loading="lazy" />
          <div class="info">
            <h3>{{ c.nombre }}</h3>
            <p>{{ c.descripcion }}</p>
            <span>{{ contar(c.id) }} {{ contar(c.id) === 1 ? 'curso' : 'cursos' }} →</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*tarjetas de categorías */
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.25rem; }
.tile { display: flex; flex-direction: column; background: #fff; border: 1px solid var(--line);
  border-radius: var(--radius); overflow: hidden; transition: transform .35s ease, border-color .35s ease; }
.tile:hover { transform: translateY(-4px); border-color: var(--cat); }
.tile img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; background: var(--cat); }
/* Borde con el color de la categoría */
.info { padding: 1.1rem 1.2rem 1.3rem; border-top: 4px solid var(--cat); display: grid; gap: .3rem; }
.info p { font-size: .88rem; }
.info span { font-size: .85rem; font-weight: 700; color: var(--cat); margin-top: .3rem; }
</style>
