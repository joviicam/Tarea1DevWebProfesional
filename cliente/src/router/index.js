import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const routes = [
  
    //la ruta base
      {
          path: '/',//el inicio de nuestra ruta
          redirect: '/inicio',
      },
    
    {
      path: '/',
      component: {
          render(c) {
              return c('router-view');
          },
      },
      
      children:[
        {
          path: '/main', //lo posterior a la ruta base
          name: 'main',
          component: () => import('../components/Inicio.vue')
        },
        {
            path: '/component', //lo posterior a la ruta base
            name: 'component',
            component: () => import('../components/Component.vue')
        },
        {
            path: '/component2', 
            name: 'component2',
            component: () => import('../components/Component2.vue')
        },
        {
            path: '/component3',
            name: 'component3',
            component: () => import('../components/Component3.vue')
        },
        {
            path: '/helloworld',
            name: 'helloWorld',
            component: () => import('../components/HelloWorld.vue')
        },
        {
            path: '/electronicos',
            name: 'electronicos',
            component: () => import('../components/electronicos/Electronicos.vue')
        },
        {
            path: '/juegosDeVideo',
            name: 'juegosDeVideo',
            component: () => import('../components/electronicos/JuegosDeVideo.vue')
        },
        {
            path: '/kitchen',
            name: 'kitchen',
            component: () => import('../components/cocina/Kitchen.vue')
        },
        {
            path: '/estufas',
            name: 'estufas',
            component: () => import('../components/cocina/Estufas.vue')
        },
        {
            path: '/limpieza',
            name: 'limpieza',
            component: () => import('../components/hogar/Limpieza.vue')
        },
        {
            path: '/detergentesIn',
            name: 'detergentesIn',
            component: () => import('../components/hogar/DetergentesIn.vue')
        },
        {
            path: '/electrodomesticos',
            name: 'electrodomesticos',
            component: () => import('../components/cocina/Electrodomesticos.vue')
        },
        {
            path: '/tiendajuguetes',
            name: 'tiendajuguetes',
            component: () => import('../components/electronicos/TiendaJuguetes.vue')
        },
        {
            path: '/tiendahogar',
            name: 'tiendahogar',
            component: () => import('../components/hogar/TiendaHogar.vue')
        },
      ]
    }
]

const router = new VueRouter({ routes, })
export default router;