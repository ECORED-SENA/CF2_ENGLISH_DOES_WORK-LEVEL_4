<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 #[i Let's talk about history] (Hablemos de historia)
    .row.justify-content-end
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img23.png', style="width: 350px")
      .col-lg-7
        Traduccion.color-primario(:dialogo="traduccion1")
    Separador
    #t_3_1
    .titulo-segundo.color-acento-botones
      h2 3.1 #[i Famous legends and people in history] (Leyendas y personajes famosos de la historia)
    .row.mb-4
      .col-12
        Traduccion.color-primario(:dialogo="traduccion2")
    .row.mb-5
      .col-12
        .row.justify-content-center
          .col-9.col-lg.bg-color25
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio1.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 John F Kennedy]]
                p.text-center Presidente de Estados Unidos que fue asesinado
          .col-9.col-lg.bg-color27
            .row.justify-content-center.align-items-end
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio2.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 King Arthur]]
                p.text-center El Rey Arturo
          .col-9.col-lg.bg-color28
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio3.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 Robin Hood]]
                p.text-center Robin Hood
          .col-9.col-lg.bg-color29
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio4.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 The Fountain of Youth]]
                p.text-center La fuente de la eterna juventud
          .col-9.col-lg.bg-color30
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio5.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 Big Foot or Sasquatch]]
                p.text-center Pie Grande
        .row.justify-content-center
          .col-9.col-lg.bg-color31
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio6.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 The Legend of Sleepy Hollow]]
                p.text-center La leyenda del jinete sin cabeza
          .col-9.col-lg.bg-color32
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio7.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 Albert Einstein]]
                p.text-center Físico famoso creador de la teoría de la relatividad
          .col-9.col-lg.bg-color33
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio8.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 The Boogeyman]]
                p.text-center El coco
          .col-9.col-lg.bg-color34
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio9.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 Queen Elizabeth]]
                p.text-center La Reina Isabel
          .col-9.col-lg.bg-color35
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio10.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 William Shakespeare]]
                p.text-center Famoso escritor inglés
    p.mb-5 Teniendo en cuenta algunos de los personajes anteriores, se invita a escuchar algunos ejemplos con su correspondiente pronunciación :
    .row
      .col-12.bg-color17
        .p-4
          .row.justify-content-center
            .col-lg-11.mb-5
              p.my-5 #[b #[i.txt-color7 For example] / Por ejemplo:]
              .row.justify-content-center
                .col-lg-6.mb-4
                  .row.align-items-end
                    .col-4.col-lg-auto
                      figure.fig-position1
                        img(src='@/assets/curso/tema3/img1.svg')
                    .col-lg.bg-color56
                      .row.justify-content-center
                        .col-11
                          .p-3
                            p.mb-1 #[b #[i.txt-color4 We read the story of King Arthur last class.]]
                            p.text-small.text-white.mb-0 La clase pasada, leímos la historia del Rey Arturo.
                .col-lg-6.mb-4
                  .row.align-items-end
                    .col-4.col-lg-auto
                      figure.fig-position1
                        img(src='@/assets/curso/tema3/img2.svg')
                    .col-lg.bg-color56
                      .row.justify-content-center
                        .col-11
                          .p-3
                            p.mb-1 #[b #[i.txt-color4 Sarah saw Big Foot on her last vacation.]]
                            p.text-small.text-white.mb-0 Sarah vio a Pie Grande en sus últimas vacaciones.
                .col-lg-6.mb-4
                  .row.align-items-end
                    .col-4.col-lg-auto
                      figure.fig-position1
                        img(src='@/assets/curso/tema3/img3.svg')
                    .col-lg.bg-color56
                      .row.justify-content-end
                        .col-11
                          .p-4.p-lg-1
                            p.mb-1 #[b #[i.txt-color4 I didn’t sleep yesterday because I was afraid of the bogeyman.]]
                            p.text-small.text-white.mb-0 Ayer no dormí porque tenía miedo del coco.
                .col-lg-6.mb-4
                  .row.align-items-end
                    .col-4.col-lg-auto
                      figure.fig-position1
                        img(src='@/assets/curso/tema3/img4.svg')
                    .col-lg.bg-color56
                      .row.justify-content-center
                        .col-11
                          .p-3
                            p.mb-1 #[b #[i.txt-color4 Albert Einstein created the theory of relativity.]]
                            p.text-small.text-white.mb-0 Albert Einstein creó la teoría de la relatividad.
                .col-lg-6
                  .row.align-items-end
                    .col-4.col-lg-auto
                      figure.fig-position1
                        img(src='@/assets/curso/tema3/img5.svg')
                    .col-lg.bg-color56
                      .row.justify-content-end
                        .col-11
                          .p-4.p-lg-2
                            p.mb-1 #[b #[i.txt-color4 In the past, many people looked for the fountain of youth.]]
                            p.text-small.text-white.mb-0 En el pasado, mucha gente buscaba la fuente de la juventud.
            .col-lg-8
              TarjetaAudio.color-primario.mb-2(
                texto="<em><span></span></em>"
                :audio="require('@/assets/curso/tema3/audio11.mp3')"
              )
    Separador
    #t_3_2
    .titulo-segundo.color-acento-botones
      h2 3.2 #[i Important monuments and historical events] (Monumentos y eventos históricos importantes)
    .row.mb-4
      .col-12
        Traduccion.color-primario(:dialogo="traduccion3")
    .row.mb-5
      .col-12
        .row.justify-content-center
          .col-9.col-lg.bg-color36
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio12.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 World War]]
                p.text-center Guerra Mundial
          .col-9.col-lg.bg-color37
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio13.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 D-Day]]
                p.text-center El día D, el día del desembarco de Normandía
          .col-9.col-lg.bg-color38
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio14.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 Y2K]]
                p.text-center El efecto 2000, error del milenio, problema informático del año 2000
          .col-9.col-lg.bg-color39
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio15.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 Migration]]
                p.text-center Migración
        .row.justify-content-center
          .col-9.col-lg.bg-color40
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio16.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 September 11 or 9/11]]
                p.text-center Ataque terrorista a las torres gemelas
          .col-9.col-lg.bg-color41
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio17.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 Bonfire Night]]
                p.text-center La noche de las hogueras, la noche de los fuegos artificiales en Gran Bretaña
          .col-9.col-lg.bg-color42
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio18.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 Fall of Berlin Wall]]
                p.text-center Caída del Muro de Berlín
          .col-9.col-lg.bg-color43
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio19.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 Moon Landing]]
                p.text-center Llegada a la luna
        .row.justify-content-center
          .col-9.col-lg.bg-color44
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio20.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 The potato famine]]
                p.text-center La gran hambruna irlandesa
          .col-9.col-lg.bg-color45
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio21.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 The Great Depression]]
                p.text-center La Gran Depresión
          .col-9.col-lg.bg-color46
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio22.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 The Eiffel Tower]]
                p.text-center La Torre Eiffel
          .col-9.col-lg.bg-color47
            .row.justify-content-center
              .col-9.col-lg-10.bg-color26.shadow-sm.p-3
                Audio.color-primario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio23.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color2 World's Fair or Universal Exhibition]]
                p.text-center Exposición Universal
    p.mb-5 A continuación, se invita escuchar los siguientes ejemplos con su correspondiente pronunciación:
    .row
      .col-12.bg-color17
        .p-4
          .row.justify-content-center
            .col-lg-11.mb-5
              p.my-5 #[b #[i.txt-color7 For example] / Por ejemplo:]
              .row.justify-content-center
                .col-lg-6.mb-4
                  .row.align-items-end
                    .col-4.col-lg-auto
                      figure.fig-position1
                        img(src='@/assets/curso/tema3/img6.svg')
                    .col-lg.bg-color56
                      .row.justify-content-center
                        .col-11
                          .p-3
                            p.mb-1 #[b #[i.txt-color4 My grandpa fought during World War 2.]]
                            p.text-small.text-white.mb-0 Mi abuelo luchó durante la Segunda Guerra Mundial.
                .col-lg-6.mb-4
                  .row.align-items-end
                    .col-4.col-lg-auto
                      figure.fig-position1
                        img(src='@/assets/curso/tema3/img7.svg')
                    .col-lg.bg-color56
                      .row.justify-content-center
                        .col-11
                          .p-3
                            p.mb-1 #[b #[i.txt-color4 Daniel’s father scaped from France on D-Day.]]
                            p.text-small.text-white.mb-0 El padre de Daniel huyó de Francia el Día D.
                .col-lg-6.mb-4
                  .row.align-items-end
                    .col-4.col-lg-auto
                      figure.fig-position1
                        img(src='@/assets/curso/tema3/img8.svg')
                    .col-lg.bg-color56
                      .row.justify-content-end
                        .col-11
                          .p-4
                            p.mb-1 #[b #[i.txt-color4 My uncle helped a lot of people during 9/11.]]
                            p.text-small.text-white.mb-0 Mi tío ayudó a mucha gente durante el 11-S.
                .col-lg-6.mb-4
                  .row.align-items-end
                    .col-4.col-lg-auto
                      figure.fig-position1
                        img(src='@/assets/curso/tema3/img9.svg')
                    .col-lg.bg-color56
                      .row.justify-content-end
                        .col-11
                          .p-4.p-lg-1
                            p.mb-1 #[b #[i.txt-color4 My mother worked in a big company in Y2K as a programmer.]]
                            p.text-small.text-white.mb-0 Mi madre trabajó en una gran empresa en el efecto 2000 como programadora.
                .col-lg-6.mb-4
                  .row.align-items-end
                    .col-4.col-lg-auto
                      figure.fig-position1
                        img(src='@/assets/curso/tema3/img10.svg')
                    .col-lg.bg-color56
                      .row.justify-content-end
                        .col-11
                          .p-4
                            p.mb-1 #[b #[i.txt-color4 My family watched the moon landing on TV.]]
                            p.text-small.text-white.mb-0 Mi familia vio el alunizaje por televisión.
                .col-lg-6.mb-4
                  .row.align-items-end
                    .col-4.col-lg-auto
                      figure.fig-position1
                        img(src='@/assets/curso/tema3/img11.svg')
                    .col-lg.bg-color56
                      .row.justify-content-end
                        .col-11
                          .p-4.p-lg-1
                            p.mb-1 #[b #[i.txt-color4 The main symbol of the World's Fair of 1889 was the Eiffel Tower.]]
                            p.text-small.text-white.mb-0 El símbolo principal de la Exposición Universal de 1889 fue la Torre Eiffel.
            .col-lg-8
              TarjetaAudio.color-primario.mb-2(
                texto="<em><span></span></em>"
                :audio="require('@/assets/curso/tema3/audio24.mp3')"
              )

</template>

<script>
import Traduccion from '../components/Traduccion.vue'
export default {
  name: 'Tema3',
  components: {
    Traduccion,
  },
  data: () => ({
    traduccion1: {
      dialogo: [
        {
          textoIng:
            'In order to describe and talk about characters and relevant events in history that occurred in the past, it is necessary to know not only the grammatical structures of the verb tense in question, it is also important to delve into the appropriate vocabulary, which is the main input that allows us to build the complex ideas that we want to convey about what happened in history, etc.',
          textoEsp:
            'Para poder describir y hablar sobre personajes y hechos relevantes de la historia ocurridos en el pasado, es necesario conocer no solo las estructuras gramaticales propias del tiempo verbal en cuestión, también es importante profundizar en el vocabulario adecuado, el cual es el principal insumo que nos permite construir las ideas complejas que queremos transmitir sobre lo acontecido en la historia, etc.',
        },
      ],
    },
    traduccion2: {
      dialogo: [
        {
          textoIng:
            'Throughout history, there have been a lot of names that sound familiar and some stories that are known for many people. Depending on the country and the language, stories and characters change and English is not the exception, so it is important to know some of the most famous names and stories.',
          textoEsp:
            'A través de la historia, ha habido muchos nombres que suenan conocidos y algunas historias que son sabidas por muchas personas. Dependiendo del país y el idioma, las historias y personajes cambian y el inglés no es la excepción, por lo tanto, es importante conocer algunos de los nombres e historias más famosas.',
        },
      ],
    },
    traduccion3: {
      dialogo: [
        {
          textoIng:
            'Thanks to past simple, we are able to talk about stories of our life and events that we have lived. So, it is important to have the necessary vocabulary in order to talk about history. There are some specific words in historical contexts.',
          textoEsp:
            'Gracias al pasado simple, podemos hablar de historias de nuestras vidas y eventos que hemos vivido. Por lo tanto, es importante tener el vocabulario necesario para hablar de historia. Hay algunas palabras específicas en contextos históricos.',
        },
      ],
    },
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
