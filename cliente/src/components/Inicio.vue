<template>
  <b-breadcrumb :items="items"></b-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      series: series,
      items: [
        {
          text: 'Componente 1',
          href: '/component',
          name:'Inicio'
        },
        {
          text: 'Componente 2',
          href: '/component2',
        },
        {
          text: 'Componente 3',
          href: '/component3',
        },
      ],
    };
    
  },
  
};
</script>