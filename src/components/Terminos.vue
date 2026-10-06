<script setup lang="ts">
</script>

<template>
  <section class="section">
    <div class="container legal">
      <span class="eyebrow">Legal</span>
      <h1>Términos y condiciones</h1>
      <p class="fecha">Última actualización: 6 de octubre de 2026</p>

      <h2>1. Información general</h2>
      <p>Este sitio web y los cursos descritos son operados por ATI Academy. En todo el sitio, los términos «nosotros», «nos» y «nuestro» se refieren a ATI Academy.</p>
      <ul>
        <li>Contacto: contacto@ati-academy.mx</li>
        <li>Ubicación: Mérida, Yucatán, México</li>
      </ul>

      <h2>2. Descripción del servicio</h2>
      <p>ATI Academy ofrece cursos en línea de programación, redes, bases de datos, seguridad y gestión de tecnologías de información. El temario, la duración y el material de cada curso se detallan en su página. Nos esforzamos por ofrecer contenido actualizado y de calidad, pero no podemos garantizar resultados laborales específicos, ya que dependen del esfuerzo de cada alumno y de factores externos.</p>

      <h2>3. Precios y pagos</h2>
      <ul>
        <li><strong>Precios:</strong> se muestran en pesos mexicanos e incluyen el IVA correspondiente.</li>
        <li><strong>Forma de pago:</strong> el lugar en un curso se confirma al recibir el pago completo antes de la fecha de inicio.</li>
        <li><strong>Cursos gratuitos:</strong> no requieren pago, pero sí registro con datos verídicos.</li>
      </ul>

      <h2>4. Acceso a los cursos</h2>
      <p>El acceso al contenido comienza en la fecha de inicio de cada curso y se mantiene durante seis meses después de que termina. La cuenta es personal: no está permitido compartir el acceso con otras personas.</p>

      <h2>5. Política de cancelación y reembolsos</h2>
      <h3>5.1 Procedimiento</h3>
      <p>Para solicitar una cancelación, envíe un correo a contacto@ati-academy.mx con el asunto «Solicitud de cancelación – [Nombre del curso]», explicando el motivo. Responderemos en un plazo máximo de 3 días hábiles.</p>
      <h3>5.2 Condiciones de reembolso</h3>
      <ul>
        <li><strong>Reembolso del 100 %:</strong> si cancela antes de la fecha de inicio del curso.</li>
        <li><strong>Reembolso del 50 %:</strong> si cancela durante la primera semana del curso.</li>
        <li><strong>Sin reembolso:</strong> a partir de la segunda semana, ya que el contenido se considera consumido.</li>
        <li><strong>Cancelación por parte de ATI Academy:</strong> si un curso se cancela por causas nuestras, se reembolsará el monto total pagado.</li>
      </ul>

      <h2>6. Propiedad intelectual</h2>
      <p>Los videos, textos y prácticas de cada curso son propiedad de ATI Academy y son solo para uso personal del alumno. La documentación y los videos de terceros enlazados como material de apoyo pertenecen a sus respectivos autores.</p>

      <h2>7. Certificaciones</h2>
      <p>La constancia digital se emite al aprobar todos los cursos requeridos de la certificación correspondiente.</p>

      <h2>8. Privacidad y datos</h2>
      <p>La información personal que nos proporcione se usará únicamente para su formación y para la comunicación relacionada con sus cursos. Conozca los detalles en nuestro <RouterLink to="/privacidad" class="enlace">aviso de privacidad</RouterLink>.</p>

      <h2>9. Modificaciones</h2>
      <p>Nos reservamos el derecho de actualizar estos términos en cualquier momento. La versión vigente estará siempre disponible en esta página, y el uso continuo de la plataforma implica la aceptación de los cambios.</p>
    </div>
  </section>
</template>

<style scoped>
.legal { max-width: 760px; }
.fecha { font-size: .88rem; margin: .5rem 0 2rem; }
h2 { font-size: 1.3rem; margin: 2.5rem 0 .8rem; }
h3 { margin: 1.4rem 0 .5rem; }
p { margin-bottom: .8rem; }
li { color: var(--muted); margin-bottom: .4rem; }
strong { color: var(--ink); }
</style>
