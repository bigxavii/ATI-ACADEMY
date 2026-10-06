<script setup lang="ts">
import { ref } from 'vue'
import { cursos } from '../interfaces/Curso'
import { categorias } from '../interfaces/Categoria'

const menuAbierto = ref(false)

const contar = (id: string): number => cursos.filter((c) => c.categoria === id).length
const cerrar = () => {
  menuAbierto.value = false
}
</script>

<template>
  <header class="navbar">
    <nav class="container barra">
      <RouterLink to="/" class="logo" @click="cerrar">
        <img src="/logo.svg" alt="Logo de ATI Academy" width="34" height="34" />
        <span>ATI Academy</span>
      </RouterLink>

      <!-- Botón de menú (pantallas pequeñas) -->
      <button class="hamburguesa" type="button" :aria-label="menuAbierto ? 'Cerrar menú' : 'Abrir menú'"
        @click="menuAbierto = !menuAbierto">
        {{ menuAbierto ? '✕' : '☰' }}
      </button>

      <ul class="enlaces" :class="{ abierto: menuAbierto }" @click="cerrar">
        <li><RouterLink to="/">Inicio</RouterLink></li>

        <!-- Submenu de los cursos-->
        <li class="desplegable">
          <RouterLink to="/cursos">Cursos <span class="conteo">{{ cursos.length }}</span></RouterLink>
          <ul class="submenu">
            <li><RouterLink to="/cursos">Todos los cursos ({{ cursos.length }})</RouterLink></li>
            <!-- numero de cursos por categoría -->
            <li v-for="c in categorias" :key="c.id">
              <RouterLink :to="{ name: 'cursos', query: { categoria: c.id } }">
                {{ c.nombre }} ({{ contar(c.id) }})
              </RouterLink>
            </li>
          </ul>
        </li>

        <li><RouterLink to="/certificaciones">Certificaciones</RouterLink></li>
        <li><RouterLink to="/material">Material de apoyo</RouterLink></li>
        <li><RouterLink to="/nosotros">Quiénes somos</RouterLink></li>
        <li><RouterLink to="/contacto">Contacto</RouterLink></li>
        <li class="acciones">
          <RouterLink to="/login" class="entrar">Iniciar sesión</RouterLink>
          <RouterLink to="/inscripcion" class="btn">Inscribirme</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style scoped>
/* sticky: la barra se queda pegada arriba al hacer scroll */
.navbar { position: sticky; top: 0; z-index: 20; background: rgba(255, 255, 255, .9);
  backdrop-filter: blur(10px); border-bottom: 1px solid var(--line); }
.barra { display: flex; align-items: center; justify-content: space-between; min-height: 72px; }
.logo { display: flex; align-items: center; gap: .6rem; font-weight: 800; font-size: 1.1rem; }

.enlaces { list-style: none; display: flex; align-items: center; gap: 1.6rem; padding: 0; font-size: .93rem; font-weight: 500; }
.enlaces a { transition: color .2s ease; }
.enlaces a:hover { color: var(--accent); }
.router-link-exact-active:not(.btn) { color: var(--accent); }

.conteo { font-size: .72rem; font-weight: 700; background: var(--accent-soft); color: var(--accent);
  padding: .05rem .45rem; border-radius: 999px; margin-left: .15rem; }
.acciones { display: flex; align-items: center; gap: 1rem; }
.acciones .btn { padding: .55rem 1.2rem; color: #fff; }
.entrar { font-weight: 600; }

/*Submenu*/
.desplegable { position: relative; padding: 1.4rem 0; }
.submenu { position: absolute; top: 100%; left: -1rem; min-width: 240px; list-style: none; padding: .5rem;
  background: #fff; border: 1px solid var(--line); border-radius: 14px; box-shadow: 0 18px 40px rgba(21, 26, 45, .1);
  opacity: 0; visibility: hidden; transform: translateY(6px); transition: all .2s ease; }
.desplegable:hover .submenu { opacity: 1; visibility: visible; transform: translateY(0); }
.submenu a { display: block; padding: .55rem .85rem; border-radius: 8px; }
.submenu a:hover { background: var(--surface); }

.hamburguesa { display: none; background: none; border: 1px solid var(--line); border-radius: 10px;
  font-size: 1.15rem; width: 42px; height: 42px; cursor: pointer; color: var(--ink); }

/* RESPONSIVO */
@media (max-width: 1024px) {
  .hamburguesa { display: block; }
  .enlaces { display: none; position: absolute; top: 72px; left: 0; right: 0; flex-direction: column;
    align-items: flex-start; gap: .9rem; background: #fff; padding: 1.25rem 5% 1.75rem;
    border-bottom: 1px solid var(--line); max-height: calc(100vh - 72px); overflow-y: auto; }
  .enlaces.abierto { display: flex; }
  .desplegable { padding: 0; }
  .submenu { position: static; opacity: 1; visibility: visible; transform: none; box-shadow: none;
    border: 0; padding: .3rem 0 0 .6rem; min-width: 0; }
  .submenu a { padding: .3rem .5rem; color: var(--muted); }
  .acciones { padding-top: .5rem; }
}
</style>
