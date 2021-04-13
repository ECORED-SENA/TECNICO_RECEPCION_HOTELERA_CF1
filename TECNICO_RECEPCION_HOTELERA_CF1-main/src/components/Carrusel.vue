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
            .row
              .col-lg-3
                img.img-box(src="@/assets/curso/images/pages/ilustraciones/9.png")
              .col-lg-9
                h3 Albergue - refugio - hostal:
                p Establecimiento en que se presta el servicio de alojamiento preferentemente en habitacionessemiprivadas o comunes, al igual que sus baños, y que puededisponer además, de un recinto común equipado adecuadamente para que los huéspedes se preparen suspropios alimentos, sin perjuicio de proporcionar otros servicios complementarios.

    
    </template>
