<template>
    <div class="main-content">
        <b-breadcrumb>
            <b-breadcrumb-item href="#home">
              <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
              Home
            </b-breadcrumb-item>
            <b-breadcrumb-item :to = "{ name: 'electrodomesticos' }">
                <b-icon icon="fridge-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                Electrodomesticos
              </b-breadcrumb-item>
            <b-breadcrumb-item :to = "{ name: 'kitchen' }">
              <b-icon icon="fridge-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
              Cocina
            </b-breadcrumb-item>
            <b-breadcrumb-item :to = "{ name: 'estufas' }">
                <b-icon icon="fridge-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                Estufas
              </b-breadcrumb-item>
          </b-breadcrumb>
        <h5 class="title">electrodomesticos</h5>
        <p class="contentText">
          En steins gate se nos cuenta la historia de Okabe Rintaro (quien se
          denomina a si mismo como un científico loco) quien, con la ayuda de
          sus otros "miembros del laboratorio" intenta crear un invento y
          revolucionar al campo científico; sin embargo por culpa de cierta
          organización y algunos fallos y acontecimientos inesperados esto no
          resultara tan bien como se lo imagina. Cabe destacar que este anime
          se apoya mucho en la historia de John Titor y algunas películas de
          viajes en el tiempo (como la maquina del tiempo) asi que recomiendo
          que tengan conocimiento sobre esto para un completo disfrute del
          anime.
        </p>

        <img src="../../assets/567694.jpg" alt="Steins gate" class="img"/>
        <p class="contentText">
          Anime 1000% recomendado si te gustan las historias de viajes en el
          tiempo. Su historia te dara risas asi como tension por igual y te
          mantendra al borde de tu asiento en cada capitulo.
        </p>
      </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          items: [
            {
              text: 'Electrodomesticos',
              href: '#'
            },
            {
              text: 'Para la cocina',
              href: '#'
            },
            {
              text: 'Estufas',
              href: '#'
            }
          ]
        }
      }
    }
  </script>
  
  <style>
.img {	
    width: 50%;
    height: 50%;
    margin-bottom: 20px;
  }
  </style>