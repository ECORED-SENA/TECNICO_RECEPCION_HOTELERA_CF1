<template lang="pug">
.curso-main-container
  BannerInterno(titulo="1. Hotelería")
  .container.tarjeta--blanca.p-4.p-md-5.mb-5
    
    p La hotelería es una actividad económica que consiste en la prestación de servicios de alojamiento y en algunas ocasiones el servicio de alimentación, ligada a diferentes actividades usualmente el turismo.
    p Los establecimientos comerciales dedicados a estas reciben distintos nombres, según su categoría o finalidad, aunque las denominaciones oficiales dependen de la reglamentación local, que los clasifica con criterios urbanísticos, sanitarios, impositivos o de seguridad.

      .video.mb-5.mt-5
        iframe(width="560" height="315" src="https://www.youtube.com/embed/YXT2HTjiB3Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_1_1.pb-5.h2 1.1 Historia de la hotelería  y evolución

    p La historia de la industria hotelera se remonta a la antigüedad (años 1000 a 500 a. de C.) cuando los comerciantes viajaban de un lugar a otro para intercambiar mercancías por hospedaje.  En ese tiempo surgieron posadas en los caminos para alojar a los viajeros y a sus caballos a cambio de dinero. Eran lugares donde los huéspedes se alojaban junto al ganado y se les ofrecía un servicio de comidas.

    .row.justify-content-center.align-items-center.mt-5
                .col-auto 
                    img.img-a(src="@/assets/curso/images/pages/ilustraciones/1.png").img-fluid

                .col
                    p Después de la caída del imperio romano hasta los siglos X – XI el servicio de hospedaje pasó a manos de los monasterios, que prestaban este servicio por caridad. La hospitalidad se volvió un servicio voluntario y estaba protegido por la ley, también estaban los sitios donde se prestaba este servicio a cambio de un valor.

                    p A partir del siglo XII y XIII las cruzadas dieron un fuerte impulso al comercio y la hospitalidad dio paso a locales que comenzaron a cobrar a cambio de alojamiento.

                    p De los siglos XV al XVIII se desarrolla un servicio de posadas no solo destinadas al alojamiento de viajeros sino también como centros de actividades, negocios o para elegir a miembros del consejo eclesiástico o del parlamento.
    .jumbotron.mt-5
        .row.justify-content-center.align-items-center
              .col-auto
                  img.img-a.my-3(src="@/assets/curso/images/pages/ilustraciones/hotel.svg").img-fluid
              .col
                  h4.mb-0 La industria hotelera es hoy una de las principales y en algunos países europeos ocupa el primer puesto de la industria nacional.
    
    #t_1_2.pb-5.h2.mt-5  1.2 Normativa de formalización


    p Ley 300 de 1996.
    p Expide la ley general de turismo. Establece que los consejos distritales o municipales, determinarán las zonas de desarrollo turístico prioritario, así mismo autoriza a las corporaciones de aquellos municipios con menos de cien mil habitantes, que posean gran valor histórico, artístico y cultural, para que establezcan un peaje turístico, sin que la tarifa supere un salario mínimo diario legal por vehículo de uso público o comercial y medio salario mínimo diario legal por vehículo de uso particular.

    .div-con-fondo1
        .row.justify-content-center.align-items-center
            .col-auto
              
              img(src='@/assets/curso/images/pages/ilustraciones/3.png').img-float
              
              p.centrado #[strong Dicta disposiciones sobre el ecoturismo, etnoturismo, agroturismo, ecoturismo y #[br] turismo metropolitano; Turismo de interés social, mercadeo, promoción del turismo y cooperación turística internacional, incentivos tributarios para el fomento de la actividad turística, Fondo de promoción turística, Corporación Nacional de Turismo, Registro #[br] Nacional de Turismo, derechos y obligaciones de los usuarios, control y sanciones. #[br] Crea la división de policía de turismo dentro de la dirección de servicios especializados #[br]de la Policía Nacional. #[br] Prestadores de servicios turísticos en particular, establecimientos hoteleros o de #[br]hospedaje, agencias de viajes y de turismo, transportadores de pasajeros,#[br] establecimientos de gastronomía, bares y negocios similares, establecimientos de arrendamiento de vehículos, empresas captadoras de ahorro para viajes, guías de turismo, sistema de tiempo compartido, operadores profesionales de congresos, ferias #[br] y convenciones, círculos metropolitanos turísticos.]

    p.mt-5 Resolución 657 de 2005.
    p El Ministerio de Comercio, Industria y Turismo reglamenta la categorización por estrellas de los establecimientos hoteleros o de hospedaje que prestan sus servicios en Colombia, disponiendo que sólo podrán ser categorizados por estrellas los establecimientos hoteleros o de hospedaje que en los términos del artículo 78 de la Ley 300 de 1996, se consideren como hoteles, según la definición de la norma técnica sectorial NTSH 006, para lo cual deben obtener el certificado de calidad turística, expedido por un organismo certificador debidamente acreditado por la Superintendencia de Industria y Comercio, que cuente con visto bueno de la Dirección de Turismo del Ministerio de Comercio, Industria y Turismo, sin cuya certificación no podrán utilizar en su publicidad la categorización por estrellas, so pena de ser sancionados.

     #t_1_3.pb-5.h2.mt3 1.3 Normas técnicas sectoriales hoteleras para establecimientos de alojamiento y hospedaje.  

    .row.justify-content-center.align-items-center.mt-5
          .col-auto 
              img.img-a(src="@/assets/curso/images/pages/ilustraciones/4.png").img-fluid
  

</template>

<script>
import { mapActions } from 'vuex'
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
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
