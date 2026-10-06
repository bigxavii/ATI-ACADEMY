import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../components/Inicio.vue'
import Cursos from '../components/Cursos.vue'
import CursoDetalle from '../components/CursoDetalle.vue'
import Inscripcion from '../components/Inscripcion.vue'
import Certificaciones from '../components/Certificaciones.vue'
import Material from '../components/Material.vue'
import Nosotros from '../components/Nosotros.vue'
import Privacidad from '../components/Privacidad.vue'
import Terminos from '../components/Terminos.vue'
import Contacto from '../components/Contacto.vue'
import Login from '../components/Login.vue'


const routes = [
  { path: '/', name: 'inicio', component: Inicio },
  { path: '/cursos', name: 'cursos', component: Cursos },                      
  { path: '/curso/:id', name: 'curso', component: CursoDetalle },              
  { path: '/inscripcion/:id?', name: 'inscripcion', component: Inscripcion },  
  { path: '/certificaciones', name: 'certificaciones', component: Certificaciones },
  { path: '/material', name: 'material', component: Material },
  { path: '/nosotros', name: 'nosotros', component: Nosotros },
  { path: '/privacidad', name: 'privacidad', component: Privacidad },
  { path: '/terminos', name: 'terminos', component: Terminos },
  { path: '/contacto', name: 'contacto', component: Contacto },
  { path: '/login', name: 'login', component: Login },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Control del scroll al cambiar de página:
  // si el usuario usa el botón "atrás" del navegador, vuelve a donde estaba
  // y si no, sube al inicio de la página
  scrollBehavior: (_to, _from, posicionGuardada) => posicionGuardada ?? { top: 0 },
})

export default router
