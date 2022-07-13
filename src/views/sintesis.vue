<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p #[i.txt-color3 Up to this point we have been able to appreciate everything that has to do with the past simple tense, how it is structured and how regular and irregular verbs are conjugated, which is why we invite you to consider the following conceptual scheme that summarizes the subject treated:]
    p.mb-5 Hasta este punto hemos podido apreciar todo lo que tiene que ver con el tiempo pasado simple, cómo se estructura y cómo se conjugan los verbos regulares e irregulares, es por ello que se invita a que aprecie el siguiente esquema conceptual que resume la temática tratada:
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
