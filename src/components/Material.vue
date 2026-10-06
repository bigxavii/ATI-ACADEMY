<script setup lang="ts">
import { cursos } from '../interfaces/Curso'
import { videoEnYoutube } from '../utils/enlaces'

</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Material de apoyo</span>
        <h1>Recursos por curso</h1>
        <p>Documentación oficial y videos recomendados para reforzar cada tema.</p>
      </div>

      <div class="grid">
        <!-- recorrido de los materiales -->
        <div v-for="c in cursos" :key="c.id" class="bloque" :class="'cat-' + c.categoria">
          <h2><RouterLink :to="{ name: 'curso', params: { id: c.id } }">{{ c.titulo }}</RouterLink></h2>
          <ul>
            <!-- Si el curso tiene video, primero se agrega un enlace a ese video -->
            <li v-if="c.video">
              <a :href="videoEnYoutube(c.video)" target="_blank" rel="noopener"><span class="tipo">Video</span> Video introductorio</a>
            </li>
            <li v-for="m in c.materiales" :key="m.titulo">
              <a :href="m.url" target="_blank" rel="noopener">
                <span class="tipo">{{ m.tipo === 'video' ? 'Video' : 'Documento' }}</span>
                {{ m.titulo }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.25rem; }
/* Borde superior con el color de la categoría para identificar cada bloque */
.bloque { border: 1px solid var(--line); border-top: 4px solid var(--cat); border-radius: 12px; padding: 1.4rem 1.5rem; }
.bloque h2 { font-size: 1.15rem; margin-bottom: .8rem; }
.bloque h2 a:hover { color: var(--cat); }
ul { list-style: none; padding: 0; display: grid; gap: .5rem; }
li a { display: inline-flex; align-items: center; gap: .6rem; font-size: .93rem; transition: color .2s ease; }
li a:hover { color: var(--cat); }
.tipo { font-size: .7rem; font-weight: 700; color: var(--cat); background: color-mix(in srgb, var(--cat) 12%, white);
  padding: .1rem .55rem; border-radius: 999px; min-width: 76px; text-align: center; }
</style>
