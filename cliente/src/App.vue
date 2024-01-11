<script setup>

  import { ref } from 'vue';
</script>

<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="content">
      <div class="sidebar">
        <h3 style="text-align: center; 
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        margin-bottom: 10px;">Mis animes favoritos</h3>

        <h5 v-for="serie in series" :key="serie" class="serie" v-link="serie">{{ serie }}</h5>

      </div>
      <div class="main-content">
        <h5 class="title">Steins gate</h5>
        <p class="contentText">
          En steins gate se nos cuenta la historia de Okabe Rintaro (quien se denomina a si mismo como un científico
          loco) quien, con la ayuda de sus otros "miembros del laboratorio" intenta crear un invento y revolucionar al
          campo científico; sin embargo por culpa de cierta organización y algunos fallos y acontecimientos inesperados
          esto no resultara tan bien como se lo imagina.

          Cabe destacar que este anime se apoya mucho en la historia de John Titor y algunas películas de viajes en el
          tiempo (como la maquina del tiempo) asi que recomiendo que tengan conocimiento sobre esto para un completo
          disfrute del anime.

        </p>

        <img src="./assets/345001.jpg" class="img" alt="Steins gate">
        <p class="contentText">
          Anime 1000% recomendado si te gustan las historias de viajes en el tiempo. Su historia te dara risas asi como
          tension por igual y te mantendra al borde de tu asiento en cada capitulo.

        </p>
      </div>
    </div>

  </div>
</template>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
  }

  .content {
    display: flex;
    flex: 1;
    height: 100%;

  }

  .sidebar {
    width: 20%;
    height: 100%;
    padding: 20px;
    background-color: rgba(69, 109, 182, 0.438);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  }

  .title {
    text-align: center;
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
  }

  .main-content {
    flex: 1;
    padding: 20px;
    background-color: rgb(255, 255, 255);
  }

  .img {
    width: 50%;
    height: 50%;
    margin-bottom: 20px;
  }

  .contentText {
    text-align: justify;
  }

  .serie {
    text-align: left;
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  }
</style>

<script>
  // Agrega una referencia reactiva para controlar la visibilidad del sidebar
  const isSidebarVisible = ref(true);
  //Lista de animes
  const series = [
    'Shingeki no Kyojin',
    'Boku no hero academia',
    'Death Note',
    'Steins Gate',
    'Terror in resonance',
    'Ansatsu Kyoushitsu',
    'Tenku Shinpan',
    'Tokio Ghoul',
    'Elfen Lied',
    'Kakegurui',
    'Jujutsu Kaisen',
    'Demon Slayer',
    'Orange',
    'Sword Art Online',
    'Kamisama haijimemashita',
    'Ae no exorcist',
    'Ae no haru ride',
    'Masamura kun no revenge',
    'Your name',
    'Your lie in april',
  ];

  export default {
    data() {
      return {
        series: series
      };
    }
  };

</script>