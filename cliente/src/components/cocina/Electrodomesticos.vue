<template>
  <div class="main-content">
    <b-breadcrumb>
      <b-breadcrumb-item href="#home">
        <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item :to="{ name: 'electrodomesticos' }">
        <b-icon icon="fridge-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
        Tienda de Electrodomesticos
      </b-breadcrumb-item>
      <b-breadcrumb-item :to="{ name: 'kitchen' }">
        <b-icon icon="fridge-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
        Para la cocina
      </b-breadcrumb-item>
      <b-breadcrumb-item :to="{ name: 'estufas' }">
        <b-icon icon="fridge-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
        Estufas
      </b-breadcrumb-item>
    </b-breadcrumb>
    <h5 class="title">electrodomesticos</h5>
    <p class="contentText">
      Aunque la trama de ‘Ataque a los titanes’ cambia enormemente conforme se va desarrollando su historia a lo largo
      de sus cuatro temporadas, no podemos obviar la poderosa premisa inicial: la humanidad fue arrasada por unos
      titanes caníbales y casi inmortales, y lleva 100 años encerrada en unos muros que funcionan como último refugio
      para la extinción del ser humano. Entonces, en el capítulo 1, tras 100 años de seguro aunque humillante encierro,
      uno de esos muros se rompe… ‘Ataque a los titanes’ te planta desde el principio en una situación apocalíptica
      realmente original, alejada de zombis, robots o catástrofes nucleares, en un mundo reducido a pocos miles de
      personas, alejado de la realidad y de la historia tras 100 años de encierro.
    </p>
    <div class="contImg">
      <img src="../../assets/hangi.jpeg" alt="Steins gate" class="img" />
    </div>
    <p class="contentText">
      Como le ocurre al protagonista, Eren,
      la trama al principio te engancha con la lucha de la humanidad por sobrevivir y derrotar a los titanes, pero te
      acaba arrastrando por el misterio y la razón que hay detrás de toda la situación.
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
    width: 40%;
    height: 60%;
    margin-bottom: 20px;
  }

  .contImg {
    display: flex;
    justify-content: center;
  }
</style>