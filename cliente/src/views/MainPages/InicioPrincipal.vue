<template>
    <div>
        <header class="bg-dark text-light text-center py-5">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <router-link to="/" class="navbar-brand">Your Company</router-link>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <router-link to="/inicio" class="nav-link">Inicio</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
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
            <h1 class="display-4 mt-4">Brenda Johana Gálvez Álvarez</h1>
            <p class="lead">Haz click en el botón</p>
            <!-- <a href="#" class="btn btn-primary btn-lg mt-3">Get Started</a> -->
            <b-button class="btn" v-b-toggle.sidebar-1>Este botón</b-button>
        </header>

        <!-- <section class="container my-5">
            <h2 class="text-center mb-4">Key Features</h2>

            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://picsum.photos/200/300" class="card-img-top" alt="Feature 1" />
                        <div class="card-body">
                            <h5 class="card-title">Feature 1</h5>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://picsum.photos/200/300" class="card-img-top" alt="Feature 2" />
                        <div class="card-body">
                            <h5 class="card-title">Feature 2</h5>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://picsum.photos/200/300" class="card-img-top" alt="Feature 3" />
                        <div class="card-body">
                            <h5 class="card-title">Feature 3</h5>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->

        <footer class="bg-dark text-light text-center py-3">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
            <div class="social-icons mt-3">
                <a href="#" class="text-light me-3"><i class="fab fa-twitter"></i></a>
                <a href="#" class="text-light me-3"><i class="fab fa-facebook"></i></a>
                <a href="#" class="text-light me-3"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="text-light"><i class="fab fa-instagram"></i></a>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {};
</script>

<style>
</style>z