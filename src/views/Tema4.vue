<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h1 4
      .h1.mt-4 Estructura organizacional

    .row.mt-5
      .col-auto
        img.mt-1(src='@/assets/curso/tema4/1.svg' alt='Avatar')
      .col
        p.mt-5 La misión del hotel es garantizar un servicio de alojamiento personalizado con calidad, comodidad y seguridad en un entorno confortable, siempre con el objetivo del bienestar y la satisfacción de las necesidades de los huéspedes.

        p.mt-3 Por tal razón se requiere de una estructura que permita lograr el objetivo. La estructura organizacional es el modo en que una empresa planifica y distribuye su trabajo, cada empresa tiene su propia estructura.

        p.mt-3 Los hoteles se estructuran con la sectorización de las labores en distintas unidades llamadas departamentos. Cada departamento atiende un conjunto específico de necesidades del cliente.

    p.mt-4 La representación gráfica de la estructura organizacional de una empresa se conoce como organigrama, no existe un organigrama que indique la distribución de los departamentos, y que sea válido para todos los hoteles, ya que esto depende de la capacidad y la categoría del hotel, de las características físicas de la edificación, del tipo de organización y de servicio que se desea proporcionar. También se presentan organigramas para áreas específicas.

    .text-center.mt-5
      img.mt-1(src='@/assets/curso/tema4/2.svg' alt='Avatar')

    br

    p.mt-5 #[strong Gráficamente los organigramas mantienen la siguiente forma:]

    .row.mt-5
      .col-8
        p Los puestos de trabajo y los procesos están sometidos a una reglamentación y estandarización los cuales son respaldados por manuales de funciones y procesos.

        p.mt-3 Son guías y orientaciones para desarrollar las rutinas o labores cotidianas de cada uno de los trabajadores quienes podrán tomar las decisiones más acertadas apoyadas por las directrices de los superiores, y estableciendo con claridad la responsabilidad y las obligaciones que cada uno de los cargos conlleva.

        p.mt-3 Incluye brevemente cada una de las funciones y responsabilidades básicas describiendo adecuadamente los límites y la esencia del cargo.

        p.mt-3 Se puede decir entonces que es un documento de apoyo para el personal de una empresa, el cual contiene políticas y detalles de las actividades a realizarse en funciones específicas.

      .col-4.text-center 
        img.mt-3(src='@/assets/curso/tema4/3.svg' alt='Avatar' style="display:inline;width:200px;")

    .row.mt-5.col-11(style="background-color:#FFF1DB;")
      .col-8
        .p-4
          p #[strong Sirven para:]
          .row.mb-2.mt-4
            .col-auto
              img.mt-1(src='@/assets/curso/tema1/2.svg' alt='Avatar')
            .col
              p El control y mantenimiento de los servicios que se prestan.
          .row.mb-2
            .col-auto
              img.mt-1(src='@/assets/curso/tema1/2.svg' alt='Avatar')
            .col
              p Apoyan a controlar la calidad y resultado que se ofrece en el establecimiento.
          .row.mb-2
            .col-auto
              img.mt-1(src='@/assets/curso/tema1/2.svg' alt='Avatar')
            .col
              p Para planificar, controlar y evaluar el trabajo.
          .row.mb-2
            .col-auto
              img.mt-1(src='@/assets/curso/tema1/2.svg' alt='Avatar')
            .col
              p Para la garantía de la eficiencia del servicio.
          .row.mb-2
            .col-auto
              img.mt-1(src='@/assets/curso/tema1/2.svg' alt='Avatar')
            .col
              p Optimización de la prestación del servicio.

      .col-4.text-center
        img.mt-3(src='@/assets/curso/tema4/4.svg' alt='Avatar' style="display:inline;width:200px;")

    p.mt-5 En el establecimiento hotelero se utilizan para todas las áreas cada uno con su fin, algunos son comunes a todas las áreas: ejemplo: “Lista de huéspedes”.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({}),
}
</script>
<style lang="sass" scoped>
.pl-0
  padding-left: 0px !important
.pr-0
  padding-right: 0px !important
.ml-0
  margin-left: 0px !important
.mr-0
  margin-right: 0px !important
</style>
