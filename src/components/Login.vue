<script setup lang="ts">
import { ref, reactive } from 'vue'

const datos = reactive({ correo: '', clave: '' })
const entrado = ref(false)   // simula que se inicio sesion
</script>

<template>
  <section class="section">
    <div class="container caja">
      <img src="/logo.svg" alt="Logo de ATI Academy" width="48" height="48" />
      <h1>Iniciar sesión</h1>
      <div v-if="entrado" class="aviso-ok">
        <p>Sesión simulada para {{ datos.correo }}.</p>
        <RouterLink to="/cursos" class="btn">Ir a mis cursos</RouterLink>
      </div>
      <form v-else class="form" @submit.prevent="entrado = true">
        <label>Correo <input v-model="datos.correo" type="email" required /></label>
        <label>Contraseña <input v-model="datos.clave" type="password" required /></label>
        <button type="submit" class="btn">Entrar</button>
      </form>
      <p>¿Aún no tienes cuenta? <RouterLink to="/inscripcion" class="enlace">Inscríbete</RouterLink></p>
    </div>
  </section>
</template>

<style scoped>
.caja { max-width: 420px; display: grid; gap: 1.3rem; }
h1 { font-size: 2rem; }
</style>
