<template>
  <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item><b-link :to="{ name: 'component' }"> Opcion 1 </b-link>
            </b-nav-item>

            <b-nav-item><b-link :to="{ name: 'component2' }">Opcion 2</b-link>
            </b-nav-item>

            <b-nav-item><b-link :to="{ name: 'component3' }">Opcion 3</b-link>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto"> </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-nav-item><b-link :to="{ name: 'tiendajuguetes' }"> Tienda de juguetes </b-link>
        </b-nav-item>

        <b-nav-item><b-link :to="{ name: 'electrodomesticos' }">Tienda de electrodomesticos</b-link>
        </b-nav-item>

        <b-nav-item><b-link :to="{ name: 'tiendahogar' }">Tienda de productos para el hogar</b-link>
        </b-nav-item>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
    
    <div class="content">
      <b-button class="btn" v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
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
      
          
    </div>
</template>
<script>
export default {
  
}
</script>