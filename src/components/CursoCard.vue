<script setup lang="ts">
import type { Curso } from '../interfaces/Curso'
import { categorias } from '../interfaces/Categoria'
import { precio } from '../utils/enlaces'

// PROPS: datos que el componente PADRE le manda a este componente HIJO.
const props = defineProps<{ curso: Curso }>()

// EMITS: eventos que el HIJO le avisa al PADRE.
const emit = defineEmits<{ (e: 'inscribir', id: number): void }>()

const nombreCategoria = categorias.find((c) => c.id === props.curso.categoria)?.nombre
</script>

<template>
  <article class="card" :class="'cat-' + curso.categoria">
    <RouterLink :to="{ name: 'curso', params: { id: curso.id } }" class="enlace-curso">
      <div class="foto">
        <img :src="curso.imagen" :alt="'Imagen del curso ' + curso.titulo" loading="lazy" />
        <!-- solo se dibuja cuando curso.popular es true -->
        <span v-if="curso.popular" class="demanda">Más demandado</span>
      </div>
      <div class="texto">
        <span class="tag">{{ nombreCategoria }}</span>
        <h3>{{ curso.titulo }}</h3>
        <p>{{ curso.resumen }}</p>
        <span class="meta">{{ curso.nivel }} · {{ curso.horas }} h · ★ {{ curso.calificacion }}</span>
      </div>
    </RouterLink>

    <div class="pie">
      <strong>{{ precio(curso.precio) }}</strong>
      <!-- Al clickear se EMITE 'inscribir' y  manda el id del curso al padre -->
      <button type="button" class="btn" @click="emit('inscribir', curso.id)">Inscribirme</button>
    </div>
  </article>
</template>

<style scoped>
.card { display: flex; flex-direction: column; height: 100%; background: #fff; border: 1px solid var(--line);
  border-radius: var(--radius); overflow: hidden; transition: transform .35s ease, box-shadow .35s ease; }
.card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(21, 26, 45, .08); }
.enlace-curso { display: block; flex: 1; }

/* El fondo de la foto es el color de la categoría: se ve mientras la imagen carga */
.foto { position: relative; aspect-ratio: 16 / 10; overflow: hidden; background: var(--cat); }
.foto img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s ease; }
.card:hover .foto img { transform: scale(1.05); }       /* acercamiento suave */
.demanda { position: absolute; top: .9rem; left: .9rem; background: var(--highlight); color: var(--ink);
  font-size: .72rem; font-weight: 700; padding: .25rem .7rem; border-radius: 999px; }

.texto { padding: 1.4rem 1.5rem .5rem; display: grid; gap: .55rem; justify-items: start; }
.texto p { font-size: .93rem; }
.meta { font-size: .82rem; color: var(--muted); }
.pie { display: flex; align-items: center; justify-content: space-between; gap: .8rem; padding: 1rem 1.5rem 1.5rem; }
.pie .btn { padding: .5rem 1.1rem; font-size: .88rem; background: var(--cat); border-color: var(--cat); }
</style>
