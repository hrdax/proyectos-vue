<template>
  <BasicLayout>
    <h1>Categoría de </h1>
    {{products}}
  </BasicLayout>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import BasicLayout from '../layouts/BasicLayout.vue'; 
import { getProductsCategory } from '../api/product'

export default {
  name: 'Category',
  components: {
    BasicLayout,
  },
  watch: {
    $route(to, from) {
        this.getProducts(to.params.category)
    }
  },
  setup() {
    const { params } = useRoute();
    let products = ref(null)

    onMounted (() => {
      getProducts(params.category)
      
    })

    const getProducts = async (category) => {
        const response = await getProductsCategory(category)
        products.value = response.data
    }

    return {
      getProducts,
      products,
    }
  }
}

</script>

<style>

</style>