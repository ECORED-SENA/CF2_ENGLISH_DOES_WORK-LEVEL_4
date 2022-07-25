<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 Para poder formular preguntas y responder información en pasado mencionando situaciones ya ocurridas, debemos poder manejar a cabalidad las estructuras gramaticales del tiempo pasado simple y poder conjugar correctamente los verbos, sin importar si son regulares o irregulares (esto incluye no solo conocerlos y diferenciarlos, sino también saber escribirlos y pronunciarlos adecuadamente). Si a esta habilidad de construir oraciones compuestas en pasado le sumamos el vocabulario adecuado sobre eventos, personajes, leyendas y lugares históricos, ya podríamos estar sacándole verdadero provecho a la función comunicativa en pasado simple. Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo, y para comenzar, se invita a explorar el video que se presenta a continuación:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0dRzyIwlTFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Si desea practicar, el siguiente PDF presenta los textos del video anterior, tanto en inglés como en español.
    .row.justify-content-center
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('downloads/Anexo2.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo]. Guion

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
