<template lang="pug">
.carrusel
  .tarjeta.tarjeta--blanca.mb-4.pb-0(v-for="elm of elements" :key="elm.id")

    #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
      .carousel-inner
        .carousel-item.active
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen
        .carousel-item
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen
        .carousel-item
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen
      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next
    
    </template>
