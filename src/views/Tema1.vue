<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 #[i Past simple] (Pasado simple)
    .row
      .col-lg-6.mb-4.mb-lg-0
        p.txt-color1 #[i The past simple is the tense used to describe an action that happened before the present tense and that is no longer happening. ]
        p.txt-color1 #[i In the simple past tense there is only one form or conjugation of each verb in the past tense for all grammatical persons (with the exception of the verb “to be” which has two forms: “was” and “were”). With most verbs, the past tense is formed by adding #[span.txt-color2 “-ed”], these verbs are called regular verbs; the ones that do not fall into this group with the ending #[span.txt-color2 “-ed”] are called irregular verbs and must be learned by heart since there is no rule to help us predict their form in the past tense.]
      .col-lg-6
        p El pasado simple es el tiempo que se usa para describir una acción que sucedió antes del tiempo presente y que ya no está sucediendo.
        p En el tiempo pasado simple, solo hay una forma o conjugación de cada verbo en pasado para todas las personas gramaticales (con excepción del verbo #[i.txt-color2 “to be”], que tiene dos formas: #[i.txt-color2 “was”] y #[i.txt-color2 “were”]). Con la mayoría de los verbos, el tiempo pasado se forma agregando #[i.txt-color2 “-ed”], a estos verbos se les llama verbos regulares; a los que no están en este grupo con terminación #[i.txt-color2 “-ed”] se les llama verbos irregulares y deben aprenderse de memoria debido a que no hay una regla que nos ayude a predecir su forma en pasado.
    Separador
    #t_1_1
    .titulo-segundo.color-acento-botones
      h2 1.1 #[i Regular verbs] (Verbos regulares)
    p.txt-color3 #[i In the past simple tense, it is easy to conjugate regular verbs since the formula is easy: base form of the verb + ed. But there are certain rules of spelling and pronunciation that must be followed in certain cases.] 
    p.mb-5 En el tiempo pasado simple es fácil conjugar los verbos regulares, ya que la fórmula es fácil: forma base del verbo + ed. Pero hay ciertas reglas de ortografía y pronunciación que se deben seguir en ciertos casos.
    h3 #[i.txt-color3 Spelling rules for words with -ed] / Reglas de ortografía de palabras con #[i.txt-color3 “-ed”]
    p #[i.txt-color3 To begin with, we must know that in English the words ending with “-ed” can have other uses than being verbs in the simple past tense, they can also be used as past participles in the perfect tenses or as adjectives to qualify or describe something.]
    p.mb-5 Para comenzar, debemos saber que en inglés las palabras terminadas con “-ed” pueden tener otros usos diferentes a ser verbos en tiempo pasado simple, pueden usarse también como participios pasados en los tiempos perfectos o como adjetivos para calificar o describir algo. A continuación, podemos ver algunos ejemplos.
    .row.justify-content-center.mb-5
      .col-11.col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img1.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              p.text-center.mt-4.mb-0 #[b #[i.txt-color3 Past tense verbs]]
              p.text-center.mb-4 #[b Verbos en tiempo pasado]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Counted</em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                no-barra
              )
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Looked</em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                no-barra
              )
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Listened</em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                no-barra
              )
      .col-11.col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img2.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              p.text-center.text-white.mt-4.mb-0 #[b #[i.txt-color3 Past participles]]
              p.text-center.mb-4 #[b Participios pasados]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Needed</em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                no-barra
              )
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Passed</em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                no-barra
              )
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Called</em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                no-barra
              )
      .col-11.col-lg
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img1.svg' alt='AvatarTop')
          .tarjeta.color-terciario
            .p-4
              p.text-center.text-white.mt-4.mb-0 #[b #[i.txt-color3 Adjectives]]
              p.text-center.mb-4 #[b Adjetivos]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Concentrated</em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                no-barra
              )
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Astonished</em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                no-barra
              )
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Alarmed</em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                no-barra
              )
    p.mb-5 En el siguiente recurso, podemos observar algunos ejemplos utilizando palabras en tiempo pasado con la terminación ed.
    .row.mb-5
      .col-lg
        .p-2
          .row
            .col-12.px-0
              figure
                img(src='@/assets/curso/tema1/img1.png')
            .col-12.bg-color1
              .p-4
                p.text-center.mb-0 #[b #[i.txt-color3 Past tense verbs]]
                p.text-center.mb-5 #[b Verbos en tiempo pasado]
                TarjetaAudio.color-primario.mb-3(
                  texto="<em><span>I counted the coins in the piggy bank.</span></em>"
                  :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                )
                p.ms-3 Yo #[b conté] las monedas en la alcancía.
      .col-lg
        .p-2
          .row
            .col-12.px-0
              figure
                img(src='@/assets/curso/tema1/img2.png')
            .col-12.bg-color2
              .p-4
                p.text-center.mb-0 #[b #[i.txt-color3 Past participle in the present perfect time]]
                p.text-center.mb-5 #[b Participio pasado en tiempo presente perfecto]
                TarjetaAudio.color-primario.mb-3(
                  texto="<em><span>We have never needed help with our homework.</span></em>"
                  :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                )
                p.ms-3 Nosotros nunca hemos #[b necesitado] ayuda con nuestras tareas.
      .col-lg
        .p-2
          .row
            .col-12.px-0
              figure
                img(src='@/assets/curso/tema1/img3.png')
            .col-12.bg-color3
              .p-4
                p.text-center.mb-0 #[b #[i.txt-color3 Adjective describing a person]]
                p.text-center.mb-5 #[b Adjetivo describiendo a una persona]
                TarjetaAudio.color-primario.mb-3(
                  texto="<em><span>She was alarmed and astonished.</span></em>"
                  :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                )
                p.ms-3 Ella estaba #[b alarmada] y #[b estupefacta].
    p #[i.txt-color3 We are going to learn the correct spelling of words that end in “-ed” and we will mainly use regular past tense verbs as examples, although the same rules apply to all words that end in “-ed”.]
    p.mb-5 Vamos a aprender, en el siguiente recurso, la ortografía correcta de las palabras que terminan en #[b.txt-color3 “-ed”] y usaremos principalmente verbos regulares en pasado como ejemplos, aunque las mismas reglas se aplican a todas las palabras que terminan en #[b.txt-color3 “-ed”].
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="<span>General Rule</span> / Regla general")
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img4.png', style="width: 350px").m-auto
        .col-lg-8
          p #[i.txt-color2 In general, we just add -ed to the end of a regular verb or other type of "-ed word".]
          p.mb-4 Generalmente, solo agregamos -ed al final de un verbo regular u otro tipo de palabra "-ed".
          .row.align-items-center.justify-content-center.mb-4
            .col-auto
              TarjetaAudio.color-primario(
                texto="<em><span>visit</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg').fig-rota
            .col-auto
              TarjetaAudio.color-primario(
                texto="<em><span>visited</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
          .row.align-items-center.justify-content-center.mb-4
            .col-auto
              TarjetaAudio.color-primario(
                texto="<em><span>walk</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg').fig-rota
            .col-auto
              TarjetaAudio.color-primario(
                texto="<em><span>walked</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
          .row.align-items-center.justify-content-center
            .col-auto
              TarjetaAudio.color-primario(
                texto="<em><span>return</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg').fig-rota
            .col-auto
              TarjetaAudio.color-primario(
                texto="<em><span>returned</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
      .row(titulo="<span>Consonant + Vowel + Consonant</span> / Consonante + Vocal + Consonante")
        .col-lg-6.mb-4.mb-lg-0
          p #[i.txt-color2 If it ends in C+V+C and the last syllable is stressed, we double the final consonant.]
          p Si termina en C+V+C y la última sílaba está acentuada, #[b se duplica la consonante final].
          .row.align-items-center.justify-content-center.mb-4
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>stop</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg', style="width: 30px").fig-rota
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>stopped</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
          .row.align-items-center.justify-content-center.mb-4
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>beg</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg', style="width: 30px").fig-rota
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>begged</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
          .row.align-items-center.justify-content-center
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>admit</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg', style="width: 30px").fig-rota
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>admitted</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
        .col-lg-6.border1
          p.mt-4.mt-lg-0 #[i.txt-color2 If it ends in C+V+C and the last syllable is unstressed, we don’t double the final consonant.]
          p Si termina en C+V+C y la última sílaba no está acentuada, #[b no se duplica la consonante final].
          .row.align-items-center.justify-content-center.mb-4
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>happen</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg', style="width: 30px").fig-rota
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>happened</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
          .row.align-items-center.justify-content-center.mb-4
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>visit</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg', style="width: 30px").fig-rota
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>visited</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
          .row.align-items-center.justify-content-center
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>remember</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg', style="width: 30px").fig-rota
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>remembered</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
      .row(titulo="<span>Words ending in Y</span> / Palabras terminadas en Y")
        .col-lg-6.mb-4.mb-lg-0
          p #[i.txt-color2 If the verb ends in “C+Y”: the “y” is removed and we add “ -ied”.]
          p Si el verbo termina en “C+Y”: se elimina la #[b “y”] y se añade #[i.txt-color2 “-ied”].
          .row.align-items-center.justify-content-center.mb-4
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>copy</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg', style="width: 30px").fig-rota
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>copied</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
          .row.align-items-center.justify-content-center.mb-4
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>study</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg', style="width: 30px").fig-rota
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>studied</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
          .row.align-items-center.justify-content-center
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>multiply</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg', style="width: 30px").fig-rota
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>multiplied</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
        .col-lg-6.border1
          p.mt-4.mt-lg-0 #[i.txt-color2 If the verb ends in “V+Y”: we only add “-ed”.]
          p Si el verbo termina en “V+Y”: solo se agrega #[i.txt-color2 “-ed”].
          .row.align-items-center.justify-content-center.mb-4
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>pray</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg', style="width: 30px").fig-rota
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>prayed</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
          .row.align-items-center.justify-content-center.mb-4
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>obey</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg', style="width: 30px").fig-rota
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>obeyed</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
          .row.align-items-center.justify-content-center
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>enjoy</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg', style="width: 30px").fig-rota
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>enjoyed</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
      .row(titulo="<span>Words ending in “W” or “X”</span> / Palabras terminadas en “W” o “X”")
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img4.png', style="width: 350px").m-auto
        .col-lg-8
          p #[i.txt-color2 If the verb ends in “W” or “X”: we only add “-ed”.]
          p.mb-4 Si el verbo termina en “W” o “X”: Solo se agrega #[i.txt-color2 “-ed”].
          .row.align-items-center.justify-content-center.mb-4
            .col-auto
              TarjetaAudio.color-primario(
                texto="<em><span>allow</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg').fig-rota
            .col-auto
              TarjetaAudio.color-primario(
                texto="<em><span>allowed</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
          .row.align-items-center.justify-content-center.mb-4
            .col-auto
              TarjetaAudio.color-primario(
                texto="<em><span>chew</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg').fig-rota
            .col-auto
              TarjetaAudio.color-primario(
                texto="<em><span>chewed</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
          .row.align-items-center.justify-content-center.mb-4
            .col-auto
              TarjetaAudio.color-primario(
                texto="<em><span>glow</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg').fig-rota
            .col-auto
              TarjetaAudio.color-primario(
                texto="<em><span>glowed</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
          .row.align-items-center.justify-content-center.mb-4
            .col-auto
              TarjetaAudio.color-primario(
                texto="<em><span>fix</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg').fig-rota
            .col-auto
              TarjetaAudio.color-primario(
                texto="<em><span>fixed</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
          .row.align-items-center.justify-content-center.mb-4
            .col-auto
              TarjetaAudio.color-primario(
                texto="<em><span>mix</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg').fig-rota
            .col-auto
              TarjetaAudio.color-primario(
                texto="<em><span>mixed</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
          .row.align-items-center.justify-content-center
            .col-auto
              TarjetaAudio.color-primario(
                texto="<em><span>relax</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg').fig-rota
            .col-auto
              TarjetaAudio.color-primario(
                texto="<em><span>relaxed</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
      .row(titulo="<span>Words ending in Y</span> / Palabras terminadas en Y")
        .col-lg-6.mb-4.mb-lg-0
          .row.mb-4
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img4.svg')
            .col
              p #[i.txt-color2 In British English, we double the final “L” and add “-ed”.]
              p En inglés británico, #[b se duplica la “L”] final y se añade #[i.txt-color2 “-ed”].
          .row.align-items-center.justify-content-center.mb-4
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>equal</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg').fig-rota
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>equalled</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
          .row.align-items-center.justify-content-center.mb-4
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>travel</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg').fig-rota
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>travelled</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
          .row.align-items-center.justify-content-center
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>control</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg').fig-rota
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>controlled</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
        .col-lg-6.border1
          .row.mb-4
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img5.svg')
            .col
              p #[i.txt-color2 In American English, if the last syllable is stressed, we double the final “L” and add “-ed”, if the last syllable is unstressed, we just add “-ed”.]
              p En inglés americano, #[b si la última sílaba está acentuada, se duplica la “L”] final y se añade #[i.txt-color2 “-ed”], si la última sílaba #[b no está acentuada], solo se añade #[i.txt-color2 “-ed”].
          .row.align-items-center.justify-content-center.mb-4
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>equal</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg').fig-rota
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>equaled</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
          .row.align-items-center.justify-content-center.mb-4
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>travel</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg').fig-rota
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>traveled</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
          .row.align-items-center.justify-content-center
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>control</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-auto
              figure.my-3.my-lg-0
                img(src='@/assets/curso/tema1/img3.svg').fig-rota
            .col-lg
              TarjetaAudio.color-primario(
                texto="<em><span>controled</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
    p.mb-5 Después de haber estudiado la ortografía de las palabras con la terminación #[i.txt-color2 -ed], en este apartado estudiaremos las #[i.txt-color2 “Pronunciation rules for words with -ed”] / Reglas de pronunciación de palabras con #[i.txt-color2 “-ed”].
    .row.mb-5
      .col-12.bg-color4
        .p-4
          .row
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img6.svg', style="width: 350px").m-auto
            .col-lg-9
              p.mb-0 #[i.txt-color2 Pronunciation rules for words with -ed]
              p.mb-4 #[b Reglas de pronunciación de palabras con “-ed”]
              .row.mb-4
                .col-12.bg-white
                  .p-4
                    p.mb-0 #[i.txt-color3 Because English is not a phonetic language, there are three different ways to pronounce “-ed” at the end of a word. Listen to the following audio and pay close attention to how the words sound at the end.]
              p.mb-4 Debido a que el inglés no es un idioma fonético, existen tres formas diferentes de pronunciar “-ed” al final de una palabra. Escuche el siguiente audio y ponga mucha atención a cómo suenan las palabras al final.
              .tabla-a.color-acento-botones
                table
                  thead
                    tr
                      th(style="width:17%")
                      th #[i /id/]
                      th #[i /t/]
                      th #[i /d/]
                  tbody.bg-color5
                    tr
                      td.text-center #[b #[i.txt-color1 Past tense verbs]]
                      td
                        TarjetaAudio.color-primario(
                          texto="<em><span>counted</span></em>"
                          :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          no-barra
                        )
                      td
                        TarjetaAudio.color-primario(
                          texto="<em><span>looked</span></em>"
                          :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          no-barra
                        )
                      td
                        TarjetaAudio.color-primario(
                          texto="<em><span>listened</span></em>"
                          :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          no-barra
                        )
                    tr
                      td.text-center #[b #[i.txt-color1 Past participles]]
                      td
                        TarjetaAudio.color-primario(
                          texto="<em><span>needed</span></em>"
                          :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          no-barra
                        )
                      td
                        TarjetaAudio.color-primario(
                          texto="<em><span>passed</span></em>"
                          :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          no-barra
                        )
                      td
                        TarjetaAudio.color-primario(
                          texto="<em><span>called</span></em>"
                          :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          no-barra
                        )
                    tr
                      td.text-center #[b #[i.txt-color1 Adjectives]]
                      td
                        TarjetaAudio.color-primario(
                          texto="<em><span>concentrated</span></em>"
                          :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          no-barra
                        )
                      td
                        TarjetaAudio.color-primario(
                          texto="<em><span>astonished</span></em>"
                          :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          no-barra
                        )
                      td
                        TarjetaAudio.color-primario(
                          texto="<em><span>alarmed</span></em>"
                          :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          no-barra
                        )
    .row.mb-5
      .col-lg-6
        p #[i.txt-color1 We are going to look at the 3 ways of pronouncing “-ed” at the end of words in English, which are /id/, /t/ and /d/.]
        p #[i.txt-color1 We have to remember that these rules are not only for regular verbs in past simple tense, but also for regular past participles (used in perfect tenses) and adjectives that end in “-ed”. Depending on which letter the word or verb ends with in its base form (before conjugating or adding the suffix), we determine how the “-ed” will sound, whether as /id/, /t/ or /d/.]
      .col-lg-6
        p Vamos a ver las 3 formas de pronunciar “-ed” al final de las palabras en inglés, que son /id/, /t/ y /d/.
        p Debemos recordar que estas reglas no son solo para verbos regulares en pasado simple, sino también para participios regulares (usados en tiempos perfectos) y adjetivos que terminan en “-ed”. Dependiendo con qué letra termina la palabra o el verbo en su forma base (antes de conjugarse o de agregársele el sufijo), se determina cómo va a sonar el “-ed”, si como /id/, /t/ o /d/.
    p #[i.txt-color3 Now you can watch a video to better understand the pronunciation rules for words ending in -ed, and listen to the following audios to review the pronunciation of each word.]
    p.mb-5 Ahora observe un video para entender mejor las normas de pronunciación de las palabras terminadas en -ed, y escuche los siguientes audios para repasar la pronunciación de cada palabra.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 La pronunciación de los verbos terminados en #[i.txt-color2 “-ed”] depende del sonido final. Hay tres maneras de pronunciar #[i.txt-color2 “-ed”]. Lea y escuche algunos ejemplos con su correspondiente pronunciación en #[i.txt-color2 /id/, /t/ o /d/].
    .row.mb-2
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
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color8
                      p.mb-0.text-center #[b D]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>expanded</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
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
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b K]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>kicked</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b F]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>sniffed</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b GH]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>coughed</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b SH]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>splashed</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b CH]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>coached</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b SS]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>guessed</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b C]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>panicked*</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color8
                      p.mb-0.text-center #[b X]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>relaxed</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
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
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b N]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>warned</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b R]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>remembered</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b G]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>dragged</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b V]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>shaved</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b S]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>chased</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b Z]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>amazed</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color7
                      p.mb-0.text-center #[b B]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>climbed</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      no-barra
                    )
                .row.align-items-center
                  .col-3
                    .p-4.bg-color8
                      p.mb-0.text-center #[b M]
                  .col
                    TarjetaAudio.color-primario(
                      texto="<em><span>seemed</span></em>"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      no-barra
                    )
    .row
      .col-12.bg-color5
        .p-4
          .row.align-items-center.justify-content-center
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img11.svg', style="width: 30px")
              p.mb-0 #[i.txt-color2 Vowels]
              p.mb-0 #[b.txt-color1 Vocales]
            .col-lg-6.mb-4.mb-lg-0
              p #[i.txt-color2 Words that end in a vowel sound use the /d/ pronunciation for “-ed”.]
              p.mb-0 Las palabras que terminan en un sonido de vocal usan la pronunciación /d/  para “-ed”.
            .col-lg-auto.mb-4.mb-lg-0
              TarjetaAudio.color-primario.mb-3(
                texto="<em><span>followed</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                no-barra
              )
              TarjetaAudio.color-primario.mb-3(
                texto="<em><span>played</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                no-barra
              )
              TarjetaAudio.color-primario(
                texto="<em><span>tried</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                no-barra
              )
            .col-lg-auto
              TarjetaAudio.color-primario.mb-3(
                texto="<em><span>continued</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                no-barra
              )
              TarjetaAudio.color-primario.mb-3(
                texto="<em><span>enjoyed</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                no-barra
              )
              TarjetaAudio.color-primario(
                texto="<em><span>prayed</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                no-barra
              )
    Separador
    #t_1_2
    .titulo-segundo.color-acento-botones
      h2 1.2 #[i Irregular verbs] (Verbos irregulares)
    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0
        p #[i.txt-color1 Some verbs are irregular and their past forms do not end in “-ed”, in contrast, they can change drastically or, on the contrary, not change at all, leaving the same word as a verb in the present and the past simple. In these cases, it is recommended to learn them by heart since there is no logical pattern that can be used or followed with them.]
      .col-lg-6
        p Algunos verbos son irregulares y sus formas en pasado no terminan en “-ed”, en contraste, pueden cambiar drásticamente o, por el contrario, no cambiar en nada, dejando la misma palabra como verbo en el presente y el pasado simple. En estos casos, se recomienda aprenderlos de memoria, porque no hay un patrón lógico que se pueda usar o seguir con ellos.
    p.mb-5 A continuación, se presenta la lista de los principales verbos irregulares utilizados en inglés.
    .row.justify-content-center.mb-5
      .col-11.col-lg-4.p-3
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 1]. #[i.txt-color3 Irregular verbs] - Verbos irregulares
        .row
          .col-12.bg-color9
            Audio.color-primario(
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
          .col-12
            .row
              .col-4(style="background-color: #FFD947")
                .p-0
                  p.text-center.mb-0 #[i.txt-color1 #[b Spanish]]
                  p.text-center.mb-0 #[i.txt-color1 #[b Español]]
              .col-4(style="background-color: #FF5F65")
                .p-0
                  p.text-center.text-white.mb-0 #[i.txt-color1 #[b Base Form]]
                  p.text-center.text-white.mb-0 #[i.txt-color1 #[b Forma Base]]
              .col-4(style="background-color: #6B8DFF")
                .p-0
                  p.text-center.text-white.mb-0 #[i.txt-color1 #[b Past Simple]]
                  p.text-center.text-white.mb-0 #[i.txt-color1 #[b Pasado Simple]]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Empezar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Begin]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Began]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Traer
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Bring]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Brought]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Comprar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Buy]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Bought]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Venir
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Come]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Came]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Costar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Cost]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Cost]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Cortar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Cut]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Cut]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Hacer
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Do]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Did]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Soñar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Dream]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Dreamt / Dreamed]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Conducir
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Drive]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Drove]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Comer
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Eat]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Ate]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Caer
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Fall]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Fell]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Sentir
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Feel]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Felt]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Luchar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Fight]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Fought]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Encontrar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Find]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Found]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Volar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Fly]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Flew]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Perdonar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Forgive]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Forgave]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Obtener
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Get]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Got]
            .row.border0.border4
              .col-4.border2
                .p-1
                  p.mb-0 Dar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Give]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Gave]
      .col-11.col-lg-4.p-3
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 2]. #[i.txt-color3 Irregular verbs] - Verbos irregulares
        .row
          .col-12.bg-color9
            Audio.color-primario(
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
          .col-12
            .row
              .col-4(style="background-color: #FFD947")
                .p-0
                  p.text-center.mb-0 #[i.txt-color1 #[b Spanish]]
                  p.text-center.mb-0 #[i.txt-color1 #[b Español]]
              .col-4(style="background-color: #FF5F65")
                .p-0
                  p.text-center.text-white.mb-0 #[i.txt-color1 #[b Base Form]]
                  p.text-center.text-white.mb-0 #[i.txt-color1 #[b Forma Base]]
              .col-4(style="background-color: #6B8DFF")
                .p-0
                  p.text-center.text-white.mb-0 #[i.txt-color1 #[b Past Simple]]
                  p.text-center.text-white.mb-0 #[i.txt-color1 #[b Pasado Simple]]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Ir
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Go]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Went]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Crecer
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Grow]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Grew]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Tener
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Have]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Had]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Golpear
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Hit]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Hit]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Sostener
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Hold]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Held]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Mantener
                  p.mb-0 Conservar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Keep]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Kept]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Saber
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Know]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Knew]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Abandonar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Leave]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Left]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Perder
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Lose]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Lost]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Hacer
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Make]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Made]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Reunirse
                  p.mb-0 Conocerse
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Meet]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Met]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Pagar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Pay]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Paid]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Poner
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Put]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Put]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Renunciar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Quit]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Quit]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Leer
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Read]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Read*]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Correr
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Run]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Ran]
            .row.border0.border4
              .col-4.border2
                .p-1
                  p.mb-0 Decir
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Say]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Said]
      .col-11.col-lg-4.p-3
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 3]. #[i.txt-color3 Irregular verbs] - Verbos irregulares
        .row
          .col-12.bg-color9
            Audio.color-primario(
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
          .col-12
            .row
              .col-4(style="background-color: #FFD947")
                .p-0
                  p.text-center.mb-0 #[i.txt-color1 #[b Spanish]]
                  p.text-center.mb-0 #[i.txt-color1 #[b Español]]
              .col-4(style="background-color: #FF5F65")
                .p-0
                  p.text-center.text-white.mb-0 #[i.txt-color1 #[b Base Form]]
                  p.text-center.text-white.mb-0 #[i.txt-color1 #[b Forma Base]]
              .col-4(style="background-color: #6B8DFF")
                .p-0
                  p.text-center.text-white.mb-0 #[i.txt-color1 #[b Past Simple]]
                  p.text-center.text-white.mb-0 #[i.txt-color1 #[b Pasado Simple]]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Ver
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 See]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Saw]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Vender
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Sell]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Sold]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Enviar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Send]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Sent]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Cantar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Sing]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Sang]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Sentarse
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Sit]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Sat]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Dormir
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Sleep]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Slept]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Hablar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Speak]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Spoke]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Deletrear
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Spell]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Spelt / Spelled]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Nadar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Swim]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Swam]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Tomar
                  p.mb-0 Agarrar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Take]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Took]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Enseñar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Teach]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Taught]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Decir
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Tell]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Told]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Pensar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Think]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Thought]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Despertar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Wake]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Woke]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Vestir
                  p.mb-0 Llevar puesto
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Wear]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Wore]
            .row.border0
              .col-4.border2
                .p-1
                  p.mb-0 Ganar
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Win]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Won]
            .row.border0.border4
              .col-4.border2
                .p-1
                  p.mb-0 Escribir
              .col-4.border2
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Write]
              .col-4.border3
                .p-1
                  p.mb-0.text-center #[i.txt-color2 Wrote]
    .row
      .col-12
        .row.justify-content-end
          .col-lg-10
            .p-4
              p.mb-0 #[i.txt-color2 Warning #1]
              p.mb-0 #[b Advertencia #1]
        .row.bg-color20
          .col-lg-2
            figure.fig-position
              img(src='@/assets/curso/tema1/img12.svg', style="width: 100px").m-auto
          .col-lg-10
            .p-4
              .row.align-items-end
                .col-lg
                  p #[i.txt-color4 In the tables, we only show 52 of the most common irregular verbs, but there are actually around 600 of them. For a complete list of irregular verbs, click on the following link:]
                  p.text-white #[i En las tablas, solo se muestran 52 de los verbos irregulares más comunes, pero en realidad son alrededor de 600. Para consultar una lista completa de los verbos irregulares, haga clic en el siguiente enlace:]
                .col-auto
                  a.boton.color-primario.me-3.mb-0.mb-lg-5(:href="obtenerLink('downloads/Anexo1.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
    Separador
    #t_1_3
    .titulo-segundo.color-acento-botones
      h2 1.3 #[i Affirmative, negative and interrogative structures] (Estructuras afirmativas, negativas e interrogativas)
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p #[i.txt-color1 In the simple past, the structures of sentences that use the verb "to be" as the main verb are different from sentences that use other verbs as the main verb (regardless of whether they are in the same tense). Let's see the phrases (or grammatical structures) used to express this information:]
      .col-lg-6
        p En el pasado simple son diferentes las estructuras de las oraciones que usan el verbo #[i "to be"] como verbo principal a las oraciones que usan otros verbos como verbo principal (sin importar que estén en el mismo tiempo verbal). Vamos a ver las frases (o estructuras gramaticales) usadas para expresar esta información:
    .tarjeta.tarjeta--amarilla.p-2.mb-5
      SlyderA
        .row.justify-content-center.mx-2
          .col-lg-10
            .row
              .col-auto.mb-4.bg-color11
                .p-3
                  h3.mb-0.text-white #[i Affirmative structure] / Estructura afirmativa
              .col-12.bg-white.rounded.p-4.mb-4
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img14.svg', style="width: 250px").m-auto
                  .col
                    p #[b Estructura]
                    figure
                      img(src='@/assets/curso/tema1/img7.png').m-auto
              .row
                .col-lg
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>I lived in Spain.</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3.mb-4 Yo viví en España.
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>You Drew that painting.</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3.mb-4 Tú dibujaste esa pintura.
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>He played football yesterday.</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3 Él jugó fútbol ayer.
                .col-lg
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>She flew in a helicopter.</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3.mb-4 Ella voló en un helicóptero.
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>It barked really loud.</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3 (Eso) Ladró muy fuerte.
                .col-lg
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>We ate the whole cake.</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3.mb-4 Nosotros nos comimos todo el pastel.
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>You cooked lasagna last night.</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3.mb-4 Ustedes cocinaron lasaña anoche.
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>They bought a house a year ago.</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3 Ellos compraron una casa hace un año.
        .row.justify-content-center.mx-2
          .col-lg-10
            .row
              .col-auto.mb-4.bg-color11
                .p-3
                  h3.mb-0.text-white #[i Negative structure] / Estructura negativa
              .col-12.bg-white.rounded.p-4.mb-4
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img14.svg', style="width: 250px").m-auto
                  .col
                    p #[b Estructura]
                    figure
                      img(src='@/assets/curso/tema1/img8.png').m-auto
              .row
                .col-lg
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>I didn’t live in Spain.</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3.mb-4 Yo no viví en España.
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>You did not draw that.</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3.mb-4 Tú no dibujaste eso.
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>He didn’t play football yesterday.</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3 Él no jugó fútbol ayer.
                .col-lg
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>She did not fly in a helicopter.</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3.mb-4 Ella no voló en un helicóptero.
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>It didn’t bark that loud.</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3 (Eso) No ladró tan fuerte.
                .col-lg
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>We did not eat the whole cake.</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3.mb-4 Nosotros no nos comimos todo el pastel.
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>You didn’t cook lasagna last night.</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3.mb-4 Ustedes no cocinaron lasaña anoche.
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>They did not buy a house a year ago.</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3 Ellos no compraron una casa hace un año.
        .row.justify-content-center.mx-2
          .col-lg-10
            .row
              .col-auto.mb-4.bg-color11
                .p-3
                  h3.mb-0.text-white #[i Interrogative structure] / Estructura interrogativa
              .col-12.bg-white.rounded.p-4.mb-4
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img14.svg', style="width: 250px").m-auto
                  .col
                    p #[b Estructura]
                    figure
                      img(src='@/assets/curso/tema1/img9.png').m-auto
              .row
                .col-lg
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>Did I live in Spain?</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3.mb-4 ¿Yo viví en España?
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>Did you draw that?</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3.mb-4 ¿Tú dibujaste eso?
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>Did he play football yesterday?</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3 ¿Él jugó fútbol ayer?
                .col-lg
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>Did she fly in a helicopter?</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3.mb-4 ¿Ella voló en un helicóptero?
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>Did it bark loud?</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3 ¿(Eso) Ladró fuerte?
                .col-lg
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>Did we eat the whole cake?</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3.mb-4 ¿Nosotros nos comimos todo el pastel?
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>Did you cook lasagna last night?</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3.mb-4 ¿Ustedes cocinaron lasaña anoche?
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em><span>Did they buy a house a year ago?</span></em>"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )
                  p.ms-3 ¿Ellos compraron una casa hace un año?
    .row.mb-5
      .col-12
        .row.justify-content-end
          .col-lg-10
            .p-4
              p.mb-0 #[i.txt-color2 Warning #2]
              p.mb-0 #[b Advertencia #2]
        .row.bg-color20
          .col-lg-2
            figure.fig-position
              img(src='@/assets/curso/tema1/img12.svg', style="width: 100px").m-auto
          .col-lg-10
            .p-4
              p.mb-4 #[b #[i.txt-color4 Negative structure] #[span.text-white / Estructura negativa]]
              p.mb-0 #[i.txt-color4 From here on we have to take into account an extra component to form the following grammatical structures. This is the auxiliary “did”.]
              p.mb-4 #[i.txt-color4 The auxiliary verb “did” accompanies the main verbs so that they work in other forms, such as questions, short answers, negatives, etc. Did is used for all grammatical persons without exception, and has no translation into Spanish.]
              p.text-white.mb-0 De aquí en adelante se tiene que tener en cuenta un componente extra para formar las siguientes estructuras gramaticales. Se trata del auxiliar #[i “did”].
              p.text-white El verbo auxiliar “did” acompaña a los verbos principales para que funcionen en otras formas, como preguntas, respuestas cortas, negativas, etc. Did se usa para todas las personas gramaticales sin excepción, y no tiene traducción al español.
    .row.mb-5
      .col-12
        .row.justify-content-end
          .col-lg-10
            .p-4
              p.mb-0 #[i.txt-color2 Warning #3]
              p.mb-0 #[b Advertencia #3]
        .row.bg-color20
          .col-lg-2
            figure.fig-position
              img(src='@/assets/curso/tema1/img12.svg', style="width: 100px").m-auto
          .col-lg-10
            .p-4
              p.mb-4 #[i.txt-color4 To the "yes" or "no" questions, we can answer in a short way:]
              p.mb-0 #[b.txt-color4 Yes = Yes, subject + did.]
              p.mb-4 #[b.txt-color4 No = No, subject + didn't.]
              p.text-white.mb-4 A las preguntas de “sí” o “no”, se puede responder de forma corta:
              p.text-white.mb-0 #[b Sí = Yes, sujeto + did.]
              p.text-white.mb-0 #[b No = No, sujeto + didn't.]
    .row.justify-content-evenly
      .col-lg-5.bg-color13.mb-4.mb-lg-0
        .p-3
          figure.mb-4
            img(src='@/assets/curso/tema1/img16.svg', style="width: 100px")
          p.mb-4 #[i For example] / Por ejemplo:
          TarjetaAudio.color-primario.mb-2(
            texto="<em><span>Did I live in Spain?</span></em>"
            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
          )
          p.ms-3.mb-4 ¿Yo viví en España?
          .row
            .col-lg-6.mb-2.mb-lg-0
              TarjetaAudio.color-secundario.mb-2(
                texto="<em><span>Yes, I did.</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
              p.ms-3 Si.
            .col-lg-6
              TarjetaAudio.color-secundario.mb-2(
                texto="<em><span>No, I didn't.</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
              p.ms-3 No.
      .col-lg-5.bg-color14
        .p-3
          figure.mb-4
            img(src='@/assets/curso/tema1/img17.svg', style="width: 100px")
          p.mb-4 #[i For example] / Por ejemplo:
          TarjetaAudio.color-primario.mb-2(
            texto="<em><span>Did they buy a house a year ago?</span></em>"
            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
          )
          p.ms-3.mb-4 ¿Ellos compraron una casa hace un año?
          .row
            .col-lg-6.mb-2.mb-lg-0
              TarjetaAudio.color-secundario.mb-2(
                texto="<em><span>Yes, they did.</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
              p.ms-3 Si.
            .col-lg-6
              TarjetaAudio.color-secundario.mb-2(
                texto="<em><span>No, they didn't.</span></em>"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )
              p.ms-3 No.

</template>

<script>
export default {
  name: 'Tema1',
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
