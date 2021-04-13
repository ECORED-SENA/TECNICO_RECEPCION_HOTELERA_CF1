<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3  Hotelería

    p.mb-5 La hotelería es una actividad económica que consiste en la prestación de servicios de alojamiento y en algunas ocasiones el servicio de alimentación, ligada a diferentes actividades usualmente el turismo.
    p Los establecimientos comerciales dedicados a estas reciben distintos nombres, según su categoría o finalidad, aunque las denominaciones oficiales dependen de la reglamentación local, que los clasifica con criterios urbanísticos, sanitarios, impositivos o de seguridad.
      // ESTE VIDEO FALTA PRODUCIRLO 
      .video.mb-5.mt-5
        iframe(width="560" height="280" src="https://www.youtube.com/embed/YXT2HTjiB3Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
    #t_1_1.h4 1.1 Historia de la hotelería  y evolución
    
    p.mb-5 La historia de la industria hotelera se remonta a la antigüedad (años 1000 a 500 a. de C.) cuando los comerciantes viajaban de un lugar a otro para intercambiar mercancías por hospedaje.  En ese tiempo surgieron posadas en los caminos para alojar a los viajeros y a sus caballos a cambio de dinero. Eran lugares donde los huéspedes se alojaban junto al ganado y se les ofrecía un servicio de comidas.

    .row.justify-content-center.align-items-center.mt-5
                .col-auto 
                    img.img-a(src="@/assets/curso/images/pages/ilustraciones/1.png").img-fluid

                .col
                    p Después de la caída del imperio romano hasta los siglos X – XI el servicio de hospedaje pasó a manos de los monasterios, que prestaban este servicio por caridad. <b>La hospitalidad se volvió un servicio voluntario y estaba protegido por la ley</b>, también estaban los sitios donde se prestaba este servicio a cambio de un valor.
                    br
                    p A partir del siglo XII y XIII las cruzadas dieron un fuerte impulso al comercio y la hospitalidad dio paso a locales que comenzaron a cobrar a cambio de alojamiento.
                    br
                    p De los siglos XV al XVIII se desarrolla un servicio de posadas no solo destinadas al alojamiento de viajeros sino también como centros de actividades, negocios o para elegir a miembros del consejo eclesiástico o del parlamento.

    SlyderA.my-5(clase-tarjeta="tarjeta--crema")
      .row.justify-content-center.align-items-center
        .col-12.col-md-4
          h4.text-right.text_color_1 La revolución de la hotelería moderna 
              p.text-right Vino con la Revolución industrial y la generalización de los medios de transporte que permitió a las personas desplazarse de forma masiva de un lugar a otro. Por aquel entonces, <b> los viajes estaban reservados a clases más adineradas que podían salir de vacaciones y por tanto exigían alojamientos acorde a su nivel económico.</b> Se generalizan establecimientos para comer y pernoctar, y surge así lo que conocemos como hotelería moderna.

        .col-12.col-md-6
          img.d-block.w-100(src="@/assets/curso/images/pages/ilustraciones/2.png")

      .row.justify-content-center.align-items-center
        .col-12.col-md-4
          h4.text-right.text_color_1 La revolución de la hotelería moderna
              p.text-right El primer hotel de concepción moderna en 1807 fue el <b>“Badische Hof”</b>, construido en Alemania, comenzó con 18 columnas dóricas que se extendían a lo largo de tres pisos, lo que hizo que el comedor fuera el centro de atención y con algunos aspectos novedosos para la época como sala de lectura o biblioteca.

        .col-12.col-md-6
          img.d-block.w-100(src="@/assets/curso/images/pages/ilustraciones/5.jpg")

      .row.justify-content-center.align-items-center
        .col-12.col-md-4
          h4.text-right.text_color_1 La revolución de la hotelería moderna
              p.text-right Con la aparición del ferrocarril, también surgen los hoteles <b>“término”</b> para dar alojamiento a los viajeros al lado de las estaciones.  

        .col-12.col-md-6
          img.d-block.w-100(src="@/assets/curso/images/pages/ilustraciones/6.png")

      .row.justify-content-center.align-items-center
        .col-12.col-md-4
          h4.text-right.text_color_1 La revolución de la hotelería moderna
              p.text-right A mediados de 1800 aparecen los hoteles de propiedad corporativa.  
              p.text-right El famoso Ritz, y su cadena de hoteles se inauguró en 1880 y el modelo de negocio se extiende de Europa a Estados Unidos tras 1900

        .col-12.col-md-6
          img.d-block.w-100(src="@/assets/curso/images/pages/ilustraciones/7.png")

      .row.justify-content-center.align-items-center
        .col-12.col-md-4
          h4.text-right.text_color_1 La revolución de la hotelería moderna
              p.text-right Francia fue el gran referente en la industria hotelera desde mediados del siglo XIX hasta que a finales del siglo XX, Estados Unidos tomó el relevo con sus grandes cadenas hoteleras y gigantes establecimientos.   

        .col-12.col-md-6
          img.d-block.w-100(src="@/assets/curso/images/pages/ilustraciones/8.png")

    .jumbotron.mt-5
        .row.justify-content-center.align-items-center
              .col-auto
                  img.img-a.my-3(src="@/assets/curso/images/pages/ilustraciones/hotel.svg").img-fluid
              .col
                  h4.mb-0 La industria hotelera es hoy una de las principales y en algunos países europeos ocupa el primer puesto de la industria nacional.

    #t_1_2.h4 1.2 Normativa de formalización

    p Ley 300 de 1996.
    br
    p Expide la ley general de turismo. Establece que los consejos distritales o municipales, determinarán las zonas de desarrollo turístico prioritario, así mismo autoriza a las corporaciones de aquellos municipios con menos de cien mil habitantes, que posean gran valor histórico, artístico y cultural, para que establezcan un peaje turístico, sin que la tarifa supere un salario mínimo diario legal por vehículo de uso público o comercial y medio salario mínimo diario legal por vehículo de uso particular.

      div.tarjeta-imagen.my-5
        div.tarjet-text
          div.p-tarjeta-imagen

              p Dicta disposiciones sobre el ecoturismo, etnoturismo, agroturismo, ecoturismo y <b> turismo metropolitano; Turismo de interés social, mercadeo, promoción del turismo y cooperación turística internacional, incentivos tributarios para el fomento de la actividad turística, Fondo de promoción turística, Corporación Nacional de Turismo, Registro Nacional de Turismo, derechos y obligaciones de los usuarios, control y sanciones. </b>
     
              p Crea la división de policía de turismo dentro de la dirección de servicios especializados de la Policía Nacional.
     
                p Prestadores de servicios turísticos en particular, <b> establecimientos hoteleros o de hospedaje, agencias de viajes y de turismo </b>,transportadores de pasajeros, establecimientos de gastronomía, bares y negocios similares, establecimientos de arrendamiento de vehículos, empresas captadoras de ahorro para viajes, guías de turismo, sistema de tiempo compartido, operadores 
                

               
    .tarjeta.tarjeta--amarilla.p-3.my-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 LEY 300 DE 1996 
              p.text-small  
            .col-sm-auto
              a.boton.boton--b(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_0300_1996.html" target="_blank")
                span Ver ley
                i.fas.fa-file-download
    

    // ESTE IMAGEN ESTA PENDIENTE 


    p.mt-5 Resolución 657 de 2005.
    p El Ministerio de Comercio, Industria y Turismo reglamenta la categorización por estrellas de los establecimientos hoteleros o de hospedaje que prestan sus servicios en Colombia, disponiendo que sólo podrán ser categorizados por estrellas los establecimientos hoteleros o de hospedaje que en los términos del artículo 78 de la Ley 300 de 1996, se consideren como hoteles, según la definición de la norma técnica sectorial NTSH 006, para lo cual deben obtener el certificado de calidad turística, expedido por un organismo certificador debidamente acreditado por la Superintendencia de Industria y Comercio, que cuente con visto bueno de la Dirección de Turismo del Ministerio de Comercio, Industria y Turismo, sin cuya certificación no podrán utilizar en su publicidad la categorización por estrellas, so pena de ser sancionados.

    #t_1_3.h4.mt-5 1.3 Normas técnicas sectoriales hoteleras para establecimientos de alojamiento y hospedaje.

    
      .row.justify-content-center.align-items-center.mt-5
                  .col-auto 
                      img.img-a(src="@/assets/curso/images/pages/ilustraciones/4.png").img-fluid

    .tarjeta.tarjeta--amarilla.p-3.my-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  .h5.mb-0 Descargue todas las normas aquí
                  p.text-small  
                .col-sm-auto
                  a.boton.boton--b(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_0300_1996.html" target="_blank")
                    span Descargar
                    i.fas.fa-file-download



      





</template>

<script>
import { mapActions } from 'vuex'
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  data: () => ({
    datosLineaTiempoA: [
      {
        ano: '100.000 - 10.000 A.C.',
        titulo: 'Período Paleolítico',
        texto: 'Pieles, pelo de animales, hojas, huesos y conchas.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Mesolítico',
        texto:
          'Broches hechos con hueso, abrigos, gorros, botas y zapatillas de cuero.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Neolítico',
        texto: 'Vestimenta de fibras animales y vegetales, pulseras de marfil.',
      },
    ],
    datosPasosA: [
      {
        titulo: 'Dressed for Error',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Before the Fury',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Khans Tribute',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Secret of the Quiet Stranger',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
    ],
  }),
  mounted() {
    this.increment()
    setTimeout(() => {
      this.decrease()
    }, 3000)
  },
  methods: {
    ...mapActions(['increment', 'decrease']),
  },
}
</script>

<style lang="sass" scoped></style>
