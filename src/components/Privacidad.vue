<script setup lang="ts">
</script>

<template>
  <section class="section">
    <div class="container legal">
      <span class="eyebrow">Seguridad y privacidad</span>
      <h1>Aviso de privacidad</h1>
      <p class="fecha">Última actualización: 6 de octubre de 2026</p>

      <p>ATI Academy, proyecto académico de la Licenciatura en Administración de Tecnologías de Información, con domicilio en Mérida, Yucatán, México, es responsable del uso y protección de sus datos personales.</p>

      <h2>Finalidades primarias</h2>
      <p>Los datos personales que recabamos de usted los utilizaremos para las siguientes finalidades, necesarias para el servicio que solicita:</p>
      <ul>
        <li>Gestionar su inscripción a los cursos.</li>
        <li>Darle acceso a las clases y al material de apoyo.</li>
        <li>Emitir sus constancias y certificaciones.</li>
        <li>Responder las dudas que nos envíe por el formulario de contacto o por WhatsApp.</li>
      </ul>

      <h2>Datos personales recabados</h2>
      <p>Para las finalidades señaladas podemos recabar sus datos de identificación y contacto:</p>
      <ul>
        <li>Nombre completo</li>
        <li>Correo electrónico</li>
        <li>Teléfono (opcional)</li>
        <li>Último grado de estudios</li>
      </ul>
      <p>No solicitamos datos personales sensibles ni datos bancarios a través de este sitio.</p>

      <h2>Derechos ARCO</h2>
      <p>Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (<strong>Acceso</strong>). Asimismo, es su derecho solicitar la corrección de su información en caso de que esté desactualizada, sea inexacta o incompleta (<strong>Rectificación</strong>); que la eliminemos de nuestros registros cuando considere que no está siendo utilizada adecuadamente (<strong>Cancelación</strong>); así como oponerse al uso de sus datos para fines específicos (<strong>Oposición</strong>). Estos derechos se conocen como derechos ARCO.</p>

      <h2>Datos recabados por el sitio web</h2>
      <p>Nuestro sitio web recaba automáticamente los siguientes datos:</p>
      <ul>
        <li>Idioma preferido por el usuario</li>
        <li>Región en la que se encuentra el usuario</li>
      </ul>

      <h2>Contacto</h2>
      <p>Para más información sobre este aviso de privacidad, o para ejercer sus derechos ARCO, puede contactarnos en:</p>
      <ul>
        <li>Correo electrónico: contacto@ati-academy.mx</li>
        <li>WhatsApp: 933 406 3995</li>
        <li>Formulario: <RouterLink to="/contacto" class="enlace">página de contacto</RouterLink></li>
      </ul>

      <hr />
      <p>Consulta también nuestros <RouterLink to="/terminos" class="enlace">términos y condiciones</RouterLink>.</p>
    </div>
  </section>
</template>

<style scoped>
.legal { max-width: 760px; }
.fecha { font-size: .88rem; margin: .5rem 0 2rem; }
h2 { font-size: 1.3rem; margin: 2.5rem 0 .8rem; }
p { margin-bottom: .8rem; }
li { color: var(--muted); margin-bottom: .3rem; }
strong { color: var(--ink); }
</style>
