<script>
import AuthLayout from './layouts/AuthLayout.vue';

export default  {
   components: { AuthLayout },
   computed: {
      layout() {
         return (this.$route.meta.layout || 'main') + '-layout'
      }
   }
}
</script>

<template>
  <component :is="layout">
   <router-view></router-view>
  </component>
</template>

<style scoped>
body {
   margin: 0;
   padding: 0;
}

* {
   box-sizing: border-box;
}
</style>
