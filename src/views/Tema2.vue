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
