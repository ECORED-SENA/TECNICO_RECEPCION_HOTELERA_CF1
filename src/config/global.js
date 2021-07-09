export default {
  global: {
    componenteFormativo: 'Introducción a la hotelería.',
    descripcionCurso:
      'En los últimos años el sector de servicios y especialmente el subsector turístico, ha reflejado una tendencia positiva de crecimiento a nivel mundial, la especialización y la competitividad de las empresas del sector ha ido presentando un continuo ascenso y los hoteles, como la mayoría de las organizaciones turísticas, se enfrentan a un entorno continuamente cambiante y altamente competitivo.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Hotelería',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'fas fa-video',
            numero: '1.1',
            titulo: 'Historia de la hotelería  y evolución',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Normativa de formalización',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Normas técnicas sectoriales hotelera',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'fas fa-video',
        numero: '2',
        titulo: 'Establecimiento de alojamiento',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Habitaciones hoteleras',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipo de habitaciones y acomodación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Servicios complementarios',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Convenciones',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Estructura organizacional',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leidy Carolina Arias Aguirre',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de diseño y Metrología',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Sandra Isabel Suarez Delgado',
        cargo: 'Instructor',
        centro: 'Centro de Servicios y Gestión Empresarial',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisora de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Pérez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: '',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Rafael Augusto Mantilla López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Báez Casillas, S. (2009). Hotelería 4ta Edición.',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=3227395',
    },
    {
      referencia:
        'Ministerio de Desarrollo económico (1996). Ley General de turismo. Normatividad turismo de Colombia.',
      link: 'https://rosdary.wordpress.com/normatividad-turismo-colombia/',
    },
    {
      referencia:
        'Ministerio de Desarrollo económico (1996). Ley General de turismo. Normatividad turismo de Colombia.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/listados/tematica2.jsp?subtema=20482',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo (2003). Norma Técnica Sectorial Colombiana, Sena, Cotelco.',
      link:
        'https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2003). NTSH 001 Realización de actividades básicas para la prestación del servicio',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-001-establ/nts-alojamiento-y-hospedaje-1.pdf.aspx',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2003). NTSH 002 Información a clientes, atención de sugerencias y reclamaciones de acuerdo a políticas de servicio ',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-002-establ/norma-tecnica-sectorial-colombiana-ntsh-002.pdf.aspx',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2003). NTSH 003 Prestación de servicio de recepción y reservas conforme a manuales existentes',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-003-establ/norma-tecnica-sectorial-colombiana-ntsh-003.pdf.aspx',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2003). NTSH 004 Atención del área de conserjería de acuerdo al manual de procedimientos ',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-004-establ/norma-tecnica-sectorial-colombiana-ntsh-004.pdf.aspx',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2003). NTSH 005 Manejo de valores e ingresos relacionados con la operación del establecimiento',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-005-establ/norma-tecnica-sectorial-colombiana-ntsh-005.pdf.aspx',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2009). NTSH 006 Clasificación de Establecimientos de Alojamiento y Hospedaje. Categorización por Estrellas de Hoteles. Requisitos Normativos',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-006-i-actu/norma-tecnica-sectorial-colombiana-ntsh-006-i.pdf.aspx',
    },
  ],
  glosario: [
    {
      termino: 'Check in',
      significado:
        '(Registro y acomodación). Proceso por medio del cual, se registra el ingreso de uno o varios huéspedes al flujo de información de un establecimiento de alojamiento y hospedaje, en el que intervienen por parte del establecimiento un recepcionista y uno o varios huéspedes, se asigna la habitación y se concreta la forma de pago. <br><br> El objetivo será siempre mantener la información actualizada de los huéspedes que están alojados, así se presenten cambios de habitación de tarifas, ingresos o salidas de huéspedes registrados como acompañantes o incluso manejo especial de esta información a petición de quién ocupa la habitación.',
    },
    {
      termino: 'Check out',
      significado:
        '(Salida). Proceso por medio del cual, se recibe del huésped la habitación(es) que han sido ocupadas durante una estadía, se efectúa un balance de la(s) cuenta(s) con cargo o a favor del huésped o los huéspedes que se disponen a dejar el establecimiento y se formaliza el pago.',
    },
    {
      termino: 'Norma de competencia',
      significado:
        'Conjunto de funciones individuales que revisten un significado claro en el proceso de trabajo y por tanto tienen valor en el ejercicio del mismo.',
    },
    {
      termino: 'Objetivos de calidad',
      significado:
        'Algo ambicionado, o pretendido con la calidad. Generalmente se basan en la política de la calidad de la organización.',
    },
    {
      termino: 'Par stock',
      significado:
        'Número de elementos correspondientes a cada uno de los activos de operación (lencería, vajilla, entre otros) de acuerdo con la capacidad instalada para la prestación de un servicio',
    },
    {
      termino: 'Plan de emergencia',
      significado:
        'Se entiende como el conjunto de medidas y procedimientos tendientes a salvaguardar la vida de las personas y bienes materiales de la empresa en caso de alguna eventualidad (sismo, inundación, ataque externo, incendio, o explosión) y minimizar todas las demás consecuencias directas e indirectas que pudieran derivarse de la eventualidad.',
    },
    {
      termino: 'Planta',
      significado:
        'Sistema de instalaciones, equipos y servicios necesarios para el funcionamiento de un establecimiento de alojamiento y hospedaje.',
    },
    {
      termino: 'Política de calidad',
      significado:
        'Intenciones globales y orientación de una organización relativas a la calidad tal como se expresan formalmente por la alta dirección. Generalmente es coherente con la política corporativa o de casa matriz de la organización y proporciona un marco de referencia para el establecimiento de los objetivos de la calidad.',
    },
    {
      termino: 'Programa de mantenimiento',
      significado:
        'Conjunto de uno o más mantenimientos planificados de instalaciones físicas para un periodo de tiempo determinado y dirigidos hacia un propósito específico.',
    },
    {
      termino: 'Registros de mantenimiento',
      significado:
        'Documento que presenta resultados obtenidos o proporciona evidencia de actividades desempeñadas en el mantenimiento de las instalaciones físicas. ',
    },
    {
      termino: 'Reserva hotelera',
      significado:
        'Es la obligación que asume un alojamiento turístico de guardar para una fecha o un periodo de tiempo determinado una o varias habitaciones, con la exigencia inmediata de pago de todo o parte del precio que éste supondrá, penalizando en caso de cancelación.',
    },
    {
      termino: 'Reserva garantizada',
      significado:
        'Estado que presenta una reserva, solicitada por una persona natural o jurídica para uno o varios huéspedes en un establecimiento de alojamiento y hospedaje, para una fecha determinada, que implica el compromiso que adquiere el establecimiento de garantizar la habitación y el huésped de ocuparla, a través, de un medio de pago de garantía aceptado o expedido por el hotel.',
    },
    {
      termino: 'Room service',
      significado: 'Servicio de alimentación a la habitación.',
    },
    {
      termino: 'Señalización',
      significado:
        'Se entiende por señalización las indicaciones que, en conjunto y mediante una serie de estímulos, condicionan la actuación del individuo que las recibe, frente a unas circunstancias que se pretende resaltar.',
    },
    {
      termino: 'Spa',
      significado:
        'Infraestructura habilitada para aprovechar las propiedades de elementos naturales reconocidos como beneficiosos para la salud, tales como, emanaciones de agua mineral o volcánica, las características del mar, las condiciones climáticas. En algunos casos es utilizado complementariamente en tratamientos de salud.',
    },
  ],
  complementario: [
    {
      texto: 'Alcaldía de Bogotá. (2005). Resolución 0657 de 2005.',
      tipo: 'Documento',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=16635',
    },
    {
      texto:
        'Campustraining (2019). Historia del hotelería: qué es y cómo surgió la hostelería',
      tipo: 'Blog',
      link:
        'https://www.campustraining.es/noticias/historia-hoteleria/#:~:text=La%20historia%20de%20la%20industria,caballos%20a%20cambio%20de%20dinero',
    },
    {
      texto: 'Congreso de la República. (1996). Ley 300 de 1996. ',
      tipo: 'Documento',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0300_1996.html',
    },
    {
      texto: 'Estructura organizacional',
      tipo: 'Blog',
      link: 'https://concepto.de/estructura-organizacional/#ixzz6ZZj9WyUW',
    },
    {
      texto: 'Mar Torres (2011) Gobernantas Blog',
      tipo: 'Blog',
      link: 'https://gobernantas.wordpress.com/tag/estado-habitaciones/',
    },
    {
      texto:
        'Ministerio de Comercio, Industria y Turismo, Sena, Cotelco (2003) Norma Técnica Sectorial Colombiana',
      tipo: 'Documento',
      link:
        'https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales',
    },
    {
      texto:
        'Ministerio de Desarrollo económico. (1996) Ley General de turismo. Normatividad turismo de Colombia',
      tipo: 'Documento',
      link: 'https://rosdary.wordpress.com/normatividad-turismo-colombia/',
    },
    {
      texto:
        'Ministerio de Desarrollo económico. (1996) Ley General de turismo. Normatividad turismo de Colombia',
      tipo: 'Documento',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/listados/tematica2.jsp?subtema=20482',
    },
  ],
}
