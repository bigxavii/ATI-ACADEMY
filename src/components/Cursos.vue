<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CursoCard from './CursoCard.vue'
import { cursos } from '../interfaces/Curso'
import { categorias } from '../interfaces/Categoria'

const route = useRoute()     
const router = useRouter()   

const categoriaActiva = ref(String(route.query.categoria ?? 'todas'))


const filtrados = () => {
  if (categoriaActiva.value === 'todas') {
    return cursos
  }
  return cursos.filter((c) => c.categoria === categoriaActiva.value)
}

//muestra el numero de cursos por categoria
const contar = (id: string): number => cursos.filter((c) => c.categoria === id).length

const irAInscripcion = (id: number) => {
  router.push({ name: 'inscripcion', params: { id } })
}
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Catálogo</span>
        <h1>Todos los cursos</h1>
        <p>Filtra por área y entra a cada curso para ver su temario, el instructor y el material de apoyo.</p>
      </div>

      <!-- un botón Todos y uno por categoría-->
      <div class="filtros">
        <button type="button" :class="{ activo: categoriaActiva === 'todas' }" @click="categoriaActiva = 'todas'">
          Todos ({{ cursos.length }})
        </button>
        <button v-for="c in categorias" :key="c.id" type="button"
          :class="['cat-' + c.id, { activo: categoriaActiva === c.id }]" @click="categoriaActiva = c.id">
          {{ c.nombre }} ({{ contar(c.id) }})
        </button>
      </div>

      <p class="resultado">Mostrando {{ filtrados().length }} de {{ cursos.length }} cursos</p>

      <div class="grid">
        <CursoCard v-for="c in filtrados()" :key="c.id" :curso="c" @inscribir="irAInscripcion" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.filtros { display: flex; flex-wrap: wrap; gap: .6rem; margin-bottom: 1.5rem; }
.filtros button { padding: .55rem 1.15rem; border-radius: 999px; border: 1px solid var(--line); background: #fff;
  font: inherit; font-size: .9rem; cursor: pointer; color: var(--ink); transition: all .25s ease; }
.filtros button:hover { border-color: var(--cat, var(--accent)); color: var(--cat, var(--accent)); }
/* El botón activo se rellena con el color de su categoría */
.filtros button.activo { background: var(--cat, var(--accent)); border-color: var(--cat, var(--accent)); color: #fff; }
.resultado { font-size: .9rem; margin-bottom: 1.5rem; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 1.75rem; }
</style>
