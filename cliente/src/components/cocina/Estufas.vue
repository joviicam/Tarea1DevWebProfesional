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
    <h5 class="title">ESTUFAS</h5>
    <p class="contentText">
      Levi es un genio en el uso de las Maniobra Tridimensionales. Muchos civiles han comentado que el es tan poderoso
      como 100 soldados juntos. A diferencia de los otros soldados, él utiliza sus dos sables de una forma diferente a
      la tradicional, el de la izquierda apunta hacia arriba y el de la derecha hacia abajo formando una circunferencia
      completa que se posiciona diagonalmente, lo que al impulsarse con el gas y girar, le permite atinar múltiples
      cortes efectivos a su objetivo a gran velocidad.
    </p>
    <div class="contImg">
      <img src="../../assets/levi.jpg" alt="Steins gate" class="img" />
    </div>

    <p class="contentText">
      A pesar de su baja estatura, Levi destaca por su extraordinaria fuerza física y una gran habilidad en luchas de
      cuerpo a cuerpo.
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