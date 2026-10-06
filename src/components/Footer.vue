<script setup lang="ts">
import { categorias } from '../interfaces/Categoria'
import { whatsapp } from '../utils/enlaces'

// full year es para el año actualizado
const anio = new Date().getFullYear()
const enlaceWhatsApp = whatsapp('Hola, quiero información de ATI Academy.')
</script>

<template>
  <footer class="footer">
    <div class="container cols">
      <div class="marca">
        <RouterLink to="/" class="logo">
          <img src="/logo.svg" alt="Logo de ATI Academy" width="32" height="32" />
          <span>ATI Academy</span>
        </RouterLink>
        <p>Cursos en línea de tecnología para la Sociedad de la Información.</p>
        <a :href="enlaceWhatsApp" target="_blank" rel="noopener" class="wa">WhatsApp · 933 406 3995</a>
      </div>
      <div>
        <h3>Cursos</h3>
        <ul>
          <li v-for="c in categorias" :key="c.id">
            <RouterLink :to="{ name: 'cursos', query: { categoria: c.id } }">{{ c.nombre }}</RouterLink>
          </li>
        </ul>
      </div>
      <div>
        <h3>Aprende</h3>
        <ul>
          <li><RouterLink to="/inscripcion">Inscripciones</RouterLink></li>
          <li><RouterLink to="/certificaciones">Certificaciones</RouterLink></li>
          <li><RouterLink to="/material">Material de apoyo</RouterLink></li>
        </ul>
      </div>
      <div>
        <h3>Academia</h3>
        <ul>
          <li><RouterLink to="/nosotros">Quiénes somos</RouterLink></li>
          <li><RouterLink to="/contacto">Contacto</RouterLink></li>
          <li><RouterLink to="/terminos">Términos y condiciones</RouterLink></li>
          <li><RouterLink to="/privacidad">Aviso de privacidad</RouterLink></li>
        </ul>
      </div>
    </div>
    <div class="container copy">
      <span>© {{ anio }} ATI Academy.</span>
      <span>Mérida, Yucatán</span>
    </div>
  </footer>
</template>

<style scoped>
.footer { background: var(--ink); color: #fff; padding: 4.5rem 0 2rem; }
.cols { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 2.5rem; }
.logo { display: inline-flex; align-items: center; gap: .6rem; font-weight: 800; font-size: 1.05rem; }
.marca p { color: #a7abbd; margin: 1rem 0; max-width: 300px; }
.wa { color: #6fdc9b; font-weight: 600; font-size: .92rem; }
.footer h3 { font-size: .8rem; text-transform: uppercase; letter-spacing: .1em; color: #8d91a6; }
.footer ul { list-style: none; padding: 0; display: grid; gap: .5rem; margin-top: 1rem; color: #d5d8e3; font-size: .93rem; }
.footer ul a:hover { color: #fff; }
.copy { display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-top: 3.5rem; padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, .1); font-size: .85rem; color: #8d91a6; }
@media (max-width: 800px) { .cols { grid-template-columns: 1fr 1fr; } .marca { grid-column: 1 / -1; } }
</style>
