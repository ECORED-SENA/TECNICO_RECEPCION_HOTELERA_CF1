<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 4
      .h3 Estructura organizacional.

    p.mt-3 La misión del hotel es garantizar un servicio de alojamiento personalizado con calidad, comodidad y seguridad en un entorno confortable, siempre con el objetivo del bienestar y la satisfacción de las necesidades de los huéspedes.

    p Por tal razón se requiere de una estructura que permita lograr el objetivo. La estructura organizacional es el modo en que una empresa planifica y distribuye su trabajo, cada empresa tiene su propia estructura.

    .row.justify-content-center.align-items-center.mt-5
                .col-auto 
                    img.img-a(src="@/assets/curso/images/pages/ilustraciones/30.png").img-fluid

    p.mt-5 Los hoteles se estructuran con la sectorización de las labores en distintas unidades llamadas departamentos. Cada departamento atiende un conjunto específico de necesidades del cliente.
    br
    p La representación gráfica de la estructura organizacional de una empresa se conoce como organigrama, no existe un organigrama que indique la distribución de los departamentos, y que sea válido para todos los hoteles, ya que esto depende de la capacidad y la categoría del hotel, de las características físicas de la edificación, del tipo de organización y de servicio que se desea proporcionar. También se presentan organigramas para áreas específicas.


    .tarjeta.tarjeta--amarilla.p-3.my-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Aquí encontraras los tres ejemplos de modelos de estructura de organigrama.
              p.text-small  
            .col-sm-auto
              a.boton.boton--b(href="https://www.shutterstock.com/es/search/organigrama?kw=shutterstock&c3apidt=p28735715413&gclid=CjwKCAjwlID8BRAFEiwAnUoK1Vsg8WxiakfKHYd46uDRqnDwkpDH5jvhZMbNEVwuuPuToWChs6IpehoCq0AQAvD_BwE&gclsrc=aw.ds" target="_blank")
                span Descargar
                i.fas.fa-file-download


    p.mt-5 Gráficamente en general se presenta de la siguiente forma:

    p.mt-3 Los puestos de trabajo y los procesos están sometidos a una reglamentación y estandarización los cuales son respaldados por manuales de funciones y procesos:

    .row.justify-content-center.align-items-center.mt-3
          .col

              p <b>Manual de funciones:</b> es un instrumento de trabajo que contiene el conjunto de normas y tareas que desarrolla cada funcionario en sus actividades cotidianas y es elaborado técnicamente basados en los respectivos procedimientos, sistemas y normas del establecimiento. 
              br
              p Son guías y orientaciones para desarrollar las rutinas o labores cotidianas de cada uno de los trabajadores quienes podrán tomar las decisiones más acertadas apoyadas por las directrices de los superiores, y estableciendo con claridad la responsabilidad y las obligaciones que cada uno de los cargos conlleva.
              br
              p Incluye brevemente cada una de las funciones y responsabilidades básicas describiendo adecuadamente los límites y la esencia del cargo
          .col-auto 
              img.my-3(src="@/assets/curso/images/pages/ilustraciones/31.png" alt="", style="width:480px; display:block; margin:auto 0;")

    .row.justify-content-center.align-items-center
              .col-auto
                  img.img-a.my-3(src="@/assets/curso/images/pages/ilustraciones/32.png" alt="", style="width:480px; display:block; margin:auto 0;")
              .col
                  p.mb-0 <b>Manual de procedimientos:</b> el manual de procedimientos es "un instrumento de apoyo en el que se encuentran de manera sistemática los pasos a seguir, para ejecutar las actividades de un puesto determinado y/o funciones de la unidad administrativa" #[br].(Gómez, 2001).
                  br
                  p Se puede decir entonces que es un documento de apoyo para el personal de una empresa, el cual contiene políticas y detalles de las actividades a realizarse en funciones específicas.

              

    .row.justify-content-center.align-items-center.mt-5
                .col
                    p.my-3 <b>Formatos:</b> el formato es el conjunto de las características técnicas y de presentación de un texto, objeto o documento en distintos ámbitos, tanto reales como virtuales.

                    p Sirven para:
                    br
                    p > El control y mantenimiento de los servicios que se prestan.

                    p > Apoyan a controlar la calidad y resultado que se ofrece en el establecimiento.

                    p > Para planificar, controlar y evaluar el trabajo. 

                    p > Para la garantía de la eficiencia del servicio.

                    p > Optimización de la prestación del servicio.

                .col-auto 
                    img.img-a(src="@/assets/curso/images/pages/ilustraciones/33.png" alt="", style="width:480px; display:block; margin:auto 0;")

                .jumbotron.mt-5
                    .row.justify-content-center.align-items-center
                          .col-auto
                              img.img-a.my-3(src="@/assets/curso/images/pages/ilustraciones/hotel.svg").img-fluid
                          .col
                              h4.mb-0 En el establecimiento hotelero se utilizan para todas las áreas cada uno con su fin, algunos son comunes a todas las áreas: ejemplo: “Lista de huéspedes”
    .tarjeta.tarjeta--amarilla.p-3.my-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Aquí encontraran el organigrama módelo.
              p.text-small  
            .col-sm-auto
              a.boton.boton--b(href="/downloads/archivo.pdf" target="_blank")
                span Descargar
                i.fas.fa-file-download
    


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema4',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
