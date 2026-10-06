<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CursoCard from './CursoCard.vue'
import CursoFila from './CursoFila.vue'
import { cursos } from '../interfaces/Curso'


const router = useRouter()
const populares = cursos.filter((c) => c.popular)
const verTodos = ref(false)
//carrusel
const pista = ref<HTMLElement | null>(null)
const mover = (direccion: number) => {
  pista.value?.scrollBy({ left: direccion * 340 })
}

// manda a inscribir cuando presiono boton
const irAInscripcion = (id: number) => {
  router.push({ name: 'inscripcion', params: { id } })
}
</script>

<template>
  <section id="destacados" class="section">
    <div class="container">
      <div class="cabecera">
        <div class="section-head">
          <span class="eyebrow">Más demandados</span>
          <h2>Los cursos que más se están tomando</h2>
          <p>Los {{ populares.length }} cursos con más inscripciones este semestre.</p>
        </div>
        <div class="flechas">
          <button type="button" aria-label="Anterior" @click="mover(-1)">‹</button>
          <button type="button" aria-label="Siguiente" @click="mover(1)">›</button>
        </div>
      </div>

      <!-- Carrusel de cursos populares -->
      <div ref="pista" class="pista">
        <div v-for="c in populares" :key="c.id" class="slide">
          <CursoCard :curso="c" @inscribir="irAInscripcion" />
        </div>
      </div>

      <div class="ver-mas">
        <button type="button" class="btn btn-ghost" @click="verTodos = !verTodos">
          {{ verTodos ? 'Ocultar lista' : `Ver todos los cursos (${cursos.length})` }}
        </button>
      </div>

      <!-- <Transition> anima la aparición y desaparición del bloque que tiene v-if-->
      <Transition name="desplegar">
        <div v-if="verTodos" class="lista">
          <h3>Todos los cursos</h3>
          <!-- TODOS los cursos-->
          <ul>
            <CursoFila v-for="c in cursos" :key="c.id" :curso="c" @inscribir="irAInscripcion" />
          </ul>
          <RouterLink to="/cursos" class="enlace">Ir al catálogo con filtros por categoría</RouterLink>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.slide { width: 320px; }
@media (max-width: 500px) { .slide { width: 82vw; } }

.ver-mas { text-align: center; margin-top: 2rem; }
.lista { margin-top: 3rem; }
.lista h3 { font-size: 1.3rem; margin-bottom: .5rem; }
.lista ul { list-style: none; padding: 0; margin-bottom: 1.5rem; }
</style>
