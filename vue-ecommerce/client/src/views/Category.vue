<template>
  <BasicLayout>
    <div class="ui grid">
        <div 
        class="sixten wide mobile eight wide tablet four wide computer column"
        v-for="product in products"
        :key="product.id"
        >
            <Product :product="product" />
        </div>
    </div>
  </BasicLayout>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import BasicLayout from '../layouts/BasicLayout.vue'; 
import { getProductsCategory } from '../api/product'
import Product from '../components/Product.vue'

export default {
  name: 'Category',
  components: {
    BasicLayout,
    Product,
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