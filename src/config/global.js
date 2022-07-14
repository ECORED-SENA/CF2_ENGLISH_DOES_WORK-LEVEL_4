export default {
  global: {
    componenteFormativo:
      '<span1><em>Down memory lane</em></span1><br><span>Por el camino de los recuerdos</span>',
    descripcionCurso:
      'En este componente, se va a profundizar en el tiempo pasado simple, más allá del verbo <em>“to be”</em>, con todos los demás verbos, sean regulares o irregulares (incluyendo cómo estudiarlos, escribirlos y pronunciarlos). Después, cómo usarlos en las diferentes estructuras gramaticales de las oraciones afirmativas, negativas e interrogativas, con especial énfasis en las preguntas informativas o <em>“Wh- questions”</em>, donde aprenderemos más palabras interrogativas aparte de las básicas, y para finalizar, vocabulario útil para hablar de hechos y personajes históricos del pasado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<em>Past simple</em> (Pasado simple)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<em>Regular verbs</em> (Verbos regulares)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '<em>Irregular verbs</em> (Verbos irregulares)',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              '<em>Affirmative, negative, and interrogative structures</em> (Estructuras afirmativas, negativas e interrogativas)',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          '<em>WH- questions in the past tense</em> (Preguntas con WH- en pasado)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Let´s talk about history</em> (Hablemos de historia)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              '<em>Famous legends and people in history</em> (Leyendas y personajes famosos de la historia)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              '<em>Important monuments and historical events</em> (Monumentos y eventos históricos importantes)',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'BBC. (s. f.). <em>”WH”-questions</em>. BBC World Service. ',
      link:
        'https://www.bbc.co.uk/worldservice/learningenglish/grammar/learnit/learnitv147.shtml',
    },
    {
      referencia:
        'British Council. (s. f.-a). <em>Auxiliary verb</em>. British Council TeachingEnglish. ',
      link: 'https://www.teachingenglish.org.uk/article/auxiliary-verb',
    },
    {
      referencia:
        'British Council. (s. f.-b). <em>Past simple</em>. British Council LearnEnglish. ',
      link:
        'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/past-simple',
    },
    {
      referencia:
        'Cambridge University Press. (s. f.). <em>Past simple (I worked)</em>. Cambridge Dictionary. ',
      link:
        'https://dictionary.cambridge.org/es-LA/grammar/british-grammar/past-simple-i-worked',
    },
    {
      referencia:
        'Collins. (s. f.). <em>Past tense</em>. Diccionario de inglés. ',
      link:
        'https://www.collinsdictionary.com/es/diccionario/ingles/past-tense',
    },
    {
      referencia: 'Woodward English. (s. f.). ED Spelling Rules. ',
      link: 'https://www.woodwardenglish.com/lesson/ed-spelling-rules/',
    },
  ],
  glosario: [
    {
      termino: '<em>Irregular verbs</em> / Verbos irregulares',
      significado:
        'verbos que a la hora de conjugarse en pasado simple (o en participio pasado) no se puede predecir su forma (no terminan en <b><em>“-ed”</em></b>), ya que toda la palabra puede cambiar completamente, o incluso pueden considerarse irregulares porque no cambian para nada (como es el caso de los verbos <em>“cut”</em> y <em>“put”</em>), y se usan sin distinción alguna, sin importar el tiempo gramatical.',
    },
    {
      termino: '<em>Past simple tense</em> / Tiempo pasado simple',
      significado:
        'tiempo verbal que hace referencia a acciones que se llevaron a cabo en un momento o tiempo previo al ahora.',
    },
    {
      termino: '<em>Regular verbs</em> / Verbos regulares',
      significado:
        'verbos que a la hora de conjugarse en pasado simple (o en participio pasado) se puede predecir que terminarán con el sufijo <b><em>“-ed”</em></b>.',
    },
    {
      termino: '<em>Wh- questions</em> / Preguntas con palabras con “wh-”',
      significado:
        'también llamadas “preguntas abiertas” o “preguntas informativas”, son preguntas que no se pueden responder con un “sí” o un “no”, ya que lo que están pidiendo es un dato, alguna información en particular.',
    },
  ],
  complementario: [
    {
      tema: '<em>Past simple</em> (Pasado simple)',
      referencia:
        'BBC Learning English. (2020). <em>The past simple tense - 6 Minute Grammar</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PgsG98vByiw&t=9s',
    },
    {
      tema: '<em>Past simple</em> (Pasado simple)',
      referencia:
        'Universidad Nacional Autónoma de México [UNAM]. (s. f.). <em>Simple past. Affirmative, negative and interrogative forms</em>. Ambiente Virtual de Idiomas.',
      tipo: 'Artículo',
      link:
        'https://avi.cuaed.unam.mx/repositorio/moodle/pluginfile.php/2334/mod_resource/content/10/contenido/index.html',
    },
    {
      tema: '<em>Regular verbs</em> (Verbos regulares)',
      referencia:
        'Coordinación de Universidad Abierta, Innovación Educativa y Educación a Distancia [CUAIEED]. (s. f.). <em>Pronunciation of the Simple Past</em>. Universidad Nacional Autónoma de México [UNAM].',
      tipo: 'Artículo',
      link:
        'http://uapas2.bunam.unam.mx/humanidades/pronunciation_the_simple_past/',
    },
    {
      tema:
        '<em>WH- questions in the past tense</em> (Preguntas con WH- en pasado)',
      referencia:
        'BBC Learning English. (2020). <em>‘Who’, ‘whom’ or ‘whose’? - Learners´ Questions.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mbS7-T4Z-kQ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Michelle Manuela Pérez Hernández',
        cargo: 'Experta Temática',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Lida Alzate Suárez',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuly Rey',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
