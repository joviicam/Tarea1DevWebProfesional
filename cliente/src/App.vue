<script setup>
  import { ref } from "vue";
  </script>
  
  <template>
    <div id="app">
        <div>
          <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item
                  ><b-link :to="{ name: 'component' }"> Opcion 1 </b-link>
                </b-nav-item>
  
                <b-nav-item
                  ><b-link :to="{ name: 'component2' }">Opcion 2</b-link>
                </b-nav-item>
  
                <b-nav-item
                  ><b-link :to="{ name: 'component3' }">Opcion 3</b-link>
                </b-nav-item>
              </b-navbar-nav>
              <b-navbar-nav class="ml-auto"> </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
  
        <div class="content">
          <b-sidebar id="sidebar-1" title="Sidebar" shadow>
        <div class="px-3 py-2">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <b-nav-item
                  ><b-link :to="{ name: 'electronicos' }"> Tienda de juguetes </b-link>
                </b-nav-item>
  
                <b-nav-item
                  ><b-link :to="{ name: 'electrodomesticos' }">Tienda de electrodomesticos</b-link>
                </b-nav-item>
  
                <b-nav-item
                  ><b-link :to="{ name: 'tiendahogar' }">Tienda de productos para el hogar</b-link>
                </b-nav-item>
          <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
        </div>
      </b-sidebar>
          <!-- <div class="sidebar">
        
            <h3
              style="
                text-align: center;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
                  sans-serif;
                margin-bottom: 10px;
              "
            >
              Mis animes favoritos
            </h3>
  
            <h5 v-for="serie in series" :key="serie" class="serie" v-link="serie">
              {{ serie }}
            </h5>
          </div> -->
          <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
        <router-view></router-view>
        </div>
        
    </div>
  </template>
  
  <style scoped>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
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
    font-family: "Courier New", Courier, monospace;
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
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  </style>
  
  <script>
  // Agrega una referencia reactiva para controlar la visibilidad del sidebar
  const isSidebarVisible = ref(true);
  //Lista de animes
  const series = [
    "Shingeki no Kyojin",
    "Boku no hero academia",
    "Death Note",
    "Steins Gate",
    "Terror in resonance",
    "Ansatsu Kyoushitsu",
    "Tenku Shinpan",
    "Tokio Ghoul",
    "Elfen Lied",
    "Kakegurui",
    "Jujutsu Kaisen",
    "Demon Slayer",
    "Orange",
    "Sword Art Online",
    "Kamisama haijimemashita",
    "Ae no exorcist",
    "Ae no haru ride",
    "Your name",
    "Your lie in april",
  ];
  
  export default {
    data() {
      return {
        series: series,
        items: [
          {
            text: "Componente 1",
            href: "/component",
            name: "Inicio",
          },
          {
            text: "Componente 2",
            href: "/component2",
          },
          {
            text: "Componente 3",
            href: "/component3",
          },
          
        ],
      };
    },
  };
  </script>