<template>
  <b-breadcrumb :items="items">
    <div>
      <b-nav vertical class="pt-5">
        <b-nav-item
          ><b-link :to="{ name: 'inicio' }"> Opcion 1 </b-link>
        </b-nav-item>

        <b-nav-item
          ><b-link :to="{ name: 'main' }">Opcion 2</b-link>
        </b-nav-item>

        <b-nav-item
          ><b-link :to="{ name: 'tercero' }">Opcion 3</b-link>
        </b-nav-item>
      </b-nav>
    </div>
  </b-breadcrumb>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    display: block;
    text-align: left;
  }
}
</style>
<script>
export default {
  data() {
    return {
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
          active: true,
        },
      ],
    };
  },
};
</script>