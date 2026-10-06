<script setup lang="ts">
import { ref, reactive } from 'vue'
import { whatsapp } from '../utils/enlaces'

const mensaje = reactive({ nombre: '', correo: '', asunto: 'Dudas sobre cursos', texto: '' })
const enviado = ref(false)

// Enlace de WhatsApp
const enlaceWhatsApp = whatsapp('Hola, me gustaría recibir información sobre los cursos de ATI Academy.')
</script>

<template>
  <section class="section">
    <div class="container dos">
      <div>
        <span class="eyebrow">Contacto</span>
        <h1>¿Hablamos?</h1>
        <p class="intro">Resolvemos tus dudas sobre cursos, inscripciones y certificaciones. La forma más rápida es por WhatsApp.</p>

        <!--abre el whats en otra pestaña -->
        <a :href="enlaceWhatsApp" target="_blank" rel="noopener" class="btn btn-whatsapp">Escríbenos por WhatsApp</a>

        <ul class="datos">
          <li><span>WhatsApp</span> 933 406 3995</li>
          <li><span>Correo</span> contacto@ati-academy.mx</li>
          <li><span>Horario</span> Lunes a viernes, 9:00 a 18:00</li>
          <li><span>Ubicación</span> Mérida, Yucatán, México</li>
        </ul>
      </div>

      <div class="caja">
        <h2>Envíanos un mensaje</h2>
        <!-- formulario -->
        <div v-if="enviado" class="aviso-ok">
          <p>Gracias, {{ mensaje.nombre }}. Recibimos tu mensaje y te responderemos a {{ mensaje.correo }}.</p>
        </div>
        <!-- prevent: evita que la página se recargue y cambie el boolean -->
        <form v-else class="form" @submit.prevent="enviado = true">
          <label>Nombre <input v-model="mensaje.nombre" type="text" required /></label>
          <label>Correo <input v-model="mensaje.correo" type="email" required /></label>
          <label>
            Asunto
            <select v-model="mensaje.asunto">
              <option>Dudas sobre cursos</option>
              <option>Inscripciones y pagos</option>
              <option>Certificaciones</option>
              <option>Quiero ser empresa afiliada</option>
            </select>
          </label>
          <label>Mensaje <textarea v-model="mensaje.texto" rows="5" required></textarea></label>
          <button type="submit" class="btn">Enviar mensaje</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dos { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
.intro { margin: 1rem 0 1.8rem; font-size: 1.08rem; }
.datos { list-style: none; padding: 0; display: grid; gap: .9rem; margin-top: 2.5rem; }
.datos li { display: grid; color: var(--ink); }
.datos span { font-size: .78rem; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--muted); }
.caja { border: 1px solid var(--line); border-radius: var(--radius); padding: 2rem; }
.caja h2 { font-size: 1.35rem; margin-bottom: 1.4rem; }
@media (max-width: 800px) { .dos { grid-template-columns: 1fr; gap: 2.5rem; } }
</style>
