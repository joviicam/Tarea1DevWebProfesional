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
    <h5 class="title">COCINA</h5>
    <p class="contentText">
      Desde que 100 años atrás los titanes apareciesen de la nada y llevasen a la humanidad al borde de la extinción, la
      población vive encerrada en ciudades rodeadas de enormes muros llamados Maria, Rose y Sina, con el fin de
      protegerse de la aparición de nuevos titanes. Ese es el día a día de Eren Jaeger, un joven que sueña con el poder
      estar fuera de los muros, fastidiado del conformismo con el que la humanidad vive encerrada como si fuese ganado.
    </p>
    <div class="contImg">
    <img src="../../assets/Levi_salva_a_Eren.webp" alt="Steins gate" class="img" />
  </div>
    <p class="contentText">
      La repentina llegada de los titanes Colosal y Acorazado aplastará la ilusión de paz en la que hasta ahora vivía la
      sociedad humana y hará que Eren, junto a su hermana adoptiva Mikasa Ackerman y su mejor amigo Armin Arlert, se
      embarque en una arriesgada odisea de venganza en nombre de la humanidad.
    </p>
  </div>
</template>

<script>
  export default {

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