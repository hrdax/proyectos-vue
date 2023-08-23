<template>
  <BasicLayout>
    <h1>Categoría de </h1>
  </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout.vue'; 

export default {
  name: 'Category',
  components: {
    BasicLayout,
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
    }
  },
  setup() {
  
  }
}

</script>

<style>

</style>