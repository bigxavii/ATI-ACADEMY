<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CursoCard from './CursoCard.vue'
import { cursos } from '../interfaces/Curso'
import { categorias } from '../interfaces/Categoria'
import { precio, miniatura, videoEmbebido, whatsapp } from '../utils/enlaces'

const route = useRoute()    
const router = useRouter()   
const id = Number(route.params.id)
const curso = cursos.find((c) => c.id === id)
const categoria = categorias.find((c) => c.id === curso?.categoria)
const relacionados = cursos.filter((c) => c.categoria === curso?.categoria && c.id !== id).slice(0, 3)
const verVideo = ref(false)
const mensajeWhatsApp = 'Hola, me interesa el curso "' + (curso?.titulo ?? '') + '" de ATI Academy. ¿Me pueden dar más información?'

const irAInscripcion = (idCurso: number) => {
  router.push({ name: 'inscripcion', params: { id: idCurso } })
}
</script>

<template>
  <div>
    <article v-if="curso" :class="'cat-' + curso.categoria">

      <!--PORTADA-->
      <header class="portada">
        <img :src="curso.imagen" :alt="'Imagen del curso ' + curso.titulo" />
        <div class="velo"></div>
        <div class="container texto">
          <!-- Migas de pan: muestran dónde estás y permiten regresar -->
          <nav class="migas">
            <RouterLink to="/">Inicio</RouterLink> /
            <RouterLink to="/cursos">Cursos</RouterLink> /
            <RouterLink :to="{ name: 'cursos', query: { categoria: curso.categoria } }">{{ categoria?.nombre }}</RouterLink>
          </nav>
          <span class="tag">{{ categoria?.nombre }}</span>
          <h1>{{ curso.titulo }}</h1>
          <p>{{ curso.resumen }}</p>
          <ul class="chips">
            <li>★ {{ curso.calificacion }}</li>
            <!-- toLocaleString pone las comas de la cantidad -->
            <li>{{ curso.alumnos.toLocaleString('es-MX') }} alumnos</li>
            <li>{{ curso.nivel }}</li>
            <li>{{ curso.horas }} horas</li>
          </ul>
        </div>
      </header>

      <div class="container cuerpo">
        <!-- COLUMNA PRINCIPAL-->
        <div class="principal">
          <h2>Sobre este curso</h2>
          <p>{{ curso.descripcion }}</p>
          <p class="dirigido"><strong>¿Para quién es?</strong> {{ curso.dirigidoA }}</p>

          <hr />

          <h2>Lo que aprenderás</h2>
          <ul class="checks">
            <li v-for="a in curso.aprenderas" :key="a">{{ a }}</li>
          </ul>

          <hr />

          <h2>Temario</h2>
          <ol class="modulos">
            <li v-for="(m, i) in curso.modulos" :key="m.titulo">
              <h3><span>Módulo {{ i + 1 }}</span> {{ m.titulo }}</h3>
              <ul>
                <li v-for="t in m.temas" :key="t">{{ t }}</li>
              </ul>
            </li>
          </ol>

          <hr />

          <h2>Requisitos</h2>
          <ul>
            <li v-for="r in curso.requisitos" :key="r">{{ r }}</li>
          </ul>

          <hr />

          <h2>Material de apoyo</h2>
          <!-- Si el curso tiene video. Primero miniatura; al hacer clic, el reproductor. -->
          <div v-if="curso.video" class="video">
            <iframe v-if="verVideo" :src="videoEmbebido(curso.video)" :title="'Video de ' + curso.titulo"
              allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <button v-else type="button" class="miniatura" @click="verVideo = true">
              <img :src="miniatura(curso.video)" :alt="'Miniatura del video de ' + curso.titulo" loading="lazy" />
              <span class="play">▶</span>
            </button>
          </div>
          <ul class="materiales">
            <li v-for="m in curso.materiales" :key="m.titulo">
              <!-- target="_blank" abre el enlace en otra pestaña; rel="noopener" es por seguridad -->
              <a :href="m.url" target="_blank" rel="noopener">
                <span class="tipo">{{ m.tipo === 'video' ? 'Video' : 'Documento' }}</span>
                {{ m.titulo }}
                <span class="flecha">↗</span>
              </a>
            </li>
          </ul>

          <hr />

          <h2>Tu instructor</h2>
          <div class="instructor">
            <img :src="curso.instructor.foto" :alt="'Foto de ' + curso.instructor.nombre" width="88" height="88" />
            <div>
              <h3>{{ curso.instructor.nombre }}</h3>
              <span>{{ curso.instructor.cargo }}</span>
              <p>{{ curso.instructor.bio }}</p>
            </div>
          </div>
        </div>

        <!-- COLUMNA DERECHA-->
        <aside class="lateral">
          <strong class="precio">{{ precio(curso.precio) }}</strong>
          <ul class="datos">
            <li><span>Inicio</span> {{ curso.fechaInicio }}</li>
            <li><span>Duración</span> {{ curso.semanas }} semanas · {{ curso.horas }} h</li>
            <li><span>Nivel</span> {{ curso.nivel }}</li>
            <li><span>Modalidad</span> En línea</li>
            <li><span>Constancia</span> Digital</li>
          </ul>
          <RouterLink :to="{ name: 'inscripcion', params: { id: curso.id } }" class="btn">Inscribirme a este curso</RouterLink>
          <a :href="whatsapp(mensajeWhatsApp)" target="_blank" rel="noopener" class="btn btn-whatsapp">Pedir información por WhatsApp</a>
        </aside>
      </div>

      <!--CURSOS RELACIONADOS-->
      <section v-if="relacionados.length > 0" class="section section-alt">
        <div class="container">
          <h2 class="titulo-rel">Otros cursos de {{ categoria?.nombre }}</h2>
          <div class="grid">
            <CursoCard v-for="c in relacionados" :key="c.id" :curso="c" @inscribir="irAInscripcion" />
          </div>
        </div>
      </section>
    </article>

    <section v-else class="section container">
      <h1>Curso no encontrado</h1>
      <p>Revisa el catálogo para ver los cursos disponibles.</p>
      <RouterLink to="/cursos" class="btn">Ir al catálogo</RouterLink>
    </section>
  </div>
</template>

<style scoped>
/*Portada */
.portada { position: relative; background: var(--ink); color: #fff; overflow: hidden; }
.portada > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.velo { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(21, 26, 45, .95) 35%, rgba(21, 26, 45, .55)); }
.texto { position: relative; padding: 3.5rem 0 4rem; display: grid; gap: 1rem; justify-items: start; }
.texto p { color: #d6d5e6; max-width: 560px; font-size: 1.08rem; }
.portada .tag { color: #fff; background: var(--cat); }
.migas { font-size: .85rem; color: #b9b8cc; display: flex; gap: .4rem; flex-wrap: wrap; }
.migas a:hover { color: #fff; text-decoration: underline; }
.chips { list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: .5rem; }
.chips li { font-size: .85rem; padding: .3rem .8rem; border: 1px solid rgba(255, 255, 255, .25); border-radius: 999px; }

/*Cuerpo en dos columnas*/
.cuerpo { display: grid; grid-template-columns: 1fr 340px; gap: 4rem; padding: 4rem 0 5rem; align-items: start; }
.principal h2 { font-size: 1.45rem; margin-bottom: 1rem; }
.principal > p { margin-bottom: .8rem; }
.dirigido { background: var(--surface); padding: 1rem 1.2rem; border-radius: 12px; color: var(--ink); }
.principal li { margin-bottom: .35rem; color: var(--muted); }

/* Lista con palomitas */
.checks { list-style: none; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: .4rem 1.5rem; }
.checks li { position: relative; padding-left: 1.6rem; color: var(--ink); }
.checks li::before { content: '✓'; position: absolute; left: 0; color: var(--cat); font-weight: 800; }

.modulos { list-style: none; padding: 0; display: grid; gap: .8rem; }
.modulos > li { border: 1px solid var(--line); border-radius: 12px; padding: 1.1rem 1.3rem; }
.modulos h3 { display: flex; flex-wrap: wrap; gap: .3rem .7rem; align-items: baseline; margin-bottom: .4rem; color: var(--ink); }
.modulos h3 span { font-size: .75rem; font-weight: 700; color: var(--cat); text-transform: uppercase; letter-spacing: .06em; }

.video { margin-bottom: 1.2rem; }
iframe, .miniatura { width: 100%; aspect-ratio: 16 / 9; border: 0; border-radius: var(--radius); background: var(--ink); }
.miniatura { position: relative; overflow: hidden; cursor: pointer; padding: 0; }
.miniatura img { width: 100%; height: 100%; object-fit: cover; opacity: .85; }
.play { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 64px; height: 64px;
  border-radius: 50%; background: #fff; color: var(--ink); display: grid; place-items: center; padding-left: 4px; }

.materiales { list-style: none; padding: 0; display: grid; gap: .6rem; }
.materiales a { display: flex; align-items: center; gap: .8rem; padding: .9rem 1.1rem; border: 1px solid var(--line);
  border-radius: 12px; color: var(--ink); transition: border-color .25s ease, transform .25s ease; }
.materiales a:hover { border-color: var(--cat); transform: translateX(4px); }
.tipo { font-size: .72rem; font-weight: 700; color: var(--cat); background: color-mix(in srgb, var(--cat) 12%, white);
  padding: .15rem .6rem; border-radius: 999px; }
.flecha { margin-left: auto; color: var(--muted); }

.instructor { display: flex; gap: 1.2rem; align-items: center; }
.instructor img { border-radius: 50%; object-fit: cover; background: var(--surface); flex-shrink: 0; }
.instructor span { font-size: .88rem; color: var(--cat); font-weight: 600; }
.instructor p { margin-top: .3rem; }

/*sticky lo deja fijo mientras baja*/
.lateral { position: sticky; top: 100px; border: 1px solid var(--line); border-radius: var(--radius);
  padding: 1.8rem; display: grid; gap: 1.1rem; background: #fff; box-shadow: 0 20px 40px rgba(21, 26, 45, .06); }
.precio { font-size: 1.8rem; }
.datos { list-style: none; padding: 0; display: grid; gap: .6rem; font-size: .92rem; }
.datos li { display: flex; justify-content: space-between; gap: 1rem; text-align: right; }
.datos span { color: var(--muted); text-align: left; }
.lateral .btn { width: 100%; text-align: center; }
.lateral .btn:not(.btn-whatsapp) { background: var(--cat); border-color: var(--cat); }

.titulo-rel { margin-bottom: 2rem; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 1.75rem; }

@media (max-width: 900px) {
  .cuerpo { grid-template-columns: 1fr; gap: 2.5rem; }
  .lateral { position: static; order: -1; }   
  .checks { grid-template-columns: 1fr; }
}
</style>
