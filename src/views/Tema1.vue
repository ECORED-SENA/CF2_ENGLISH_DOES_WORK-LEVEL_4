<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-2.p-md-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 #[i Past simple] (Pasado simple)
    .row(data-aos="fade-right")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img13.png', style="width: 350px").m-auto
      .col-lg-8
        Traduccion.color-primario(:dialogo="traduccion1")
    Separador
    #t_1_1
    .titulo-segundo.color-acento-botones
      h2 1.1 #[i Regular verbs] (Verbos regulares)
    .row.mb-5(data-aos="fade-left")
      .col-lg-7.mb-4.mb-lg-0
        p.txt-color3 #[i In the past simple tense, it is easy to conjugate regular verbs since the formula is easy: base form of the verb + ed. But there are certain rules of spelling and pronunciation that must be followed in certain cases.] 
        p En el tiempo pasado simple es fácil conjugar los verbos regulares, ya que la fórmula es fácil: forma base del #[i.txt-color2 verbo + ed]. Pero hay ciertas reglas de ortografía y pronunciación que se deben seguir en ciertos casos.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img14.png', style="width: 450px").m-auto
    h3.mb-5 #[i.txt-color3 Spelling rules for words with -ed] / Reglas de ortografía de palabras con #[i.txt-color3 “-ed”]
    .row(data-aos="fade-right")
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img15.png', style="width: 450px").m-auto
      .col-lg-7
        p #[i.txt-color3 To begin with, we must know that in English the words ending with “-ed” can have other uses than being verbs in the simple past tense, they can also be used as past participles in the perfect tenses or as adjectives to qualify or describe something.]
        p.mb-5 Para comenzar, debemos saber que en inglés las palabras terminadas con #[i.txt-color2 “-ed”] pueden tener otros usos diferentes a ser verbos en tiempo pasado simple, pueden usarse también como participios pasados en los tiempos perfectos o como adjetivos para calificar o describir algo. A continuación, podemos ver algunos ejemplos.
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-11.col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          .bg-fig1
            figure
              img(src='@/assets/curso/tema1/img1.svg')
          .bg-fig2
            figure
              img(src='@/assets/curso/tema1/img2.svg')
          .tarjeta.color-primario
            .p-4
              .row.justify-content-center
                .col-auto.bg-color48.mt-4.px-0
                  .px-1.py-1
                    Audio.color-primario(
                      :audio="require('@/assets/curso/tema1/audio39.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
              h3.text-center.mt-4.mb-0 #[b #[i.txt-color3 Past tense verbs]]
              h3.text-center.mb-4 #[b Verbos en tiempo pasado]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Counted</em>"
                :audio="require('@/assets/curso/tema1/audio30.mp3')"
                no-barra
              )
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Looked</em>"
                :audio="require('@/assets/curso/tema1/audio31.mp3')"
                no-barra
              )
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Listened</em>"
                :audio="require('@/assets/curso/tema1/audio32.mp3')"
                no-barra
              )
      .col-11.col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          .bg-fig1
            figure
              img(src='@/assets/curso/tema1/img1.svg')
          .bg-fig2
            figure
              img(src='@/assets/curso/tema1/img2.svg')
          .tarjeta.color-secundario
            .p-4
              .row.justify-content-center
                .col-auto.bg-color48.mt-4.px-0
                  .px-1.py-1
                    Audio.color-primario(
                      :audio="require('@/assets/curso/tema1/audio40.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
              h3.text-center.mt-4.mb-0 #[b #[i Past participles]]
              h3.text-center.mb-4 #[b Participios pasados]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Needed</em>"
                :audio="require('@/assets/curso/tema1/audio33.mp3')"
                no-barra
              )
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Passed</em>"
                :audio="require('@/assets/curso/tema1/audio34.mp3')"
                no-barra
              )
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Called</em>"
                :audio="require('@/assets/curso/tema1/audio35.mp3')"
                no-barra
              )
      .col-11.col-lg
        .tarjeta-avatar
          .bg-fig1
            figure
              img(src='@/assets/curso/tema1/img1.svg')
          .bg-fig2
            figure
              img(src='@/assets/curso/tema1/img2.svg')
          .tarjeta.color-terciario
            .p-4
              .row.justify-content-center
                .col-auto.bg-color48.mt-4.px-0
                  .px-1.py-1
                    Audio.color-primario(
                      :audio="require('@/assets/curso/tema1/audio41.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
              h3.text-center.mt-4.mb-0 #[b #[i Adjectives]]
              h3.text-center.mb-4 #[b Adjetivos]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Concentrated</em>"
                :audio="require('@/assets/curso/tema1/audio36.mp3')"
                no-barra
              )
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Astonished</em>"
                :audio="require('@/assets/curso/tema1/audio37.mp3')"
                no-barra
              )
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Alarmed</em>"
                :audio="require('@/assets/curso/tema1/audio38.mp3')"
                no-barra
              )
    p.mb-5 En el siguiente recurso, podemos observar algunos ejemplos utilizando palabras en tiempo pasado con la terminación ed.
    .row.mb-5(data-aos="fade-right")
      .col-12.col-lg
        .p-2
          .row.bg-color1
            .col-12.bg-color2.px-0
              figure
                img(src='@/assets/curso/tema1/img1.png')
            .col-12.bg-color3
              .py-3
                h4.text-center.mb-0 #[b #[i.txt-color3 Past tense verbs]]
                h4.text-center.mb-5 #[b Verbos en tiempo pasado]
                TarjetaAudio.color-primario.mb-3(
                  texto="<em><span>I counted the coins in the piggy bank.</span></em>"
                  :audio="require('@/assets/curso/tema1/audio1.mp3')"
                )
                p.ms-3 Yo #[b conté] las monedas en la alcancía.
      .col-12.col-lg
        .p-2
          .row.bg-color1
            .col-12.bg-color2.px-0
              figure
                img(src='@/assets/curso/tema1/img2.png')
            .col-12.bg-color3
              .py-3
                h4.text-center.mb-0 #[b #[i.txt-color3 Past participle in the present perfect time]]
                h4.text-center.mb-5 #[b Participio pasado en tiempo presente perfecto]
                TarjetaAudio.color-primario.mb-3(
                  texto="<em><span>We have never needed help with our homework.</span></em>"
                  :audio="require('@/assets/curso/tema1/audio2.mp3')"
                )
                p.ms-3 Nosotros nunca hemos #[b necesitado] ayuda con nuestras tareas.
      .col-12.col-lg
        .p-2
          .row.bg-color1
            .col-12.bg-color2.px-0
              figure
                img(src='@/assets/curso/tema1/img3.png')
            .col-12.bg-color3
              .py-3
                h4.text-center.mb-0 #[b #[i.txt-color3 Adjective describing a person]]
                h4.text-center.mb-5 #[b Adjetivo describiendo a una persona]
                TarjetaAudio.color-primario.mb-3(
                  texto="<em><span>She was alarmed and astonished.</span></em>"
                  :audio="require('@/assets/curso/tema1/audio3.mp3')"
                )
                p.ms-3 Ella estaba #[b alarmada] y #[b estupefacta].
    .row.mb-5(data-aos="fade-left")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img16.png', style="width: 450px").m-auto
      .col-lg-8
        p #[i.txt-color3 We are going to learn the correct spelling of words that end in “-ed” and we will mainly use regular past tense verbs as examples, although the same rules apply to all words that end in “-ed”.]
        p Vamos a aprender, en el siguiente recurso, la ortografía correcta de las palabras que terminan en #[i.txt-color2 “-ed”] y usaremos principalmente verbos regulares en pasado como ejemplos, aunque las mismas reglas se aplican a todas las palabras que terminan en #[i.txt-color2 “-ed”].
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
      .row(titulo="<span>General Rule</span> / Regla general")
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img4.png', style="width: 350px").m-auto
        .col-lg-8
          p #[i.txt-color2 In general, we just add -ed to the end of a regular verb or other type of "-ed word".]
          p.mb-4 Generalmente, solo agregamos -ed al final de un verbo regular u otro tipo de palabra "-ed".
          .row.mx-1.mb-3
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 visit]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 visited]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio42.mp3')")
          .row.mx-1.mb-3
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 walk]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 walked]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio43.mp3')")
          .row.mx-1
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 return]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 returned]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio44.mp3')")
      .row(titulo="<span>Words ending in &quot;Consonant + E&quot;</span> / Palabras que terminan en &quot;Consonante + E&quot;")
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img4.png', style="width: 350px").m-auto
        .col-lg-8
          p #[i.txt-color2 Just add -d to the end.]
          p.mb-4 Simplemente, agregue -d al final.
          .row.mx-1.mb-3
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 love]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 loved]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio45.mp3')")
          .row.mx-1.mb-3
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 change]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 changed]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio46.mp3')")
          .row.mx-1
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 exercise]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 exercised]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio47.mp3')")
      .row(titulo="<span>Consonant + Vowel + Consonant</span> / Consonante + Vocal + Consonante")
        .col-lg-6.mb-4.mb-lg-0
          p #[i.txt-color2 If it ends in C+V+C and the last syllable is stressed, we double the final consonant.]
          p Si termina en C+V+C y la última sílaba está acentuada, #[b se duplica la consonante final].
          .row.mx-1.mb-3
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 stop]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 stopped]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio48.mp3')")
          .row.mx-1.mb-3
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 beg]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 begged]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio49.mp3')")
          .row.mx-1
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 admit]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 admitted]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio50.mp3')")
        .col-lg-6.border1
          p.mt-4.mt-lg-0 #[i.txt-color2 If it ends in C+V+C and the last syllable is unstressed, we don’t double the final consonant.]
          p Si termina en C+V+C y la última sílaba no está acentuada, #[b no se duplica la consonante final].
          .row.mx-1.mb-3
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 happen]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 happened]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio51.mp3')")
          .row.mx-1.mb-3
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 visit]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 visited]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio52.mp3')"**Falta audio52)
          .row.mx-1
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 remember]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 remembered]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio53.mp3')")
      .row(titulo="<span>Words ending in Y</span> / Palabras terminadas en Y")
        .col-lg-6.mb-4.mb-lg-0
          p #[i.txt-color2 If the verb ends in “C+Y”: the “y” is removed and we add “ -ied”.]
          p Si el verbo termina en “C+Y”: se elimina la #[b “y”] y se añade #[i.txt-color2 “-ied”].
          .row.mx-1.mb-3
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 copy]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 copied]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio54.mp3')")
          .row.mx-1.mb-3
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 study]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 studied]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio55.mp3')")
          .row.mx-1
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 multiply]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 multiplied]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio56.mp3')")
        .col-lg-6.border1
          p.mt-4.mt-lg-0 #[i.txt-color2 If the verb ends in “V+Y”: we only add “-ed”.]
          p Si el verbo termina en “V+Y”: solo se agrega #[i.txt-color2 “-ed”].
          .row.mx-1.mb-3
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 pray]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 prayed]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio57.mp3')")
          .row.mx-1.mb-3
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 obey]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 obeyed]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio58.mp3')")
          .row.mx-1
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 enjoy]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 enjoyed]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio59.mp3')")
      .row(titulo="<span>Words ending in “W” or “X”</span> / Palabras terminadas en “W” o “X”")
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img4.png', style="width: 350px").m-auto
        .col-lg-8
          p #[i.txt-color2 If the verb ends in “W” or “X”: we only add “-ed”.]
          p.mb-4 Si el verbo termina en “W” o “X”: Solo se agrega #[i.txt-color2 “-ed”].
          .row
            .col-lg-6
              .row.mx-1.mb-3
                .col-auto.bg-color49
                  .p-2
                    .row.align-items-center
                      .col-auto
                        p.mb-0 #[i.txt-color2 allow]
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema1/img3.svg')
                      .col-auto
                        p.mb-0 #[i.txt-color2 allowed]
                      .col-auto
                        Audio.color-primario(:audio="require('@/assets/curso/tema1/audio60.mp3')")
              .row.mx-1.mb-3
                .col-auto.bg-color49
                  .p-2
                    .row.align-items-center
                      .col-auto
                        p.mb-0 #[i.txt-color2 chew]
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema1/img3.svg')
                      .col-auto
                        p.mb-0 #[i.txt-color2 chewed]
                      .col-auto
                        Audio.color-primario(:audio="require('@/assets/curso/tema1/audio61.mp3')")
              .row.mx-1.mb-3
                .col-auto.bg-color49
                  .p-2
                    .row.align-items-center
                      .col-auto
                        p.mb-0 #[i.txt-color2 glow]
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema1/img3.svg')
                      .col-auto
                        p.mb-0 #[i.txt-color2 glowed]
                      .col-auto
                        Audio.color-primario(:audio="require('@/assets/curso/tema1/audio62.mp3')")
            .col-lg-6
              .row.mx-1.mb-3
                .col-auto.bg-color49
                  .p-2
                    .row.align-items-center
                      .col-auto
                        p.mb-0 #[i.txt-color2 fix]
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema1/img3.svg')
                      .col-auto
                        p.mb-0 #[i.txt-color2 fixed]
                      .col-auto
                        Audio.color-primario(:audio="require('@/assets/curso/tema1/audio63.mp3')")
              .row.mx-1.mb-3
                .col-auto.bg-color49
                  .p-2
                    .row.align-items-center
                      .col-auto
                        p.mb-0 #[i.txt-color2 mix]
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema1/img3.svg')
                      .col-auto
                        p.mb-0 #[i.txt-color2 mixed]
                      .col-auto
                        Audio.color-primario(:audio="require('@/assets/curso/tema1/audio64.mp3')")
              .row.mx-1
                .col-auto.bg-color49
                  .p-2
                    .row.align-items-center
                      .col-auto
                        p.mb-0 #[i.txt-color2 relax]
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema1/img3.svg')
                      .col-auto
                        p.mb-0 #[i.txt-color2 relaxed]
                      .col-auto
                        Audio.color-primario(:audio="require('@/assets/curso/tema1/audio65.mp3')")
      .row(titulo="<span>Words ending in Y</span> / Palabras terminadas en Y")
        .col-lg-6.mb-4.mb-lg-0
          .row.mb-5
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img4.svg')
            .col
              p #[i.txt-color2 In British English, we double the final “L” and add “-ed”.]
              p En inglés británico, #[b se duplica la “L”] final y se añade #[i.txt-color2 “-ed”].
          .row.mx-1.mb-3
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 equal]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 equalled]
          .row.mx-1.mb-3
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 travel]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 travelled]
          .row.mx-1
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 control]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 controlled]
        .col-lg-6.border1
          .row.mb-4
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img5.svg')
            .col
              p #[i.txt-color2 In American English, if the last syllable is stressed, we double the final “L” and add “-ed”, if the last syllable is unstressed, we just add “-ed”.]
              p En inglés americano, #[b si la última sílaba está acentuada, se duplica la “L”] final y se añade #[i.txt-color2 “-ed”], si la última sílaba #[b no está acentuada], solo se añade #[i.txt-color2 “-ed”].
          .row.mx-1.mb-3
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 equal]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 equaled]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio66.mp3')")
          .row.mx-1.mb-3
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 travel]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 traveled]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio67.mp3')")
          .row.mx-1
            .col-auto.bg-color49
              .p-2
                .row.align-items-center
                  .col-auto
                    p.mb-0 #[i.txt-color2 control]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg')
                  .col-auto
                    p.mb-0 #[i.txt-color2 controlled]
                  .col-auto
                    Audio.color-primario(:audio="require('@/assets/curso/tema1/audio68.mp3')")
    p.mb-5 Después de haber estudiado la ortografía de las palabras con la terminación #[i.txt-color2 -ed], en este apartado estudiaremos las #[i.txt-color2 “Pronunciation rules for words with -ed”] / Reglas de pronunciación de palabras con #[i.txt-color2 “-ed”].
    .row.mb-5(data-aos="fade-left")
      .col-12.bg-color4
        .p-4
          .row.justify-content-center
            .col-6.col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img6.svg', style="width: 25.col-40px").m-auto
            .col-lg-9
              h4.mb-0 #[i.txt-color2 Pronunciation rules for words with -ed]
              h4.mb-4 #[b Reglas de pronunciación de palabras con “-ed”]
              .row.mb-4
                .col-12.bg-white
                  .p-4
                    p.mb-0 #[i.txt-color3 Because English is not a phonetic language, there are three different ways to pronounce #[b “-ed”] at the end of a word. Listen to the following audio and pay close attention to how the words sound at the end.]
              p.mb-4 Debido a que el inglés no es un idioma fonético, existen tres formas diferentes de pronunciar “-ed” al final de una palabra. Escuche el siguiente audio y ponga mucha atención a cómo suenan las palabras al final.
              .tabla-a.color-acento-botones.mb-4
                table
                  thead
                    tr
                      th
                      th #[i /id/]
                      th #[i /t/]
                      th #[i /d/]
                  tbody.bg-color5
                    tr
                      td.text-center #[b #[i.txt-color1 Past tense verbs]]
                      td 
                        p.text-center.mb-0 #[i.txt-color2 counted]
                      td
                        p.text-center.mb-0 #[i.txt-color2 looked]
                      td
                        p.text-center.mb-0 #[i.txt-color2 listened]
                    tr
                      td.text-center #[b #[i.txt-color1 Past participles]]
                      td 
                        p.text-center.mb-0 #[i.txt-color2 needed]
                      td
                        p.text-center.mb-0 #[i.txt-color2 passed]
                      td
                        p.text-center.mb-0 #[i.txt-color2 called]
                    tr
                      td.text-center #[b #[i.txt-color1 Adjectives]]
                      td 
                        p.text-center.mb-0 #[i.txt-color2 concentrated]
                      td
                        p.text-center.mb-0 #[i.txt-color2 astonished]
                      td
                        p.text-center.mb-0 #[i.txt-color2 alarmed]
              .row.justify-content-center
                .col-lg-8
                  TarjetaAudio.color-primario(
                    texto=""
                    :audio="require('@/assets/curso/tema1/audio69.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
    .row.mb-5(data-aos="fade-left")
      .col-lg-7.mb-4.mb-lg-0
        Traduccion.color-primario(:dialogo="traduccion2")
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img10.png', style="width: 350px").m-auto
    p #[i.txt-color3 Now you can watch a video to better understand the pronunciation rules for words ending in -ed, and listen to the following audios to review the pronunciation of each word.]
    p.mb-5 Ahora observe un video para entender mejor las normas de pronunciación de las palabras terminadas en -ed, y escuche los siguientes audios para repasar la pronunciación de cada palabra.
    figure.mb-5(data-aos="fade-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/PZR9TDdKJAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 La pronunciación de los verbos terminados en #[i.txt-color2 “-ed”] depende del sonido final. Hay tres maneras de pronunciar #[i.txt-color2 “-ed”]. Lea y escuche algunos ejemplos con su correspondiente pronunciación en #[i.txt-color2 /id/, /t/ o /d/].
    .row.mb-5(data-aos="fade-down")
      .col-lg
        .p-1.h-100
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/img8.svg' alt='AvatarTop')
            .tarjeta.color-cuartiario
              .p-4
                .row.align-items-center
                  .col-3
                    .p-4.bg-color6
                      p.mb-0.text-center #[b T]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>cheated</span></em>"
                      :audio="require('@/assets/curso/tema1/audio10.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color8
                      p.mb-0.text-center #[b D]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>expanded</span></em>"
                      :audio="require('@/assets/curso/tema1/audio11.mp3')"
                      no-barra
                    )

      .col-lg
        .p-1.h-100
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/img9.svg' alt='AvatarTop')
            .tarjeta.color-cuartiario
              .p-4
                .row.align-items-center
                  .col-3
                    .p-4.bg-color6
                      p.mb-0.text-center #[b P]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>jumped</span></em>"
                      :audio="require('@/assets/curso/tema1/audio12.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b K]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>kicked</span></em>"
                      :audio="require('@/assets/curso/tema1/audio13.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b F]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>sniffed</span></em>"
                      :audio="require('@/assets/curso/tema1/audio14.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b GH]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>coughed</span></em>"
                      :audio="require('@/assets/curso/tema1/audio15.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b SH]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>splashed</span></em>"
                      :audio="require('@/assets/curso/tema1/audio16.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b CH]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>coached</span></em>"
                      :audio="require('@/assets/curso/tema1/audio17.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b SS]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>guessed</span></em>"
                      :audio="require('@/assets/curso/tema1/audio18.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b C]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>panicked*</span></em>"
                      :audio="require('@/assets/curso/tema1/audio19.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color8
                      p.mb-0.text-center #[b X]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>relaxed</span></em>"
                      :audio="require('@/assets/curso/tema1/audio20.mp3')"
                      no-barra
                    )
      .col-lg
        .p-1.h-100
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
            .tarjeta.color-cuartiario
              .p-4
                .row.align-items-center
                  .col-3
                    .p-4.bg-color6
                      p.mb-0.text-center #[b L]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>traveled</span></em>"
                      :audio="require('@/assets/curso/tema1/audio21.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b N]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>warned</span></em>"
                      :audio="require('@/assets/curso/tema1/audio22.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b R]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>remembered</span></em>"
                      :audio="require('@/assets/curso/tema1/audio23.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b G]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>dragged</span></em>"
                      :audio="require('@/assets/curso/tema1/audio24.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b V]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>shaved</span></em>"
                      :audio="require('@/assets/curso/tema1/audio25.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b S]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>chased</span></em>"
                      :audio="require('@/assets/curso/tema1/audio26.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b Z]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>amazed</span></em>"
                      :audio="require('@/assets/curso/tema1/audio27.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b B]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>climbed</span></em>"
                      :audio="require('@/assets/curso/tema1/audio28.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color8
                      p.mb-0.text-center #[b M]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>seemed</span></em>"
                      :audio="require('@/assets/curso/tema1/audio29.mp3')"
                      no-barra
                    )
    .row(data-aos="fade-right")
      .col-12.bg-color5
        .p-4
          .row.align-items-center.justify-content-center
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img11.svg', style="width: 50px")
              p.mb-0 #[i.txt-color2 Vowels]
              p.mb-0 #[b.txt-color1 Vocales]
            .col-lg-7.mb-4.mb-lg-0
              p #[i.txt-color2 Words that end in a vowel sound use the /d/ pronunciation for “-ed”.]
              p.mb-0 Las palabras que terminan en un sonido de vocal usan la pronunciación /d/ para “-ed”.
            .col-lg-auto.mx-1.mb-4.mb-lg-0
              .row.justify-content-center.mb-4
                .col-8.col-lg
                  TarjetaAudio.color-primario(
                    texto="<em><span>followed</span></em>"
                    :audio="require('@/assets/curso/tema1/audio4.mp3')"
                    no-barra
                  )
              .row.justify-content-center.mb-4
                .col-8.col-lg
                  TarjetaAudio.color-primario(
                    texto="<em><span>played</span></em>"
                    :audio="require('@/assets/curso/tema1/audio6.mp3')"
                    no-barra
                  )
              .row.justify-content-center
                .col-8.col-lg
                  TarjetaAudio.color-primario(
                    texto="<em><span>tried</span></em>"
                    :audio="require('@/assets/curso/tema1/audio8.mp3')"
                    no-barra
                  )
            .col-lg-auto.mx-1
              .row.justify-content-center.mb-4
                .col-8.col-lg
                  TarjetaAudio.color-primario(
                    texto="<em><span>continued</span></em>"
                    :audio="require('@/assets/curso/tema1/audio5.mp3')"
                    no-barra
                  )
              .row.justify-content-center.mb-4
                .col-8.col-lg
                  TarjetaAudio.color-primario(
                    texto="<em><span>enjoyed</span></em>"
                    :audio="require('@/assets/curso/tema1/audio7.mp3')"
                    no-barra
                  )
              .row.justify-content-center
                .col-8.col-lg
                  TarjetaAudio.color-primario(
                    texto="<em><span>prayed</span></em>"
                    :audio="require('@/assets/curso/tema1/audio9.mp3')"
                    no-barra
                  )
    Separador
    #t_1_2
    .titulo-segundo.color-acento-botones
      h2 1.2 #[i Irregular verbs] (Verbos irregulares)
    .row.justify-content-end.mb-4(data-aos="fade-left")
      .col-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img21.svg', style="width: 150px").m-auto
      .col-lg-10
        Traduccion.color-primario(:dialogo="traduccion3")
    p.mb-5 A continuación, se presenta la lista de los principales verbos irregulares utilizados en inglés.
    .row.mb-4
      .col-auto.bg-color50
        .p-2
          p.mb-0 #[i.txt-color2 Irregular verbs] - Verbos irregulares
    .row.mb-3(data-aos="fade-right")
      .col-12.bg-color51
        .py-4.px-2
          .row
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img22.svg', style="width: 450px").m-auto
            .col-lg-6.bg-white.rounded.shadow-sm
              .p-3
                .row.mb-3
                  .col-2
                  .col-3
                    p.mb-0 #[b #[i Spanish]]
                    p.mb-0 Español
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Base Form]]
                    p.mb-0.txt-color1 Forma Base
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Past Simple]]
                    p.mb-0.txt-color7 Pasado Simple
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio79.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Empezar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Begin]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Began]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio80.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Traer
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Bring]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Brought]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio81.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Comprar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Buy]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Bought]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio82.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Venir
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Come]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Came]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio83.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Costar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Cost]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Cost]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio84.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Cortar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Cut]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Cut]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio85.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Hacer
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Do]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Did]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio86.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Soñar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Dream]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Dreamt / Dreamed]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio87.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Conducir
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Drive]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Drove]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio88.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Comer
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Eat]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Ate]]
                .row.align-items-center
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio89.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Caer
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Fall]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Fell]]
    .row.mb-3(data-aos="fade-left")
      .col-12.bg-color51
        .py-4.px-2
          .row
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img23.svg', style="width: 450px").m-auto
            .col-lg-6.bg-white.rounded.shadow-sm
              .p-3
                .row.mb-3
                  .col-2
                  .col-3
                    p.mb-0 #[b #[i Spanish]]
                    p.mb-0 Español
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Base Form]]
                    p.mb-0.txt-color1 Forma Base
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Past Simple]]
                    p.mb-0.txt-color7 Pasado Simple
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio90.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Sentir
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Feel]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Felt]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio91.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Luchar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Fight]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Fought]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio92.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Encontrar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Find]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Found]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio93.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Volar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Fly]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Flew]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio94.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Perdonar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Forgive]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Forgave]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio95.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Obtener
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Get]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Got]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio96.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Dar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Give]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Gave]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio97.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Ir
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Go]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Went]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio98.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Crecer
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Grow]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Grew]]
                .row.align-items-center
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio99.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Tener
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Have]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Had]]
    .row.mb-3(data-aos="fade-right")
      .col-12.bg-color51
        .py-4.px-2
          .row
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img24.svg', style="width: 450px").m-auto
            .col-lg-6.bg-white.rounded.shadow-sm
              .p-3
                .row.mb-3
                  .col-2
                  .col-3
                    p.mb-0 #[b #[i Spanish]]
                    p.mb-0 Español
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Base Form]]
                    p.mb-0.txt-color1 Forma Base
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Past Simple]]
                    p.mb-0.txt-color7 Pasado Simple
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio100.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Golpear
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Hit]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Hit]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio101.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Sostener
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Hold]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Held]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio102.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Mantener
                    p.mb-0 Conservar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Keep]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Kept]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio103.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Saber
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Know]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Knew]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio104.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Abandonar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Leave]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Left]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio105.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Perder
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Lose]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Lost]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio106.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Hacer
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Make]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Made]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio107.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Reunirse
                    p.mb-0 Conocerse
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Meet]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Met]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio108.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Pagar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Pay]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Paid]]
                .row.align-items-center
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio109.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Poner
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Put]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Put]]
    .row.mb-3(data-aos="fade-left")
      .col-12.bg-color51
        .py-4.px-2
          .row
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img25.svg', style="width: 450px").m-auto
            .col-lg-6.bg-white.rounded.shadow-sm
              .p-3
                .row.mb-3
                  .col-2
                  .col-3
                    p.mb-0 #[b #[i Spanish]]
                    p.mb-0 Español
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Base Form]]
                    p.mb-0.txt-color1 Forma Base
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Past Simple]]
                    p.mb-0.txt-color7 Pasado Simple
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio110.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Renunciar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Quit]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Quit]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio111.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Leer
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Read]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Read*]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio112.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Correr
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Run]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Ran]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio113.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Decir
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Say]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Said]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio114.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Ver
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 See]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Saw]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio115.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Vender
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Sell]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Sold]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio116.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Enviar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Send]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Sent]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio117.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Cantar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Sing]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Sang]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio118.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Sentarse
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Sit]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Sat]]
                .row.align-items-center
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio119.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Dormir
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Sleep]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Slept]]
    .row.mb-3(data-aos="fade-right")
      .col-12.bg-color51
        .py-4.px-2
          .row
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img26.svg', style="width: 450px").m-auto
            .col-lg-6.bg-white.rounded.shadow-sm
              .p-3
                .row.mb-3
                  .col-2
                  .col-3
                    p.mb-0 #[b #[i Spanish]]
                    p.mb-0 Español
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Base Form]]
                    p.mb-0.txt-color1 Forma Base
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Past Simple]]
                    p.mb-0.txt-color7 Pasado Simple
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio120.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Hablar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Speak]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Spoke]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio121.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Deletrear
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Spell]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Spelt / Spelled]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio122.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Nadar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Swim]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Swam]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio123.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Tomar
                    p.mb-0 Agarrar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Take]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Took]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio124.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Enseñar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Teach]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Taught]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio125.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Decir
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Tell]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Told]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio126.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Pensar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Think]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Thought]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio127.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Despertar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Wake]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Woke]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio128.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Vestir
                    p.mb-0 Llevar puesto
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Wear]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Wore]]
                .row.align-items-center.mb-2
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio129.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Ganar
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Win]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Won]]
                .row.align-items-center
                  .col-2
                    Audio.m-auto.color-primario(
                      :audio="require('@/assets/curso/tema1/audio130.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .col-3
                    p.mb-0 Escribir
                  .col-3
                    p.mb-0 #[b #[i.txt-color1 Write]]
                  .col-4
                    p.mb-0 #[b #[i.txt-color7 Wrote]]
    .row.bg-color58(data-aos="fade-up")
      .col-12
        .row.justify-content-end
          .col-lg-10
            .p-4
              p.mb-0 #[i.txt-color7 #[b Warning #1]]
              p.mb-0 #[b Advertencia #1]
        .row.bg-color20
          .col-lg-2
            figure.fig-position
              img(src='@/assets/curso/tema1/img12.svg', style="width: 150px").m-auto
          .col-lg-10
            .p-4
              .row.align-items-end
                .col-lg
                  p #[i.txt-color4 In the tables, we only show 52 of the most common irregular verbs, but there are actually around 600 of them. For a complete list of irregular verbs, click on the following link:]
                  p.text-white #[i En las tablas, solo se muestran 52 de los verbos irregulares más comunes, pero en realidad son alrededor de 600. Para consultar una lista completa de los verbos irregulares, haga clic en el siguiente enlace:]
                .col-auto
                  a.boton.color-acento-botones.me-3.mb-0.mb-lg-5(:href="obtenerLink('downloads/Anexo1.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
    Separador
    #t_1_3
    .titulo-segundo.color-acento-botones
      h2 1.3 #[i Affirmative, negative and interrogative structures] (Estructuras afirmativas, negativas e interrogativas)
    .row.justify-content-end.mb-4(data-aos="fade-right")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img12.png', style="width: 350px").m-auto
      .col-lg-7
        Traduccion.color-primario(:dialogo="traduccion4")
    .tarjeta.tarjeta--amarilla.p-1.mb-5(data-aos="fade-up")
      SlyderA
        .row.justify-content-center.mx-1.p-1.p-lg-4
          .col-lg-10
            .row.mb-4
              .col-auto.bg-color11
                .p-3
                  h3.mb-0 #[i.text-white Affirmative structure] / Estructura afirmativa
              .col-12.bg-white.rounded.p-4.mb-4
                p #[b Estructura]
                .row.justify-content-center.align-items-center
                  .col-10.col-lg.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img27.svg').m-auto
                  .col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img28.svg', style="width: 10px").m-auto
                  .col-10.col-lg.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img29.svg').m-auto
                  .col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img28.svg', style="width: 10px").m-auto
                  .col-10.col-lg
                    figure
                      img(src='@/assets/curso/tema1/img30.svg').m-auto
              .row.justify-content-center
                .col-lg-5.mb-4.mb-lg-0.bg-color53
                  .row.mb-4.mb-lg-0
                    .col-auto
                      p.mb-0.mt-4 #[i.txt-color1 I]
                      p.mb-0 #[i.txt-color1 You]
                      p.mb-0 #[i.txt-color1 He]
                      p.mb-0 #[i.txt-color1 She]
                      p.mb-4 #[i.txt-color1 It]
                      p.mb-0 #[i.txt-color1 We]
                      p.mb-0 #[i.txt-color1 You]
                      p.mb-4 #[i.txt-color1 They]
                    .col-auto.bg-color52
                      p.mb-0.mt-4 #[i.txt-color2 lived]
                      p.mb-0 #[i.txt-color2 drew]
                      p.mb-0 #[i.txt-color2 played]
                      p.mb-0 #[i.txt-color2 flew]
                      p.mb-4 #[i.txt-color2 barked]
                      p.mb-0 #[i.txt-color2 ate]
                      p.mb-0 #[i.txt-color2 cooked]
                      p.mb-4 #[i.txt-color2 bought]
                    .col-6
                      p.mb-0.mt-4 #[i.txt-color1 in Spain.] 
                      p.mb-0 #[i.txt-color1 that painting.] 
                      p.mb-0 #[i.txt-color1 football yesterday.] 
                      p.mb-0 #[i.txt-color1 in a helicopter.] 
                      p.mb-4 #[i.txt-color1 really loud.] 
                      p.mb-0 #[i.txt-color1 the whole cake.] 
                      p.mb-0 #[i.txt-color1 lasagna last night.] 
                      p.mb-4 #[i.txt-color1 a house a year ago.] 
                .col-lg-5
                  .row
                    .col-auto
                      p.mb-0.mt-4 #[i.txt-color1 Yo #[b viví] en España.]
                      p.mb-0 #[i.txt-color1 Tú #[b dibujaste] esa pintura.]
                      p.mb-0 #[i.txt-color1 Él #[b jugó] fútbol ayer.]
                      p.mb-0 #[i.txt-color1 Ella #[b voló] en un helicóptero.]
                      p.mb-4 #[i.txt-color1 (Eso) #[b Ladró] muy fuerte.]
                      p.mb-0 #[i.txt-color1 Nosotros nos #[b comimos] todo el pastel.]
                      p.mb-0 #[i.txt-color1 Ustedes #[b cocinaron] lasaña anoche.]
                      p.mb-4 #[i.txt-color1 Ellos #[b compraron] una casa hace un año.]
            .row.justify-content-center
              .col-lg-10
                TarjetaAudio.color-primario(
                    texto=""
                    :audio="require('@/assets/curso/tema1/audio70.mp3')"
                  )
        .row.justify-content-center.mx-1.p-1.p-lg-4
          .col-lg-10
            .row.mb-4
              .col-auto.bg-color11
                .p-3
                  h3.mb-0 #[i.text-white Negative structure] / Estructura negativa
              .col-12.bg-white.rounded.p-4.mb-4
                p #[b Estructura]
                .row.justify-content-center.align-items-center
                  .col-10.col-lg.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img31.svg').m-auto
                  .col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img28.svg', style="width: 10px").m-auto
                  .col-10.col-lg.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img32.svg').m-auto
                  .col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img28.svg', style="width: 10px").m-auto
                  .col-10.col-lg.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img33.svg').m-auto
                  .col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img28.svg', style="width: 10px").m-auto
                  .col-10.col-lg
                    figure
                      img(src='@/assets/curso/tema1/img34.svg').m-auto
              .row.justify-content-center
                .col-lg-6.mb-4.mb-lg-0.bg-color53
                  .row.mb-4.mb-lg-0
                    .col-2
                      p.mb-0.mt-4 #[i.txt-color1 I]
                      p.mb-0 #[i.txt-color1 You]
                      p.mb-0 #[i.txt-color1 He]
                      p.mb-0 #[i.txt-color1 She]
                      p.mb-4 #[i.txt-color1 It]
                      p.mb-0 #[i.txt-color1 We]
                      p.mb-0 #[i.txt-color1 You]
                      p.mb-4 #[i.txt-color1 They]
                    .col-auto.bg-color54
                      p.mb-0.mt-4 #[i.txt-color2 didn’t]
                      p.mb-0 #[i.txt-color2 didn’t]
                      p.mb-0 #[i.txt-color2 didn’t]
                      p.mb-0 #[i.txt-color2 didn’t]
                      p.mb-4 #[i.txt-color2 didn’t]
                      p.mb-0 #[i.txt-color2 didn’t]
                      p.mb-0 #[i.txt-color2 didn’t]
                      p.mb-4 #[i.txt-color2 didn’t]
                    .col-auto.bg-color52
                      p.mb-0.mt-4 #[i.txt-color2 live]
                      p.mb-0 #[i.txt-color2 draw]
                      p.mb-0 #[i.txt-color2 play]
                      p.mb-0 #[i.txt-color2 fly]
                      p.mb-4 #[i.txt-color2 bark]
                      p.mb-0 #[i.txt-color2 eat]
                      p.mb-0 #[i.txt-color2 cook]
                      p.mb-4 #[i.txt-color2 buy]
                    .col
                      p.mb-0.mt-4 #[i.txt-color1 in Spain.] 
                      p.mb-0 #[i.txt-color1 that.] 
                      p.mb-0 #[i.txt-color1 football yesterday.] 
                      p.mb-0 #[i.txt-color1 in a helicopter.] 
                      p.mb-4 #[i.txt-color1 that loud.] 
                      p.mb-0 #[i.txt-color1 the whole cake.] 
                      p.mb-0 #[i.txt-color1 lasagna last night.] 
                      p.mb-4 #[i.txt-color1 a house a year ago.] 
                .col-lg-5
                  .row
                    .col-auto
                      p.mb-0.mt-4 #[i.txt-color1 Yo #[b no viví] en España.]
                      p.mb-0 #[i.txt-color1 Tú #[b no dibujaste] eso pintura.]
                      p.mb-0 #[i.txt-color1 Él #[b no jugó] fútbol ayer.]
                      p.mb-0 #[i.txt-color1 Ella #[b no voló] en un helicóptero.]
                      p.mb-4 #[i.txt-color1 (Eso) #[b no Ladró] tan fuerte.]
                      p.mb-0 #[i.txt-color1 Nosotros #[b no  nos comimos] todo el pastel.]
                      p.mb-0 #[i.txt-color1 Ustedes #[b no cocinaron] lasaña anoche.]
                      p.mb-4 #[i.txt-color1 Ellos #[b no compraron] una casa hace un año.]
            .row.justify-content-center
              .col-lg-10
                TarjetaAudio.color-primario(
                    texto=""
                    :audio="require('@/assets/curso/tema1/audio71.mp3')"
                  )
        .row.justify-content-center.mx-1.p-1.p-lg-4
          .col-lg-10
            .row.mb-4
              .col-auto.bg-color11
                .p-3
                  h3.mb-0 #[i.text-white Interrogative structure] / Estructura interrogativa
              .col-12.bg-white.rounded.p-4.mb-4
                p #[b Estructura]
                .row.justify-content-center.align-items-center
                  .col-10.col-lg.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img35.svg').m-auto
                  .col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img28.svg', style="width: 10px").m-auto
                  .col-10.col-lg.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img36.svg').m-auto
                  .col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img28.svg', style="width: 10px").m-auto
                  .col-10.col-lg.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img37.svg').m-auto
                  .col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img28.svg', style="width: 10px").m-auto
                  .col-10.col-lg
                    figure
                      img(src='@/assets/curso/tema1/img38.svg').m-auto
              .row.justify-content-center
                .col-lg-6.mb-4.mb-lg-0.bg-color53
                  .row.mb-4.mb-lg-0
                    .col-auto.bg-color54
                      p.mb-0.mt-4 #[i.txt-color2 did]
                      p.mb-0 #[i.txt-color2 did]
                      p.mb-0 #[i.txt-color2 did]
                      p.mb-0 #[i.txt-color2 did]
                      p.mb-4 #[i.txt-color2 did]
                      p.mb-0 #[i.txt-color2 did]
                      p.mb-0 #[i.txt-color2 did]
                      p.mb-4 #[i.txt-color2 did]
                    .col-2
                      p.mb-0.mt-4 #[i.txt-color1 I]
                      p.mb-0 #[i.txt-color1 You]
                      p.mb-0 #[i.txt-color1 He]
                      p.mb-0 #[i.txt-color1 She]
                      p.mb-4 #[i.txt-color1 It]
                      p.mb-0 #[i.txt-color1 We]
                      p.mb-0 #[i.txt-color1 You]
                      p.mb-4 #[i.txt-color1 They]
                    .col-auto.bg-color52
                      p.mb-0.mt-4 #[i.txt-color2 live]
                      p.mb-0 #[i.txt-color2 draw]
                      p.mb-0 #[i.txt-color2 play]
                      p.mb-0 #[i.txt-color2 fly]
                      p.mb-4 #[i.txt-color2 bark]
                      p.mb-0 #[i.txt-color2 eat]
                      p.mb-0 #[i.txt-color2 cook]
                      p.mb-4 #[i.txt-color2 buy]
                    .col
                      p.mb-0.mt-4 #[i.txt-color1 in Spain?] 
                      p.mb-0 #[i.txt-color1 that?] 
                      p.mb-0 #[i.txt-color1 football yesterday?]
                      p.mb-0 #[i.txt-color1 in a helicopter?]
                      p.mb-4 #[i.txt-color1 loud?]
                      p.mb-0 #[i.txt-color1 the whole cake?]
                      p.mb-0 #[i.txt-color1 lasagna last night?]
                      p.mb-4 #[i.txt-color1 a house a year ago?]
                .col-lg-5
                  .row
                    .col-auto
                      p.mb-0.mt-4 #[i.txt-color1 Yo #[b viví] en España?]
                      p.mb-0 #[i.txt-color1 Tú #[b dibujaste] eso pintura?]
                      p.mb-0 #[i.txt-color1 Él #[b jugó] fútbol ayer?]
                      p.mb-0 #[i.txt-color1 Ella #[b voló] en un helicóptero?]
                      p.mb-4 #[i.txt-color1 (Eso) #[b Ladró] tan fuerte?]
                      p.mb-0 #[i.txt-color1 Nosotros #[b nos comimos] todo el pastel?]
                      p.mb-0 #[i.txt-color1 Ustedes #[b cocinaron] lasaña anoche?]
                      p.mb-4 #[i.txt-color1 Ellos #[b compraron] una casa hace un año?]
            .row.justify-content-center
              .col-lg-10
                TarjetaAudio.color-primario(
                    texto=""
                    :audio="require('@/assets/curso/tema1/audio72.mp3')"
                  )
    .row.bg-color58.mb-5(data-aos="fade-up")
      .col-12
        .row.justify-content-end
          .col-lg-10
            .p-4
              p.mb-0 #[i.txt-color7 #[b Warning #2]]
              p.mb-0 #[b Advertencia #2]
        .row.bg-color20
          .col-lg-2
            figure.fig-position
              img(src='@/assets/curso/tema1/img12.svg', style="width: 150px").m-auto
          .col-lg-10
            .p-4
              p.mb-4 #[b #[i.txt-color4 Negative structure] #[span.text-white / Estructura negativa]]
              p.mb-0 #[i.txt-color4 From here on we have to take into account an extra component to form the following grammatical structures. This is the auxiliary “did”.]
              p.mb-4 #[i.txt-color4 The auxiliary verb “did” accompanies the main verbs so that they work in other forms, such as questions, short answers, negatives, etc. Did is used for all grammatical persons without exception, and has no translation into Spanish.]
              p.text-white.mb-0 De aquí en adelante se tiene que tener en cuenta un componente extra para formar las siguientes estructuras gramaticales. Se trata del auxiliar #[i “did”].
              p.text-white El verbo auxiliar “did” acompaña a los verbos principales para que funcionen en otras formas, como preguntas, respuestas cortas, negativas, etc. Did se usa para todas las personas gramaticales sin excepción, y no tiene traducción al español.
    .row.bg-color58.mb-5(data-aos="fade-up")
      .col-12
        .row.justify-content-end
          .col-lg-10
            .p-4
              p.mb-0 #[i.txt-color7 #[b Warning #3]]
              p.mb-0 #[b Advertencia #3]
        .row.bg-color20
          .col-lg-2
            figure.fig-position
              img(src='@/assets/curso/tema1/img12.svg', style="width: 150px").m-auto
          .col-lg-10
            .p-4
              .row
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-4 #[i.txt-color4 To the "yes" or "no" questions, we can answer in a short way:]
                  p.mb-0 #[b.txt-color4 Yes = Yes, subject + did.]
                  p.mb-4 #[b.txt-color4 No = No, subject + didn't.]
                .col-lg-6
                  p.text-white.mb-4 A las preguntas de “sí” o “no”, se puede responder de forma corta:
                  p.text-white.mb-0 #[b Sí = Yes, sujeto + did.]
                  p.text-white.mb-0 #[b No = No, sujeto + didn't.]
    .row.justify-content-evenly.mb-5
      .col-lg-5.bg-color13.mb-4.mb-lg-0(data-aos="fade-right")
        .p-3
          figure.mb-4
            img(src='@/assets/curso/tema1/img16.svg', style="width: 100px")
          p.mb-4 #[i For example] / Por ejemplo:
          TarjetaAudio.color-primario.mb-2(
            texto="<em><span>Did I live in Spain?</span></em>"
            :audio="require('@/assets/curso/tema1/audio73.mp3')"
          )
          p.ms-3.mb-4 ¿Yo viví en España?
          .row
            .col-lg-6.mb-2.mb-lg-0
              TarjetaAudio.color-secundario.mb-2(
                texto="<em><span>Yes, I did.</span></em>"
                :audio="require('@/assets/curso/tema1/audio74.mp3')"
              )
              p.ms-3 Si.
            .col-lg-6
              TarjetaAudio.color-secundario.mb-2(
                texto="<em><span>No, I didn't.</span></em>"
                :audio="require('@/assets/curso/tema1/audio75.mp3')"
              )
              p.ms-3 No.
      .col-lg-5.bg-color14(data-aos="fade-left")
        .p-3
          figure.mb-4
            img(src='@/assets/curso/tema1/img17.svg', style="width: 100px")
          p.mb-4 #[i For example] / Por ejemplo:
          TarjetaAudio.color-primario.mb-2(
            texto="<em><span>Did they buy a house a year ago?</span></em>"
            :audio="require('@/assets/curso/tema1/audio76.mp3')"
          )
          p.ms-3.mb-4 ¿Ellos compraron una casa hace un año?
          .row
            .col-lg-6.mb-2.mb-lg-0
              TarjetaAudio.color-secundario.mb-2(
                texto="<em><span>Yes, they did.</span></em>"
                :audio="require('@/assets/curso/tema1/audio77.mp3')"
              )
              p.ms-3 Si.
            .col-lg-6
              TarjetaAudio.color-secundario.mb-2(
                texto="<em><span>No, they didn't.</span></em>"
                :audio="require('@/assets/curso/tema1/audio78.mp3')"
              )
              p.ms-3 No.
    p.mb-5 A continuación, escuche el siguiente diálogo, en el cual se aplica lo estudiado en el tema.
    .row.align-items-end.bg-color60(data-aos="fade-right")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img19.png', style="width: 260px")
      .col-lg-6
        DialogoChat(:dialogo="dialogoChat")
        TarjetaAudio.color-primario.mb-4(
          texto="<em><span></span></em>"
          :audio="require('@/assets/curso/tema1/audio131.mp3')"
        )
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img20.png')

</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import Traduccion from '../components/Traduccion.vue'
export default {
  name: 'Tema1',
  components: {
    Traduccion,
    DialogoChat,
  },
  data: () => ({
    mostrarIndicador: true,
    indicadorImagenZoom: true,
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    mostrarIndicadorAudio: true,
    mostrarIndicadorTarjetaAudio: true,
    traduccion1: {
      dialogo: [
        {
          textoIng:
            'The past simple is the tense used to describe an action that happened before the present tense and that is no longer happening.<br><br>In the simple past tense there is only one form or conjugation of each verb in the past tense for all grammatical persons (with the exception of the verb “to be” which has two forms: “was” and “were”). With most verbs, the past tense is formed by adding “-ed”, these verbs are called regular verbs; the ones that do not fall into this group with the ending “-ed” are called irregular verbs and must be learned by heart since there is no rule to help us predict their form in the past tense.',
          textoEsp:
            'El pasado simple es el tiempo que se usa para describir una acción que sucedió antes del tiempo presente y que ya no está sucediendo.<br><br>En el tiempo pasado simple, solo hay una forma o conjugación de cada verbo en pasado para todas las personas gramaticales (con excepción del verbo <b>“to be”</b>, que tiene dos formas: <b>“was”</b> y <b>“were”</b>). Con la mayoría de los verbos, el tiempo pasado se forma agregando <b>“-ed”</b>, a estos verbos se les llama verbos regulares; a los que no están en este grupo con terminación <b>“-ed”</b> se les llama verbos irregulares y deben aprenderse de memoria debido a que no hay una regla que nos ayude a predecir su forma en pasado.',
        },
      ],
    },
    traduccion2: {
      dialogo: [
        {
          textoIng:
            'We are going to look at the 3 ways of pronouncing “-ed” at the end of words in English, which are /id/, /t/ and /d/.<br><br>We have to remember that these rules are not only for regular verbs in past simple tense, but also for regular past participles (used in perfect tenses) and adjectives that end in “-ed”. Depending on which letter the word or verb ends with in its base form (before conjugating or adding the suffix), we determine how the “-ed” will sound, whether as /id/, /t/ or /d/.',
          textoEsp:
            'Vamos a ver las 3 formas de pronunciar “-ed” al final de las palabras en inglés, que son /id/, /t/ y /d/.<br><br>Debemos recordar que estas reglas no son solo para verbos regulares en pasado simple, sino también para participios regulares (usados en tiempos perfectos) y adjetivos que terminan en “-ed”. Dependiendo con qué letra termina la palabra o el verbo en su forma base (antes de conjugarse o de agregársele el sufijo), se determina cómo va a sonar el “-ed”, si como /id/, /t/ o /d/.',
        },
      ],
    },
    traduccion3: {
      dialogo: [
        {
          textoIng:
            'Some verbs are irregular and their past forms do not end in “-ed”, in contrast, they can change drastically or, on the contrary, not change at all, leaving the same word as a verb in the present and the past simple. In these cases, it is recommended to learn them by heart since there is no logical pattern that can be used or followed with them.',
          textoEsp:
            'Algunos verbos son irregulares y sus formas en pasado no terminan en “-ed”, en contraste, pueden cambiar drásticamente o, por el contrario, no cambiar en nada, dejando la misma palabra como verbo en el presente y el pasado simple. En estos casos, se recomienda aprenderlos de memoria, porque no hay un patrón lógico que se pueda usar o seguir con ellos.',
        },
      ],
    },
    traduccion4: {
      dialogo: [
        {
          textoIng:
            'In the simple past, the structures of sentences that use the verb "to be" as the main verb are different from sentences that use other verbs as the main verb (regardless of whether they are in the same tense). Let´s see the phrases (or grammatical structures) used to express this information:',
          textoEsp:
            'En el pasado simple son diferentes las estructuras de las oraciones que usan el verbo "to be" como verbo principal a las oraciones que usan otros verbos como verbo principal (sin importar que estén en el mismo tiempo verbal). Vamos a ver las frases (o estructuras gramaticales) usadas para expresar esta información:',
        },
      ],
    },
    dialogoChat: {
      personajes: [
        {
          nombre: 'Sandra',
          img: require('@/assets/curso/tema1/img17.png'),
        },
        {
          nombre: 'Samuel',
          img: require('@/assets/curso/tema1/img18.png'),
        },
      ],
      dialogo: [
        {
          personaje: 'Sandra',
          textoIng: 'Hi, Samuel.',
        },
        {
          personaje: 'Samuel',
          textoIng: 'Hello, Sandra.',
        },
        {
          personaje: 'Sandra',
          textoIng: 'What is that?',
        },
        {
          personaje: 'Samuel',
          textoIng: 'That is my new car.',
        },
        {
          personaje: 'Sandra',
          textoIng: 'Why did you buy it?',
        },
        {
          personaje: 'Samuel',
          textoIng: 'I bought it because my old car was malfunctioning.',
        },
        {
          personaje: 'Sandra',
          textoIng: 'That is great. Did you pay with your credit card?',
        },
        {
          personaje: 'Samuel',
          textoIng: 'No. I paid it up front and they gave it to me yesterday.',
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
