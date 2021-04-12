<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3  Establecimiento de alojamiento y hospedajes

      
    p Son aquellos establecimientos cuya actividad principal es ofrecer alojamiento a personas, mediante precio, de forma habitual y profesional, con o sin otros servicios complementarios, mediante la denominación genérica de hotel, hostal, pensión o similar.

    // ESTE VIDEO FALTA PRODUCIRLO 
    .video.mb-5.mt-5
        iframe(width="560" height="280" src="https://www.youtube.com/embed/YXT2HTjiB3Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    #t_2_1.h4 2.1 Definición

    .row.justify-content-center.align-items-center.mt-3
        .col

          p Se entiende por establecimiento hotelero o de hospedaje, el conjunto de bienes destinados por la persona natural o jurídica a prestar el servicio de alojamiento no permanente inferior a 30 días, con o sin alimentación y servicios básicos y/o complementarios o accesorios de alojamiento, mediante contrato de hospedaje, el cual es un contrato de arrendamiento, de carácter comercial y de adhesión, que una empresa dedicada a ésta actividad celebra con el propósito principal de prestar alojamiento a otra persona denominada huésped, mediante el pago del precio respectivo día a día, por un plazo inferior a 30 días.
        .col-auto 
            img.img-a.my-3(src="@/assets/curso/images/pages/ilustraciones/hotel_2.svg").img-fluid
    .jumbotron-1.mt-5
        .row.justify-content-center.align-items-center
              .col-auto
                  img.img-a.my-3(src="@/assets/curso/images/pages/ilustraciones/insignia.png").img-fluid
              .col
                  h4.mb-0 La obligación de inscribirse en el Registro Nacional de Turismo cobija únicamente a los establecimientos que presten servicio de alojamiento exclusivamente a personas que tengan el carácter de turistas.

    .titulo-segundo
      .h4 Capítulo II

      p.mt-3 De los establecimientos hoteleros o de hospedaje

    .row.mt-5.align-items-stretch.mb-0

                .col-6.jumbotron-2.jumbo-border.jumbo-border
                    h6.mt-6.mb-0.text-left Artículo 78. 

                    p.mt-4 De los establecimientos hoteleros o de hospedaje. Se entiende por establecimiento hotelero o de hospedaje, el conjunto de bienes destinados por la persona natural o jurídica a prestar el servicio de alojamiento no permanente inferior a 30 días, con o sin alimentación y servicios básicos y/o complementarios o accesorios de alojamiento, mediante contrato de hospedaje.

                .col-6.jumbotron-3.jumbo-border.jumbo-border
                    h6.mt-6.mb-0.text-left Artículo 79.    

                    p.mt-4 Del contrato de hospedaje. El contrato de hospedaje es un contrato de arrendamiento, de carácter comercial y de adhesión, que una empresa dedicada a esta actividad celebra con el propósito principal de prestar alojamiento a otra persona denominada huésped, mediante el pago del precio respectivo día a día, por un plazo inferior a 30 días.

    #t_2_1.h4 2.2 Características

      p.mt-5 Resulta difícil hablar de una única clasificación de los establecimientos hoteleros puesto que  #[strong no todos los países disponen de una clasificación oficial] y si la tienen no se aplican los mismos criterios. Por ello, puede apreciarse que una misma categoría presente características diferentes en función del país en el que nos hallemos.

      p.mt-5 Según la Norma técnica sectorial colombiana NTSH006 para la categorización de los hoteles los factores de evaluación  se dividen en:

      p.mt-4 Factores de planta:
      p.mt-3 Edificación:

    .row.justify-content-center.my-5
        .col-auto.mb-2
          img(src="@/assets/curso/images/pages/ilustraciones/ico_1.png", alt="", style="width:68px; display:block; margin:auto 2rem;")
        .col-auto.mb-4
          img(src="@/assets/curso/images/pages/ilustraciones/ico_2.png", alt="", style="width:120px; display:block; margin:auto 2rem;")
        .col-auto.mb-4
          img(src="@/assets/curso/images/pages/ilustraciones/ico_3.png", alt="", style="width:90px; display:block; margin:auto 2rem;")     
        .col-auto.mb-4
          img(src="@/assets/curso/images/pages/ilustraciones/ico_4.png", alt="", style="width:100px; display:block; margin:auto 2rem;")
        .col-auto.mb-4
          img(src="@/assets/curso/images/pages/ilustraciones/ico_5.png", alt="", style="width:70px; display:block; margin:auto 2rem;")
        .col-auto.mb-4
          img(src="@/assets/curso/images/pages/ilustraciones/ico_6.png", alt="", style="width:100px; display:block; margin:auto 1rem;")
      
    p.my-3 Factores del servicio:
    br
    .row.justify-content-center.my-3
        .col-auto.mb-2
          img(src="@/assets/curso/images/pages/ilustraciones/ico_7.png", alt="", style="width:80px; display:block; margin:auto 2rem;")
        .col-auto.mb-4
          img(src="@/assets/curso/images/pages/ilustraciones/ico_8.png", alt="", style="width:80px; display:block; margin:auto 2rem;")
        .col-auto.mb-4
          img(src="@/assets/curso/images/pages/ilustraciones/ico_9.png", alt="", style="width:90px; display:block; margin:auto 2rem;")     
        .col-auto.mb-4
          img(src="@/assets/curso/images/pages/ilustraciones/ico_10.png", alt="", style="width:110px; display:block; margin:auto 2rem;")
        .col-auto.mb-4
          img(src="@/assets/curso/images/pages/ilustraciones/ico_11.png", alt="", style="width:68px; display:block; margin:auto 2rem;")
        .col-auto.mb-4
          img(src="@/assets/curso/images/pages/ilustraciones/ico_12.png", alt="", style="width:75px; display:block; margin:auto 2rem;")
        .col-auto.mb-4
          img(src="@/assets/curso/images/pages/ilustraciones/ico_13.png", alt="", style="width:75px; display:block; margin:auto 2rem;")
        .col-auto.mb-4
          img(src="@/assets/curso/images/pages/ilustraciones/ico_14.png", alt="", style="width:95px; display:block; margin:auto 2rem;")
        .col-auto.mb-4
          img(src="@/assets/curso/images/pages/ilustraciones/ico_15.png", alt="", style="width:70px; display:block; margin:auto 2rem;")     
        .col-auto.mb-4
          img(src="@/assets/curso/images/pages/ilustraciones/ico_16.png", alt="", style="width:115px; display:block; margin:auto 2rem;")
        .col-auto.mb-4
          img(src="@/assets/curso/images/pages/ilustraciones/ico_17.png", alt="", style="width:75px; display:block; margin:auto 2rem;")
        .col-auto.mb-4
          img(src="@/assets/curso/images/pages/ilustraciones/ico_18.png", alt="", style="width:70px; display:block; margin:auto 2rem;")
        .col-auto.mb-4
          img(src="@/assets/curso/images/pages/ilustraciones/ico_19.png", alt="", style="width:95px; display:block; margin:auto 2rem;")
        .col-auto.mb-4
          img(src="@/assets/curso/images/pages/ilustraciones/ico_20.png", alt="", style="width:120px; display:block; margin:auto 2rem;")
        .col-auto.mb-4
          img(src="@/assets/curso/images/pages/ilustraciones/ico_21.png", alt="", style="width:65px; display:block; margin:auto 2rem;")

    .jumbotron-4.mt-5
      .row.justify-content-center.align-items-center
            .col-auto
                img.img-a.my-3(src="@/assets/curso/images/pages/ilustraciones/star.png").img-fluid
            .col
                h4.mb-0 Los criterios de evaluación para el otorgamiento del certificado de categorización por estrellas para los hoteles en las modalidades 1, 2, 3, 4 y 5.

    p.mt-4 Los criterios de evaluación.

      .i-general.mt-5
        .div.div-gradient
          .div.c-card
            img.img-a.d-block.m-auto(src='@/assets/curso/images/pages/ilustraciones/star_1.svg' alt="",style="width:120px; display:block; margin:auto 0;")
            .h1i.text-center.mt-2 #[strong Hoteles de 1 estrella:]
            p.mt-3 deberán cumplir el 100% de los requisitos definidos en la Norma NTSH006, 178 puntos y los requisitos legales vigentes.
        .div.div-gradient
          .div.c-card
            img.img-a.d-block.m-auto(src='@/assets/curso/images/pages/ilustraciones/star_2.svg' alt="", style="width:120px; display:block; margin:auto 0;")
            .h1i.text-center.mt-2 #[strong Hoteles de 2 estrellas:]
            p.mt-3 deberán cumplir el 100% de los requisitos definidos en la Norma NTSH006, 181 puntos y los requisitos legales vigentes.
        .div.div-gradient
          .div.c-card
            img.img-a.d-block.m-auto(src='@/assets/curso/images/pages/ilustraciones/star_3.svg' alt="", style="width:120px; display:block; margin:auto 0;")
            .h1i.text-center.mt-2 #[strong Hoteles de 3 estrellas:]
            p.mt-3 deberán cumplir el 80% de los requisitos definidos en la Norma NTSH006, rango 208 - 260 puntos y los requisitos legales vigentes.
        .div.div-gradient
          .div.c-card
            img.img-a.d-block.m-auto(src='@/assets/curso/images/pages/ilustraciones/star_4.svg' alt="", style="width:120px; display:block; margin:auto 0;")
            .h1i.text-center.mt-2 #[strong Hoteles de 4 estrellas:]
            p.mt-2 deberán cumplir mínimo con el 85% de los requisitos definidos en la Norma NTSH006, rango 283 - 333 puntos y los requisitos legales vigentes
        .div.div-gradient
          .div.c-card
            img.img-a.d-block.m-auto(src='@/assets/curso/images/pages/ilustraciones/star_5.svg' alt="", style="width:120px; display:block; margin:auto 0;")
            .h1i.text-center.mt-2 #[strong Hoteles de 5 estrellas:]
            p.mt-2 deberán cumplir mínimo con el 95% de los requisitos definidos en la Norma NTSH006, rango 349 - 337 puntos y los requisitos legales vigentes.

    #t_2_1.h4 2.3 Tipología

    p Según la Norma sectorial colombiana NTSH006 se clasifican en:

    SlyderA.my-5(clase-tarjeta="tarjeta--crema")
      .row.justify-content-center.align-items-center
        .col-12.col-md-4
          h4.text-right.text_color_1 Albergue - refugio - hostal: 
              p.text-right Establecimiento en que se presta el servicio de alojamiento preferentemente en habitaciones semiprivadas o comunes, al igual que sus baños, y que puede disponer además, de un recinto común equipado adecuadamente para que los huéspedes se preparen sus propios alimentos, sin perjuicio de proporcionar otros servicios complementarios.

        .col-12.col-md-6
          img.d-block.w-100(src="@/assets/curso/images/pages/ilustraciones/9.png")

      .row.justify-content-center.align-items-center
        .col-12.col-md-4
          h4.text-right.text_color_1 Apartahotel:
              p.text-right Establecimiento en que se presta el servicio de alojamiento en apartamentos independientes, de un edificio, que integren una unidad de administración y explotación, pudiendo ofrecer otros servicios complementarios. Cada apartamento está compuesto como mínimo de los siguientes ambientes: dormitorio con baño privado, sala de estar, cocina equipada y comedor. 

        .col-12.col-md-6
          img.d-block.w-100(src="@/assets/curso/images/pages/ilustraciones/10.png")

      .row.justify-content-center.align-items-center
        .col-12.col-md-4
          h4.text-right.text_color_1 Viviendas turísticas:
              p.text-right Unidad habitacional destinada a brindar facilidades de alojamiento y permanencia de manera ocasional a una o más personas según su capacidad, que puede contar con servicio de limpieza y como mínimo con los siguientes recintos: dormitorio, sala-comedor, cocina, y baño.

        .col-12.col-md-6
          img.d-block.w-100(src="@/assets/curso/images/pages/ilustraciones/11.png")

      .row.justify-content-center.align-items-center
        .col-12.col-md-4
          h4.text-right.text_color_1 Alojamiento rural:
              p.text-right Establecimiento en que se presta el servicio de alojamiento en unidades habitacionales privadas, ubicado en áreas rurales y cuyo principal propósito es el desarrollo de actividades asociadas a su entorno natural y cultural. Ofrecen además como mínimo, servicios de alimentación bajo la modalidad de pensión completa, sin perjuicio de proporcionar otros servicios complementarios.
        .col-12.col-md-6
          img.d-block.w-100(src="@/assets/curso/images/pages/ilustraciones/12.png")
      
      .row.justify-content-center.align-items-center
        .col-12.col-md-4
          h4.text-right.text_color_1  Hotel:
              p.text-right Establecimiento en que se presta el servicio de alojamiento en habitaciones y otro tipo de unidades habitacionales en menor cantidad, privadas, en un edificio o parte independiente del mismo, constituyendo sus dependencias un todo homogéneo y con entrada de uso exclusivo. Disponen además como mínimo del servicio de recepción, servicio de desayuno y salón de estar para la permanencia de los huéspedes, sin perjuicio de proporcionar otros servicios complementarios.

        .col-12.col-md-6
          img.d-block.w-100(src="@/assets/curso/images/pages/ilustraciones/13.png")

      .row.justify-content-center.align-items-center
        .col-12.col-md-4
          h4.text-right.text_color_1 Posadas turísticas:
              p.text-right Vivienda familiar en que se presta el servicio de alojamiento en unidades habitacionales preferiblemente de arquitectura autóctona cuyo principal propósito es promover la generación 

        .col-12.col-md-6
          img.d-block.w-100(src="@/assets/curso/images/pages/ilustraciones/14.png")

      .row.justify-content-center.align-items-center
        .col-12.col-md-4
          h4.text-right.text_color_1 Recinto de campamento o camping:
              p.text-right Establecimiento en que se presta el servicio de alojamiento en un terreno debidamente delimitado, asignándole un sitio a cada persona o grupo de personas que hacen vida al aire libre y que utilicen carpas, casas rodantes u otras instalaciones similares para pernoctar.
        .col-12.col-md-6
          img.d-block.w-100(src="@/assets/curso/images/pages/ilustraciones/15.png")

      .row.justify-content-center.align-items-center
        .col-12.col-md-4
          h4.text-right.text_color_1 Otros tipos de clasificación:
              p.text-right Hoteles de aeropuerto, hotel business class o negocios, hoteles de lujo, moteles, hotel de paso, hoteles-casino, hoteles-clubes, hoteles temáticos, hoteles vacacionales.
        .col-12.col-md-6
          img.d-block.w-100(src="@/assets/curso/images/pages/ilustraciones/16.png")













 
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
