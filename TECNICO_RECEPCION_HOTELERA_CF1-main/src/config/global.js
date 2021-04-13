export const global = {
  componenteFormativo: 'Introducción a la hotelería',
  descripcionCurso:
    'A través de la historia, la industria hotelera ha sido motivo de interés, en los últimos años el sector de servicios y especialmente el subsector turístico, ha reflejado una tendencia positiva de crecimiento a nivel mundial, la especialización y la competitividad de las empresas del sector  ha ido  presentando un continuo ascenso y los hoteles, como la mayoría de las organizaciones turísticas, se enfrentan  a un entorno continuamente cambiante y altamente competitivo.',
  imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
}

export const menuPrincipal = {
  menu: [
    {
      nombreRuta: 'inicio',
      icono: 'fas fa-home',
      titulo: 'Volver al inicio',
    },
    {
      nombreRuta: 'tema1',
      icono: 'fa fa-play-circle',
      titulo: '1. Hoteleria',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
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
          titulo:
            'Normas técnicas sectoriales hoteleras para establecimientos de alojamiento y hospedaje',
          hash: 't_1_3',
        },
      ],
    },
    {
      nombreRuta: 'tema2',
      icono: 'fa fa-play-circle',
      numero: '2',
      titulo: 'Establecimiento de alojamiento y hospedajes',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '2.1',
          titulo: 'Definición',
          hash: 't_2_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2',
          titulo: 'Características',
          hash: 't_2_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.3',
          titulo: 'Tipología',
          hash: 't_2_3',
        },
      ],
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
          titulo: 'Tipo de habitaciones y acomodación:',
          hash: 't_3_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.2',
          titulo: 'Servicios complementarios',
          hash: 't_3_2',
        },
      ],
    },
    {
      nombreRuta: 'tema4',
      icono: 'far fa-file-alt',
      numero: '4',
      titulo: 'Estructura organizacional',
      desarrolloContenidos: true,
    },
  ],
  subMenu: [
    {
      nombreRuta: 'actividad',
      icono: 'far fa-question-circle',
      titulo: 'Actividad didáctica',
      desarrolloContenidos: true,
    },
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
      download: 'descargas/material.zip',
    },
    {
      icono: 'far fa-registered',
      titulo: 'Créditos',
      nombreRuta: 'creditos',
    },
  ],
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
    regional: 'Dirección general',
  },
  contenidoInstruccional: [
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Responsable del equipo',
      centro: 'Centro Industrial Del Diseño Y La Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Sandra Isabel Suarez Delgado',
      cargo: 'Experta',
      centro: 'Centro de Servicios y Gestión Empresarial',
      regional: 'Regional Antioquia',
    },
    {
      nombre: 'Gloria Esperanza Ortiz Russi',
      cargo: 'Diseñador Instruccional ',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Martha Isabel Martínez Vargas',
      cargo: 'Revisora de estilo',
      centro: 'Centro Industrial Del Diseño Y La Manufactura',
      regional: 'Regional Santander',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
      centro: 'Centro Industrial Del Diseño Y La Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Soporte organizacional',
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
    {
      nombre: 'Camilo Andrés Villamizar Lizcano',
      cargo: 'Diseño web y Producción Audiovisual',
      centro: 'Centro Industrial Del Diseño Y La Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Victor Raúl Cárdenas Cáceres',
      cargo: 'Diseño web y Producción Audiovisual',
      centro: 'Centro Industrial Del Diseño Y La Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Wilson Andres Arenales Cáceres',
      cargo: 'Diseño web y Producción Audiovisual',
      centro: 'Centro Industrial Del Diseño Y La Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Yuly Andrea Rey Quiñonez ',
      cargo: 'Diseño web y Producción Audiovisual',
      centro: 'Centro Industrial Del Diseño Y La Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Gustavo Adolfo Marún Suárez',
      cargo: 'Desarrollo Front-End',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Camilo Andres Bolaño Rey',
      cargo: 'Desarrollo Front-End',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],

  gestoresRepositorio: [
    {
      nombre: 'Milady Tatiana Villamil Castellanos',
      cargo: ['Validación de recursos'],
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia: 'Hotelería 4ta Ed. de Sixto Báez Casillas. (2009)',
    link:
      'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=3227395',
  },
  {
    referencia:
      'Ley General de turismo. Normatividad turismo de Colombia (1996) Ministerio de Desarrollo económico',
    link: 'https://rosdary.wordpress.com/normatividad-turismo-colombia/',
  },
  {
    referencia:
      'Norma Técnica Sectorial Colombiana. (2003) Ministerio de Comercio, Industria y Turismo, Sena, Cotelco.',
    link:
      'https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales',
  },
  {
    referencia:
      'NTSH 001 Realización de actividades básicas para la prestación del servicio ',
    link:
      'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-001-establ/nts-alojamiento-y-hospedaje-1.pdf.aspx',
  },
  {
    referencia:
      'NTSH 003 Prestación de servicio de recepción y reservas conforme a manuales existentes',
    link:
      'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-003-establ/norma-tecnica-sectorial-colombiana-ntsh-003.pdf.aspx',
  },
  {
    referencia:
      'NTSH 004 Atención del área de conserjería de acuerdo al manual de procedimientos',
    link:
      'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-004-establ/norma-tecnica-sectorial-colombiana-ntsh-004.pdf.aspx',
  },
  {
    referencia:
      'NTSH 005 Manejo de valores e ingresos relacionados con la operación del establecimiento',
    link:
      'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-005-establ/norma-tecnica-sectorial-colombiana-ntsh-005.pdf.aspx',
  },
  {
    referencia:
      'NTSH 006 Clasificación de Establecimientos de Alojamiento y Hospedaje. Categorización por Estrellas de Hoteles. Requisitos Normativos',
    link:
      'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-006-i-actu/norma-tecnica-sectorial-colombiana-ntsh-006-i.pdf.aspx',
  },
]

export const glosario = [
  {
    termino: 'Check in',
    significado:
      '(Registro y acomodación). Proceso por medio del cual, se registra el ingreso de uno o varios huéspedes al flujo de información de un establecimiento de alojamiento y hospedaje, en el que intervienen por parte del establecimiento un recepcionista y uno o varios huéspedes, se asigna la habitación y se concreta la forma de pago.El objetivo será siempre mantener la información actualizada de los huéspedes que están alojados, así se presenten cambios de habitación de taifas, ingresos o salidas de huéspedes registrados como acompañantes o incluso manejo especial de esta información a petición de quién ocupa la habitación.',
  },
  {
    termino: 'Check out',
    significado:
      '(Salida). Proceso por medio del cual, se recibe del huésped la habitación(es) que han sido ocupadas durante una estadía, se efectúa un balance de la(s) cuenta(s) con cargo o a favor del huésped o los huéspedes que se disponen a dejar el establecimiento y se formaliza el pago.',
  },
  {
    termino: 'Cliente',
    significado: 'Persona natural o jurídica que recibe un servicio.',
  },
  {
    termino: 'Comedor',
    significado:
      'Espacio del restaurante cuya destinación es para el suministro, consumo y servicio de los alimentos y bebidas.',
  },
  {
    termino: 'Competencia',
    significado:
      'Aptitudes y habilidades de una persona para el desempeño de una actividad bajo determinadas condiciones y criterios de evaluación.',
  },
  {
    termino: 'Conserjería',
    significado:
      'Área del hotel cuyas funciones son: la atención y servicio al cliente, el control de acceso, tránsito de mensajes, equipajes e información, la entrega y recibo de habitaciones. Esta área también es conocida como área de botones.',
  },
  {
    termino: 'Edificación',
    significado:
      'Receptáculo diseñado y construido con una finalidad, estructura, instalaciones y servicios adecuados a las necesidades de quienes van a ocuparlo.',
  },
  {
    termino: 'Habitación',
    significado:
      'Cualquiera de las unidades en un establecimiento hotelero; consta de dormitorio y cuarto de baño, aunque puede tener espacios y servicios adicionales según la orientación hacia el mercado que caracterice al establecimiento.',
  },
  {
    termino: 'Hotel',
    significado:
      'Establecimiento en que se presta el servicio de alojamiento en habitaciones y otro tipo de unidades habitacionales en menor cantidad, privadas, en un edificio o parte independiente del mismo, constituyendo sus dependencias un todo homogéneo y con entrada de uso exclusivo. Disponen además como mínimo del servicio de recepción, servicio de desayuno y salón de ésta para la permanencia de los huéspedes, sin perjuicio de proporcionar otros servicios complementarios',
  },
  {
    termino: 'Huésped',
    significado:
      'Persona que se aloja en un establecimiento de alojamiento y hospedaje, mediante contrato de hospedaje.',
  },
  {
    termino: 'Norma de competencia',
    significado:
      'Conjunto de funciones individuales que revisten un significado claro en el proceso de trabajo y por tanto tienen valor en el ejercicio del mismo.',
  },
  {
    termino: 'Planta',
    significado:
      'Sistema de instalaciones, equipos y servicios necesarios para el funcionamiento de un establecimiento de alojamiento y hospedaje.',
  },
  {
    termino: 'Políticas',
    significado:
      'Directrices de un establecimiento que plantean el compromiso con la calidad en sus diferentes dimensiones, por lo que se refiera a satisfacer necesidades y expectativas de los clientes, garantizar la seguridad del servicio y lograr la participación de los empleados. Las políticas se hacen realidad con objetivos y metas concretas y con indicadores que se usarán para el seguimiento de estas metas.',
  },
  {
    termino: 'Procedimiento',
    significado:
      'Forma especificada para llevar a cabo una actividad o un proceso. los procedimientos pueden estar documentados o no.',
  },
  {
    termino: 'Protocolo',
    significado:
      'Directrices documentadas o no, para las relaciones entre clientes externos y el establecimiento en lo referente al trato o comportamiento en la prestación del servicio.',
  },
  {
    termino: 'Objetivos de calidad',
    significado:
      'Algo ambicionado, o pretendido con la calidad. Generalmente se basan en la política de la calidad de la organización.',
  },
  {
    termino: 'Par stock',
    significado:
      'Número de elementos correspondientes a cada uno de los activos de operación (lencería, vajilla, entre otros) de acuerdo con la capacidad instalada para la prestación de un servicio.',
  },
  {
    termino: 'Plan de emergencia',
    significado:
      'Se entiende como el conjunto de medidas y procedimientos tendientes a salvaguardar la vida de las personas y bienes materiales de la empresa en caso de alguna eventualidad (sismo, inundación, ataque externo, incendio, o explosión) y minimizar todas las demás consecuencias directas e indirectas que pudieran derivarse de la eventualidad.',
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
      'Documento que presenta resultados obtenidos o proporciona evidencia de actividades desempeñadas en el mantenimiento de las instalaciones físicas.',
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
    termino: 'Restaurante o establecimiento gastronómico',
    significado:
      'Establecimiento industrial cuyo objetivo es la transformación de alimentos, la venta y prestación del servicio de alimentos y bebidas preparadas.  Puede ofrecer servicios complementarios tales como la atención de eventos, recreación y otros.',
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
      'Infraestructura habilitada para aprovechar las propiedades de elementos naturales reconocidos como beneficiosas para la salud tales como emanaciones de agua mineral o volcánica, las características del mar, las condiciones climáticas. En algunos casos es utilizado complementariamente en tratamientos de salud.',
  },
  {
    termino: 'Tipo de servicio',
    significado:
      'Se refiere a la forma en que se sirve al huésped la comida y la bebida. Las distintas formas de servicio se dirigen a las necesidades variables de los distintos segmentos del mercado y también contribuyen a la percepción del cliente de la calidad-precio.',
  },
]

export const complementario = [
  {
    texto:
      'Norma sectorial NTSH 001. Realización de actividades básicas para la prestación del servicio.',
    tipo: 'Documento Word',
    link: 'https://www.google.com/',
  },
  {
    texto:
      'Norma sectorial NTSH 002. Información a clientes, atención de sugerencias y reclamaciones de acuerdo a políticas de servicio.',
    tipo: 'Documento Word',
    link: 'https://www.google.com/',
  },
  {
    texto:
      'Norma sectorial NTSH 003. Prestación de servicio de recepción y reservas conforme a manuales existentes',
    tipo: 'Documento Word',
    link: 'https://www.google.com/',
  },
  {
    texto:
      'Norma sectorial 004. Atención del área de conserjería de acuerdo al manual de procedimientos.',
    tipo: 'Documento Word',
    link: 'https://www.google.com/',
  },
  {
    texto:
      'Norma sectorial NTSH 005. Manejo de valores e ingresos relacionados con la operación del establecimiento.',
    tipo: 'Documento Word',
    link: 'https://www.google.com/',
  },
  {
    texto:
      'Norma sectorial NTSH 006. Clasificación de establecimientos de alojamiento y hospedaje. Categorización por estrellas de hoteles. Requisitos normativos.',
    tipo: 'Documento Pdf',
    link: 'https://www.google.com/',
  },
  {
    texto:
      'Campustraining (2019). Historia del hotelería: qué es y cómo surgió la hostelería.',
    tipo: 'Blog',
    link:
      'https://www.campustraining.es/noticias/historia-hoteleria/#:~:text=La%20historia%20de%20la%20industria,caballos%20a%20cambio%20de%20dinero.',
  },
  {
    texto:
      'Ministerio de Desarrollo económico. (1996) Ley General de turismo. Normatividad turismo de Colombia',
    tipo: 'Documento',
    link:
      'https://www.alcaldiabogota.gov.co/sisjur/listados/tematica2.jsp?subtema=20482',
  },
  {
    texto:
      'Ministerio de Comercio, Industria y Turismo, Sena, Cotelco (2003) Norma Técnica Sectorial Colombiana.',
    tipo: 'Documento',
    link:
      'https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales',
  },
  {
    texto: 'Mar Torres (2011) Gobernantas Blog ',
    tipo: 'Blog',
    link: 'https://gobernantas.wordpress.com/tag/estado-habitaciones/',
  },
  {
    texto: 'Estructura organizacional',
    tipo: 'Blog',
    link: 'https://concepto.de/estructura-organizacional/#ixzz6ZZj9WyUW',
  },
]
