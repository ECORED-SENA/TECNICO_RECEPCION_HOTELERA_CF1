<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Establecimiento de alojamiento y hospedajes.

    p.mt-4 En el siguiente video podras estudiar qué es un establecimiento de alojamiento o de hospedaje, cuáles son los factores de servicio, los criterios de evaluación para el otorgamiento del certificado de categorización por estrellas y cuál es su clasificación.

    figure.mt-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .tarjeta.text-white.p-5.mt-5(style="background: linear-gradient(rgb(228 136 1), rgb(255 207 137))")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/hotel.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Clasificación hoteles
              p Criterios de evaluación para el otorgamiento del certificado de categorización por estrellas.
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('downloads/Clasificacion_hoteles.pdf')" target="_blank" style="background-color:#111E61;")
                span Ver infografía
                i.fas.fa-file-download


    .tarjeta.text-white.p-5.mt-5(style="background: linear-gradient(rgb(228 136 1), rgb(255 207 137))")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/cama.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Tipos de alojamiento y hospedajes
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('downloads/Tipos de alojamiento y hospedajes.pdf')" target="_blank" style="background-color:#111E61;")
                span Ver infografía
                i.fas.fa-file-download

   
</template>

<script>
export default {
  name: 'Tema2',
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
.fondo-azul
  background-color: #F3F9FF !important
</style>
