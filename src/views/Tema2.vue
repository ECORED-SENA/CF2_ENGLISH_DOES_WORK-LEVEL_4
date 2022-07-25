<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 #[i WH- questions in the past tense] (Preguntas con WH- en pasado)
    .row.justify-content-end.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width: 350px")
      .col-lg-7
        Traduccion.color-primario(:dialogo="traduccion1")
    p #[i.txt-color3 Below we will see a fairly complete table of interrogative pronouns (interrogative words), in which although they are not all of them, the vast majority are there, including variations of questions with #[b "what"], various types of questions with #[b "how"], and the difference between #[b “who”], #[b “whom”] and #[b “whose”].]
    p.mb-5 A continuación, veremos una tabla bastante completa de pronombres interrogativos (palabras interrogativas), en la que, si bien no están todos, está la gran mayoría, incluyendo variaciones de preguntas con #[i.txt-color2 “what”], varios tipos de preguntas con #[i.txt-color2 “how”], y la diferencia entre #[i.txt-color2 “who”], #[i.txt-color2 “whom”] y #[i.txt-color2 “whose”]
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Tabla 4]. #[i.txt-color3 Question word / Function / Example sentence]
    #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel' data-bs-interval="false").mb-5
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='6' aria-label='Slide 7')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='7' aria-label='Slide 8')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='8' aria-label='Slide 9')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='9' aria-label='Slide 10')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='10' aria-label='Slide 11')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='11' aria-label='Slide 12')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='12' aria-label='Slide 13')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='13' aria-label='Slide 14')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='14' aria-label='Slide 15')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='15' aria-label='Slide 16')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='16' aria-label='Slide 17')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='17' aria-label='Slide 18')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='18' aria-label='Slide 19')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='19' aria-label='Slide 20')
      .carousel-inner
        .carousel-item.active
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>When?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuándo?
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking about time, occasion, moment.]
                          p Preguntar sobre tiempo, ocasión, momento.
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>When did you visit The Eiffel Tower?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuándo visitaste la Torre Eiffel?
        .carousel-item
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>Where?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Dónde?
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking in or at what place or position.]
                          p Preguntar en qué lugar o posición.
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>Where did Albert Einstein die?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Dónde murió Albert Einstein?
        .carousel-item
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>Why?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Por qué?
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking for reason, motive, explanation.]
                          p Preguntar por una razón, motivo, explicación.
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>Why did the Second World War start?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Por qué comenzó la Segunda Guerra Mundial?
        .carousel-item
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>What?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Qué?
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking for information about something, specific thing, object.]
                          p Preguntar por información sobre algo, cosa específica, objeto.
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>What did you do on Bonfire Night?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Qué hiciste en la noche de las hogueras?
        .carousel-item
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>What time?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿A qué hora?
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking for a specific hour.]
                          p Preguntar por una hora específica.
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>What time did John F Kennedy get shot?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿A qué hora le dispararon a John F. Kennedy?
        .carousel-item
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>What … for?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Para qué?
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking for a reason, asking why.]
                          p Preguntar por una razón, preguntar por qué.
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>What did William Shakespeare write Hamlet for?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Para qué escribió William Shakespeare Hamlet?
        .carousel-item
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>Which?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuál?
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking about a choice, an alternative.]
                          p Preguntar sobre una elección, una alternativa.
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>Which countries did Germany occupy?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuáles países ocupó Alemania?
        .carousel-item
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>Who?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Quién?
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking what or which person or people (subject).]
                          p Preguntar qué o cuál persona o personas (como sujeto).
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>Who was Robin Hood?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Quién fue Robin Hood?
        .carousel-item
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>Whom?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿A quién?
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking what or which person or people (object), "to who?".]
                          p Preguntar a qué o a cuál persona o personas (como objeto).
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>Whom did you see on the anniversary of 9/11?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿A quién viste en el aniversario del 11 de septiembre?
        .carousel-item
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>Whose?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿De quién?
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking about ownership.]
                          p Preguntando por la propiedad (¿a quién pertenece?).
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>Whose camera did you use to take that photo of Queen Elizabeth?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿De quién era la cámara que usaste para tomar esa foto de la reina Isabel?
        .carousel-item
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cómo?
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking about way, manner, form, condition or quality.]
                          p Preguntar sobre modo, manera, forma, condición o calidad.
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How did you learn about D-Day?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cómo te enteraste del desembarco de Normandía?
        .carousel-item
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How long?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuán largo? *
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking about length (space or time).]
                          p Preguntar por la longitud (espacio) o la duración (tiempo).
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How long was the Tacoma Narrows Bridge?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuán largo era el puente de Tacoma Narrows?
        .carousel-item
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How long?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuánto tiempo? **
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking about length (space or time).]
                          p Preguntar por la longitud (espacio) o la duración (tiempo).
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How long did The Great Depression last?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuánto duró la Gran Depresión?
        .carousel-item
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How wide?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuán ancho?
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking about width (space).]
                          p Preguntar por la anchura (espacio).
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How wide was the Berlin Wall?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuán ancho era el Muro de Berlín?
        .carousel-item
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How old?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuántos años?
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking about age.]
                          p Preguntar por la edad.
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How old was King Arthur when he took the sword out of the rock?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuántos años tenía el rey Arturo cuando sacó la espada de la roca?
        .carousel-item
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How much?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuánto cuesta? *
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking about price and about quantity (uncountable nouns).]
                          p Preguntar por precio y por cantidad (sustantivos incontables).
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How much did it cost to build the Eiffel Tower?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuánto costó construir la Torre Eiffel?
        .carousel-item
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How much?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuánto? ¿Cuánta? **
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking about price and about quantity (uncountable nouns).]
                          p Preguntar por precio y por cantidad (sustantivos incontables).
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How much snow fell in Boston in the winter of 1978?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuánta nieve cayó en Boston en el invierno de 1978?
        .carousel-item
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How many?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuántos? ¿Cuántas?
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking about quantity (countable nouns).]
                          p Preguntar por cantidad (sustantivos contables).
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How many engineers did companies hire during Y2K?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuántos ingenieros contrataron las empresas durante el problema informático del año 2000?
        .carousel-item
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How far?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuán lejos?
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking about distance.]
                          p Preguntando por la distancia.
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How far did people travel to go to a World's Fair in the last century?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cuán lejos viajaba la gente para ir a una Feria Mundial en el siglo pasado?
        .carousel-item
          .row.justify-content-center
            .col-lg-10.bg-color11
              .p-4
                .row
                  .col-lg-3
                    .row
                      .col-12.bg-color17
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Question Word]]
                          p.mb-0.text-center #[b Palabra interrogativa]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How come?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cómo es que…?
                  .col-lg-4
                    .row
                      .col-12.bg-color18
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Function]]
                          p.mb-0.text-center #[b Función]
                      .col-12.bg-color16
                        .p-2
                          p #[i.txt-color2 Asking for a reason, asking why (informal way).]
                          p Preguntar por una razón, preguntar por qué (de manera informal).
                  .col-lg-5
                    .row
                      .col-12.bg-color19
                        .p-2
                          p.mb-0.text-center #[b #[i.txt-color1 Example sentence]]
                          p.mb-0.text-center #[b Oración de ejemplo]
                      .col-12.bg-color16
                        .p-2
                          TarjetaAudio.color-primario.mb-2(
                            texto="<em><span>How come people believe in BigFoot?</span></em>"
                            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          )
                          p.ms-3 ¿Cómo es que la gente cree en Pie Grande?
      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next
    p.mb-5 Se invita a ver el siguiente video, donde se utilizan expresiones  del pasado simple y algunas preguntas con #[i.txt-color2 “wh- questions”].
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/IBLKkW632nY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mb-5
      .col-12
        .row.justify-content-end
          .col-lg-10
            .p-4
              p.mb-0 #[i.txt-color2 Warning #4]
              p.mb-0 #[b Advertencia #4]
        .row.bg-color20
          .col-lg-2
            figure.fig-position
              img(src='@/assets/curso/tema1/img12.svg', style="width: 100px").m-auto
          .col-lg-10
            .p-4
              p #[i.txt-color4 The form “whom” is used to ask for the object of a verb or of a preposition in very formal or old-fashioned English. “Whom” is not very common, modern English usage prefers “who” instead of “whom” in all but the most formal contexts, especially in formal writing.]
              p.txt-color5 La forma #[b #[i.txt-color4 “whom”]] se usa para preguntar por el objeto de un verbo o de una preposición en un inglés muy formal o anticuado. #[b #[i.txt-color4 “Whom”]] no es muy común, el uso del inglés moderno prefiere #[b #[i.txt-color4 “who”]] en lugar de #[b #[i.txt-color4 “whom”]] en todos los contextos, excepto en los más formales, especialmente en la escritura formal.
    .row.mb-5
      .col-12
        Traduccion.color-primario(:dialogo="traduccion2")
    .row
      .col-12.bg-color21
        .p-3
          h3.text-center #[i.txt-color3 Information Questions] / Preguntas de información
          .row.mb-3
            .col-lg.bg-color22.m-1
              .p-3
                p.mb-0.text-center.text-white #[b #[i WH- word]]
                p #[b Palabra con “WH”]
                .row
                  .col-12.bg-color23
                    .p-4
                      p.mb-0.text-center #[b #[i When]]
                      p.mb-0.text-center #[b #[i What time]]
                      p.mb-0.text-center #[b #[i How old]]
            .col-lg.bg-color22.m-1
              .p-3
                p.mb-0.text-center.text-white #[b #[i Auxiliary]]
                p #[b Auxiliar]
                .row
                  .col-12.bg-color23
                    .p-4
                      p.mb-0.text-center #[b #[i Did]]
            .col-lg.bg-color22.m-1
              .p-3
                p.mb-0.text-center.text-white #[b #[i Subject]]
                p #[b Sujeto]
                .row
                  .col-12.bg-color23
                    .p-4
                      p.mb-0.text-center #[b #[i I / he / she / it]]
                      p.mb-0.text-center #[b #[i we / you / they]]
            .col-lg.bg-color22.m-1
              .p-3
                p.mb-0.text-center.text-white #[b #[i Verb]]
                p #[b Verbo]
                .row
                  .col-12.bg-color23
                    .p-4
                      p.mb-0.text-center #[b #[i verb in base form]]
                      p.mb-0.text-center #[b #[i verbo en forma base]]
            .col-lg.bg-color22.m-1
              .p-3
                p.mb-0.text-center.text-white #[b #[i Complement]]
                p #[b Complemento]
                .row
                  .col-12.bg-color23
                    .p-4
                      p.mb-0.text-center #[b #[i …more information]]
                      p.mb-0.text-center #[b #[i …más información]]
          .row
            .col-12.bg-color24
              .p-3
                .row
                  .col-lg-4
                    TarjetaAudio.color-primario.mb-2(
                      texto="<em><span>When did I live in Spain?</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    )
                    p.ms-3 ¿Cuándo viví en España?
                  .col-lg-4
                    TarjetaAudio.color-primario.mb-2(
                      texto="<em><span>What did you draw?</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    )
                    p.ms-3 ¿Qué dibujaste tú?
                  .col-lg-4
                    TarjetaAudio.color-primario.mb-2(
                      texto="<em><span>Why did he play football yesterday?</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    )
                    p.ms-3 ¿Por qué él jugó al fútbol ayer?
                .row
                  .col-lg-4
                    TarjetaAudio.color-primario.mb-2(
                      texto="<em><span>How far did she fly in a helicopter?</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    )
                    p.ms-3 ¿Cuán lejos voló ella en un helicóptero?
                  .col-lg-4
                    TarjetaAudio.color-primario.mb-2(
                      texto="<em><span>How did it bark so loud?</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    )
                    p.ms-3 ¿Cómo (eso) ladró tan fuerte?
                  .col-lg-4
                    TarjetaAudio.color-primario.mb-2(
                      texto="<em><span>How come did we eat the whole cake?</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    )
                    p.ms-3 ¿Cómo es que nos comimos todo el pastel?
                .row.justify-content-center
                  .col-lg-5
                    TarjetaAudio.color-primario.mb-2(
                      texto="<em><span>What time did you cook lasagna last night?</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    )
                    p.ms-3 ¿A qué hora ustedes cocinaron lasaña anoche?
                  .col-lg-5
                    TarjetaAudio.color-primario.mb-2(
                      texto="<em><span>Where did they buy a house a year ago?</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    )
                    p.ms-3 ¿Dónde compraron ellos una casa hace un año?

</template>

<script>
import Traduccion from '../components/Traduccion.vue'
export default {
  name: 'Tema2',
  components: {
    Traduccion,
  },
  data: () => ({
    traduccion1: {
      dialogo: [
        {
          textoIng:
            'As we saw in the topic about the verb “to be” in the past simple tense, there are two types of questions: closed questions or “yes or no questions”, and open questions or “informative questions” that do not ask for a confirmation or denial, but for a particular fact or information. These are also called “wh-questions” since the question words usually start with “wh-”, for example: <color1>Where? Why? When?</color1>',
          textoEsp:
            'Al igual que lo vimos en el tema del verbo <color2>“to be”</color2> en pasado simple, hay dos tipos de preguntas: las preguntas cerradas o “preguntas de sí o no”, y las preguntas abiertas o <color2>“preguntas informativas”</color2>, que no piden una confirmación o negación, sino que preguntan por un dato o información en particular. Estas también son llamadas <color2>“wh- questions”</color2> (preguntas con wh-), debido que las palabras de pregunta generalmente comienzan con “wh-”, por ejemplo: <color2>Where?</color2> (¿Dónde?) <color2>Why?</color2> (¿Por qué?) <color2>When?</color2> (¿Cuándo?), etc.',
        },
      ],
    },
    traduccion2: {
      dialogo: [
        {
          textoIng:
            'Previously, we saw how to form interrogative sentences for closed questions (“yes or no questions”), now we will see how to form open questions (information questions) with interrogative pronouns “Wh-”.',
          textoEsp:
            'Previamente, vimos cómo formar frases interrogativas para preguntas cerradas (“preguntas de sí o no”), ahora veremos cómo formar preguntas abiertas (preguntas de información) con pronombres interrogativos “Wh-”.',
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
