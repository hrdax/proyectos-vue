<template>
  <BasicLayout>
    <h1>Categoría de </h1>
  </BasicLayout>
</template>

<script>
import { onMounted } from 'vue';
import BasicLayout from '../layouts/BasicLayout.vue'; 
import { getProductsCategory } from '../api/product'

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
    onMounted (async () => {
      const response = await getProductsCategory("dulces")
      console.log(response.data)
    })

    return {
      
    }
  }
}

</script>

<style>

</style>