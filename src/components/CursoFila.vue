<script setup lang="ts">
import type { Curso } from '../interfaces/Curso'
import { precio } from '../utils/enlaces'

// casi igual que CursoCard
defineProps<{ curso: Curso }>()
const emit = defineEmits<{ (e: 'inscribir', id: number): void }>()
</script>

<template>
  <li class="fila" :class="'cat-' + curso.categoria">
    <RouterLink :to="{ name: 'curso', params: { id: curso.id } }" class="info">
      <img :src="curso.imagen" :alt="'Imagen del curso ' + curso.titulo" loading="lazy" />
      <div>
        <h3>{{ curso.titulo }}</h3>
        <p>{{ curso.resumen }}</p>
        <span class="meta">{{ curso.nivel }} · {{ curso.horas }} h · {{ curso.semanas }} semanas</span>
      </div>
    </RouterLink>
    <div class="lado">
      <strong>{{ precio(curso.precio) }}</strong>
      <button type="button" class="btn btn-ghost" @click="emit('inscribir', curso.id)">Inscribirme</button>
    </div>
  </li>
</template>

<style scoped>
.fila { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; padding: 1.1rem 0;
  border-bottom: 1px solid var(--line); }
.info { display: flex; align-items: center; gap: 1.25rem; flex: 1; min-width: 0; }
/* Línea de color a la izquierda de la miniatura, según la categoría */
.info img { width: 120px; flex-shrink: 0; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 12px; background: var(--cat);
  border-left: 4px solid var(--cat); }
.info h3 { transition: color .2s ease; }
.info:hover h3 { color: var(--cat); }
.info p { font-size: .9rem; }
.meta { font-size: .8rem; color: var(--muted); }
.lado { display: flex; align-items: center; gap: 1.25rem; white-space: nowrap; }
.lado .btn { padding: .5rem 1.1rem; font-size: .88rem; }

@media (max-width: 700px) {
  .fila { flex-direction: column; align-items: stretch; gap: .8rem; }
  .info img { width: 90px; }
  .lado { justify-content: space-between; }
}
</style>
