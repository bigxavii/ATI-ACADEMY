<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { cursos } from '../interfaces/Curso'
import { precio } from '../utils/enlaces'

const route = useRoute()

// cursoId: el curso llega como PARÁMETRO de la ruta (/inscripcion/4).
//   Number('4') → 4. Si no llegó ningún id, Number(undefined) da NaN (no es número),
//   y el operador || usa entonces el id del primer curso.xx
const form = reactive({
  cursoId: Number(route.params.id) || cursos[0]!.id,
  nombre: '',
  correo: '',
  telefono: '',
  escolaridad: 'Licenciatura',
  horario: 'Matutino',
  acepta: false,
})

// ¿Ya se envió? Decide qué se ve: el formulario (false) o el mensaje de éxito (true).
const enviado = ref(false)

// Busca el curso que está elegido en el <select>.
// Es una función para que se vuelva a calcular cada vez que cambie form.cursoId.
const cursoElegido = () => cursos.find((c) => c.id === form.cursoId)

const enviar = () => {
  enviado.value = true
}
</script>

<template>
  <section class="section">
    <div class="container dos">
      <div>
        <span class="eyebrow">Inscripciones</span>
        <h1>Reserva tu lugar</h1>
        <p class="intro">Completa tus datos. </p>

        <!-- MENSAJE DE ÉXITO q  aparece solo cuando enviado es true -->
        <div v-if="enviado" class="aviso-ok">
          <h2>¡Listo, {{ form.nombre }}!</h2>
          <p>Quedaste inscrito en <strong>{{ cursoElegido()?.titulo }}</strong>. Te enviaremos los detalles a {{ form.correo }}.</p>
          <RouterLink to="/cursos" class="btn">Ver más cursos</RouterLink>
        </div>

        <form v-else class="form" @submit.prevent="enviar">
          <label>
            Curso
            <select v-model="form.cursoId">
              <option v-for="c in cursos" :key="c.id" :value="c.id">{{ c.titulo }}</option>
            </select>
          </label>
          <label>Nombre completo <input v-model="form.nombre" type="text" required /></label>
          <div class="par">
            <label>Correo electrónico <input v-model="form.correo" type="email" required /></label>
            <label>Teléfono <input v-model="form.telefono" type="tel" /></label>
          </div>
          <label>
            Último grado de estudios
            <select v-model="form.escolaridad">
              <option>Bachillerato</option>
              <option>Licenciatura</option>
              <option>Posgrado</option>
            </select>
          </label>

          <fieldset class="radios">
            <legend>Horario de sesiones en vivo</legend>
            <label><input v-model="form.horario" type="radio" value="Matutino" /> Matutino</label>
            <label><input v-model="form.horario" type="radio" value="Vespertino" /> Vespertino</label>
          </fieldset>

          <label class="check">
            <input v-model="form.acepta" type="checkbox" required />
            <span>
              Acepto los <RouterLink to="/terminos" class="enlace">términos y condiciones</RouterLink>
              y el <RouterLink to="/privacidad" class="enlace">aviso de privacidad</RouterLink>.
            </span>
          </label>

          <!--disabled: el botón está desactivado mientras no se marque la casilla -->
          <button type="submit" class="btn" :disabled="!form.acepta">Confirmar inscripción</button>
        </form>
      </div>

      <!--RESUMEN DEL CURSO ELEGIDO-->
      <aside v-if="cursoElegido()" class="resumen" :class="'cat-' + cursoElegido()!.categoria">
        <img :src="cursoElegido()!.imagen" :alt="'Imagen del curso ' + cursoElegido()!.titulo" />
        <div class="cuerpo">
          <span class="tag">{{ cursoElegido()!.nivel }}</span>
          <h3>{{ cursoElegido()!.titulo }}</h3>
          <ul>
            <li><span>Inicio</span> {{ cursoElegido()!.fechaInicio }}</li>
            <li><span>Duración</span> {{ cursoElegido()!.semanas }} semanas</li>
            <li><span>Instructor</span> {{ cursoElegido()!.instructor.nombre }}</li>
            <li><span>Costo</span> <strong>{{ precio(cursoElegido()!.precio) }}</strong></li>
          </ul>
          <RouterLink :to="{ name: 'curso', params: { id: form.cursoId } }" class="enlace">Ver detalle del curso</RouterLink>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.dos { display: grid; grid-template-columns: 1.3fr 1fr; gap: 4rem; align-items: start; }
.intro { margin: .8rem 0 2.2rem; }
.par { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.radios { border: 1px solid var(--line); border-radius: 12px; padding: .9rem 1.1rem; display: flex; gap: 1.5rem; flex-wrap: wrap; }
.radios legend { font-weight: 600; font-size: .92rem; padding: 0 .3rem; }
.radios label { display: flex; gap: .45rem; align-items: center; font-weight: 500; }
.check { display: flex !important; align-items: flex-start; gap: .6rem; font-weight: 400 !important; }
.check input { margin-top: .3rem; }

.resumen { position: sticky; top: 100px; border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; }
.resumen img { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; background: var(--cat); }
.cuerpo { padding: 1.5rem; display: grid; gap: .8rem; justify-items: start; }
.cuerpo ul { list-style: none; padding: 0; width: 100%; display: grid; gap: .5rem; font-size: .92rem; }
.cuerpo li { display: flex; justify-content: space-between; gap: 1rem; text-align: right; }
.cuerpo li span { color: var(--muted); }

@media (max-width: 900px) {
  .dos { grid-template-columns: 1fr; gap: 2.5rem; }
  .resumen { position: static; order: -1; }
  .par { grid-template-columns: 1fr; }
}
</style>
