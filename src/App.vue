<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar />

  <!-- 2. CONTENIDO: cambia según la ruta.

       RouterView es el "hueco" donde se dibuja la vista de la ruta actual.
       v-slot="{ Component, route }" nos entrega esa vista (Component) y la ruta (route)
       para envolver la vista en <Transition> y darle un desvanecido al cambiar de página.

       <component :is="Component"> dibuja la vista que le pasemos.
       :key="route.fullPath" obliga a Vue a crear la vista de nuevo cuando solo cambia
       el parámetro o el query (por ejemplo de /curso/1 a /curso/4).

       ¡CUIDADO! Dentro de <RouterView> y de <Transition> NO debe haber comentarios
       ni otros elementos: <Transition> necesita exactamente UN hijo. Un comentario
       ahí adentro cuenta como hijo y hace que la página se quede en blanco al navegar
       con el menú (ese era el error de la versión anterior).
       Por la misma razón, cada vista tiene un solo elemento raíz (<div> o <section>). -->
  <main>
    <RouterView v-slot="{ Component, route }">
      <Transition name="pagina" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>
  </main>

  <Footer />
</template>
